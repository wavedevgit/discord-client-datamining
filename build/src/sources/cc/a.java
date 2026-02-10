package cc;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Provider {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f7348c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile Provider f7349a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f7350b = f7348c;

    private a(Provider provider) {
        this.f7349a = provider;
    }

    public static Provider a(Provider provider) {
        d.b(provider);
        if (provider instanceof a) {
            return provider;
        }
        return new a(provider);
    }

    public static Object b(Object obj, Object obj2) {
        if (obj != f7348c) {
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
        Object obj2 = this.f7350b;
        Object obj3 = f7348c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f7350b;
                    if (obj == obj3) {
                        obj = this.f7349a.get();
                        this.f7350b = b(this.f7350b, obj);
                        this.f7349a = null;
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
