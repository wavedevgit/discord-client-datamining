package o4;

import android.content.Context;
import android.net.ConnectivityManager;
import android.net.NetworkCapabilities;
import android.net.NetworkInfo;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    private static final String f41472a;

    static {
        String i10 = k4.m.i("NetworkStateTracker");
        Intrinsics.checkNotNullExpressionValue(i10, "tagWithPrefix(\"NetworkStateTracker\")");
        f41472a = i10;
    }

    public static final h a(Context context, r4.b taskExecutor) {
        Intrinsics.checkNotNullParameter(context, "context");
        Intrinsics.checkNotNullParameter(taskExecutor, "taskExecutor");
        return new j(context, taskExecutor);
    }

    public static final m4.c c(ConnectivityManager connectivityManager) {
        boolean z10;
        Intrinsics.checkNotNullParameter(connectivityManager, "<this>");
        NetworkInfo activeNetworkInfo = connectivityManager.getActiveNetworkInfo();
        boolean z11 = false;
        if (activeNetworkInfo != null && activeNetworkInfo.isConnected()) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean d10 = d(connectivityManager);
        boolean a10 = v1.a.a(connectivityManager);
        if (activeNetworkInfo != null && !activeNetworkInfo.isRoaming()) {
            z11 = true;
        }
        return new m4.c(z10, d10, a10, z11);
    }

    public static final boolean d(ConnectivityManager connectivityManager) {
        Intrinsics.checkNotNullParameter(connectivityManager, "<this>");
        try {
            NetworkCapabilities a10 = q4.j.a(connectivityManager, q4.k.a(connectivityManager));
            if (a10 == null) {
                return false;
            }
            return q4.j.b(a10, 16);
        } catch (SecurityException e10) {
            k4.m.e().d(f41472a, "Unable to validate active network", e10);
            return false;
        }
    }
}
