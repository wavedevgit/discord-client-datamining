package net.time4j.calendar;

import java.util.Collections;
import java.util.Map;
import jt.a0;
import jt.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n implements z {

    /* renamed from: d  reason: collision with root package name */
    private final Map f40465d;

    /* renamed from: e  reason: collision with root package name */
    private final jt.p f40466e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(jt.k kVar, jt.p pVar) {
        this.f40465d = Collections.singletonMap("calendrical", kVar);
        this.f40466e = pVar;
    }

    private jt.k b(jt.q qVar) {
        return (jt.k) this.f40465d.get("calendrical");
    }

    private static Integer m(long j10) {
        long j11;
        long f10 = gt.c.f(a0.MODIFIED_JULIAN_DATE.l(j10, a0.UTC), 678881L);
        long b10 = gt.c.b(f10, 146097);
        int d10 = gt.c.d(f10, 146097);
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
        return Integer.valueOf(gt.c.g(j11));
    }

    @Override // jt.z
    /* renamed from: c */
    public jt.p a(jt.q qVar) {
        return null;
    }

    @Override // jt.z
    /* renamed from: d */
    public jt.p h(jt.q qVar) {
        return null;
    }

    @Override // jt.z
    /* renamed from: e */
    public Integer j(jt.q qVar) {
        jt.k b10 = b(qVar);
        return m(b10.c(((jt.q) b10.b(b10.a())).C(this.f40466e, 1)));
    }

    @Override // jt.z
    /* renamed from: f */
    public Integer p(jt.q qVar) {
        jt.k b10 = b(qVar);
        return m(b10.c(((jt.q) b10.b(b10.d())).C(this.f40466e, 1)));
    }

    @Override // jt.z
    /* renamed from: g */
    public Integer x(jt.q qVar) {
        return m(b(qVar).c(qVar.C(this.f40466e, 1)));
    }

    @Override // jt.z
    /* renamed from: i */
    public boolean l(jt.q qVar, Integer num) {
        return x(qVar).equals(num);
    }

    @Override // jt.z
    /* renamed from: n */
    public jt.q w(jt.q qVar, Integer num, boolean z10) {
        if (l(qVar, num)) {
            return qVar;
        }
        throw new IllegalArgumentException("The related gregorian year is read-only.");
    }
}
