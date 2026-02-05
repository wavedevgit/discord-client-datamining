package com.appsflyer.internal;

import android.content.SharedPreferences;
import com.appsflyer.AFLogger;
import kotlin.Lazy;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFc1qSDK implements AFc1oSDK {
    @NotNull
    private final Lazy getCurrencyIso4217Code;
    @NotNull
    private final AFc1hSDK<SharedPreferences> getRevenue;

    public AFc1qSDK(@NotNull AFc1hSDK<SharedPreferences> aFc1hSDK) {
        Intrinsics.checkNotNullParameter(aFc1hSDK, "");
        this.getRevenue = aFc1hSDK;
        this.getCurrencyIso4217Code = or.l.a(new Function0<SharedPreferences>() { // from class: com.appsflyer.internal.AFc1qSDK.4
            {
                super(0);
            }

            @Override // kotlin.jvm.functions.Function0
            @NotNull
            /* renamed from: m_ */
            public final SharedPreferences invoke() {
                return (SharedPreferences) AFc1qSDK.this.getRevenue.getRevenue.invoke();
            }
        });
    }

    @Override // com.appsflyer.internal.AFc1oSDK
    public final void AFAdRevenueData(String str, String str2) {
        ((SharedPreferences) this.getCurrencyIso4217Code.getValue()).edit().putString(str, str2).apply();
    }

    @Override // com.appsflyer.internal.AFc1oSDK
    public final void getCurrencyIso4217Code(String str, boolean z10) {
        ((SharedPreferences) this.getCurrencyIso4217Code.getValue()).edit().putBoolean(str, z10).apply();
    }

    @Override // com.appsflyer.internal.AFc1oSDK
    public final String getMonetizationNetwork(String str, String str2) {
        try {
            return ((SharedPreferences) this.getCurrencyIso4217Code.getValue()).getString(str, str2);
        } catch (ClassCastException e10) {
            AFLogger aFLogger = AFLogger.INSTANCE;
            AFg1cSDK aFg1cSDK = AFg1cSDK.PREFERENCES;
            AFh1ySDK.e$default(aFLogger, aFg1cSDK, "Unexpected data type found for key " + str, e10, false, false, false, false, 120, null);
            return str2;
        }
    }

    @Override // com.appsflyer.internal.AFc1oSDK
    public final void getRevenue(String str, long j10) {
        ((SharedPreferences) this.getCurrencyIso4217Code.getValue()).edit().putLong(str, j10).apply();
    }

    @Override // com.appsflyer.internal.AFc1oSDK
    public final boolean getMediationNetwork(String str, boolean z10) {
        try {
            return ((SharedPreferences) this.getCurrencyIso4217Code.getValue()).getBoolean(str, z10);
        } catch (ClassCastException e10) {
            AFLogger aFLogger = AFLogger.INSTANCE;
            AFg1cSDK aFg1cSDK = AFg1cSDK.PREFERENCES;
            AFh1ySDK.e$default(aFLogger, aFg1cSDK, "Unexpected data type found for key " + str, e10, false, false, false, false, 120, null);
            return z10;
        }
    }

    @Override // com.appsflyer.internal.AFc1oSDK
    public final long getCurrencyIso4217Code(String str, long j10) {
        try {
            return ((SharedPreferences) this.getCurrencyIso4217Code.getValue()).getLong(str, j10);
        } catch (ClassCastException e10) {
            AFLogger aFLogger = AFLogger.INSTANCE;
            AFg1cSDK aFg1cSDK = AFg1cSDK.PREFERENCES;
            AFh1ySDK.e$default(aFLogger, aFg1cSDK, "Unexpected data type found for key " + str, e10, false, false, false, false, 120, null);
            return j10;
        }
    }

    @Override // com.appsflyer.internal.AFc1oSDK
    public final void getRevenue(String str, int i10) {
        ((SharedPreferences) this.getCurrencyIso4217Code.getValue()).edit().putInt(str, i10).apply();
    }

    @Override // com.appsflyer.internal.AFc1oSDK
    public final int getMediationNetwork(String str, int i10) {
        try {
            return ((SharedPreferences) this.getCurrencyIso4217Code.getValue()).getInt(str, i10);
        } catch (ClassCastException e10) {
            AFLogger aFLogger = AFLogger.INSTANCE;
            AFg1cSDK aFg1cSDK = AFg1cSDK.PREFERENCES;
            AFh1ySDK.e$default(aFLogger, aFg1cSDK, "Unexpected data type found for key " + str, e10, false, false, false, false, 120, null);
            return i10;
        }
    }

    @Override // com.appsflyer.internal.AFc1oSDK
    public final boolean getRevenue(String str) {
        return ((SharedPreferences) this.getCurrencyIso4217Code.getValue()).contains(str);
    }

    @Override // com.appsflyer.internal.AFc1oSDK
    public final void getCurrencyIso4217Code(String str) {
        ((SharedPreferences) this.getCurrencyIso4217Code.getValue()).edit().remove(str).apply();
    }
}
