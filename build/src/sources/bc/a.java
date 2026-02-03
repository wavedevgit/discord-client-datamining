package bc;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Provider {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f6321c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile Provider f6322a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f6323b = f6321c;

    private a(Provider provider) {
        this.f6322a = provider;
    }

    public static Provider a(Provider provider) {
        d.b(provider);
        if (provider instanceof a) {
            return provider;
        }
        return new a(provider);
    }

    public static Object b(Object obj, Object obj2) {
        if (obj != f6321c) {
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
        Object obj2 = this.f6323b;
        Object obj3 = f6321c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f6323b;
                    if (obj == obj3) {
                        obj = this.f6322a.get();
                        this.f6323b = b(this.f6323b, obj);
                        this.f6322a = null;
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
