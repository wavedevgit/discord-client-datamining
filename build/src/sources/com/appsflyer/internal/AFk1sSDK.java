package com.appsflyer.internal;

import android.content.Context;
import androidx.annotation.NonNull;
import java.lang.ref.WeakReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFk1sSDK {
    public final WeakReference<Context> AFAdRevenueData;
    public String getMonetizationNetwork;

    public AFk1sSDK(@NonNull Context context) {
        this.AFAdRevenueData = new WeakReference<>(context);
    }
}
