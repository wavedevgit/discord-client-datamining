package gs;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f0 {

    /* renamed from: a  reason: collision with root package name */
    private static final boolean f27171a = ls.f0.f("kotlinx.coroutines.main.delay", false);

    /* renamed from: b  reason: collision with root package name */
    private static final kotlinx.coroutines.k f27172b = b();

    public static final kotlinx.coroutines.k a() {
        return f27172b;
    }

    private static final kotlinx.coroutines.k b() {
        if (!f27171a) {
            return kotlinx.coroutines.j.f36356t;
        }
        c1 c10 = m0.c();
        if (!ls.u.c(c10) && (c10 instanceof kotlinx.coroutines.k)) {
            return (kotlinx.coroutines.k) c10;
        }
        return kotlinx.coroutines.j.f36356t;
    }
}
