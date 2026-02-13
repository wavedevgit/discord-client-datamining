package lr;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements h, kr.a {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f36566c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile h f36567a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f36568b = f36566c;

    private c(h hVar) {
        this.f36567a = hVar;
    }

    private synchronized Object a() {
        Object obj;
        obj = this.f36568b;
        if (obj == f36566c) {
            obj = this.f36567a.get();
            this.f36568b = d(this.f36568b, obj);
            this.f36567a = null;
        }
        return obj;
    }

    public static kr.a b(h hVar) {
        if (hVar instanceof kr.a) {
            return (kr.a) hVar;
        }
        return new c((h) g.b(hVar));
    }

    public static h c(h hVar) {
        g.b(hVar);
        if (hVar instanceof c) {
            return hVar;
        }
        return new c(hVar);
    }

    private static Object d(Object obj, Object obj2) {
        if (obj != f36566c) {
            if (obj == obj2) {
                return obj2;
            }
            throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj + " & " + obj2 + ". This is likely due to a circular dependency.");
        }
        return obj2;
    }

    @Override // javax.inject.Provider
    public Object get() {
        Object obj = this.f36568b;
        if (obj == f36566c) {
            return a();
        }
        return obj;
    }
}
