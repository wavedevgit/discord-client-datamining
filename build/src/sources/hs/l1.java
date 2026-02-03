package hs;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l1 {

    /* renamed from: a  reason: collision with root package name */
    public static final l1 f27924a = new l1();

    /* renamed from: b  reason: collision with root package name */
    private static final ThreadLocal f27925b = ms.m0.a(new ms.e0("ThreadLocalEventLoop"));

    private l1() {
    }

    public final p0 a() {
        return (p0) f27925b.get();
    }

    public final p0 b() {
        ThreadLocal threadLocal = f27925b;
        p0 p0Var = (p0) threadLocal.get();
        if (p0Var == null) {
            p0 a10 = q0.a();
            threadLocal.set(a10);
            return a10;
        }
        return p0Var;
    }

    public final void c() {
        f27925b.set(null);
    }

    public final void d(p0 p0Var) {
        f27925b.set(p0Var);
    }
}
