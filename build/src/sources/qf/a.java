package qf;

import android.content.Context;
import com.google.android.gms.common.util.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static Context f44118a;

    /* renamed from: b  reason: collision with root package name */
    private static Boolean f44119b;

    public static synchronized boolean a(Context context) {
        Boolean bool;
        synchronized (a.class) {
            Context applicationContext = context.getApplicationContext();
            Context context2 = f44118a;
            if (context2 != null && (bool = f44119b) != null && context2 == applicationContext) {
                return bool.booleanValue();
            }
            f44119b = null;
            if (k.e()) {
                f44119b = Boolean.valueOf(applicationContext.getPackageManager().isInstantApp());
            } else {
                try {
                    context.getClassLoader().loadClass("com.google.android.instantapps.supervisor.InstantAppsRuntime");
                    f44119b = Boolean.TRUE;
                } catch (ClassNotFoundException unused) {
                    f44119b = Boolean.FALSE;
                }
            }
            f44118a = applicationContext;
            return f44119b.booleanValue();
        }
    }
}
