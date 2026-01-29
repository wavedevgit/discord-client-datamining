package com.appsflyer.internal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class AFd1aSDK {
    public final long getRevenue;

    public AFd1aSDK(long j10) {
        this.getRevenue = j10;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && getClass() == obj.getClass() && this.getRevenue == ((AFd1aSDK) obj).getRevenue) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.getRevenue;
        return (int) (j10 ^ (j10 >>> 32));
    }
}
