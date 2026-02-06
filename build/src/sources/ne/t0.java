package ne;

import android.os.Trace;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class t0 {
    public static void a(String str) {
        if (w0.f39012a >= 18) {
            b(str);
        }
    }

    private static void b(String str) {
        Trace.beginSection(str);
    }

    public static void c() {
        if (w0.f39012a >= 18) {
            d();
        }
    }

    private static void d() {
        Trace.endSection();
    }
}
