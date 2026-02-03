package net.time4j;

import java.math.BigDecimal;
import java.math.RoundingMode;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 implements mt.t {

    /* renamed from: a  reason: collision with root package name */
    private final mt.p f40667a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f40668b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(mt.p pVar, boolean z10) {
        this.f40667a = pVar;
        this.f40668b = z10;
    }

    @Override // mt.t
    /* renamed from: a */
    public BigDecimal apply(mt.q qVar) {
        long longValue = ((Number) qVar.o(this.f40667a)).longValue();
        long longValue2 = ((Number) qVar.v(this.f40667a)).longValue();
        long longValue3 = ((Number) qVar.u(this.f40667a)).longValue();
        if (longValue > longValue3) {
            longValue = longValue3;
        }
        if (longValue == longValue2) {
            return BigDecimal.ZERO;
        }
        if (this.f40668b && (qVar instanceof g0) && !((g0) g0.class.cast(qVar)).w0(this.f40667a)) {
            if (longValue == longValue3) {
                return BigDecimal.ONE;
            }
            longValue3--;
        }
        return h0.a(new BigDecimal(longValue - longValue2).setScale(15).divide(new BigDecimal((longValue3 - longValue2) + 1), RoundingMode.HALF_UP));
    }
}
