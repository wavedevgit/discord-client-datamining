package lr;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements h, kr.a {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f35998c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile h f35999a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f36000b = f35998c;

    private c(h hVar) {
        this.f35999a = hVar;
    }

    private synchronized Object a() {
        Object obj;
        obj = this.f36000b;
        if (obj == f35998c) {
            obj = this.f35999a.get();
            this.f36000b = d(this.f36000b, obj);
            this.f35999a = null;
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
        if (obj != f35998c) {
            if (obj == obj2) {
                return obj2;
            }
            throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj + " & " + obj2 + ". This is likely due to a circular dependency.");
        }
        return obj2;
    }

    @Override // javax.inject.Provider
    public Object get() {
        Object obj = this.f36000b;
        if (obj == f35998c) {
            return a();
        }
        return obj;
    }
}
