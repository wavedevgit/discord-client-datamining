package kc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements cc.b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private static final c f32252a = new c();
    }

    public static c a() {
        return a.f32252a;
    }

    public static kc.a b() {
        return (kc.a) cc.d.c(b.a(), "Cannot return null from a non-@Nullable @Provides method");
    }

    @Override // javax.inject.Provider
    /* renamed from: c */
    public kc.a get() {
        return b();
    }
}
