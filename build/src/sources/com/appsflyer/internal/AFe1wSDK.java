package com.appsflyer.internal;

import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFe1wSDK {
    @NotNull
    final String AFAdRevenueData;
    @NotNull
    final String getRevenue;

    public AFe1wSDK(@NotNull String str, @NotNull String str2) {
        Intrinsics.checkNotNullParameter(str, "");
        Intrinsics.checkNotNullParameter(str2, "");
        this.AFAdRevenueData = str;
        this.getRevenue = str2;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof AFe1wSDK)) {
            return false;
        }
        AFe1wSDK aFe1wSDK = (AFe1wSDK) obj;
        if (Intrinsics.areEqual(this.AFAdRevenueData, aFe1wSDK.AFAdRevenueData) && Intrinsics.areEqual(this.getRevenue, aFe1wSDK.getRevenue)) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return (this.AFAdRevenueData.hashCode() * 31) + this.getRevenue.hashCode();
    }

    @NotNull
    public final String toString() {
        String str = this.AFAdRevenueData;
        String str2 = this.getRevenue;
        return "HostConfig(prefix=" + str + ", host=" + str2 + ")";
    }
}
