package com.appsflyer.internal;

import android.util.Base64;
import androidx.annotation.NonNull;
import com.appsflyer.AFLogger;
import com.appsflyer.attribution.AppsFlyerRequestListener;
import com.appsflyer.internal.components.network.http.ResponseNetwork;
import java.net.MalformedURLException;
import java.net.URL;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFf1tSDK extends AFe1eSDK<String> {
    private final AFh1gSDK areAllFieldsValid;

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public AFf1tSDK(@androidx.annotation.NonNull com.appsflyer.internal.AFh1gSDK r8, @androidx.annotation.NonNull com.appsflyer.internal.AFc1bSDK r9) {
        /*
            r7 = this;
            com.appsflyer.internal.AFe1mSDK r0 = r8.toString
            if (r0 == 0) goto L6
        L4:
            r2 = r0
            goto L9
        L6:
            com.appsflyer.internal.AFe1mSDK r0 = com.appsflyer.internal.AFe1mSDK.CACHED_EVENT
            goto L4
        L9:
            com.appsflyer.internal.AFe1mSDK r0 = com.appsflyer.internal.AFe1mSDK.RC_CDN
            com.appsflyer.internal.AFe1mSDK[] r3 = new com.appsflyer.internal.AFe1mSDK[]{r0}
            java.lang.StringBuilder r0 = new java.lang.StringBuilder
            r0.<init>()
            java.lang.String r1 = r8.getRevenue
            r0.append(r1)
            java.lang.String r1 = "-"
            r0.append(r1)
            java.lang.String r1 = getMediationNetwork(r8)
            r0.append(r1)
            java.lang.String r5 = r0.toString()
            java.lang.String r6 = r8.getRevenue
            r1 = r7
            r4 = r9
            r1.<init>(r2, r3, r4, r5, r6)
            r1.areAllFieldsValid = r8
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFf1tSDK.<init>(com.appsflyer.internal.AFh1gSDK, com.appsflyer.internal.AFc1bSDK):void");
    }

    private boolean copy() {
        ResponseNetwork responseNetwork;
        AFe1mSDK aFe1mSDK = this.areAllFieldsValid.toString;
        if (aFe1mSDK == null) {
            aFe1mSDK = AFe1mSDK.CACHED_EVENT;
        }
        if (aFe1mSDK != AFe1mSDK.ARS_VALIDATE || (responseNetwork = ((AFe1eSDK) this).component3) == null || responseNetwork.getStatusCode() != 424) {
            return false;
        }
        return true;
    }

    private boolean equals() {
        boolean z10;
        boolean z11;
        ResponseNetwork responseNetwork = ((AFe1eSDK) this).component3;
        if (this.AFAdRevenueData == AFe1uSDK.FAILURE && responseNetwork != null && responseNetwork.getStatusCode() / 500 == 1) {
            z10 = true;
        } else {
            z10 = false;
        }
        AFe1mSDK aFe1mSDK = this.getCurrencyIso4217Code;
        if (aFe1mSDK != AFe1mSDK.CONVERSION && aFe1mSDK != AFe1mSDK.ATTR) {
            z11 = false;
        } else {
            z11 = true;
        }
        if (!z10 || !z11) {
            return false;
        }
        return true;
    }

    private static String getMediationNetwork(AFh1gSDK aFh1gSDK) {
        try {
            return new URL(aFh1gSDK.component3).getHost();
        } catch (MalformedURLException unused) {
            return "";
        }
    }

    @Override // com.appsflyer.internal.AFe1eSDK, com.appsflyer.internal.AFe1lSDK
    public final boolean AFAdRevenueData() {
        if (!super.AFAdRevenueData() && !copy() && !equals()) {
            return false;
        }
        return true;
    }

    @Override // com.appsflyer.internal.AFe1eSDK
    protected final AppsFlyerRequestListener areAllFieldsValid() {
        return this.areAllFieldsValid.getMonetizationNetwork;
    }

    @Override // com.appsflyer.internal.AFe1eSDK
    protected final boolean copydefault() {
        return false;
    }

    @Override // com.appsflyer.internal.AFe1eSDK
    protected final AFd1jSDK<String> getRevenue(@NonNull String str) {
        String encodeToString = Base64.encodeToString(this.areAllFieldsValid.AFAdRevenueData(), 2);
        AFLogger.afInfoLog("cached data: ".concat(String.valueOf(encodeToString)));
        this.component4.getMonetizationNetwork(this.areAllFieldsValid.component3, encodeToString);
        return ((AFe1eSDK) this).component1.getRevenue(this.areAllFieldsValid);
    }
}
