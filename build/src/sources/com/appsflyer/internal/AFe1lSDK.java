package com.appsflyer.internal;

import android.net.TrafficStats;
import androidx.annotation.NonNull;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import java.util.concurrent.Callable;
import java.util.concurrent.atomic.AtomicInteger;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class AFe1lSDK<Result> implements Comparable<AFe1lSDK<?>>, Callable<AFe1uSDK> {
    private static final AtomicInteger component4 = new AtomicInteger();
    public AFe1uSDK AFAdRevenueData;
    private final int areAllFieldsValid;
    private final String component1;
    private long component2;
    private Throwable component3;
    @NonNull
    public final AFe1mSDK getCurrencyIso4217Code;
    @NonNull
    public final Set<AFe1mSDK> getMediationNetwork;
    public volatile int getMonetizationNetwork;
    @NonNull
    public final Set<AFe1mSDK> getRevenue;
    private boolean toString;

    public AFe1lSDK(@NonNull AFe1mSDK aFe1mSDK, @NonNull AFe1mSDK[] aFe1mSDKArr, String str) {
        HashSet hashSet = new HashSet();
        this.getMediationNetwork = hashSet;
        this.getRevenue = new HashSet();
        int incrementAndGet = component4.incrementAndGet();
        this.areAllFieldsValid = incrementAndGet;
        this.toString = false;
        this.getMonetizationNetwork = 0;
        this.getCurrencyIso4217Code = aFe1mSDK;
        Collections.addAll(hashSet, aFe1mSDKArr);
        if (str != null) {
            this.component1 = str;
        } else {
            this.component1 = String.valueOf(incrementAndGet);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract boolean AFAdRevenueData();

    public final Throwable component1() {
        return this.component3;
    }

    @Override // java.util.concurrent.Callable
    /* renamed from: component3 */
    public final AFe1uSDK call() {
        TrafficStats.setThreadStatsTag(82339054);
        this.AFAdRevenueData = null;
        this.component3 = null;
        long currentTimeMillis = System.currentTimeMillis();
        this.getMonetizationNetwork++;
        try {
            AFe1uSDK mediationNetwork = getMediationNetwork();
            this.AFAdRevenueData = mediationNetwork;
            return mediationNetwork;
        } finally {
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final boolean component4() {
        return this.toString;
    }

    public final boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }
        AFe1lSDK aFe1lSDK = (AFe1lSDK) obj;
        if (this.getCurrencyIso4217Code != aFe1lSDK.getCurrencyIso4217Code) {
            return false;
        }
        return this.component1.equals(aFe1lSDK.component1);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract long getCurrencyIso4217Code();

    @NonNull
    protected abstract AFe1uSDK getMediationNetwork();

    protected void getMediationNetwork(Throwable th2) {
    }

    public void getMonetizationNetwork() {
        this.toString = true;
    }

    public void getRevenue() {
    }

    public final int hashCode() {
        return (this.getCurrencyIso4217Code.hashCode() * 31) + this.component1.hashCode();
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.getCurrencyIso4217Code);
        sb2.append("-");
        sb2.append(this.component1);
        String obj = sb2.toString();
        if (!String.valueOf(this.areAllFieldsValid).equals(this.component1)) {
            StringBuilder sb3 = new StringBuilder();
            sb3.append(obj);
            sb3.append("-");
            sb3.append(this.areAllFieldsValid);
            return sb3.toString();
        }
        return obj;
    }

    @Override // java.lang.Comparable
    /* renamed from: getRevenue */
    public final int compareTo(AFe1lSDK<?> aFe1lSDK) {
        int i10 = this.getCurrencyIso4217Code.unregisterClient - aFe1lSDK.getCurrencyIso4217Code.unregisterClient;
        if (i10 == 0) {
            if (this.component1.equals(aFe1lSDK.component1)) {
                return 0;
            }
            return this.areAllFieldsValid - aFe1lSDK.areAllFieldsValid;
        }
        return i10;
    }
}
