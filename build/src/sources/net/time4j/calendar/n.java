package net.time4j.calendar;

import java.util.Collections;
import java.util.Map;
import mt.a0;
import mt.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n implements z {

    /* renamed from: d  reason: collision with root package name */
    private final Map f40383d;

    /* renamed from: e  reason: collision with root package name */
    private final mt.p f40384e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(mt.k kVar, mt.p pVar) {
        this.f40383d = Collections.singletonMap("calendrical", kVar);
        this.f40384e = pVar;
    }

    private mt.k b(mt.q qVar) {
        return (mt.k) this.f40383d.get("calendrical");
    }

    private static Integer j(long j10) {
        long j11;
        long f10 = kt.c.f(a0.MODIFIED_JULIAN_DATE.q(j10, a0.UTC), 678881L);
        long b10 = kt.c.b(f10, 146097);
        int d10 = kt.c.d(f10, 146097);
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
        return Integer.valueOf(kt.c.g(j11));
    }

    @Override // mt.z
    /* renamed from: c */
    public mt.p a(mt.q qVar) {
        return null;
    }

    @Override // mt.z
    /* renamed from: d */
    public mt.p h(mt.q qVar) {
        return null;
    }

    @Override // mt.z
    /* renamed from: e */
    public Integer l(mt.q qVar) {
        mt.k b10 = b(qVar);
        return j(b10.c(((mt.q) b10.b(b10.a())).C(this.f40384e, 1)));
    }

    @Override // mt.z
    /* renamed from: f */
    public Integer r(mt.q qVar) {
        mt.k b10 = b(qVar);
        return j(b10.c(((mt.q) b10.b(b10.d())).C(this.f40384e, 1)));
    }

    @Override // mt.z
    /* renamed from: g */
    public Integer z(mt.q qVar) {
        return j(b(qVar).c(qVar.C(this.f40384e, 1)));
    }

    @Override // mt.z
    /* renamed from: i */
    public boolean q(mt.q qVar, Integer num) {
        return z(qVar).equals(num);
    }

    @Override // mt.z
    /* renamed from: k */
    public mt.q x(mt.q qVar, Integer num, boolean z10) {
        if (q(qVar, num)) {
            return qVar;
        }
        throw new IllegalArgumentException("The related gregorian year is read-only.");
    }
}
