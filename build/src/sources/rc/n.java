package rc;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;
import rc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface n {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends IOException {

        /* renamed from: d  reason: collision with root package name */
        public final int f48242d;

        public a(Throwable th2, int i10) {
            super(th2);
            this.f48242d = i10;
        }
    }

    static void f(n nVar, n nVar2) {
        if (nVar != nVar2) {
            if (nVar2 != null) {
                nVar2.e(null);
            }
            if (nVar != null) {
                nVar.b(null);
            }
        }
    }

    UUID a();

    void b(u.a aVar);

    boolean c();

    qc.b d();

    void e(u.a aVar);

    Map g();

    a getError();

    int getState();

    boolean h(String str);
}
