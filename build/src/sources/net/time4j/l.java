package net.time4j;

import java.io.InvalidObjectException;
import java.math.BigDecimal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l extends jt.e implements d1 {
    private static final long serialVersionUID = -4837430960549551204L;

    /* renamed from: d  reason: collision with root package name */
    private final transient BigDecimal f40748d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(String str, BigDecimal bigDecimal) {
        super(str);
        this.f40748d = bigDecimal;
    }

    private Object readResolve() {
        Object D0 = g0.D0(name());
        if (D0 != null) {
            return D0;
        }
        throw new InvalidObjectException(name());
    }

    @Override // jt.p
    public boolean C() {
        return true;
    }

    @Override // jt.e
    protected boolean E() {
        return true;
    }

    @Override // jt.p
    /* renamed from: F */
    public BigDecimal e() {
        return this.f40748d;
    }

    @Override // jt.p
    /* renamed from: G */
    public BigDecimal A() {
        return BigDecimal.ZERO;
    }

    @Override // jt.p
    public Class getType() {
        return BigDecimal.class;
    }

    @Override // jt.p
    public boolean y() {
        return false;
    }
}
