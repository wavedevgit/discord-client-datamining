package ai;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements t {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f820c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile t f821a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f822b = f820c;

    private r(t tVar) {
        this.f821a = tVar;
    }

    public static t b(t tVar) {
        if (tVar instanceof r) {
            return tVar;
        }
        return new r(tVar);
    }

    public static r c(t tVar) {
        return new r(tVar);
    }

    private final synchronized Object d() {
        try {
            Object obj = this.f822b;
            Object obj2 = f820c;
            if (obj == obj2) {
                Object a10 = this.f821a.a();
                Object obj3 = this.f822b;
                if (obj3 != obj2 && obj3 != a10) {
                    throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj3 + " & " + a10 + ". This is likely due to a circular dependency.");
                }
                this.f822b = a10;
                this.f821a = null;
                return a10;
            }
            return obj;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // ai.w
    public final Object a() {
        Object obj = this.f822b;
        if (obj == f820c) {
            return d();
        }
        return obj;
    }
}
