package gf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: b  reason: collision with root package name */
    private static r f25182b;

    /* renamed from: c  reason: collision with root package name */
    private static final s f25183c = new s(0, false, false, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    private s f25184a;

    private r() {
    }

    public static synchronized r b() {
        r rVar;
        synchronized (r.class) {
            try {
                if (f25182b == null) {
                    f25182b = new r();
                }
                rVar = f25182b;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return rVar;
    }

    public s a() {
        return this.f25184a;
    }

    public final synchronized void c(s sVar) {
        if (sVar == null) {
            this.f25184a = f25183c;
            return;
        }
        s sVar2 = this.f25184a;
        if (sVar2 != null && sVar2.f() >= sVar.f()) {
            return;
        }
        this.f25184a = sVar;
    }
}
