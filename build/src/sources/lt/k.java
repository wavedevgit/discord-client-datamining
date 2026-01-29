package lt;

import java.math.BigDecimal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum k implements jt.p {
    FRACTION;

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(jt.o oVar, jt.o oVar2) {
        return ((BigDecimal) oVar.p(this)).compareTo((BigDecimal) oVar2.p(this));
    }

    @Override // jt.p
    public char d() {
        return (char) 0;
    }

    @Override // jt.p
    public Class getType() {
        return BigDecimal.class;
    }

    @Override // jt.p
    /* renamed from: h */
    public BigDecimal e() {
        return BigDecimal.ONE;
    }

    @Override // jt.p
    public boolean i() {
        return false;
    }

    @Override // jt.p
    /* renamed from: j */
    public BigDecimal A() {
        return BigDecimal.ZERO;
    }

    @Override // jt.p
    public boolean y() {
        return false;
    }
}
