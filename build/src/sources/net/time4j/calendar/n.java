package net.time4j.calendar;

import bu.a0;
import bu.z;
import java.util.Collections;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n implements z {

    /* renamed from: d  reason: collision with root package name */
    private final Map f37911d;

    /* renamed from: e  reason: collision with root package name */
    private final bu.p f37912e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(bu.k kVar, bu.p pVar) {
        this.f37911d = Collections.singletonMap("calendrical", kVar);
        this.f37912e = pVar;
    }

    private bu.k b(bu.q qVar) {
        return (bu.k) this.f37911d.get("calendrical");
    }

    private static Integer j(long j10) {
        long j11;
        long f10 = zt.c.f(a0.MODIFIED_JULIAN_DATE.o(j10, a0.UTC), 678881L);
        long b10 = zt.c.b(f10, 146097);
        int d10 = zt.c.d(f10, 146097);
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
        return Integer.valueOf(zt.c.g(j11));
    }

    @Override // bu.z
    /* renamed from: c */
    public bu.p a(bu.q qVar) {
        return null;
    }

    @Override // bu.z
    /* renamed from: d */
    public bu.p h(bu.q qVar) {
        return null;
    }

    @Override // bu.z
    /* renamed from: e */
    public Integer m(bu.q qVar) {
        bu.k b10 = b(qVar);
        return j(b10.c(((bu.q) b10.b(b10.a())).C(this.f37912e, 1)));
    }

    @Override // bu.z
    /* renamed from: f */
    public Integer q(bu.q qVar) {
        bu.k b10 = b(qVar);
        return j(b10.c(((bu.q) b10.b(b10.d())).C(this.f37912e, 1)));
    }

    @Override // bu.z
    /* renamed from: g */
    public Integer y(bu.q qVar) {
        return j(b(qVar).c(qVar.C(this.f37912e, 1)));
    }

    @Override // bu.z
    /* renamed from: i */
    public boolean o(bu.q qVar, Integer num) {
        return y(qVar).equals(num);
    }

    @Override // bu.z
    /* renamed from: k */
    public bu.q x(bu.q qVar, Integer num, boolean z10) {
        if (o(qVar, num)) {
            return qVar;
        }
        throw new IllegalArgumentException("The related gregorian year is read-only.");
    }
}
