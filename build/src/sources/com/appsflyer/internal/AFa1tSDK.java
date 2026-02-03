package com.appsflyer.internal;

import com.appsflyer.internal.AFe1nSDK;
import com.appsflyer.internal.AFe1rSDK;
import java.util.Map;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFa1tSDK implements Runnable {
    @NotNull
    private final AFh1jSDK AFAdRevenueData;
    private final Map<String, Object> getMonetizationNetwork;
    @NotNull
    private final AFc1bSDK getRevenue;

    public AFa1tSDK(@NotNull AFc1bSDK aFc1bSDK, @NotNull AFh1jSDK aFh1jSDK, Map<String, ? extends Object> map) {
        Intrinsics.checkNotNullParameter(aFc1bSDK, "");
        Intrinsics.checkNotNullParameter(aFh1jSDK, "");
        this.getRevenue = aFc1bSDK;
        this.AFAdRevenueData = aFh1jSDK;
        this.getMonetizationNetwork = map;
    }

    @Override // java.lang.Runnable
    public final void run() {
        AFf1rSDK aFf1rSDK;
        if (this.AFAdRevenueData.getMediationNetwork()) {
            AFf1rSDK aFf1rSDK2 = new AFf1rSDK(this.AFAdRevenueData, this.getRevenue);
            aFf1rSDK2.hashCode = this.getMonetizationNetwork;
            aFf1rSDK = aFf1rSDK2;
        } else if (this.AFAdRevenueData instanceof AFh1nSDK) {
            aFf1rSDK = new AFf1sSDK((AFh1nSDK) this.AFAdRevenueData, this.getRevenue);
        } else {
            aFf1rSDK = new AFf1uSDK(this.AFAdRevenueData, this.getRevenue);
        }
        AFe1nSDK copydefault = this.getRevenue.copydefault();
        copydefault.AFAdRevenueData.execute(new AFe1nSDK.AnonymousClass3(aFf1rSDK));
        this.getRevenue.AFInAppEventParameterName();
        if (AFe1ySDK.getRevenue()) {
            AFe1qSDK AFAdRevenueData = this.getRevenue.AFAdRevenueData();
            AFh1jSDK aFh1jSDK = this.AFAdRevenueData;
            Intrinsics.checkNotNullParameter(aFh1jSDK, "");
            if (AFj1iSDK.AFAdRevenueData(AFAdRevenueData.AFAdRevenueData.getRevenue)) {
                AFe1rSDK.AFa1vSDK aFa1vSDK = AFe1rSDK.AFa1vSDK;
                AFe1rSDK monetizationNetwork = AFe1rSDK.AFa1vSDK.getMonetizationNetwork(aFh1jSDK);
                if (monetizationNetwork != null) {
                    AFAdRevenueData.AFAdRevenueData(monetizationNetwork, new Function1<AFe1uSDK, Unit>() { // from class: com.appsflyer.internal.AFe1qSDK.1
                        public final void getRevenue(@NotNull AFe1uSDK aFe1uSDK) {
                            Intrinsics.checkNotNullParameter(aFe1uSDK, "");
                        }

                        @Override // kotlin.jvm.functions.Function1
                        public final /* synthetic */ Object invoke(Object obj) {
                            getRevenue((AFe1uSDK) obj);
                            return Unit.f32464a;
                        }
                    });
                }
            }
        }
    }
}
