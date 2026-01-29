package com.appsflyer.internal;

import android.app.Activity;
import android.net.Uri;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class AFi1nSDK implements AFi1kSDK {
    private String getMonetizationNetwork;

    private static String getRevenue(Activity activity) {
        Uri k_ = AFb1tSDK.k_(activity != null ? activity.getIntent() : null);
        String obj = k_ != null ? k_.toString() : null;
        if (obj == null) {
            obj = "";
        }
        if (getRevenue(obj)) {
            return null;
        }
        return obj;
    }

    @Override // com.appsflyer.internal.AFi1kSDK
    @NotNull
    public final String getCurrencyIso4217Code(Activity activity) {
        Uri uri;
        String str = null;
        if (activity != null && activity.getIntent() != null) {
            uri = activity.getReferrer();
        } else {
            uri = null;
        }
        if (uri != null) {
            str = uri.toString();
        }
        if (str == null) {
            return "";
        }
        return str;
    }

    @Override // com.appsflyer.internal.AFi1kSDK
    public final String getMediationNetwork(Activity activity) {
        String str = this.getMonetizationNetwork;
        this.getMonetizationNetwork = null;
        if (str != null && str.length() != 0) {
            return str;
        }
        return getRevenue(activity);
    }

    @Override // com.appsflyer.internal.AFi1kSDK
    public final void getMonetizationNetwork(@NotNull Activity activity) {
        Intrinsics.checkNotNullParameter(activity, "");
        String str = this.getMonetizationNetwork;
        if (str != null && str.length() != 0) {
            return;
        }
        this.getMonetizationNetwork = getRevenue(activity);
    }

    private static boolean getRevenue(String str) {
        return StringsKt.P(str, "android-app://", false, 2, null);
    }
}
