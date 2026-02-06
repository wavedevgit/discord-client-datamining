package kv;

import android.content.Context;
import android.os.Build;
import android.util.Log;
import kv.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final String f35569a = "d";

    /* renamed from: b  reason: collision with root package name */
    private static a f35570b;

    public static a a(Context context, a.b bVar) {
        a aVar;
        synchronized (d.class) {
            if (f35570b == null && Build.VERSION.SDK_INT >= 30 && e.c(context, bVar)) {
                try {
                    f35570b = new lv.a(1);
                } catch (Exception e10) {
                    Log.e(f35569a, "Exception creating an instance of CronetLoggerImpl", e10);
                }
            }
            if (f35570b == null) {
                f35570b = new f();
            }
            aVar = f35570b;
        }
        return aVar;
    }
}
