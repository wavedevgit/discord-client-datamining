package lr;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements h, kr.a {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f35997c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile h f35998a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f35999b = f35997c;

    private c(h hVar) {
        this.f35998a = hVar;
    }

    private synchronized Object a() {
        Object obj;
        obj = this.f35999b;
        if (obj == f35997c) {
            obj = this.f35998a.get();
            this.f35999b = d(this.f35999b, obj);
            this.f35998a = null;
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
        if (obj != f35997c) {
            if (obj == obj2) {
                return obj2;
            }
            throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj + " & " + obj2 + ". This is likely due to a circular dependency.");
        }
        return obj2;
    }

    @Override // javax.inject.Provider
    public Object get() {
        Object obj = this.f35999b;
        if (obj == f35997c) {
            return a();
        }
        return obj;
    }
}
