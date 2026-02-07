package gk;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a0 implements y0 {

    /* renamed from: b  reason: collision with root package name */
    private static final h0 f25229b = new a();

    /* renamed from: a  reason: collision with root package name */
    private final h0 f25230a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements h0 {
        a() {
        }

        @Override // gk.h0
        public g0 a(Class cls) {
            throw new IllegalStateException("This should never be called.");
        }

        @Override // gk.h0
        public boolean b(Class cls) {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class b implements h0 {

        /* renamed from: a  reason: collision with root package name */
        private h0[] f25231a;

        b(h0... h0VarArr) {
            this.f25231a = h0VarArr;
        }

        @Override // gk.h0
        public g0 a(Class cls) {
            h0[] h0VarArr;
            for (h0 h0Var : this.f25231a) {
                if (h0Var.b(cls)) {
                    return h0Var.a(cls);
                }
            }
            throw new UnsupportedOperationException("No factory is available for message type: " + cls.getName());
        }

        @Override // gk.h0
        public boolean b(Class cls) {
            for (h0 h0Var : this.f25231a) {
                if (h0Var.b(cls)) {
                    return true;
                }
            }
            return false;
        }
    }

    public a0() {
        this(b());
    }

    private static h0 b() {
        return new b(r.c(), c());
    }

    private static h0 c() {
        try {
            return (h0) Class.forName("com.google.protobuf.DescriptorMessageInfoFactory").getDeclaredMethod("getInstance", null).invoke(null, null);
        } catch (Exception unused) {
            return f25229b;
        }
    }

    private static boolean d(g0 g0Var) {
        if (g0Var.c() == s0.PROTO2) {
            return true;
        }
        return false;
    }

    private static x0 e(Class cls, g0 g0Var) {
        if (s.class.isAssignableFrom(cls)) {
            if (d(g0Var)) {
                return l0.F(cls, g0Var, p0.b(), y.b(), z0.m(), o.b(), f0.b());
            }
            return l0.F(cls, g0Var, p0.b(), y.b(), z0.m(), null, f0.b());
        } else if (d(g0Var)) {
            return l0.F(cls, g0Var, p0.a(), y.a(), z0.h(), o.a(), f0.a());
        } else {
            return l0.F(cls, g0Var, p0.a(), y.a(), z0.i(), null, f0.a());
        }
    }

    @Override // gk.y0
    public x0 a(Class cls) {
        z0.j(cls);
        g0 a10 = this.f25230a.a(cls);
        if (a10.a()) {
            if (s.class.isAssignableFrom(cls)) {
                return m0.i(z0.m(), o.b(), a10.b());
            }
            return m0.i(z0.h(), o.a(), a10.b());
        }
        return e(cls, a10);
    }

    private a0(h0 h0Var) {
        this.f25230a = (h0) u.b(h0Var, "messageInfoFactory");
    }
}
