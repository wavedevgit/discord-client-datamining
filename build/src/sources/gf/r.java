package gf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: b  reason: collision with root package name */
    private static r f26191b;

    /* renamed from: c  reason: collision with root package name */
    private static final s f26192c = new s(0, false, false, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    private s f26193a;

    private r() {
    }

    public static synchronized r b() {
        r rVar;
        synchronized (r.class) {
            try {
                if (f26191b == null) {
                    f26191b = new r();
                }
                rVar = f26191b;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return rVar;
    }

    public s a() {
        return this.f26193a;
    }

    public final synchronized void c(s sVar) {
        if (sVar == null) {
            this.f26193a = f26192c;
            return;
        }
        s sVar2 = this.f26193a;
        if (sVar2 != null && sVar2.f() >= sVar.f()) {
            return;
        }
        this.f26193a = sVar;
    }
}
