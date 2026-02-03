package uq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements h, tq.a {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f50587c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile h f50588a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f50589b = f50587c;

    private c(h hVar) {
        this.f50588a = hVar;
    }

    private synchronized Object a() {
        Object obj;
        obj = this.f50589b;
        if (obj == f50587c) {
            obj = this.f50588a.get();
            this.f50589b = d(this.f50589b, obj);
            this.f50588a = null;
        }
        return obj;
    }

    public static tq.a b(h hVar) {
        if (hVar instanceof tq.a) {
            return (tq.a) hVar;
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
        if (obj != f50587c) {
            if (obj == obj2) {
                return obj2;
            }
            throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj + " & " + obj2 + ". This is likely due to a circular dependency.");
        }
        return obj2;
    }

    @Override // javax.inject.Provider
    public Object get() {
        Object obj = this.f50589b;
        if (obj == f50587c) {
            return a();
        }
        return obj;
    }
}
