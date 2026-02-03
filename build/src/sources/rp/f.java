package rp;

import android.content.Context;
import android.location.Location;
import android.location.LocationManager;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class f {
    public static final b a(Context context) {
        Location location;
        c cVar;
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("location");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.location.LocationManager");
        LocationManager locationManager = (LocationManager) systemService;
        try {
            int a10 = androidx.core.content.a.a(context, "android.permission.ACCESS_FINE_LOCATION");
            int a11 = androidx.core.content.a.a(context, "android.permission.ACCESS_COARSE_LOCATION");
            if (a10 == 0) {
                location = locationManager.getLastKnownLocation("gps");
            } else if (a11 == 0) {
                location = locationManager.getLastKnownLocation("network");
            } else {
                location = null;
            }
            if (a10 == 0) {
                cVar = c.f48630e;
            } else if (a11 == 0) {
                cVar = c.f48629d;
            } else {
                cVar = null;
            }
            if (location != null && cVar != null) {
                return new b(location, cVar);
            }
        } catch (Exception unused) {
        }
        return null;
    }

    public static final boolean b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        Object systemService = context.getSystemService("location");
        Intrinsics.checkNotNull(systemService, "null cannot be cast to non-null type android.location.LocationManager");
        return ((LocationManager) systemService).isProviderEnabled("gps");
    }
}
