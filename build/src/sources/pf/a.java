package pf;

import android.content.Context;
import com.google.android.gms.common.util.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static Context f45112a;

    /* renamed from: b  reason: collision with root package name */
    private static Boolean f45113b;

    public static synchronized boolean a(Context context) {
        Boolean bool;
        synchronized (a.class) {
            Context applicationContext = context.getApplicationContext();
            Context context2 = f45112a;
            if (context2 != null && (bool = f45113b) != null && context2 == applicationContext) {
                return bool.booleanValue();
            }
            f45113b = null;
            if (k.e()) {
                f45113b = Boolean.valueOf(applicationContext.getPackageManager().isInstantApp());
            } else {
                try {
                    context.getClassLoader().loadClass("com.google.android.instantapps.supervisor.InstantAppsRuntime");
                    f45113b = Boolean.TRUE;
                } catch (ClassNotFoundException unused) {
                    f45113b = Boolean.FALSE;
                }
            }
            f45112a = applicationContext;
            return f45113b.booleanValue();
        }
    }
}
