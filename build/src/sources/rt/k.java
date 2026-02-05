package rt;

import java.math.BigDecimal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum k implements pt.p {
    FRACTION;

    @Override // pt.p
    public boolean B() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(pt.o oVar, pt.o oVar2) {
        return ((BigDecimal) oVar.v(this)).compareTo((BigDecimal) oVar2.v(this));
    }

    @Override // pt.p
    public char d() {
        return (char) 0;
    }

    @Override // pt.p
    public Class getType() {
        return BigDecimal.class;
    }

    @Override // pt.p
    /* renamed from: h */
    public BigDecimal e() {
        return BigDecimal.ONE;
    }

    @Override // pt.p
    /* renamed from: k */
    public BigDecimal A() {
        return BigDecimal.ZERO;
    }

    @Override // pt.p
    public boolean l() {
        return false;
    }

    @Override // pt.p
    public boolean z() {
        return false;
    }
}
