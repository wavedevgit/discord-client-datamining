package os;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f0 {

    /* renamed from: a  reason: collision with root package name */
    private static final boolean f43550a = ts.f0.f("kotlinx.coroutines.main.delay", false);

    /* renamed from: b  reason: collision with root package name */
    private static final kotlinx.coroutines.k f43551b = b();

    public static final kotlinx.coroutines.k a() {
        return f43551b;
    }

    private static final kotlinx.coroutines.k b() {
        if (!f43550a) {
            return kotlinx.coroutines.j.f35114t;
        }
        c1 c10 = m0.c();
        if (!ts.u.c(c10) && (c10 instanceof kotlinx.coroutines.k)) {
            return (kotlinx.coroutines.k) c10;
        }
        return kotlinx.coroutines.j.f35114t;
    }
}
