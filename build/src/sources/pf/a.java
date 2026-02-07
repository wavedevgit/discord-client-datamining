package pf;

import android.content.Context;
import com.google.android.gms.common.util.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static Context f43935a;

    /* renamed from: b  reason: collision with root package name */
    private static Boolean f43936b;

    public static synchronized boolean a(Context context) {
        Boolean bool;
        synchronized (a.class) {
            Context applicationContext = context.getApplicationContext();
            Context context2 = f43935a;
            if (context2 != null && (bool = f43936b) != null && context2 == applicationContext) {
                return bool.booleanValue();
            }
            f43936b = null;
            if (k.e()) {
                f43936b = Boolean.valueOf(applicationContext.getPackageManager().isInstantApp());
            } else {
                try {
                    context.getClassLoader().loadClass("com.google.android.instantapps.supervisor.InstantAppsRuntime");
                    f43936b = Boolean.TRUE;
                } catch (ClassNotFoundException unused) {
                    f43936b = Boolean.FALSE;
                }
            }
            f43935a = applicationContext;
            return f43936b.booleanValue();
        }
    }
}
