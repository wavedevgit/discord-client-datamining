package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends o {

    /* renamed from: i  reason: collision with root package name */
    private final Object f40620i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(mt.p pVar, int i10) {
        this(pVar, i10, null);
    }

    private static Object c(mt.p pVar, Object obj) {
        return u0.a(mt.g0.o(pVar.getType().cast(obj), pVar), obj);
    }

    private static Object d(mt.p pVar, Object obj) {
        return u0.a(mt.g0.n(pVar.getType().cast(obj), pVar), obj);
    }

    @Override // mt.v
    /* renamed from: b */
    public f0 apply(f0 f0Var) {
        return (f0) ((mt.v) this.f40620i).apply(f0Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public i(mt.p pVar, int i10, Object obj) {
        super(pVar, i10);
        switch (i10) {
            case -1:
                this.f40620i = d(pVar, obj);
                return;
            case 0:
                this.f40620i = mt.g0.l(pVar);
                return;
            case 1:
                this.f40620i = mt.g0.j(pVar);
                return;
            case 2:
                this.f40620i = mt.g0.f(pVar);
                return;
            case 3:
                this.f40620i = mt.g0.h(pVar);
                return;
            case 4:
                this.f40620i = mt.g0.d(pVar);
                return;
            case 5:
                this.f40620i = mt.g0.c(pVar);
                return;
            case 6:
                this.f40620i = c(pVar, obj);
                return;
            default:
                throw new AssertionError("Unknown: " + a());
        }
    }
}
