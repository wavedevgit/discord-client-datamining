package net.time4j.calendar;

import java.util.Collections;
import java.util.Map;
import rt.a0;
import rt.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n implements z {

    /* renamed from: d  reason: collision with root package name */
    private final Map f39246d;

    /* renamed from: e  reason: collision with root package name */
    private final rt.p f39247e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(rt.k kVar, rt.p pVar) {
        this.f39246d = Collections.singletonMap("calendrical", kVar);
        this.f39247e = pVar;
    }

    private rt.k b(rt.q qVar) {
        return (rt.k) this.f39246d.get("calendrical");
    }

    private static Integer j(long j10) {
        long j11;
        long f10 = pt.c.f(a0.MODIFIED_JULIAN_DATE.n(j10, a0.UTC), 678881L);
        long b10 = pt.c.b(f10, 146097);
        int d10 = pt.c.d(f10, 146097);
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
        return Integer.valueOf(pt.c.g(j11));
    }

    @Override // rt.z
    /* renamed from: c */
    public rt.p a(rt.q qVar) {
        return null;
    }

    @Override // rt.z
    /* renamed from: d */
    public rt.p g(rt.q qVar) {
        return null;
    }

    @Override // rt.z
    /* renamed from: e */
    public Integer k(rt.q qVar) {
        rt.k b10 = b(qVar);
        return j(b10.c(((rt.q) b10.b(b10.a())).C(this.f39247e, 1)));
    }

    @Override // rt.z
    /* renamed from: f */
    public Integer o(rt.q qVar) {
        rt.k b10 = b(qVar);
        return j(b10.c(((rt.q) b10.b(b10.d())).C(this.f39247e, 1)));
    }

    @Override // rt.z
    /* renamed from: h */
    public Integer y(rt.q qVar) {
        return j(b(qVar).c(qVar.C(this.f39247e, 1)));
    }

    @Override // rt.z
    /* renamed from: i */
    public boolean n(rt.q qVar, Integer num) {
        return y(qVar).equals(num);
    }

    @Override // rt.z
    /* renamed from: l */
    public rt.q u(rt.q qVar, Integer num, boolean z10) {
        if (n(qVar, num)) {
            return qVar;
        }
        throw new IllegalArgumentException("The related gregorian year is read-only.");
    }
}
