package net.time4j;

import java.io.InvalidObjectException;
import java.math.BigDecimal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l extends st.e implements d1 {
    private static final long serialVersionUID = -4837430960549551204L;

    /* renamed from: d  reason: collision with root package name */
    private final transient BigDecimal f38621d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(String str, BigDecimal bigDecimal) {
        super(str);
        this.f38621d = bigDecimal;
    }

    private Object readResolve() {
        Object D0 = g0.D0(name());
        if (D0 != null) {
            return D0;
        }
        throw new InvalidObjectException(name());
    }

    @Override // st.p
    public boolean A() {
        return false;
    }

    @Override // st.p
    public boolean D() {
        return true;
    }

    @Override // st.e
    protected boolean E() {
        return true;
    }

    @Override // st.p
    /* renamed from: F */
    public BigDecimal e() {
        return this.f38621d;
    }

    @Override // st.p
    /* renamed from: G */
    public BigDecimal B() {
        return BigDecimal.ZERO;
    }

    @Override // st.p
    public Class getType() {
        return BigDecimal.class;
    }
}
