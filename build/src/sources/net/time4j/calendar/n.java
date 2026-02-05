package net.time4j.calendar;

import java.util.Collections;
import java.util.Map;
import pt.a0;
import pt.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n implements z {

    /* renamed from: d  reason: collision with root package name */
    private final Map f39843d;

    /* renamed from: e  reason: collision with root package name */
    private final pt.p f39844e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(pt.k kVar, pt.p pVar) {
        this.f39843d = Collections.singletonMap("calendrical", kVar);
        this.f39844e = pVar;
    }

    private pt.k b(pt.q qVar) {
        return (pt.k) this.f39843d.get("calendrical");
    }

    private static Integer j(long j10) {
        long j11;
        long f10 = nt.c.f(a0.MODIFIED_JULIAN_DATE.p(j10, a0.UTC), 678881L);
        long b10 = nt.c.b(f10, 146097);
        int d10 = nt.c.d(f10, 146097);
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
        return Integer.valueOf(nt.c.g(j11));
    }

    @Override // pt.z
    /* renamed from: c */
    public pt.p a(pt.q qVar) {
        return null;
    }

    @Override // pt.z
    /* renamed from: d */
    public pt.p h(pt.q qVar) {
        return null;
    }

    @Override // pt.z
    /* renamed from: e */
    public Integer k(pt.q qVar) {
        pt.k b10 = b(qVar);
        return j(b10.c(((pt.q) b10.b(b10.a())).C(this.f39844e, 1)));
    }

    @Override // pt.z
    /* renamed from: f */
    public Integer r(pt.q qVar) {
        pt.k b10 = b(qVar);
        return j(b10.c(((pt.q) b10.b(b10.d())).C(this.f39844e, 1)));
    }

    @Override // pt.z
    /* renamed from: g */
    public Integer y(pt.q qVar) {
        return j(b(qVar).c(qVar.C(this.f39844e, 1)));
    }

    @Override // pt.z
    /* renamed from: i */
    public boolean p(pt.q qVar, Integer num) {
        return y(qVar).equals(num);
    }

    @Override // pt.z
    /* renamed from: l */
    public pt.q x(pt.q qVar, Integer num, boolean z10) {
        if (p(qVar, num)) {
            return qVar;
        }
        throw new IllegalArgumentException("The related gregorian year is read-only.");
    }
}
