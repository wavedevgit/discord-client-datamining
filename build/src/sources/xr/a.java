package xr;

import q1.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a {
    public static final void a(AutoCloseable autoCloseable, Throwable th2) {
        if (autoCloseable != null) {
            if (th2 == null) {
                e.a(autoCloseable);
                return;
            }
            try {
                e.a(autoCloseable);
            } catch (Throwable th3) {
                lr.e.a(th2, th3);
            }
        }
    }
}
