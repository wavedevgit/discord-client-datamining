package net.time4j;

import java.io.InvalidObjectException;
import java.math.BigDecimal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l extends rt.e implements d1 {
    private static final long serialVersionUID = -4837430960549551204L;

    /* renamed from: d  reason: collision with root package name */
    private final transient BigDecimal f39529d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(String str, BigDecimal bigDecimal) {
        super(str);
        this.f39529d = bigDecimal;
    }

    private Object readResolve() {
        Object D0 = g0.D0(name());
        if (D0 != null) {
            return D0;
        }
        throw new InvalidObjectException(name());
    }

    @Override // rt.p
    public boolean A() {
        return false;
    }

    @Override // rt.p
    public boolean D() {
        return true;
    }

    @Override // rt.e
    protected boolean E() {
        return true;
    }

    @Override // rt.p
    /* renamed from: F */
    public BigDecimal e() {
        return this.f39529d;
    }

    @Override // rt.p
    /* renamed from: G */
    public BigDecimal B() {
        return BigDecimal.ZERO;
    }

    @Override // rt.p
    public Class getType() {
        return BigDecimal.class;
    }
}
