package fc;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements bc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f23041a;

    public g(Provider provider) {
        this.f23041a = provider;
    }

    public static gc.f a(jc.a aVar) {
        return (gc.f) bc.d.c(f.a(aVar), "Cannot return null from a non-@Nullable @Provides method");
    }

    public static g b(Provider provider) {
        return new g(provider);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public gc.f get() {
        return a((jc.a) this.f23041a.get());
    }
}
