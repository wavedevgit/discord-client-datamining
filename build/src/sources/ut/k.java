package ut;

import java.math.BigDecimal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
enum k implements st.p {
    FRACTION;

    @Override // st.p
    public boolean A() {
        return false;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(st.o oVar, st.o oVar2) {
        return ((BigDecimal) oVar.t(this)).compareTo((BigDecimal) oVar2.t(this));
    }

    @Override // st.p
    public char d() {
        return (char) 0;
    }

    @Override // st.p
    public boolean f() {
        return false;
    }

    @Override // st.p
    /* renamed from: g */
    public BigDecimal e() {
        return BigDecimal.ONE;
    }

    @Override // st.p
    public Class getType() {
        return BigDecimal.class;
    }

    @Override // st.p
    /* renamed from: h */
    public BigDecimal B() {
        return BigDecimal.ZERO;
    }
}
