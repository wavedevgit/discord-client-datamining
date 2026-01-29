package com.appsflyer.internal;

import android.content.Context;
import com.appsflyer.AFLogger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFj1zSDK extends AFi1aSDK {
    private final AFj1ySDK getMediationNetwork;
    private final AFc1bSDK getRevenue;

    public AFj1zSDK(Runnable runnable, AFc1bSDK aFc1bSDK, AFj1ySDK aFj1ySDK) {
        super("store", "huawei", aFc1bSDK.getCurrencyIso4217Code(), runnable);
        this.getRevenue = aFc1bSDK;
        this.getMediationNetwork = aFj1ySDK;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Code restructure failed: missing block: B:27:0x0104, code lost:
        if (0 == 0) goto L15;
     */
    /* JADX WARN: Code restructure failed: missing block: B:29:0x0107, code lost:
        getMonetizationNetwork();
     */
    /* JADX WARN: Code restructure failed: missing block: B:30:0x010a, code lost:
        return;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public /* synthetic */ void AFAdRevenueData(android.content.Context r11) {
        /*
            Method dump skipped, instructions count: 273
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFj1zSDK.AFAdRevenueData(android.content.Context):void");
    }

    private boolean getRevenue(Context context) {
        if (!getMediationNetwork()) {
            AFLogger.INSTANCE.d(AFg1cSDK.REFERRER, "Huawei referrer collection disallowed by counter.");
            return false;
        } else if (!this.getMediationNetwork.AFAdRevenueData(context)) {
            AFLogger.INSTANCE.d(AFg1cSDK.REFERRER, "Huawei referrer collection disallowed by missing content provider.");
            return false;
        } else if (!this.getMediationNetwork.getMonetizationNetwork(context)) {
            AFLogger.INSTANCE.d(AFg1cSDK.REFERRER, "Huawei referrer collection disallowed by invalid content provider.");
            return false;
        } else {
            return true;
        }
    }

    @Override // com.appsflyer.internal.AFj1qSDK
    public final void getCurrencyIso4217Code(final Context context) {
        if (!getRevenue(context)) {
            return;
        }
        this.getRevenue.getMediationNetwork().execute(new Runnable() { // from class: com.appsflyer.internal.l0
            @Override // java.lang.Runnable
            public final void run() {
                AFj1zSDK.this.AFAdRevenueData(context);
            }
        });
    }
}
