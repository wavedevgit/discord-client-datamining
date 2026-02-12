package hf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: b  reason: collision with root package name */
    private static r f27312b;

    /* renamed from: c  reason: collision with root package name */
    private static final s f27313c = new s(0, false, false, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    private s f27314a;

    private r() {
    }

    public static synchronized r b() {
        r rVar;
        synchronized (r.class) {
            try {
                if (f27312b == null) {
                    f27312b = new r();
                }
                rVar = f27312b;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return rVar;
    }

    public s a() {
        return this.f27314a;
    }

    public final synchronized void c(s sVar) {
        if (sVar == null) {
            this.f27314a = f27313c;
            return;
        }
        s sVar2 = this.f27314a;
        if (sVar2 != null && sVar2.f() >= sVar.f()) {
            return;
        }
        this.f27314a = sVar;
    }
}
