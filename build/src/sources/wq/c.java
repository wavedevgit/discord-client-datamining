package wq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements h, vq.a {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f52646c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile h f52647a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f52648b = f52646c;

    private c(h hVar) {
        this.f52647a = hVar;
    }

    private synchronized Object a() {
        Object obj;
        obj = this.f52648b;
        if (obj == f52646c) {
            obj = this.f52647a.get();
            this.f52648b = d(this.f52648b, obj);
            this.f52647a = null;
        }
        return obj;
    }

    public static vq.a b(h hVar) {
        if (hVar instanceof vq.a) {
            return (vq.a) hVar;
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
        if (obj != f52646c) {
            if (obj == obj2) {
                return obj2;
            }
            throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj + " & " + obj2 + ". This is likely due to a circular dependency.");
        }
        return obj2;
    }

    @Override // javax.inject.Provider
    public Object get() {
        Object obj = this.f52648b;
        if (obj == f52646c) {
            return a();
        }
        return obj;
    }
}
