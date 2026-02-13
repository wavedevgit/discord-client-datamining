package hf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: b  reason: collision with root package name */
    private static r f27880b;

    /* renamed from: c  reason: collision with root package name */
    private static final s f27881c = new s(0, false, false, 0, 0);

    /* renamed from: a  reason: collision with root package name */
    private s f27882a;

    private r() {
    }

    public static synchronized r b() {
        r rVar;
        synchronized (r.class) {
            try {
                if (f27880b == null) {
                    f27880b = new r();
                }
                rVar = f27880b;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return rVar;
    }

    public s a() {
        return this.f27882a;
    }

    public final synchronized void c(s sVar) {
        if (sVar == null) {
            this.f27882a = f27881c;
            return;
        }
        s sVar2 = this.f27882a;
        if (sVar2 != null && sVar2.f() >= sVar.f()) {
            return;
        }
        this.f27882a = sVar;
    }
}
