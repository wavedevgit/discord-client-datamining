package net.time4j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class s0 extends o {

    /* renamed from: i  reason: collision with root package name */
    private final Object f40177i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(pt.p pVar, int i10) {
        this(pVar, i10, null);
    }

    private static pt.v c(pt.p pVar, boolean z10) {
        String name = pVar.name();
        if (!name.equals("MILLI_OF_SECOND") && !name.equals("MILLI_OF_DAY")) {
            if (!name.equals("MICRO_OF_SECOND") && !name.equals("MICRO_OF_DAY")) {
                if (!name.equals("NANO_OF_SECOND") && !name.equals("NANO_OF_DAY")) {
                    if (z10) {
                        return pt.g0.c(pVar);
                    }
                    return pt.g0.d(pVar);
                }
                return new q('9', z10);
            }
            return new q('6', z10);
        }
        return new q('3', z10);
    }

    private static Object d(pt.p pVar, Object obj) {
        return u0.a(pt.g0.o(pVar.getType().cast(obj), pVar), obj);
    }

    private static Object e(pt.p pVar, Object obj) {
        return u0.a(pt.g0.n(pVar.getType().cast(obj), pVar), obj);
    }

    @Override // pt.v
    /* renamed from: b */
    public g0 apply(g0 g0Var) {
        return (g0) ((pt.v) this.f40177i).apply(g0Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public s0(pt.p pVar, int i10, Object obj) {
        super(pVar, i10);
        switch (i10) {
            case -1:
                this.f40177i = e(pVar, obj);
                return;
            case 0:
                this.f40177i = pt.g0.l(pVar);
                return;
            case 1:
                this.f40177i = pt.g0.j(pVar);
                return;
            case 2:
                this.f40177i = pt.g0.f(pVar);
                return;
            case 3:
                this.f40177i = pt.g0.h(pVar);
                return;
            case 4:
                this.f40177i = c(pVar, false);
                return;
            case 5:
                this.f40177i = c(pVar, true);
                return;
            case 6:
                this.f40177i = d(pVar, obj);
                return;
            default:
                throw new AssertionError("Unknown: " + a());
        }
    }
}
