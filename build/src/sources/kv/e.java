package kv;

import android.content.ComponentName;
import android.content.Context;
import android.content.pm.PackageManager;
import android.content.pm.ServiceInfo;
import android.os.Bundle;
import kv.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f35619a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static Context f35620b;

    /* renamed from: c  reason: collision with root package name */
    private static Bundle f35621c;

    private static Bundle a(Context context) {
        Bundle bundle;
        ServiceInfo serviceInfo;
        Bundle bundle2;
        Context applicationContext = context.getApplicationContext();
        synchronized (f35619a) {
            if (applicationContext != f35620b) {
                hv.a a10 = hv.a.a("CronetManifest#getMetaData fetching info");
                try {
                    serviceInfo = applicationContext.getPackageManager().getServiceInfo(new ComponentName(applicationContext, "android.net.http.MetaDataHolder"), 787072);
                } catch (PackageManager.NameNotFoundException | NullPointerException unused) {
                    serviceInfo = null;
                }
                if (serviceInfo == null || (bundle2 = serviceInfo.metaData) == null) {
                    bundle2 = new Bundle();
                }
                f35621c = bundle2;
                f35620b = applicationContext;
                if (a10 != null) {
                    a10.close();
                }
            }
            bundle = f35621c;
        }
        return bundle;
    }

    public static boolean b(Context context) {
        boolean z10 = false;
        try {
            Class.forName("org.chromium.net.impl.NativeCronetEngineBuilderImpl", false, e.class.getClassLoader());
            z10 = true;
        } catch (ClassNotFoundException unused) {
        }
        return a(context).getBoolean("android.net.http.EnableTelemetry", !z10);
    }

    public static boolean c(Context context, a.b bVar) {
        boolean z10;
        if (bVar != a.b.CRONET_SOURCE_PLATFORM && bVar != a.b.CRONET_SOURCE_PLAY_SERVICES) {
            z10 = false;
        } else {
            z10 = true;
        }
        return a(context).getBoolean("android.net.http.EnableTelemetry", z10);
    }

    public static boolean d(Context context) {
        return a(context).getBoolean("android.net.http.ReadHttpFlags", true);
    }
}
