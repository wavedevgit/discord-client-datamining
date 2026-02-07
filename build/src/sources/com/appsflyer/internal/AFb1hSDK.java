package com.appsflyer.internal;

import android.content.Context;
import com.appsflyer.AFLogger;
import kotlin.Unit;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFb1hSDK implements AFb1bSDK {
    @NotNull
    private final AFf1cSDK AFAdRevenueData;
    @NotNull
    private final AFc1eSDK getMonetizationNetwork;
    @NotNull
    private final AFc1gSDK getRevenue;

    public AFb1hSDK(@NotNull AFc1eSDK aFc1eSDK, @NotNull AFc1gSDK aFc1gSDK, @NotNull AFf1cSDK aFf1cSDK) {
        Intrinsics.checkNotNullParameter(aFc1eSDK, "");
        Intrinsics.checkNotNullParameter(aFc1gSDK, "");
        Intrinsics.checkNotNullParameter(aFf1cSDK, "");
        this.getMonetizationNetwork = aFc1eSDK;
        this.getRevenue = aFc1gSDK;
        this.AFAdRevenueData = aFf1cSDK;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void getMediationNetwork(AFb1hSDK aFb1hSDK, te.c cVar) {
        Intrinsics.checkNotNullParameter(aFb1hSDK, "");
        AFc1eSDK aFc1eSDK = aFb1hSDK.getMonetizationNetwork;
        int b10 = cVar.b();
        String a10 = cVar.a();
        Intrinsics.checkNotNullExpressionValue(a10, "");
        aFc1eSDK.equals = new AFb1gSDK(b10, a10);
    }

    @Override // com.appsflyer.internal.AFb1bSDK
    public final boolean getMonetizationNetwork() {
        if (!this.AFAdRevenueData.getMonetizationNetwork() && !this.getMonetizationNetwork.getMediationNetwork() && AFj1iSDK.getRevenue(this.getRevenue.getRevenue) && AFj1iSDK.getMonetizationNetwork(this.getRevenue.getRevenue)) {
            return true;
        }
        return false;
    }

    @Override // com.appsflyer.internal.AFb1bSDK
    public final void getRevenue() {
        Context context = this.getRevenue.getRevenue;
        if (context != null) {
            try {
                Intrinsics.checkNotNullExpressionValue(te.a.a(context).g().g(new yg.g() { // from class: com.appsflyer.internal.j
                    @Override // yg.g
                    public final void onSuccess(Object obj) {
                        AFb1hSDK.getMediationNetwork(AFb1hSDK.this, (te.c) obj);
                    }
                }), "");
            } catch (Throwable th2) {
                AFh1ySDK.e$default(AFLogger.INSTANCE, AFg1cSDK.APP_SET_ID, "Error while trying to  fetch App set ID", th2, false, false, false, false, 120, null);
                Unit unit = Unit.f32056a;
            }
        }
    }
}
