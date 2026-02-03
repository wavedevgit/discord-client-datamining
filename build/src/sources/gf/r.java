package gf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: b  reason: collision with root package name */
    private static r f26978b;

    /* renamed from: c  reason: collision with root package name */
    private static final s f26979c = new s(0, false, false, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    private s f26980a;

    private r() {
    }

    public static synchronized r b() {
        r rVar;
        synchronized (r.class) {
            try {
                if (f26978b == null) {
                    f26978b = new r();
                }
                rVar = f26978b;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return rVar;
    }

    public s a() {
        return this.f26980a;
    }

    public final synchronized void c(s sVar) {
        if (sVar == null) {
            this.f26980a = f26979c;
            return;
        }
        s sVar2 = this.f26980a;
        if (sVar2 != null && sVar2.f() >= sVar.f()) {
            return;
        }
        this.f26980a = sVar;
    }
}
