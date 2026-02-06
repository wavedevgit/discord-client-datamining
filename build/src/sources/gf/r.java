package gf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: b  reason: collision with root package name */
    private static r f25134b;

    /* renamed from: c  reason: collision with root package name */
    private static final s f25135c = new s(0, false, false, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    private s f25136a;

    private r() {
    }

    public static synchronized r b() {
        r rVar;
        synchronized (r.class) {
            try {
                if (f25134b == null) {
                    f25134b = new r();
                }
                rVar = f25134b;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return rVar;
    }

    public s a() {
        return this.f25136a;
    }

    public final synchronized void c(s sVar) {
        if (sVar == null) {
            this.f25136a = f25135c;
            return;
        }
        s sVar2 = this.f25136a;
        if (sVar2 != null && sVar2.f() >= sVar.f()) {
            return;
        }
        this.f25136a = sVar;
    }
}
