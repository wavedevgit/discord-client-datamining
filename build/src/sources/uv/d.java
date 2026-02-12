package uv;

import android.content.Context;
import android.os.Build;
import android.util.Log;
import uv.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final String f51302a = "d";

    /* renamed from: b  reason: collision with root package name */
    private static a f51303b;

    public static a a(Context context, a.b bVar) {
        a aVar;
        synchronized (d.class) {
            if (f51303b == null && Build.VERSION.SDK_INT >= 30 && e.c(context, bVar)) {
                try {
                    f51303b = new vv.a(1);
                } catch (Exception e10) {
                    Log.e(f51302a, "Exception creating an instance of CronetLoggerImpl", e10);
                }
            }
            if (f51303b == null) {
                f51303b = new f();
            }
            aVar = f51303b;
        }
        return aVar;
    }
}
