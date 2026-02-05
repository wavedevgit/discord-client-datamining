package net.time4j;

import java.io.InvalidObjectException;
import java.math.BigDecimal;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class l extends pt.e implements d1 {
    private static final long serialVersionUID = -4837430960549551204L;

    /* renamed from: d  reason: collision with root package name */
    private final transient BigDecimal f40126d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public l(String str, BigDecimal bigDecimal) {
        super(str);
        this.f40126d = bigDecimal;
    }

    private Object readResolve() {
        Object D0 = g0.D0(name());
        if (D0 != null) {
            return D0;
        }
        throw new InvalidObjectException(name());
    }

    @Override // pt.p
    public boolean B() {
        return true;
    }

    @Override // pt.e
    protected boolean E() {
        return true;
    }

    @Override // pt.p
    /* renamed from: F */
    public BigDecimal e() {
        return this.f40126d;
    }

    @Override // pt.p
    /* renamed from: G */
    public BigDecimal A() {
        return BigDecimal.ZERO;
    }

    @Override // pt.p
    public Class getType() {
        return BigDecimal.class;
    }

    @Override // pt.p
    public boolean z() {
        return false;
    }
}
