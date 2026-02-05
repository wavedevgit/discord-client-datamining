package zq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements h, yq.a {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f56175c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile h f56176a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f56177b = f56175c;

    private c(h hVar) {
        this.f56176a = hVar;
    }

    private synchronized Object a() {
        Object obj;
        obj = this.f56177b;
        if (obj == f56175c) {
            obj = this.f56176a.get();
            this.f56177b = d(this.f56177b, obj);
            this.f56176a = null;
        }
        return obj;
    }

    public static yq.a b(h hVar) {
        if (hVar instanceof yq.a) {
            return (yq.a) hVar;
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
        if (obj != f56175c) {
            if (obj == obj2) {
                return obj2;
            }
            throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj + " & " + obj2 + ". This is likely due to a circular dependency.");
        }
        return obj2;
    }

    @Override // javax.inject.Provider
    public Object get() {
        Object obj = this.f56177b;
        if (obj == f56175c) {
            return a();
        }
        return obj;
    }
}
