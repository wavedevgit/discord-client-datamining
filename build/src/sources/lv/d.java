package lv;

import android.content.Context;
import android.os.Build;
import android.util.Log;
import lv.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final String f36696a = "d";

    /* renamed from: b  reason: collision with root package name */
    private static a f36697b;

    public static a a(Context context, a.b bVar) {
        a aVar;
        synchronized (d.class) {
            if (f36697b == null && Build.VERSION.SDK_INT >= 30 && e.c(context, bVar)) {
                try {
                    f36697b = new mv.a(1);
                } catch (Exception e10) {
                    Log.e(f36696a, "Exception creating an instance of CronetLoggerImpl", e10);
                }
            }
            if (f36697b == null) {
                f36697b = new f();
            }
            aVar = f36697b;
        }
        return aVar;
    }
}
