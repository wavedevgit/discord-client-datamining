package gc;

import javax.inject.Provider;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g implements cc.b {

    /* renamed from: a  reason: collision with root package name */
    private final Provider f25427a;

    public g(Provider provider) {
        this.f25427a = provider;
    }

    public static hc.f a(kc.a aVar) {
        return (hc.f) cc.d.c(f.a(aVar), "Cannot return null from a non-@Nullable @Provides method");
    }

    public static g b(Provider provider) {
        return new g(provider);
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public hc.f get() {
        return a((kc.a) this.f25427a.get());
    }
}
