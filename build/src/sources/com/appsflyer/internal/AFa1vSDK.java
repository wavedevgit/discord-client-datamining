package com.appsflyer.internal;

import android.content.Context;
import androidx.annotation.NonNull;
import com.appsflyer.AFLogger;
import com.appsflyer.AppsFlyerInAppPurchaseValidatorListener;
import com.appsflyer.AppsFlyerLib;
import com.appsflyer.attribution.AppsFlyerRequestListener;
import com.appsflyer.internal.AFe1nSDK;
import com.appsflyer.internal.components.network.http.ResponseNetwork;
import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.Map;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFa1vSDK implements Runnable {
    private final WeakReference<Context> AFAdRevenueData;
    private final Map<String, String> component1;
    private final String component3;
    private final String component4;
    final String getCurrencyIso4217Code;
    private final String getMediationNetwork;
    final String getMonetizationNetwork;
    final String getRevenue;

    /* JADX INFO: Access modifiers changed from: package-private */
    public AFa1vSDK(Context context, String str, String str2, String str3, String str4, String str5, String str6, Map<String, String> map) {
        this.AFAdRevenueData = new WeakReference<>(context);
        this.getMediationNetwork = str;
        this.component3 = str2;
        this.getMonetizationNetwork = str4;
        this.getCurrencyIso4217Code = str5;
        this.getRevenue = str6;
        this.component1 = map;
        this.component4 = str3;
    }

    static void AFAdRevenueData(boolean z10, String str, String str2, String str3, String str4) {
        if (AFa1uSDK.getCurrencyIso4217Code != null) {
            StringBuilder sb2 = new StringBuilder("Validate callback parameters: ");
            sb2.append(str);
            sb2.append(" ");
            sb2.append(str2);
            sb2.append(" ");
            sb2.append(str3);
            AFLogger.afDebugLog(sb2.toString());
            if (z10) {
                AFLogger.afDebugLog("Validate in app purchase success: ".concat(String.valueOf(str4)));
                AFa1uSDK.getCurrencyIso4217Code.onValidateInApp();
                return;
            }
            AFLogger.afDebugLog("Validate in app purchase failed: ".concat(String.valueOf(str4)));
            AppsFlyerInAppPurchaseValidatorListener appsFlyerInAppPurchaseValidatorListener = AFa1uSDK.getCurrencyIso4217Code;
            if (str4 == null) {
                str4 = "Failed validating";
            }
            appsFlyerInAppPurchaseValidatorListener.onValidateInAppFailure(str4);
        }
    }

    private static AFf1uSDK getCurrencyIso4217Code(Context context, @NonNull AFh1fSDK aFh1fSDK) {
        AFa1uSDK.getMonetizationNetwork().getMediationNetwork(context);
        AFa1uSDK monetizationNetwork = AFa1uSDK.getMonetizationNetwork();
        AFc1bSDK aFc1bSDK = (AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{monetizationNetwork}, 389316487, -389316474, System.identityHashCode(monetizationNetwork));
        aFh1fSDK.getMonetizationNetwork(aFc1bSDK.getCurrencyIso4217Code().getMonetizationNetwork.getMediationNetwork("appsFlyerCount", 0));
        AFf1uSDK aFf1uSDK = new AFf1uSDK(aFh1fSDK, aFc1bSDK);
        AFe1nSDK copydefault = aFc1bSDK.copydefault();
        copydefault.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(aFf1uSDK));
        return aFf1uSDK;
    }

    @Override // java.lang.Runnable
    public final void run() {
        AFb1mSDK aFb1mSDK;
        String str = this.getMediationNetwork;
        if (str != null && str.length() != 0 && !AppsFlyerLib.getInstance().isStopped()) {
            try {
                Context context = this.AFAdRevenueData.get();
                if (context != null) {
                    HashMap hashMap = new HashMap();
                    hashMap.put("public-key", this.component3);
                    hashMap.put("sig-data", this.getMonetizationNetwork);
                    hashMap.put("signature", this.component4);
                    Object hashMap2 = new HashMap(hashMap);
                    Object obj = this.component1;
                    AFa1uSDK monetizationNetwork = AFa1uSDK.getMonetizationNetwork();
                    String monetizationNetwork2 = ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{monetizationNetwork}, 389316487, -389316474, System.identityHashCode(monetizationNetwork))).component2().getMonetizationNetwork("referrer", "");
                    AFh1bSDK aFh1bSDK = new AFh1bSDK();
                    aFh1bSDK.areAllFieldsValid = monetizationNetwork2;
                    AFa1uSDK monetizationNetwork3 = AFa1uSDK.getMonetizationNetwork();
                    Map<String, Object> revenue = monetizationNetwork3.getRevenue(aFh1bSDK);
                    revenue.put("price", this.getCurrencyIso4217Code);
                    revenue.put("currency", this.getRevenue);
                    revenue.put("receipt_data", hashMap2);
                    if (obj != null) {
                        revenue.put("extra_prms", obj);
                    }
                    revenue.putAll(((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{monetizationNetwork3}, 389316487, -389316474, System.identityHashCode(monetizationNetwork3))).AFKeystoreWrapper().getRevenue());
                    aFh1bSDK.getMonetizationNetwork(revenue);
                    getCurrencyIso4217Code(context, aFh1bSDK);
                    hashMap.put("dev_key", this.getMediationNetwork);
                    hashMap.put("app_id", context.getPackageName());
                    hashMap.put("uid", AppsFlyerLib.getInstance().getAppsFlyerUID(context));
                    AFa1uSDK monetizationNetwork4 = AFa1uSDK.getMonetizationNetwork();
                    AFh1pSDK aFh1pSDK = ((AFc1bSDK) AFa1uSDK.getRevenue(new Object[]{monetizationNetwork4}, 389316487, -389316474, System.identityHashCode(monetizationNetwork4))).getCurrencyIso4217Code().AFAdRevenueData.component2;
                    String str2 = null;
                    if (aFh1pSDK != null) {
                        aFb1mSDK = new AFb1mSDK(aFh1pSDK.getRevenue, aFh1pSDK.getMonetizationNetwork);
                    } else {
                        aFb1mSDK = null;
                    }
                    if (aFb1mSDK != null) {
                        str2 = aFb1mSDK.getCurrencyIso4217Code;
                    }
                    if (str2 != null) {
                        hashMap.put("advertiserId", str2);
                    }
                    AFh1dSDK aFh1dSDK = (AFh1dSDK) new AFh1dSDK().getMonetizationNetwork(hashMap);
                    final AFf1uSDK currencyIso4217Code = getCurrencyIso4217Code(context, aFh1dSDK);
                    aFh1dSDK.getMonetizationNetwork = new AppsFlyerRequestListener() { // from class: com.appsflyer.internal.AFa1vSDK.3
                        @Override // com.appsflyer.attribution.AppsFlyerRequestListener
                        public final void onError(int i10, @NonNull String str3) {
                            ResponseNetwork responseNetwork;
                            if (i10 == 50 && (responseNetwork = ((AFe1eSDK) currencyIso4217Code).component3) != null) {
                                str3 = responseNetwork.toString();
                            }
                            AFa1vSDK aFa1vSDK = AFa1vSDK.this;
                            AFa1vSDK.AFAdRevenueData(false, aFa1vSDK.getMonetizationNetwork, aFa1vSDK.getCurrencyIso4217Code, aFa1vSDK.getRevenue, str3);
                        }

                        @Override // com.appsflyer.attribution.AppsFlyerRequestListener
                        public final void onSuccess() {
                            try {
                                JSONObject jSONObject = new JSONObject((String) ((AFe1eSDK) currencyIso4217Code).component3.getBody());
                                AFLogger.afInfoLog("Validate response ok: ".concat(String.valueOf(jSONObject)));
                                boolean optBoolean = jSONObject.optBoolean("result");
                                AFa1vSDK aFa1vSDK = AFa1vSDK.this;
                                AFa1vSDK.AFAdRevenueData(optBoolean, aFa1vSDK.getMonetizationNetwork, aFa1vSDK.getCurrencyIso4217Code, aFa1vSDK.getRevenue, jSONObject.toString());
                            } catch (Exception e10) {
                                AFLogger.afErrorLog("Failed Validate request: ".concat(String.valueOf(e10)), e10);
                                AFa1vSDK aFa1vSDK2 = AFa1vSDK.this;
                                AFa1vSDK.AFAdRevenueData(false, aFa1vSDK2.getMonetizationNetwork, aFa1vSDK2.getCurrencyIso4217Code, aFa1vSDK2.getRevenue, e10.getMessage());
                            }
                        }
                    };
                }
            } catch (Throwable th2) {
                if (AFa1uSDK.getCurrencyIso4217Code != null) {
                    AFLogger.afErrorLog("Failed Validate request + ex", th2);
                    AFAdRevenueData(false, this.getMonetizationNetwork, this.getCurrencyIso4217Code, this.getRevenue, th2.getMessage());
                }
                AFLogger.afErrorLog(th2.getMessage(), th2);
            }
        }
    }
}
