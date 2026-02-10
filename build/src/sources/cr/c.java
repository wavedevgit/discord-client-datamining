package cr;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements h, br.a {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f20159c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile h f20160a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f20161b = f20159c;

    private c(h hVar) {
        this.f20160a = hVar;
    }

    private synchronized Object a() {
        Object obj;
        obj = this.f20161b;
        if (obj == f20159c) {
            obj = this.f20160a.get();
            this.f20161b = d(this.f20161b, obj);
            this.f20160a = null;
        }
        return obj;
    }

    public static br.a b(h hVar) {
        if (hVar instanceof br.a) {
            return (br.a) hVar;
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
        if (obj != f20159c) {
            if (obj == obj2) {
                return obj2;
            }
            throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj + " & " + obj2 + ". This is likely due to a circular dependency.");
        }
        return obj2;
    }

    @Override // javax.inject.Provider
    public Object get() {
        Object obj = this.f20161b;
        if (obj == f20159c) {
            return a();
        }
        return obj;
    }
}
