package qf;

import android.content.Context;
import com.google.android.gms.common.util.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static Context f45449a;

    /* renamed from: b  reason: collision with root package name */
    private static Boolean f45450b;

    public static synchronized boolean a(Context context) {
        Boolean bool;
        synchronized (a.class) {
            Context applicationContext = context.getApplicationContext();
            Context context2 = f45449a;
            if (context2 != null && (bool = f45450b) != null && context2 == applicationContext) {
                return bool.booleanValue();
            }
            f45450b = null;
            if (k.e()) {
                f45450b = Boolean.valueOf(applicationContext.getPackageManager().isInstantApp());
            } else {
                try {
                    context.getClassLoader().loadClass("com.google.android.instantapps.supervisor.InstantAppsRuntime");
                    f45450b = Boolean.TRUE;
                } catch (ClassNotFoundException unused) {
                    f45450b = Boolean.FALSE;
                }
            }
            f45449a = applicationContext;
            return f45450b.booleanValue();
        }
    }
}
