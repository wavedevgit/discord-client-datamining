package net.time4j;

import java.io.InvalidObjectException;
import java.math.BigDecimal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l extends mt.e implements d1 {
    private static final long serialVersionUID = -4837430960549551204L;

    /* renamed from: d  reason: collision with root package name */
    private final transient BigDecimal f40666d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(String str, BigDecimal bigDecimal) {
        super(str);
        this.f40666d = bigDecimal;
    }

    private Object readResolve() {
        Object D0 = g0.D0(name());
        if (D0 != null) {
            return D0;
        }
        throw new InvalidObjectException(name());
    }

    @Override // mt.p
    public boolean C() {
        return true;
    }

    @Override // mt.e
    protected boolean E() {
        return true;
    }

    @Override // mt.p
    /* renamed from: F */
    public BigDecimal f() {
        return this.f40666d;
    }

    @Override // mt.p
    /* renamed from: G */
    public BigDecimal A() {
        return BigDecimal.ZERO;
    }

    @Override // mt.p
    public Class getType() {
        return BigDecimal.class;
    }

    @Override // mt.p
    public boolean y() {
        return false;
    }
}
