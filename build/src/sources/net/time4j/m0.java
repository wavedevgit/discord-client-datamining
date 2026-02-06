package net.time4j;

import java.math.BigDecimal;
import java.math.RoundingMode;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 implements rt.t {

    /* renamed from: a  reason: collision with root package name */
    private final rt.p f39482a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f39483b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(rt.p pVar, boolean z10) {
        this.f39482a = pVar;
        this.f39483b = z10;
    }

    @Override // rt.t
    /* renamed from: a */
    public BigDecimal apply(rt.q qVar) {
        long longValue = ((Number) qVar.s(this.f39482a)).longValue();
        long longValue2 = ((Number) qVar.v(this.f39482a)).longValue();
        long longValue3 = ((Number) qVar.t(this.f39482a)).longValue();
        if (longValue > longValue3) {
            longValue = longValue3;
        }
        if (longValue == longValue2) {
            return BigDecimal.ZERO;
        }
        if (this.f39483b && (qVar instanceof g0) && !((g0) g0.class.cast(qVar)).w0(this.f39482a)) {
            if (longValue == longValue3) {
                return BigDecimal.ONE;
            }
            longValue3--;
        }
        return h0.a(new BigDecimal(longValue - longValue2).setScale(15).divide(new BigDecimal((longValue3 - longValue2) + 1), RoundingMode.HALF_UP));
    }
}
