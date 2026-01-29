package tq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements h, sq.a {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f49813c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile h f49814a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f49815b = f49813c;

    private c(h hVar) {
        this.f49814a = hVar;
    }

    private synchronized Object a() {
        Object obj;
        obj = this.f49815b;
        if (obj == f49813c) {
            obj = this.f49814a.get();
            this.f49815b = d(this.f49815b, obj);
            this.f49814a = null;
        }
        return obj;
    }

    public static sq.a b(h hVar) {
        if (hVar instanceof sq.a) {
            return (sq.a) hVar;
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
        if (obj != f49813c) {
            if (obj == obj2) {
                return obj2;
            }
            throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj + " & " + obj2 + ". This is likely due to a circular dependency.");
        }
        return obj2;
    }

    @Override // javax.inject.Provider
    public Object get() {
        Object obj = this.f49815b;
        if (obj == f49813c) {
            return a();
        }
        return obj;
    }
}
