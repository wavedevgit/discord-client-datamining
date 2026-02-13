package qf;

import android.content.Context;
import com.google.android.gms.common.util.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static Context f44686a;

    /* renamed from: b  reason: collision with root package name */
    private static Boolean f44687b;

    public static synchronized boolean a(Context context) {
        Boolean bool;
        synchronized (a.class) {
            Context applicationContext = context.getApplicationContext();
            Context context2 = f44686a;
            if (context2 != null && (bool = f44687b) != null && context2 == applicationContext) {
                return bool.booleanValue();
            }
            f44687b = null;
            if (k.e()) {
                f44687b = Boolean.valueOf(applicationContext.getPackageManager().isInstantApp());
            } else {
                try {
                    context.getClassLoader().loadClass("com.google.android.instantapps.supervisor.InstantAppsRuntime");
                    f44687b = Boolean.TRUE;
                } catch (ClassNotFoundException unused) {
                    f44687b = Boolean.FALSE;
                }
            }
            f44686a = applicationContext;
            return f44687b.booleanValue();
        }
    }
}
