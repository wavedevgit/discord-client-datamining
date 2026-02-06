package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends o {

    /* renamed from: i  reason: collision with root package name */
    private final Object f39435i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(rt.p pVar, int i10) {
        this(pVar, i10, null);
    }

    private static Object c(rt.p pVar, Object obj) {
        return u0.a(rt.g0.o(pVar.getType().cast(obj), pVar), obj);
    }

    private static Object d(rt.p pVar, Object obj) {
        return u0.a(rt.g0.n(pVar.getType().cast(obj), pVar), obj);
    }

    @Override // rt.v
    /* renamed from: b */
    public f0 apply(f0 f0Var) {
        return (f0) ((rt.v) this.f39435i).apply(f0Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(rt.p pVar, int i10, Object obj) {
        super(pVar, i10);
        switch (i10) {
            case -1:
                this.f39435i = d(pVar, obj);
                return;
            case 0:
                this.f39435i = rt.g0.l(pVar);
                return;
            case 1:
                this.f39435i = rt.g0.j(pVar);
                return;
            case 2:
                this.f39435i = rt.g0.f(pVar);
                return;
            case 3:
                this.f39435i = rt.g0.h(pVar);
                return;
            case 4:
                this.f39435i = rt.g0.d(pVar);
                return;
            case 5:
                this.f39435i = rt.g0.c(pVar);
                return;
            case 6:
                this.f39435i = c(pVar, obj);
                return;
            default:
                throw new AssertionError("Unknown: " + a());
        }
    }
}
