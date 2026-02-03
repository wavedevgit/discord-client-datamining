package th;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class r implements t {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f50070c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile t f50071a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f50072b = f50070c;

    private r(t tVar) {
        this.f50071a = tVar;
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
            Object obj = this.f50072b;
            Object obj2 = f50070c;
            if (obj == obj2) {
                Object a10 = this.f50071a.a();
                Object obj3 = this.f50072b;
                if (obj3 != obj2 && obj3 != a10) {
                    throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj3 + " & " + a10 + ". This is likely due to a circular dependency.");
                }
                this.f50072b = a10;
                this.f50071a = null;
                return a10;
            }
            return obj;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // th.w
    public final Object a() {
        Object obj = this.f50072b;
        if (obj == f50070c) {
            return d();
        }
        return obj;
    }
}
