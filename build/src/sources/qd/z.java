package qd;

import com.google.android.exoplayer2.Format;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.IdentityHashMap;
import java.util.List;
import qd.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements p, p.a {

    /* renamed from: d  reason: collision with root package name */
    private final p[] f46906d;

    /* renamed from: i  reason: collision with root package name */
    private final h f46908i;

    /* renamed from: q  reason: collision with root package name */
    private p.a f46911q;

    /* renamed from: r  reason: collision with root package name */
    private w0 f46912r;

    /* renamed from: t  reason: collision with root package name */
    private n0 f46914t;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayList f46909o = new ArrayList();

    /* renamed from: p  reason: collision with root package name */
    private final HashMap f46910p = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private final IdentityHashMap f46907e = new IdentityHashMap();

    /* renamed from: s  reason: collision with root package name */
    private p[] f46913s = new p[0];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements com.google.android.exoplayer2.trackselection.g {

        /* renamed from: a  reason: collision with root package name */
        private final com.google.android.exoplayer2.trackselection.g f46915a;

        /* renamed from: b  reason: collision with root package name */
        private final u0 f46916b;

        public a(com.google.android.exoplayer2.trackselection.g gVar, u0 u0Var) {
            this.f46915a = gVar;
            this.f46916b = u0Var;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public boolean a(int i10, long j10) {
            return this.f46915a.a(i10, j10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public boolean b(long j10, sd.f fVar, List list) {
            return this.f46915a.b(j10, fVar, list);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int c() {
            return this.f46915a.c();
        }

        @Override // je.l
        public Format d(int i10) {
            return this.f46915a.d(i10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void disable() {
            this.f46915a.disable();
        }

        @Override // je.l
        public int e(int i10) {
            return this.f46915a.e(i10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void enable() {
            this.f46915a.enable();
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f46915a.equals(aVar.f46915a) && this.f46916b.equals(aVar.f46916b)) {
                return true;
            }
            return false;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public boolean f(int i10, long j10) {
            return this.f46915a.f(i10, j10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void g(float f10) {
            this.f46915a.g(f10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public Object h() {
            return this.f46915a.h();
        }

        public int hashCode() {
            return ((527 + this.f46916b.hashCode()) * 31) + this.f46915a.hashCode();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void i() {
            this.f46915a.i();
        }

        @Override // je.l
        public int j(int i10) {
            return this.f46915a.j(i10);
        }

        @Override // je.l
        public u0 k() {
            return this.f46916b;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void l(long j10, long j11, long j12, List list, sd.o[] oVarArr) {
            this.f46915a.l(j10, j11, j12, list, oVarArr);
        }

        @Override // je.l
        public int length() {
            return this.f46915a.length();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void m(boolean z10) {
            this.f46915a.m(z10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int n(long j10, List list) {
            return this.f46915a.n(j10, list);
        }

        @Override // je.l
        public int o(Format format) {
            return this.f46915a.o(format);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int p() {
            return this.f46915a.p();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public Format q() {
            return this.f46915a.q();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int r() {
            return this.f46915a.r();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void s() {
            this.f46915a.s();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b implements p, p.a {

        /* renamed from: d  reason: collision with root package name */
        private final p f46917d;

        /* renamed from: e  reason: collision with root package name */
        private final long f46918e;

        /* renamed from: i  reason: collision with root package name */
        private p.a f46919i;

        public b(p pVar, long j10) {
            this.f46917d = pVar;
            this.f46918e = j10;
        }

        @Override // qd.p, qd.n0
        public long b() {
            long b10 = this.f46917d.b();
            if (b10 == Long.MIN_VALUE) {
                return Long.MIN_VALUE;
            }
            return b10 + this.f46918e;
        }

        @Override // qd.p, qd.n0
        public boolean d() {
            return this.f46917d.d();
        }

        @Override // qd.p
        public long e(long j10, lc.t0 t0Var) {
            return this.f46917d.e(j10 - this.f46918e, t0Var) + this.f46918e;
        }

        @Override // qd.p, qd.n0
        public boolean f(long j10) {
            return this.f46917d.f(j10 - this.f46918e);
        }

        @Override // qd.p, qd.n0
        public long g() {
            long g10 = this.f46917d.g();
            if (g10 == Long.MIN_VALUE) {
                return Long.MIN_VALUE;
            }
            return g10 + this.f46918e;
        }

        @Override // qd.p, qd.n0
        public void h(long j10) {
            this.f46917d.h(j10 - this.f46918e);
        }

        @Override // qd.p.a
        public void j(p pVar) {
            ((p.a) ne.a.e(this.f46919i)).j(this);
        }

        @Override // qd.p
        public void k(p.a aVar, long j10) {
            this.f46919i = aVar;
            this.f46917d.k(this, j10 - this.f46918e);
        }

        @Override // qd.p
        public long l(long j10) {
            return this.f46917d.l(j10 - this.f46918e) + this.f46918e;
        }

        @Override // qd.p
        public long m() {
            long m10 = this.f46917d.m();
            if (m10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            return m10 + this.f46918e;
        }

        @Override // qd.p
        public long o(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
            m0[] m0VarArr2 = new m0[m0VarArr.length];
            int i10 = 0;
            while (true) {
                m0 m0Var = null;
                if (i10 >= m0VarArr.length) {
                    break;
                }
                c cVar = (c) m0VarArr[i10];
                if (cVar != null) {
                    m0Var = cVar.b();
                }
                m0VarArr2[i10] = m0Var;
                i10++;
            }
            long o10 = this.f46917d.o(gVarArr, zArr, m0VarArr2, zArr2, j10 - this.f46918e);
            for (int i11 = 0; i11 < m0VarArr.length; i11++) {
                m0 m0Var2 = m0VarArr2[i11];
                if (m0Var2 == null) {
                    m0VarArr[i11] = null;
                } else {
                    m0 m0Var3 = m0VarArr[i11];
                    if (m0Var3 == null || ((c) m0Var3).b() != m0Var2) {
                        m0VarArr[i11] = new c(m0Var2, this.f46918e);
                    }
                }
            }
            return o10 + this.f46918e;
        }

        @Override // qd.n0.a
        /* renamed from: p */
        public void i(p pVar) {
            ((p.a) ne.a.e(this.f46919i)).i(this);
        }

        @Override // qd.p
        public void r() {
            this.f46917d.r();
        }

        @Override // qd.p
        public w0 t() {
            return this.f46917d.t();
        }

        @Override // qd.p
        public void u(long j10, boolean z10) {
            this.f46917d.u(j10 - this.f46918e, z10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class c implements m0 {

        /* renamed from: d  reason: collision with root package name */
        private final m0 f46920d;

        /* renamed from: e  reason: collision with root package name */
        private final long f46921e;

        public c(m0 m0Var, long j10) {
            this.f46920d = m0Var;
            this.f46921e = j10;
        }

        @Override // qd.m0
        public void a() {
            this.f46920d.a();
        }

        public m0 b() {
            return this.f46920d;
        }

        @Override // qd.m0
        public int c(lc.x xVar, qc.f fVar, int i10) {
            int c10 = this.f46920d.c(xVar, fVar, i10);
            if (c10 == -4) {
                fVar.f46611p = Math.max(0L, fVar.f46611p + this.f46921e);
            }
            return c10;
        }

        @Override // qd.m0
        public boolean isReady() {
            return this.f46920d.isReady();
        }

        @Override // qd.m0
        public int q(long j10) {
            return this.f46920d.q(j10 - this.f46921e);
        }
    }

    public z(h hVar, long[] jArr, p... pVarArr) {
        this.f46908i = hVar;
        this.f46906d = pVarArr;
        this.f46914t = hVar.a(new n0[0]);
        for (int i10 = 0; i10 < pVarArr.length; i10++) {
            long j10 = jArr[i10];
            if (j10 != 0) {
                this.f46906d[i10] = new b(pVarArr[i10], j10);
            }
        }
    }

    public p a(int i10) {
        p pVar = this.f46906d[i10];
        if (pVar instanceof b) {
            return ((b) pVar).f46917d;
        }
        return pVar;
    }

    @Override // qd.p, qd.n0
    public long b() {
        return this.f46914t.b();
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        return this.f46914t.d();
    }

    @Override // qd.p
    public long e(long j10, lc.t0 t0Var) {
        p pVar;
        p[] pVarArr = this.f46913s;
        if (pVarArr.length > 0) {
            pVar = pVarArr[0];
        } else {
            pVar = this.f46906d[0];
        }
        return pVar.e(j10, t0Var);
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        if (!this.f46909o.isEmpty()) {
            int size = this.f46909o.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((p) this.f46909o.get(i10)).f(j10);
            }
            return false;
        }
        return this.f46914t.f(j10);
    }

    @Override // qd.p, qd.n0
    public long g() {
        return this.f46914t.g();
    }

    @Override // qd.p, qd.n0
    public void h(long j10) {
        this.f46914t.h(j10);
    }

    @Override // qd.p.a
    public void j(p pVar) {
        this.f46909o.remove(pVar);
        if (!this.f46909o.isEmpty()) {
            return;
        }
        int i10 = 0;
        for (p pVar2 : this.f46906d) {
            i10 += pVar2.t().f46892d;
        }
        u0[] u0VarArr = new u0[i10];
        int i11 = 0;
        int i12 = 0;
        while (true) {
            p[] pVarArr = this.f46906d;
            if (i11 < pVarArr.length) {
                w0 t10 = pVarArr[i11].t();
                int i13 = t10.f46892d;
                int i14 = 0;
                while (i14 < i13) {
                    u0 b10 = t10.b(i14);
                    u0 b11 = b10.b(i11 + ":" + b10.f46877e);
                    this.f46910p.put(b11, b10);
                    u0VarArr[i12] = b11;
                    i14++;
                    i12++;
                }
                i11++;
            } else {
                this.f46912r = new w0(u0VarArr);
                ((p.a) ne.a.e(this.f46911q)).j(this);
                return;
            }
        }
    }

    @Override // qd.p
    public void k(p.a aVar, long j10) {
        this.f46911q = aVar;
        Collections.addAll(this.f46909o, this.f46906d);
        for (p pVar : this.f46906d) {
            pVar.k(this, j10);
        }
    }

    @Override // qd.p
    public long l(long j10) {
        long l10 = this.f46913s[0].l(j10);
        int i10 = 1;
        while (true) {
            p[] pVarArr = this.f46913s;
            if (i10 < pVarArr.length) {
                if (pVarArr[i10].l(l10) == l10) {
                    i10++;
                } else {
                    throw new IllegalStateException("Unexpected child seekToUs result.");
                }
            } else {
                return l10;
            }
        }
    }

    @Override // qd.p
    public long m() {
        p[] pVarArr;
        p[] pVarArr2;
        long j10 = -9223372036854775807L;
        for (p pVar : this.f46913s) {
            long m10 = pVar.m();
            if (m10 != -9223372036854775807L) {
                if (j10 == -9223372036854775807L) {
                    for (p pVar2 : this.f46913s) {
                        if (pVar2 == pVar) {
                            break;
                        } else if (pVar2.l(m10) != m10) {
                            throw new IllegalStateException("Unexpected child seekToUs result.");
                        }
                    }
                    j10 = m10;
                } else if (m10 != j10) {
                    throw new IllegalStateException("Conflicting discontinuities.");
                }
            } else if (j10 != -9223372036854775807L && pVar.l(j10) != j10) {
                throw new IllegalStateException("Unexpected child seekToUs result.");
            }
        }
        return j10;
    }

    @Override // qd.p
    public long o(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        boolean z10;
        m0 m0Var;
        Integer num;
        int intValue;
        int[] iArr = new int[gVarArr.length];
        int[] iArr2 = new int[gVarArr.length];
        int i10 = 0;
        for (int i11 = 0; i11 < gVarArr.length; i11++) {
            m0 m0Var2 = m0VarArr[i11];
            if (m0Var2 == null) {
                num = null;
            } else {
                num = (Integer) this.f46907e.get(m0Var2);
            }
            if (num == null) {
                intValue = -1;
            } else {
                intValue = num.intValue();
            }
            iArr[i11] = intValue;
            com.google.android.exoplayer2.trackselection.g gVar = gVarArr[i11];
            if (gVar != null) {
                String str = gVar.k().f46877e;
                iArr2[i11] = Integer.parseInt(str.substring(0, str.indexOf(":")));
            } else {
                iArr2[i11] = -1;
            }
        }
        this.f46907e.clear();
        int length = gVarArr.length;
        m0[] m0VarArr2 = new m0[length];
        m0[] m0VarArr3 = new m0[gVarArr.length];
        com.google.android.exoplayer2.trackselection.g[] gVarArr2 = new com.google.android.exoplayer2.trackselection.g[gVarArr.length];
        ArrayList arrayList = new ArrayList(this.f46906d.length);
        long j11 = j10;
        int i12 = 0;
        while (i12 < this.f46906d.length) {
            for (int i13 = i10; i13 < gVarArr.length; i13++) {
                if (iArr[i13] == i12) {
                    m0Var = m0VarArr[i13];
                } else {
                    m0Var = null;
                }
                m0VarArr3[i13] = m0Var;
                if (iArr2[i13] == i12) {
                    com.google.android.exoplayer2.trackselection.g gVar2 = (com.google.android.exoplayer2.trackselection.g) ne.a.e(gVarArr[i13]);
                    gVarArr2[i13] = new a(gVar2, (u0) ne.a.e((u0) this.f46910p.get(gVar2.k())));
                } else {
                    gVarArr2[i13] = null;
                }
            }
            int i14 = i12;
            long o10 = this.f46906d[i12].o(gVarArr2, zArr, m0VarArr3, zArr2, j11);
            if (i14 == 0) {
                j11 = o10;
            } else if (o10 != j11) {
                throw new IllegalStateException("Children enabled at different positions.");
            }
            boolean z11 = false;
            for (int i15 = 0; i15 < gVarArr.length; i15++) {
                if (iArr2[i15] == i14) {
                    m0VarArr2[i15] = m0VarArr3[i15];
                    this.f46907e.put((m0) ne.a.e(m0VarArr3[i15]), Integer.valueOf(i14));
                    z11 = true;
                } else if (iArr[i15] == i14) {
                    if (m0VarArr3[i15] == null) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    ne.a.g(z10);
                }
            }
            if (z11) {
                arrayList.add(this.f46906d[i14]);
            }
            i12 = i14 + 1;
            i10 = 0;
        }
        int i16 = i10;
        System.arraycopy(m0VarArr2, i16, m0VarArr, i16, length);
        p[] pVarArr = (p[]) arrayList.toArray(new p[i16]);
        this.f46913s = pVarArr;
        this.f46914t = this.f46908i.a(pVarArr);
        return j11;
    }

    @Override // qd.n0.a
    /* renamed from: p */
    public void i(p pVar) {
        ((p.a) ne.a.e(this.f46911q)).i(this);
    }

    @Override // qd.p
    public void r() {
        for (p pVar : this.f46906d) {
            pVar.r();
        }
    }

    @Override // qd.p
    public w0 t() {
        return (w0) ne.a.e(this.f46912r);
    }

    @Override // qd.p
    public void u(long j10, boolean z10) {
        for (p pVar : this.f46913s) {
            pVar.u(j10, z10);
        }
    }
}
