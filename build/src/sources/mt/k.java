package mt;

import java.math.BigDecimal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum k implements kt.p {
    FRACTION;

    @Override // kt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(kt.o oVar, kt.o oVar2) {
        return ((BigDecimal) oVar.v(this)).compareTo((BigDecimal) oVar2.v(this));
    }

    @Override // kt.p
    public char d() {
        return (char) 0;
    }

    @Override // kt.p
    public boolean f() {
        return false;
    }

    @Override // kt.p
    /* renamed from: g */
    public BigDecimal e() {
        return BigDecimal.ONE;
    }

    @Override // kt.p
    public Class getType() {
        return BigDecimal.class;
    }

    @Override // kt.p
    /* renamed from: h */
    public BigDecimal A() {
        return BigDecimal.ZERO;
    }

    @Override // kt.p
    public boolean y() {
        return false;
    }
}
