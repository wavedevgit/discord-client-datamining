package co;

import android.content.Context;
import android.content.pm.PackageManager;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    public static final b f8375a = new b();

    private b() {
    }

    public final boolean a(Context context) {
        PackageManager packageManager;
        if (context == null || (packageManager = context.getPackageManager()) == null || !packageManager.hasSystemFeature("android.software.leanback")) {
            return false;
        }
        return true;
    }
}
