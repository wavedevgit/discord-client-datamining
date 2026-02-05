package gf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: b  reason: collision with root package name */
    private static r f24881b;

    /* renamed from: c  reason: collision with root package name */
    private static final s f24882c = new s(0, false, false, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    private s f24883a;

    private r() {
    }

    public static synchronized r b() {
        r rVar;
        synchronized (r.class) {
            try {
                if (f24881b == null) {
                    f24881b = new r();
                }
                rVar = f24881b;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return rVar;
    }

    public s a() {
        return this.f24883a;
    }

    public final synchronized void c(s sVar) {
        if (sVar == null) {
            this.f24883a = f24882c;
            return;
        }
        s sVar2 = this.f24883a;
        if (sVar2 != null && sVar2.f() >= sVar.f()) {
            return;
        }
        this.f24883a = sVar;
    }
}
