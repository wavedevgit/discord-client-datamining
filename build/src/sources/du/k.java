package du;

import java.math.BigDecimal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum k implements bu.p {
    FRACTION;

    @Override // bu.p
    public boolean A() {
        return false;
    }

    @Override // bu.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(bu.o oVar, bu.o oVar2) {
        return ((BigDecimal) oVar.k(this)).compareTo((BigDecimal) oVar2.k(this));
    }

    @Override // bu.p
    public char d() {
        return (char) 0;
    }

    @Override // bu.p
    public Class getType() {
        return BigDecimal.class;
    }

    @Override // bu.p
    /* renamed from: h */
    public BigDecimal f() {
        return BigDecimal.ONE;
    }

    @Override // bu.p
    public boolean k() {
        return false;
    }

    @Override // bu.p
    /* renamed from: m */
    public BigDecimal B() {
        return BigDecimal.ZERO;
    }
}
