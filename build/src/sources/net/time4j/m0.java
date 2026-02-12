package net.time4j;

import java.math.BigDecimal;
import java.math.RoundingMode;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 implements bu.t {

    /* renamed from: a  reason: collision with root package name */
    private final bu.p f37627a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f37628b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(bu.p pVar, boolean z10) {
        this.f37627a = pVar;
        this.f37628b = z10;
    }

    @Override // bu.t
    /* renamed from: a */
    public BigDecimal apply(bu.q qVar) {
        long longValue = ((Number) qVar.k(this.f37627a)).longValue();
        long longValue2 = ((Number) qVar.t(this.f37627a)).longValue();
        long longValue3 = ((Number) qVar.v(this.f37627a)).longValue();
        if (longValue > longValue3) {
            longValue = longValue3;
        }
        if (longValue == longValue2) {
            return BigDecimal.ZERO;
        }
        if (this.f37628b && (qVar instanceof g0) && !((g0) g0.class.cast(qVar)).w0(this.f37627a)) {
            if (longValue == longValue3) {
                return BigDecimal.ONE;
            }
            longValue3--;
        }
        return h0.a(new BigDecimal(longValue - longValue2).setScale(15).divide(new BigDecimal((longValue3 - longValue2) + 1), RoundingMode.HALF_UP));
    }
}
