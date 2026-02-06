package bc;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements Provider {

    /* renamed from: c  reason: collision with root package name */
    private static final Object f6507c = new Object();

    /* renamed from: a  reason: collision with root package name */
    private volatile Provider f6508a;

    /* renamed from: b  reason: collision with root package name */
    private volatile Object f6509b = f6507c;

    private a(Provider provider) {
        this.f6508a = provider;
    }

    public static Provider a(Provider provider) {
        d.b(provider);
        if (provider instanceof a) {
            return provider;
        }
        return new a(provider);
    }

    public static Object b(Object obj, Object obj2) {
        if (obj != f6507c) {
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
        Object obj2 = this.f6509b;
        Object obj3 = f6507c;
        if (obj2 == obj3) {
            synchronized (this) {
                try {
                    obj = this.f6509b;
                    if (obj == obj3) {
                        obj = this.f6508a.get();
                        this.f6509b = b(this.f6509b, obj);
                        this.f6508a = null;
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
