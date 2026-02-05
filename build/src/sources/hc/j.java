package hc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j implements bc.b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        private static final j f25758a = new j();
    }

    public static j a() {
        return a.f25758a;
    }

    public static e c() {
        return (e) bc.d.c(f.d(), "Cannot return null from a non-@Nullable @Provides method");
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public e get() {
        return c();
    }
}
