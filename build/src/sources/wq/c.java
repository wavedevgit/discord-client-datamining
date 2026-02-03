package wq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements h, vq.a {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f52649c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile h f52650a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f52651b = f52649c;

    private c(h hVar) {
        this.f52650a = hVar;
    }

    private synchronized Object a() {
        Object obj;
        obj = this.f52651b;
        if (obj == f52649c) {
            obj = this.f52650a.get();
            this.f52651b = d(this.f52651b, obj);
            this.f52650a = null;
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
        if (obj != f52649c) {
            if (obj == obj2) {
                return obj2;
            }
            throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj + " & " + obj2 + ". This is likely due to a circular dependency.");
        }
        return obj2;
    }

    @Override // javax.inject.Provider
    public Object get() {
        Object obj = this.f52651b;
        if (obj == f52649c) {
            return a();
        }
        return obj;
    }
}
