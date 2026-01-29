package gf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: b  reason: collision with root package name */
    private static r f26867b;

    /* renamed from: c  reason: collision with root package name */
    private static final s f26868c = new s(0, false, false, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    private s f26869a;

    private r() {
    }

    public static synchronized r b() {
        r rVar;
        synchronized (r.class) {
            try {
                if (f26867b == null) {
                    f26867b = new r();
                }
                rVar = f26867b;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return rVar;
    }

    public s a() {
        return this.f26869a;
    }

    public final synchronized void c(s sVar) {
        if (sVar == null) {
            this.f26869a = f26868c;
            return;
        }
        s sVar2 = this.f26869a;
        if (sVar2 != null && sVar2.f() >= sVar.f()) {
            return;
        }
        this.f26869a = sVar;
    }
}
