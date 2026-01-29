package bc;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Provider {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f7270c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile Provider f7271a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f7272b = f7270c;

    private a(Provider provider) {
        this.f7271a = provider;
    }

    public static Provider a(Provider provider) {
        d.b(provider);
        if (provider instanceof a) {
            return provider;
        }
        return new a(provider);
    }

    public static Object b(Object obj, Object obj2) {
        if (obj != f7270c) {
            if (obj == obj2) {
                return obj2;
            }
            throw new IllegalStateException("Scoped provider was invoked recursively returning different results: " + obj + " & " + obj2 + ". This is likely due to a circular dependency.");
        }
        return obj2;
    }

    @Override // javax.inject.Provider
    public Object get() {
        Object obj;
        Object obj2 = this.f7272b;
        Object obj3 = f7270c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f7272b;
                    if (obj == obj3) {
                        obj = this.f7271a.get();
                        this.f7272b = b(this.f7272b, obj);
                        this.f7271a = null;
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
