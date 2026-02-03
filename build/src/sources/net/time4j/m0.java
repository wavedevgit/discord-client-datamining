package net.time4j;

import java.math.BigDecimal;
import java.math.RoundingMode;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 implements kt.t {

    /* renamed from: a  reason: collision with root package name */
    private final kt.p f40628a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f40629b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(kt.p pVar, boolean z10) {
        this.f40628a = pVar;
        this.f40629b = z10;
    }

    @Override // kt.t
    /* renamed from: a */
    public BigDecimal apply(kt.q qVar) {
        long longValue = ((Number) qVar.v(this.f40628a)).longValue();
        long longValue2 = ((Number) qVar.k(this.f40628a)).longValue();
        long longValue3 = ((Number) qVar.p(this.f40628a)).longValue();
        if (longValue > longValue3) {
            longValue = longValue3;
        }
        if (longValue == longValue2) {
            return BigDecimal.ZERO;
        }
        if (this.f40629b && (qVar instanceof g0) && !((g0) g0.class.cast(qVar)).w0(this.f40628a)) {
            if (longValue == longValue3) {
                return BigDecimal.ONE;
            }
            longValue3--;
        }
        return h0.a(new BigDecimal(longValue - longValue2).setScale(15).divide(new BigDecimal((longValue3 - longValue2) + 1), RoundingMode.HALF_UP));
    }
}
