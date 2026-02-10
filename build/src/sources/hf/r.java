package hf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: b  reason: collision with root package name */
    private static r f27311b;

    /* renamed from: c  reason: collision with root package name */
    private static final s f27312c = new s(0, false, false, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    private s f27313a;

    private r() {
    }

    public static synchronized r b() {
        r rVar;
        synchronized (r.class) {
            try {
                if (f27311b == null) {
                    f27311b = new r();
                }
                rVar = f27311b;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return rVar;
    }

    public s a() {
        return this.f27313a;
    }

    public final synchronized void c(s sVar) {
        if (sVar == null) {
            this.f27313a = f27312c;
            return;
        }
        s sVar2 = this.f27313a;
        if (sVar2 != null && sVar2.f() >= sVar.f()) {
            return;
        }
        this.f27313a = sVar;
    }
}
