package com.appsflyer.internal;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFg1ySDK {
    final int AFAdRevenueData;
    final int getCurrencyIso4217Code;
    @NotNull
    final String getMediationNetwork;
    final int getMonetizationNetwork;
    final int getRevenue;

    public AFg1ySDK(int i10, int i11, int i12, int i13, @NotNull String str) {
        Intrinsics.checkNotNullParameter(str, "");
        this.getCurrencyIso4217Code = i10;
        this.AFAdRevenueData = i11;
        this.getMonetizationNetwork = i12;
        this.getRevenue = i13;
        this.getMediationNetwork = str;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof AFg1ySDK)) {
            return false;
        }
        AFg1ySDK aFg1ySDK = (AFg1ySDK) obj;
        if (this.getCurrencyIso4217Code == aFg1ySDK.getCurrencyIso4217Code && this.AFAdRevenueData == aFg1ySDK.AFAdRevenueData && this.getMonetizationNetwork == aFg1ySDK.getMonetizationNetwork && this.getRevenue == aFg1ySDK.getRevenue && Intrinsics.areEqual(this.getMediationNetwork, aFg1ySDK.getMediationNetwork)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return (((((((Integer.hashCode(this.getCurrencyIso4217Code) * 31) + Integer.hashCode(this.AFAdRevenueData)) * 31) + Integer.hashCode(this.getMonetizationNetwork)) * 31) + Integer.hashCode(this.getRevenue)) * 31) + this.getMediationNetwork.hashCode();
    }

    @NotNull
    public final String toString() {
        int i10 = this.getCurrencyIso4217Code;
        int i11 = this.AFAdRevenueData;
        int i12 = this.getMonetizationNetwork;
        int i13 = this.getRevenue;
        String str = this.getMediationNetwork;
        return "CmpTcfData(policyVersion=" + i10 + ", gdprApplies=" + i11 + ", cmpSdkId=" + i12 + ", cmpSdkVersion=" + i13 + ", tcString=" + str + ")";
    }
}
