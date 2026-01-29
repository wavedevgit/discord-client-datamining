package com.appsflyer.internal;

import android.hardware.Sensor;
import android.hardware.SensorManager;
import android.os.Handler;
import androidx.annotation.NonNull;
import com.appsflyer.AFLogger;
import java.util.BitSet;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.CopyOnWriteArrayList;
import java.util.concurrent.ExecutorService;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFj1oSDK implements AFj1pSDK {
    private static final BitSet component2;
    final Runnable AFAdRevenueData;
    private final Map<AFj1nSDK, AFj1nSDK> areAllFieldsValid;
    private final ExecutorService component1;
    private final Map<AFj1nSDK, Map<String, Object>> component3;
    private final SensorManager component4;
    private final Runnable equals;
    final Runnable getCurrencyIso4217Code;
    final Object getMediationNetwork;
    final Handler getMonetizationNetwork;
    boolean getRevenue;
    private boolean toString;

    static {
        BitSet bitSet = new BitSet(6);
        component2 = bitSet;
        bitSet.set(1);
        bitSet.set(2);
        bitSet.set(4);
    }

    private AFj1oSDK(@NonNull SensorManager sensorManager, Handler handler, ExecutorService executorService) {
        this.getMediationNetwork = new Object();
        BitSet bitSet = component2;
        this.areAllFieldsValid = new HashMap(bitSet.size());
        this.component3 = new ConcurrentHashMap(bitSet.size());
        this.AFAdRevenueData = new Runnable() { // from class: com.appsflyer.internal.AFj1oSDK.1
            {
                AFj1oSDK.this = this;
            }

            @Override // java.lang.Runnable
            public final void run() {
                synchronized (AFj1oSDK.this.getMediationNetwork) {
                    AFj1oSDK.this.getRevenue();
                    AFj1oSDK aFj1oSDK = AFj1oSDK.this;
                    aFj1oSDK.getMonetizationNetwork.postDelayed(aFj1oSDK.getCurrencyIso4217Code, 150L);
                    AFj1oSDK.this.getRevenue = true;
                }
            }
        };
        this.getCurrencyIso4217Code = new Runnable() { // from class: com.appsflyer.internal.z
            @Override // java.lang.Runnable
            public final void run() {
                AFj1oSDK.this.areAllFieldsValid();
            }
        };
        this.equals = new Runnable() { // from class: com.appsflyer.internal.AFj1oSDK.3
            {
                AFj1oSDK.this = this;
            }

            @Override // java.lang.Runnable
            public final void run() {
                synchronized (AFj1oSDK.this.getMediationNetwork) {
                    try {
                        AFj1oSDK aFj1oSDK = AFj1oSDK.this;
                        if (aFj1oSDK.getRevenue) {
                            aFj1oSDK.getMonetizationNetwork.removeCallbacks(aFj1oSDK.AFAdRevenueData);
                            AFj1oSDK aFj1oSDK2 = AFj1oSDK.this;
                            aFj1oSDK2.getMonetizationNetwork.removeCallbacks(aFj1oSDK2.getCurrencyIso4217Code);
                            AFj1oSDK.this.getCurrencyIso4217Code();
                            AFj1oSDK.this.getRevenue = false;
                        }
                    } catch (Throwable th2) {
                        throw th2;
                    }
                }
            }
        };
        this.component4 = sensorManager;
        this.getMonetizationNetwork = handler;
        this.component1 = executorService;
    }

    public /* synthetic */ void areAllFieldsValid() {
        synchronized (this.getMediationNetwork) {
            this.getMonetizationNetwork.post(new a0(this));
        }
    }

    public /* synthetic */ void component1() {
        try {
            if (!this.areAllFieldsValid.isEmpty()) {
                for (AFj1nSDK aFj1nSDK : this.areAllFieldsValid.values()) {
                    this.component4.unregisterListener(aFj1nSDK);
                    aFj1nSDK.getCurrencyIso4217Code(this.component3, true);
                }
            }
        } catch (Throwable th2) {
            AFLogger.afErrorLogForExcManagerOnly("error while unregistering listeners", th2);
        }
        this.toString = false;
    }

    @NonNull
    private List<Map<String, Object>> component2() {
        synchronized (this.getMediationNetwork) {
            try {
                if (!this.areAllFieldsValid.isEmpty() && this.toString) {
                    for (AFj1nSDK aFj1nSDK : this.areAllFieldsValid.values()) {
                        aFj1nSDK.getCurrencyIso4217Code(this.component3, false);
                    }
                }
                if (this.component3.isEmpty()) {
                    return new CopyOnWriteArrayList(Collections.EMPTY_LIST);
                }
                return new CopyOnWriteArrayList(this.component3.values());
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    public /* synthetic */ void component3() {
        try {
            for (Sensor sensor : this.component4.getSensorList(-1)) {
                if (getMonetizationNetwork(sensor.getType())) {
                    AFj1nSDK aFj1nSDK = new AFj1nSDK(sensor, this.component1);
                    if (!this.areAllFieldsValid.containsKey(aFj1nSDK)) {
                        this.areAllFieldsValid.put(aFj1nSDK, aFj1nSDK);
                    }
                    this.component4.registerListener(this.areAllFieldsValid.get(aFj1nSDK), sensor, 1, this.getMonetizationNetwork);
                }
            }
        } catch (Throwable th2) {
            AFLogger.afErrorLogForExcManagerOnly("registerListeners error", th2);
        }
        this.toString = true;
    }

    @NonNull
    private List<Map<String, Object>> component4() {
        synchronized (this.getMediationNetwork) {
            try {
                for (AFj1nSDK aFj1nSDK : this.areAllFieldsValid.values()) {
                    aFj1nSDK.getCurrencyIso4217Code(this.component3, true);
                }
                if (this.component3.isEmpty()) {
                    return new CopyOnWriteArrayList(Collections.EMPTY_LIST);
                }
                return new CopyOnWriteArrayList(this.component3.values());
            } catch (Throwable th2) {
                throw th2;
            }
        }
    }

    private static boolean getMonetizationNetwork(int i10) {
        return i10 >= 0 && component2.get(i10);
    }

    @Override // com.appsflyer.internal.AFj1pSDK
    @NonNull
    public final Map<String, Object> AFAdRevenueData() {
        ConcurrentHashMap concurrentHashMap = new ConcurrentHashMap();
        List<Map<String, Object>> component22 = component2();
        if (!component22.isEmpty()) {
            concurrentHashMap.put("sensors", component22);
            return concurrentHashMap;
        }
        List<Map<String, Object>> component4 = component4();
        if (!component4.isEmpty()) {
            concurrentHashMap.put("sensors", component4);
        }
        return concurrentHashMap;
    }

    final void getCurrencyIso4217Code() {
        this.getMonetizationNetwork.post(new a0(this));
    }

    @Override // com.appsflyer.internal.AFj1pSDK
    public final synchronized void getMediationNetwork() {
        this.getMonetizationNetwork.post(this.equals);
    }

    final void getRevenue() {
        this.getMonetizationNetwork.post(new Runnable() { // from class: com.appsflyer.internal.b0
            @Override // java.lang.Runnable
            public final void run() {
                AFj1oSDK.this.component3();
            }
        });
    }

    @Override // com.appsflyer.internal.AFj1pSDK
    public final void getMonetizationNetwork() {
        this.getMonetizationNetwork.post(this.equals);
        this.getMonetizationNetwork.post(this.AFAdRevenueData);
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public AFj1oSDK(@androidx.annotation.NonNull android.content.Context r3, java.util.concurrent.ExecutorService r4) {
        /*
            r2 = this;
            android.content.Context r3 = r3.getApplicationContext()
            java.lang.String r0 = "sensor"
            java.lang.Object r3 = r3.getSystemService(r0)
            android.hardware.SensorManager r3 = (android.hardware.SensorManager) r3
            android.os.HandlerThread r0 = new android.os.HandlerThread
            java.lang.String r1 = "internal"
            r0.<init>(r1)
            r0.start()
            android.os.Handler r1 = new android.os.Handler
            android.os.Looper r0 = r0.getLooper()
            r1.<init>(r0)
            r2.<init>(r3, r1, r4)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: com.appsflyer.internal.AFj1oSDK.<init>(android.content.Context, java.util.concurrent.ExecutorService):void");
    }
}
