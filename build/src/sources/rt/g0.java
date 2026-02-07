package rt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g0 implements v {

    /* renamed from: d  reason: collision with root package name */
    private final int f49554d;

    /* renamed from: e  reason: collision with root package name */
    private final p f49555e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f49556i;

    private g0(int i10, p pVar) {
        this(i10, pVar, null);
    }

    private static k0 a(k0 k0Var, p pVar, boolean z10) {
        Object N = k0Var.H().N(pVar);
        if (z10) {
            return k0Var.K(1L, N);
        }
        return k0Var.J(1L, N);
    }

    public static v c(p pVar) {
        return new g0(4, pVar);
    }

    public static v d(p pVar) {
        return new g0(3, pVar);
    }

    private q e(q qVar, p pVar) {
        q x10 = qVar.x();
        while (true) {
            pVar = x10.w().C(pVar).a(x10);
            if (pVar != null) {
                x10 = q(x10, pVar);
            } else {
                return x10;
            }
        }
    }

    public static v f(p pVar) {
        return new g0(6, pVar);
    }

    private q g(q qVar, p pVar) {
        q x10 = qVar.x();
        while (true) {
            pVar = x10.w().C(pVar).g(x10);
            if (pVar != null) {
                x10 = r(x10, pVar);
            } else {
                return x10;
            }
        }
    }

    public static v h(p pVar) {
        return new g0(7, pVar);
    }

    private q i(q qVar, p pVar) {
        return qVar.E(pVar, qVar.t(pVar));
    }

    public static v j(p pVar) {
        return new g0(2, pVar);
    }

    private q k(q qVar, p pVar) {
        return qVar.E(pVar, qVar.v(pVar));
    }

    public static v l(p pVar) {
        return new g0(1, pVar);
    }

    private q m(q qVar, boolean z10) {
        if (qVar instanceof k0) {
            return (q) qVar.w().p().cast(a((k0) k0.class.cast(qVar), this.f49555e, z10));
        }
        throw new r("Base units not supported by: " + qVar.w().p());
    }

    public static v n(Object obj, p pVar) {
        return new g0(0, pVar, obj);
    }

    public static v o(Object obj, p pVar) {
        return new g0(5, pVar, obj);
    }

    private q p(q qVar, p pVar, Object obj, boolean z10) {
        q x10 = qVar.x();
        return (q) x10.w().C(pVar).u(x10, pVar.getType().cast(obj), z10);
    }

    private q q(q qVar, p pVar) {
        z C = qVar.w().C(pVar);
        return (q) C.u(qVar, C.k(qVar), pVar.i());
    }

    private q r(q qVar, p pVar) {
        z C = qVar.w().C(pVar);
        return (q) C.u(qVar, C.o(qVar), pVar.i());
    }

    @Override // rt.v
    /* renamed from: b */
    public q apply(q qVar) {
        switch (this.f49554d) {
            case 0:
                return p(qVar, this.f49555e, this.f49556i, false);
            case 1:
                return k(qVar, this.f49555e);
            case 2:
                return i(qVar, this.f49555e);
            case 3:
                return g(qVar, this.f49555e);
            case 4:
                return e(qVar, this.f49555e);
            case 5:
                return p(qVar, this.f49555e, this.f49556i, true);
            case 6:
                return m(qVar, false);
            case 7:
                return m(qVar, true);
            default:
                throw new UnsupportedOperationException("Unknown mode: " + this.f49554d);
        }
    }

    private g0(int i10, p pVar, Object obj) {
        if (pVar != null) {
            this.f49554d = i10;
            this.f49555e = pVar;
            this.f49556i = obj;
            return;
        }
        throw new NullPointerException("Missing chronological element.");
    }
}
