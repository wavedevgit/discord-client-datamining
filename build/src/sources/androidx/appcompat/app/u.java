package androidx.appcompat.app;

import android.content.Context;
import android.location.Location;
import android.location.LocationManager;
import android.util.Log;
import com.discord.misc.utilities.logThrottle.LogThrottleSingleton;
import java.util.Calendar;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
class u {

    /* renamed from: d  reason: collision with root package name */
    private static u f1101d;

    /* renamed from: a  reason: collision with root package name */
    private final Context f1102a;

    /* renamed from: b  reason: collision with root package name */
    private final LocationManager f1103b;

    /* renamed from: c  reason: collision with root package name */
    private final a f1104c = new a();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        boolean f1105a;

        /* renamed from: b  reason: collision with root package name */
        long f1106b;

        a() {
        }
    }

    u(Context context, LocationManager locationManager) {
        this.f1102a = context;
        this.f1103b = locationManager;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static u a(Context context) {
        if (f1101d == null) {
            Context applicationContext = context.getApplicationContext();
            f1101d = new u(applicationContext, (LocationManager) applicationContext.getSystemService("location"));
        }
        return f1101d;
    }

    private Location b() {
        Location location;
        Location location2 = null;
        if (androidx.core.content.f.b(this.f1102a, "android.permission.ACCESS_COARSE_LOCATION") == 0) {
            location = c("network");
        } else {
            location = null;
        }
        if (androidx.core.content.f.b(this.f1102a, "android.permission.ACCESS_FINE_LOCATION") == 0) {
            location2 = c("gps");
        }
        if (location2 != null && location != null) {
            if (location2.getTime() > location.getTime()) {
                return location2;
            }
            return location;
        } else if (location2 != null) {
            return location2;
        } else {
            return location;
        }
    }

    private Location c(String str) {
        try {
            if (this.f1103b.isProviderEnabled(str)) {
                return this.f1103b.getLastKnownLocation(str);
            }
            return null;
        } catch (Exception e10) {
            Log.d("TwilightManager", "Failed to get last known location", e10);
            return null;
        }
    }

    private boolean e() {
        if (this.f1104c.f1106b > System.currentTimeMillis()) {
            return true;
        }
        return false;
    }

    private void f(Location location) {
        long j10;
        a aVar = this.f1104c;
        long currentTimeMillis = System.currentTimeMillis();
        t b10 = t.b();
        b10.a(currentTimeMillis - 86400000, location.getLatitude(), location.getLongitude());
        b10.a(currentTimeMillis, location.getLatitude(), location.getLongitude());
        boolean z10 = true;
        if (b10.f1100c != 1) {
            z10 = false;
        }
        boolean z11 = z10;
        long j11 = b10.f1099b;
        long j12 = b10.f1098a;
        b10.a(currentTimeMillis + 86400000, location.getLatitude(), location.getLongitude());
        long j13 = b10.f1099b;
        if (j11 != -1 && j12 != -1) {
            if (currentTimeMillis > j12) {
                j11 = j13;
            } else if (currentTimeMillis > j11) {
                j11 = j12;
            }
            j10 = j11 + LogThrottleSingleton.RATE_LIMIT_ONE_MINUTE;
        } else {
            j10 = currentTimeMillis + 43200000;
        }
        aVar.f1105a = z11;
        aVar.f1106b = j10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public boolean d() {
        a aVar = this.f1104c;
        if (e()) {
            return aVar.f1105a;
        }
        Location b10 = b();
        if (b10 != null) {
            f(b10);
            return aVar.f1105a;
        }
        Log.i("TwilightManager", "Could not get last known location. This is probably because the app does not have any location permissions. Falling back to hardcoded sunrise/sunset values.");
        int i10 = Calendar.getInstance().get(11);
        if (i10 >= 6 && i10 < 22) {
            return false;
        }
        return true;
    }
}
