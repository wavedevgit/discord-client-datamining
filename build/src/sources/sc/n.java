package sc;

import java.io.IOException;
import java.util.Map;
import java.util.UUID;
import sc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface n {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a extends IOException {

        /* renamed from: d  reason: collision with root package name */
        public final int f49717d;

        public a(Throwable th2, int i10) {
            super(th2);
            this.f49717d = i10;
        }
    }

    static void f(n nVar, n nVar2) {
        if (nVar != nVar2) {
            if (nVar2 != null) {
                nVar2.c(null);
            }
            if (nVar != null) {
                nVar.d(null);
            }
        }
    }

    UUID a();

    boolean b();

    void c(u.a aVar);

    void d(u.a aVar);

    rc.b e();

    Map g();

    a getError();

    int getState();

    boolean h(String str);
}
