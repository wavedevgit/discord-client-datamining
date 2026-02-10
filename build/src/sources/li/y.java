package li;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y implements d0 {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f35974c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile d0 f35975a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f35976b = f35974c;

    private y(d0 d0Var) {
        this.f35975a = d0Var;
    }

    public static d0 b(d0 d0Var) {
        if (d0Var instanceof y) {
            return d0Var;
        }
        return new y(d0Var);
    }

    @Override // li.e0
    public final Object a() {
        Object obj;
        Object obj2 = this.f35976b;
        Object obj3 = f35974c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f35976b;
                    if (obj == obj3) {
                        obj = this.f35975a.a();
                        Object obj4 = this.f35976b;
                        if (obj4 != obj3 && obj4 != obj) {
                            throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj4 + " & " + obj + ". This is likely due to a circular dependency.");
                        }
                        this.f35976b = obj;
                        this.f35975a = null;
                    }
                } catch (Throwable th2) {
                    throw th2;
                }
            }
            return obj;
        }
        return obj2;
    }
}
