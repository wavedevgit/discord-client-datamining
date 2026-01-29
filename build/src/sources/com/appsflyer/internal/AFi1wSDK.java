package com.appsflyer.internal;

import androidx.annotation.NonNull;
import com.appsflyer.AFLogger;
import org.json.JSONException;
import org.json.JSONObject;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFi1wSDK {
    private final boolean AFAdRevenueData;
    @NonNull
    public final String getCurrencyIso4217Code;
    @NonNull
    public final AFh1cSDK getMediationNetwork;
    public final AFi1zSDK getMonetizationNetwork;
    @NonNull
    public final String getRevenue;

    public AFi1wSDK(@NonNull String str) {
        AFh1cSDK aFh1cSDK;
        AFi1zSDK aFi1zSDK;
        if (str != null) {
            try {
                JSONObject jSONObject = new JSONObject(str);
                String string = jSONObject.getString("ver");
                this.getCurrencyIso4217Code = string;
                this.AFAdRevenueData = jSONObject.optBoolean("test_mode");
                this.getRevenue = str;
                if (string.startsWith("default")) {
                    aFh1cSDK = AFh1cSDK.DEFAULT;
                } else {
                    aFh1cSDK = AFh1cSDK.CUSTOM;
                }
                this.getMediationNetwork = aFh1cSDK;
                JSONObject optJSONObject = jSONObject.optJSONObject("features");
                if (optJSONObject != null) {
                    aFi1zSDK = new AFi1zSDK(optJSONObject);
                } else {
                    aFi1zSDK = null;
                }
                this.getMonetizationNetwork = aFi1zSDK;
                return;
            } catch (JSONException e10) {
                AFLogger.afErrorLogForExcManagerOnly("Error in RC config parsing", e10);
                throw new JSONException("Failed to parse remote configuration JSON");
            }
        }
        throw new JSONException("Failed to parse remote configuration JSON: originalJson is null");
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || AFi1wSDK.class != obj.getClass()) {
            return false;
        }
        AFi1wSDK aFi1wSDK = (AFi1wSDK) obj;
        if (this.AFAdRevenueData != aFi1wSDK.AFAdRevenueData || !this.getCurrencyIso4217Code.equals(aFi1wSDK.getCurrencyIso4217Code)) {
            return false;
        }
        return this.getRevenue.equals(aFi1wSDK.getRevenue);
    }

    public final int hashCode() {
        int hashCode = ((((this.AFAdRevenueData ? 1 : 0) * 31) + this.getCurrencyIso4217Code.hashCode()) * 31) + this.getRevenue.hashCode();
        AFi1zSDK aFi1zSDK = this.getMonetizationNetwork;
        if (aFi1zSDK != null) {
            return (hashCode * 31) + aFi1zSDK.hashCode();
        }
        return hashCode;
    }
}
