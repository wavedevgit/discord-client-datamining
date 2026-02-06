package br;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c implements h, ar.a {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f7004c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile h f7005a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f7006b = f7004c;

    private c(h hVar) {
        this.f7005a = hVar;
    }

    private synchronized Object a() {
        Object obj;
        obj = this.f7006b;
        if (obj == f7004c) {
            obj = this.f7005a.get();
            this.f7006b = d(this.f7006b, obj);
            this.f7005a = null;
        }
        return obj;
    }

    public static ar.a b(h hVar) {
        if (hVar instanceof ar.a) {
            return (ar.a) hVar;
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
        if (obj != f7004c) {
            if (obj == obj2) {
                return obj2;
            }
            throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj + " & " + obj2 + ". This is likely due to a circular dependency.");
        }
        return obj2;
    }

    @Override // javax.inject.Provider
    public Object get() {
        Object obj = this.f7006b;
        if (obj == f7004c) {
            return a();
        }
        return obj;
    }
}
