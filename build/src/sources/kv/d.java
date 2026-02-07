package kv;

import android.content.Context;
import android.os.Build;
import android.util.Log;
import kv.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final String f35617a = "d";

    /* renamed from: b  reason: collision with root package name */
    private static a f35618b;

    public static a a(Context context, a.b bVar) {
        a aVar;
        synchronized (d.class) {
            if (f35618b == null && Build.VERSION.SDK_INT >= 30 && e.c(context, bVar)) {
                try {
                    f35618b = new lv.a(1);
                } catch (Exception e10) {
                    Log.e(f35617a, "Exception creating an instance of CronetLoggerImpl", e10);
                }
            }
            if (f35618b == null) {
                f35618b = new f();
            }
            aVar = f35618b;
        }
        return aVar;
    }
}
