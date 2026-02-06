package rt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class m extends k0 implements g {
    private k O() {
        return H().o();
    }

    private Object S(k kVar, String str) {
        long i10 = i();
        if (kVar.d() <= i10 && kVar.a() >= i10) {
            return kVar.b(i10);
        }
        throw new ArithmeticException("Cannot transform <" + i10 + "> to: " + str);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public int M(g gVar) {
        int i10 = (i() > gVar.i() ? 1 : (i() == gVar.i() ? 0 : -1));
        if (i10 < 0) {
            return -1;
        }
        if (i10 == 0) {
            return 0;
        }
        return 1;
    }

    @Override // java.lang.Comparable
    /* renamed from: N */
    public int compareTo(m mVar) {
        if (H().p() == mVar.H().p()) {
            return M(mVar);
        }
        throw new ClassCastException("Cannot compare different types of dates, use instance of EpochDays as comparator instead.");
    }

    public boolean P(g gVar) {
        if (M(gVar) > 0) {
            return true;
        }
        return false;
    }

    public boolean Q(g gVar) {
        if (M(gVar) < 0) {
            return true;
        }
        return false;
    }

    public m R(h hVar) {
        long f10 = pt.c.f(i(), hVar.d());
        try {
            return (m) O().b(f10);
        } catch (IllegalArgumentException e10) {
            ArithmeticException arithmeticException = new ArithmeticException("Out of range: " + f10);
            arithmeticException.initCause(e10);
            throw arithmeticException;
        }
    }

    public m T(Class cls) {
        String name = cls.getName();
        x G = x.G(cls);
        if (G != null) {
            return (m) S(G.o(), name);
        }
        throw new IllegalArgumentException("Cannot find any chronology for given target type: " + name);
    }

    public abstract boolean equals(Object obj);

    public abstract int hashCode();

    public long i() {
        return O().c(x());
    }
}
