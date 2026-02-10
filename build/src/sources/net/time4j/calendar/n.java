package net.time4j.calendar;

import java.util.Collections;
import java.util.Map;
import st.a0;
import st.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class n implements z {

    /* renamed from: d  reason: collision with root package name */
    private final Map f38338d;

    /* renamed from: e  reason: collision with root package name */
    private final st.p f38339e;

    /* JADX INFO: Access modifiers changed from: package-private */
    public n(st.k kVar, st.p pVar) {
        this.f38338d = Collections.singletonMap("calendrical", kVar);
        this.f38339e = pVar;
    }

    private st.k b(st.q qVar) {
        return (st.k) this.f38338d.get("calendrical");
    }

    private static Integer o(long j10) {
        long j11;
        long f10 = qt.c.f(a0.MODIFIED_JULIAN_DATE.k(j10, a0.UTC), 678881L);
        long b10 = qt.c.b(f10, 146097);
        int d10 = qt.c.d(f10, 146097);
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
        return Integer.valueOf(qt.c.g(j11));
    }

    @Override // st.z
    /* renamed from: c */
    public st.p a(st.q qVar) {
        return null;
    }

    @Override // st.z
    /* renamed from: d */
    public st.p g(st.q qVar) {
        return null;
    }

    @Override // st.z
    /* renamed from: e */
    public Integer h(st.q qVar) {
        st.k b10 = b(qVar);
        return o(b10.c(((st.q) b10.b(b10.a())).C(this.f38339e, 1)));
    }

    @Override // st.z
    /* renamed from: f */
    public Integer m(st.q qVar) {
        st.k b10 = b(qVar);
        return o(b10.c(((st.q) b10.b(b10.d())).C(this.f38339e, 1)));
    }

    @Override // st.z
    /* renamed from: j */
    public Integer y(st.q qVar) {
        return o(b(qVar).c(qVar.C(this.f38339e, 1)));
    }

    @Override // st.z
    /* renamed from: l */
    public boolean k(st.q qVar, Integer num) {
        return y(qVar).equals(num);
    }

    @Override // st.z
    /* renamed from: p */
    public st.q s(st.q qVar, Integer num, boolean z10) {
        if (k(qVar, num)) {
            return qVar;
        }
        throw new IllegalArgumentException("The related gregorian year is read-only.");
    }
}
