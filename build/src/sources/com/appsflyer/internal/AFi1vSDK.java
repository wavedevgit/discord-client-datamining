package com.appsflyer.internal;

import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFi1vSDK {
    @NonNull
    public final String AFAdRevenueData;
    public final Throwable areAllFieldsValid;
    public final AFi1uSDK component1;
    public final String component3;
    public final long getCurrencyIso4217Code;
    public final String getMediationNetwork;
    public final long getMonetizationNetwork;
    public final int getRevenue;

    public AFi1vSDK(String str, @NonNull String str2, long j10, long j11, int i10, AFi1uSDK aFi1uSDK, String str3, Throwable th2) {
        this.getMediationNetwork = str;
        this.AFAdRevenueData = str2;
        this.getMonetizationNetwork = j10;
        this.getCurrencyIso4217Code = j11;
        this.getRevenue = i10;
        this.component1 = aFi1uSDK;
        this.component3 = str3;
        this.areAllFieldsValid = th2;
    }
}
