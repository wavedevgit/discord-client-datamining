package net.time4j;

import java.io.InvalidObjectException;
import java.math.BigDecimal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l extends kt.e implements d1 {
    private static final long serialVersionUID = -4837430960549551204L;

    /* renamed from: d  reason: collision with root package name */
    private final transient BigDecimal f40627d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(String str, BigDecimal bigDecimal) {
        super(str);
        this.f40627d = bigDecimal;
    }

    private Object readResolve() {
        Object D0 = g0.D0(name());
        if (D0 != null) {
            return D0;
        }
        throw new InvalidObjectException(name());
    }

    @Override // kt.p
    public boolean C() {
        return true;
    }

    @Override // kt.e
    protected boolean E() {
        return true;
    }

    @Override // kt.p
    /* renamed from: F */
    public BigDecimal e() {
        return this.f40627d;
    }

    @Override // kt.p
    /* renamed from: G */
    public BigDecimal A() {
        return BigDecimal.ZERO;
    }

    @Override // kt.p
    public Class getType() {
        return BigDecimal.class;
    }

    @Override // kt.p
    public boolean y() {
        return false;
    }
}
