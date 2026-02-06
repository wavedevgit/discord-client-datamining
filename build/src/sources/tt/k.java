package tt;

import java.math.BigDecimal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum k implements rt.p {
    FRACTION;

    @Override // rt.p
    public boolean A() {
        return false;
    }

    @Override // rt.p
    public boolean D() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(rt.o oVar, rt.o oVar2) {
        return ((BigDecimal) oVar.s(this)).compareTo((BigDecimal) oVar2.s(this));
    }

    @Override // rt.p
    public char d() {
        return (char) 0;
    }

    @Override // rt.p
    /* renamed from: g */
    public BigDecimal e() {
        return BigDecimal.ONE;
    }

    @Override // rt.p
    public Class getType() {
        return BigDecimal.class;
    }

    @Override // rt.p
    public boolean i() {
        return false;
    }

    @Override // rt.p
    /* renamed from: k */
    public BigDecimal B() {
        return BigDecimal.ZERO;
    }
}
