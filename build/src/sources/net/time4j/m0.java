package net.time4j;

import java.math.BigDecimal;
import java.math.RoundingMode;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 implements st.t {

    /* renamed from: a  reason: collision with root package name */
    private final st.p f38622a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f38623b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public m0(st.p pVar, boolean z10) {
        this.f38622a = pVar;
        this.f38623b = z10;
    }

    @Override // st.t
    /* renamed from: a */
    public BigDecimal apply(st.q qVar) {
        long longValue = ((Number) qVar.t(this.f38622a)).longValue();
        long longValue2 = ((Number) qVar.m(this.f38622a)).longValue();
        long longValue3 = ((Number) qVar.n(this.f38622a)).longValue();
        if (longValue > longValue3) {
            longValue = longValue3;
        }
        if (longValue == longValue2) {
            return BigDecimal.ZERO;
        }
        if (this.f38623b && (qVar instanceof g0) && !((g0) g0.class.cast(qVar)).w0(this.f38622a)) {
            if (longValue == longValue3) {
                return BigDecimal.ONE;
            }
            longValue3--;
        }
        return h0.a(new BigDecimal(longValue - longValue2).setScale(15).divide(new BigDecimal((longValue3 - longValue2) + 1), RoundingMode.HALF_UP));
    }
}
