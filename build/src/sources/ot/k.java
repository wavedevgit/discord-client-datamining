package ot;

import java.math.BigDecimal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum k implements mt.p {
    FRACTION;

    @Override // mt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(mt.o oVar, mt.o oVar2) {
        return ((BigDecimal) oVar.o(this)).compareTo((BigDecimal) oVar2.o(this));
    }

    @Override // mt.p
    public char d() {
        return (char) 0;
    }

    @Override // mt.p
    public Class getType() {
        return BigDecimal.class;
    }

    @Override // mt.p
    /* renamed from: h */
    public BigDecimal f() {
        return BigDecimal.ONE;
    }

    @Override // mt.p
    public boolean k() {
        return false;
    }

    @Override // mt.p
    /* renamed from: l */
    public BigDecimal A() {
        return BigDecimal.ZERO;
    }

    @Override // mt.p
    public boolean y() {
        return false;
    }
}
