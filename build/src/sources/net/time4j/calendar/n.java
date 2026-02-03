package net.time4j.calendar;

import java.util.Collections;
import java.util.Map;
import kt.a0;
import kt.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n implements z {

    /* renamed from: d  reason: collision with root package name */
    private final Map f40344d;

    /* renamed from: e  reason: collision with root package name */
    private final kt.p f40345e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(kt.k kVar, kt.p pVar) {
        this.f40344d = Collections.singletonMap("calendrical", kVar);
        this.f40345e = pVar;
    }

    private kt.k b(kt.q qVar) {
        return (kt.k) this.f40344d.get("calendrical");
    }

    private static Integer m(long j10) {
        long j11;
        long f10 = ht.c.f(a0.MODIFIED_JULIAN_DATE.l(j10, a0.UTC), 678881L);
        long b10 = ht.c.b(f10, 146097);
        int d10 = ht.c.d(f10, 146097);
        if (d10 == 146096) {
            j11 = (b10 + 1) * 400;
        } else {
            int i10 = d10 / 36524;
            int i11 = d10 % 36524;
            int i12 = i11 / 1461;
            int i13 = i11 % 1461;
            if (i13 == 1460) {
                j11 = (b10 * 400) + (i10 * 100) + ((i12 + 1) * 4);
            } else {
                j11 = (b10 * 400) + (i10 * 100) + (i12 * 4) + (i13 / 365);
                if (((((i13 % 365) + 31) * 5) / 153) + 2 > 12) {
                    j11++;
                }
            }
        }
        return Integer.valueOf(ht.c.g(j11));
    }

    @Override // kt.z
    /* renamed from: c */
    public kt.p a(kt.q qVar) {
        return null;
    }

    @Override // kt.z
    /* renamed from: d */
    public kt.p g(kt.q qVar) {
        return null;
    }

    @Override // kt.z
    /* renamed from: e */
    public Integer h(kt.q qVar) {
        kt.k b10 = b(qVar);
        return m(b10.c(((kt.q) b10.b(b10.a())).C(this.f40345e, 1)));
    }

    @Override // kt.z
    /* renamed from: f */
    public Integer o(kt.q qVar) {
        kt.k b10 = b(qVar);
        return m(b10.c(((kt.q) b10.b(b10.d())).C(this.f40345e, 1)));
    }

    @Override // kt.z
    /* renamed from: j */
    public Integer x(kt.q qVar) {
        return m(b(qVar).c(qVar.C(this.f40345e, 1)));
    }

    @Override // kt.z
    /* renamed from: k */
    public boolean l(kt.q qVar, Integer num) {
        return x(qVar).equals(num);
    }

    @Override // kt.z
    /* renamed from: n */
    public kt.q v(kt.q qVar, Integer num, boolean z10) {
        if (l(qVar, num)) {
            return qVar;
        }
        throw new IllegalArgumentException("The related gregorian year is read-only.");
    }
}
