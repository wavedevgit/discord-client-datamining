package net.time4j;

import java.math.BigDecimal;
import java.math.RoundingMode;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 implements pt.t {

    /* renamed from: a  reason: collision with root package name */
    private final pt.p f40127a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f40128b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(pt.p pVar, boolean z10) {
        this.f40127a = pVar;
        this.f40128b = z10;
    }

    @Override // pt.t
    /* renamed from: a */
    public BigDecimal apply(pt.q qVar) {
        long longValue = ((Number) qVar.v(this.f40127a)).longValue();
        long longValue2 = ((Number) qVar.s(this.f40127a)).longValue();
        long longValue3 = ((Number) qVar.n(this.f40127a)).longValue();
        if (longValue > longValue3) {
            longValue = longValue3;
        }
        if (longValue == longValue2) {
            return BigDecimal.ZERO;
        }
        if (this.f40128b && (qVar instanceof g0) && !((g0) g0.class.cast(qVar)).w0(this.f40127a)) {
            if (longValue == longValue3) {
                return BigDecimal.ONE;
            }
            longValue3--;
        }
        return h0.a(new BigDecimal(longValue - longValue2).setScale(15).divide(new BigDecimal((longValue3 - longValue2) + 1), RoundingMode.HALF_UP));
    }
}
