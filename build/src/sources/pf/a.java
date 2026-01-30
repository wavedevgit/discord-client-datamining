package pf;

import android.content.Context;
import com.google.android.gms.common.util.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static Context f45128a;

    /* renamed from: b  reason: collision with root package name */
    private static Boolean f45129b;

    public static synchronized boolean a(Context context) {
        Boolean bool;
        synchronized (a.class) {
            Context applicationContext = context.getApplicationContext();
            Context context2 = f45128a;
            if (context2 != null && (bool = f45129b) != null && context2 == applicationContext) {
                return bool.booleanValue();
            }
            f45129b = null;
            if (k.e()) {
                f45129b = Boolean.valueOf(applicationContext.getPackageManager().isInstantApp());
            } else {
                try {
                    context.getClassLoader().loadClass("com.google.android.instantapps.supervisor.InstantAppsRuntime");
                    f45129b = Boolean.TRUE;
                } catch (ClassNotFoundException unused) {
                    f45129b = Boolean.FALSE;
                }
            }
            f45128a = applicationContext;
            return f45129b.booleanValue();
        }
    }
}
