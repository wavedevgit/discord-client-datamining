package androidx.datastore.preferences.protobuf;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class g0 implements e1 {

    /* renamed from: b  reason: collision with root package name */
    private static final n0 f3601b = new a();

    /* renamed from: a  reason: collision with root package name */
    private final n0 f3602a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a implements n0 {
        a() {
        }

        @Override // androidx.datastore.preferences.protobuf.n0
        public m0 a(Class cls) {
            throw new IllegalStateException("This should never be called.");
        }

        @Override // androidx.datastore.preferences.protobuf.n0
        public boolean b(Class cls) {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b implements n0 {

        /* renamed from: a  reason: collision with root package name */
        private n0[] f3603a;

        b(n0... n0VarArr) {
            this.f3603a = n0VarArr;
        }

        @Override // androidx.datastore.preferences.protobuf.n0
        public m0 a(Class cls) {
            n0[] n0VarArr;
            for (n0 n0Var : this.f3603a) {
                if (n0Var.b(cls)) {
                    return n0Var.a(cls);
                }
            }
            throw new UnsupportedOperationException("No factory is available for message type: " + cls.getName());
        }

        @Override // androidx.datastore.preferences.protobuf.n0
        public boolean b(Class cls) {
            for (n0 n0Var : this.f3603a) {
                if (n0Var.b(cls)) {
                    return true;
                }
            }
            return false;
        }
    }

    public g0() {
        this(b());
    }

    private static n0 b() {
        return new b(v.c(), c());
    }

    private static n0 c() {
        try {
            return (n0) Class.forName("androidx.datastore.preferences.protobuf.DescriptorMessageInfoFactory").getDeclaredMethod("getInstance", null).invoke(null, null);
        } catch (Exception unused) {
            return f3601b;
        }
    }

    private static boolean d(m0 m0Var) {
        if (m0Var.c() == y0.PROTO2) {
            return true;
        }
        return false;
    }

    private static d1 e(Class cls, m0 m0Var) {
        if (w.class.isAssignableFrom(cls)) {
            if (d(m0Var)) {
                return r0.M(cls, m0Var, v0.b(), e0.b(), f1.L(), r.b(), l0.b());
            }
            return r0.M(cls, m0Var, v0.b(), e0.b(), f1.L(), null, l0.b());
        } else if (d(m0Var)) {
            return r0.M(cls, m0Var, v0.a(), e0.a(), f1.G(), r.a(), l0.a());
        } else {
            return r0.M(cls, m0Var, v0.a(), e0.a(), f1.H(), null, l0.a());
        }
    }

    @Override // androidx.datastore.preferences.protobuf.e1
    public d1 a(Class cls) {
        f1.I(cls);
        m0 a10 = this.f3602a.a(cls);
        if (a10.a()) {
            if (w.class.isAssignableFrom(cls)) {
                return s0.l(f1.L(), r.b(), a10.b());
            }
            return s0.l(f1.G(), r.a(), a10.b());
        }
        return e(cls, a10);
    }

    private g0(n0 n0Var) {
        this.f3602a = (n0) y.b(n0Var, "messageInfoFactory");
    }
}
