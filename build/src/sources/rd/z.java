package rd;

import com.google.android.exoplayer2.Format;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.IdentityHashMap;
import java.util.List;
import rd.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class z implements p, p.a {

    /* renamed from: d  reason: collision with root package name */
    private final p[] f47095d;

    /* renamed from: i  reason: collision with root package name */
    private final h f47097i;

    /* renamed from: q  reason: collision with root package name */
    private p.a f47100q;

    /* renamed from: r  reason: collision with root package name */
    private w0 f47101r;

    /* renamed from: t  reason: collision with root package name */
    private n0 f47103t;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayList f47098o = new ArrayList();

    /* renamed from: p  reason: collision with root package name */
    private final HashMap f47099p = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private final IdentityHashMap f47096e = new IdentityHashMap();

    /* renamed from: s  reason: collision with root package name */
    private p[] f47102s = new p[0];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements com.google.android.exoplayer2.trackselection.g {

        /* renamed from: a  reason: collision with root package name */
        private final com.google.android.exoplayer2.trackselection.g f47104a;

        /* renamed from: b  reason: collision with root package name */
        private final u0 f47105b;

        public a(com.google.android.exoplayer2.trackselection.g gVar, u0 u0Var) {
            this.f47104a = gVar;
            this.f47105b = u0Var;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public boolean a(int i10, long j10) {
            return this.f47104a.a(i10, j10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int b() {
            return this.f47104a.b();
        }

        @Override // ke.l
        public Format c(int i10) {
            return this.f47104a.c(i10);
        }

        @Override // ke.l
        public int d(int i10) {
            return this.f47104a.d(i10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void disable() {
            this.f47104a.disable();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void e(long j10, long j11, long j12, List list, td.o[] oVarArr) {
            this.f47104a.e(j10, j11, j12, list, oVarArr);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void enable() {
            this.f47104a.enable();
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f47104a.equals(aVar.f47104a) && this.f47105b.equals(aVar.f47105b)) {
                return true;
            }
            return false;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public boolean f(int i10, long j10) {
            return this.f47104a.f(i10, j10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void g(float f10) {
            this.f47104a.g(f10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public Object h() {
            return this.f47104a.h();
        }

        public int hashCode() {
            return ((527 + this.f47105b.hashCode()) * 31) + this.f47104a.hashCode();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void i() {
            this.f47104a.i();
        }

        @Override // ke.l
        public int j(int i10) {
            return this.f47104a.j(i10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public boolean k(long j10, td.f fVar, List list) {
            return this.f47104a.k(j10, fVar, list);
        }

        @Override // ke.l
        public u0 l() {
            return this.f47105b;
        }

        @Override // ke.l
        public int length() {
            return this.f47104a.length();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void m(boolean z10) {
            this.f47104a.m(z10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int n(long j10, List list) {
            return this.f47104a.n(j10, list);
        }

        @Override // ke.l
        public int o(Format format) {
            return this.f47104a.o(format);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int p() {
            return this.f47104a.p();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public Format q() {
            return this.f47104a.q();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int r() {
            return this.f47104a.r();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void s() {
            this.f47104a.s();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b implements p, p.a {

        /* renamed from: d  reason: collision with root package name */
        private final p f47106d;

        /* renamed from: e  reason: collision with root package name */
        private final long f47107e;

        /* renamed from: i  reason: collision with root package name */
        private p.a f47108i;

        public b(p pVar, long j10) {
            this.f47106d = pVar;
            this.f47107e = j10;
        }

        @Override // rd.p, rd.n0
        public long b() {
            long b10 = this.f47106d.b();
            if (b10 == Long.MIN_VALUE) {
                return Long.MIN_VALUE;
            }
            return b10 + this.f47107e;
        }

        @Override // rd.p, rd.n0
        public boolean d() {
            return this.f47106d.d();
        }

        @Override // rd.p
        public long e(long j10, mc.t0 t0Var) {
            return this.f47106d.e(j10 - this.f47107e, t0Var) + this.f47107e;
        }

        @Override // rd.p, rd.n0
        public boolean f(long j10) {
            return this.f47106d.f(j10 - this.f47107e);
        }

        @Override // rd.p, rd.n0
        public long g() {
            long g10 = this.f47106d.g();
            if (g10 == Long.MIN_VALUE) {
                return Long.MIN_VALUE;
            }
            return g10 + this.f47107e;
        }

        @Override // rd.p, rd.n0
        public void h(long j10) {
            this.f47106d.h(j10 - this.f47107e);
        }

        @Override // rd.p.a
        public void j(p pVar) {
            ((p.a) oe.a.e(this.f47108i)).j(this);
        }

        @Override // rd.p
        public long l(long j10) {
            return this.f47106d.l(j10 - this.f47107e) + this.f47107e;
        }

        @Override // rd.p
        public long m() {
            long m10 = this.f47106d.m();
            if (m10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            return m10 + this.f47107e;
        }

        @Override // rd.n0.a
        /* renamed from: n */
        public void i(p pVar) {
            ((p.a) oe.a.e(this.f47108i)).i(this);
        }

        @Override // rd.p
        public void p() {
            this.f47106d.p();
        }

        @Override // rd.p
        public long r(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
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
            long r10 = this.f47106d.r(gVarArr, zArr, m0VarArr2, zArr2, j10 - this.f47107e);
            for (int i11 = 0; i11 < m0VarArr.length; i11++) {
                m0 m0Var2 = m0VarArr2[i11];
                if (m0Var2 == null) {
                    m0VarArr[i11] = null;
                } else {
                    m0 m0Var3 = m0VarArr[i11];
                    if (m0Var3 == null || ((c) m0Var3).b() != m0Var2) {
                        m0VarArr[i11] = new c(m0Var2, this.f47107e);
                    }
                }
            }
            return r10 + this.f47107e;
        }

        @Override // rd.p
        public w0 s() {
            return this.f47106d.s();
        }

        @Override // rd.p
        public void t(long j10, boolean z10) {
            this.f47106d.t(j10 - this.f47107e, z10);
        }

        @Override // rd.p
        public void u(p.a aVar, long j10) {
            this.f47108i = aVar;
            this.f47106d.u(this, j10 - this.f47107e);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class c implements m0 {

        /* renamed from: d  reason: collision with root package name */
        private final m0 f47109d;

        /* renamed from: e  reason: collision with root package name */
        private final long f47110e;

        public c(m0 m0Var, long j10) {
            this.f47109d = m0Var;
            this.f47110e = j10;
        }

        @Override // rd.m0
        public void a() {
            this.f47109d.a();
        }

        public m0 b() {
            return this.f47109d;
        }

        @Override // rd.m0
        public int c(mc.x xVar, rc.f fVar, int i10) {
            int c10 = this.f47109d.c(xVar, fVar, i10);
            if (c10 == -4) {
                fVar.f46800p = Math.max(0L, fVar.f46800p + this.f47110e);
            }
            return c10;
        }

        @Override // rd.m0
        public boolean isReady() {
            return this.f47109d.isReady();
        }

        @Override // rd.m0
        public int j(long j10) {
            return this.f47109d.j(j10 - this.f47110e);
        }
    }

    public z(h hVar, long[] jArr, p... pVarArr) {
        this.f47097i = hVar;
        this.f47095d = pVarArr;
        this.f47103t = hVar.a(new n0[0]);
        for (int i10 = 0; i10 < pVarArr.length; i10++) {
            long j10 = jArr[i10];
            if (j10 != 0) {
                this.f47095d[i10] = new b(pVarArr[i10], j10);
            }
        }
    }

    public p a(int i10) {
        p pVar = this.f47095d[i10];
        if (pVar instanceof b) {
            return ((b) pVar).f47106d;
        }
        return pVar;
    }

    @Override // rd.p, rd.n0
    public long b() {
        return this.f47103t.b();
    }

    @Override // rd.p, rd.n0
    public boolean d() {
        return this.f47103t.d();
    }

    @Override // rd.p
    public long e(long j10, mc.t0 t0Var) {
        p pVar;
        p[] pVarArr = this.f47102s;
        if (pVarArr.length > 0) {
            pVar = pVarArr[0];
        } else {
            pVar = this.f47095d[0];
        }
        return pVar.e(j10, t0Var);
    }

    @Override // rd.p, rd.n0
    public boolean f(long j10) {
        if (!this.f47098o.isEmpty()) {
            int size = this.f47098o.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((p) this.f47098o.get(i10)).f(j10);
            }
            return false;
        }
        return this.f47103t.f(j10);
    }

    @Override // rd.p, rd.n0
    public long g() {
        return this.f47103t.g();
    }

    @Override // rd.p, rd.n0
    public void h(long j10) {
        this.f47103t.h(j10);
    }

    @Override // rd.p.a
    public void j(p pVar) {
        this.f47098o.remove(pVar);
        if (!this.f47098o.isEmpty()) {
            return;
        }
        int i10 = 0;
        for (p pVar2 : this.f47095d) {
            i10 += pVar2.s().f47081d;
        }
        u0[] u0VarArr = new u0[i10];
        int i11 = 0;
        int i12 = 0;
        while (true) {
            p[] pVarArr = this.f47095d;
            if (i11 < pVarArr.length) {
                w0 s10 = pVarArr[i11].s();
                int i13 = s10.f47081d;
                int i14 = 0;
                while (i14 < i13) {
                    u0 b10 = s10.b(i14);
                    u0 b11 = b10.b(i11 + ":" + b10.f47066e);
                    this.f47099p.put(b11, b10);
                    u0VarArr[i12] = b11;
                    i14++;
                    i12++;
                }
                i11++;
            } else {
                this.f47101r = new w0(u0VarArr);
                ((p.a) oe.a.e(this.f47100q)).j(this);
                return;
            }
        }
    }

    @Override // rd.p
    public long l(long j10) {
        long l10 = this.f47102s[0].l(j10);
        int i10 = 1;
        while (true) {
            p[] pVarArr = this.f47102s;
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

    @Override // rd.p
    public long m() {
        p[] pVarArr;
        p[] pVarArr2;
        long j10 = -9223372036854775807L;
        for (p pVar : this.f47102s) {
            long m10 = pVar.m();
            if (m10 != -9223372036854775807L) {
                if (j10 == -9223372036854775807L) {
                    for (p pVar2 : this.f47102s) {
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

    @Override // rd.n0.a
    /* renamed from: n */
    public void i(p pVar) {
        ((p.a) oe.a.e(this.f47100q)).i(this);
    }

    @Override // rd.p
    public void p() {
        for (p pVar : this.f47095d) {
            pVar.p();
        }
    }

    @Override // rd.p
    public long r(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
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
                num = (Integer) this.f47096e.get(m0Var2);
            }
            if (num == null) {
                intValue = -1;
            } else {
                intValue = num.intValue();
            }
            iArr[i11] = intValue;
            com.google.android.exoplayer2.trackselection.g gVar = gVarArr[i11];
            if (gVar != null) {
                String str = gVar.l().f47066e;
                iArr2[i11] = Integer.parseInt(str.substring(0, str.indexOf(":")));
            } else {
                iArr2[i11] = -1;
            }
        }
        this.f47096e.clear();
        int length = gVarArr.length;
        m0[] m0VarArr2 = new m0[length];
        m0[] m0VarArr3 = new m0[gVarArr.length];
        com.google.android.exoplayer2.trackselection.g[] gVarArr2 = new com.google.android.exoplayer2.trackselection.g[gVarArr.length];
        ArrayList arrayList = new ArrayList(this.f47095d.length);
        long j11 = j10;
        int i12 = 0;
        while (i12 < this.f47095d.length) {
            for (int i13 = i10; i13 < gVarArr.length; i13++) {
                if (iArr[i13] == i12) {
                    m0Var = m0VarArr[i13];
                } else {
                    m0Var = null;
                }
                m0VarArr3[i13] = m0Var;
                if (iArr2[i13] == i12) {
                    com.google.android.exoplayer2.trackselection.g gVar2 = (com.google.android.exoplayer2.trackselection.g) oe.a.e(gVarArr[i13]);
                    gVarArr2[i13] = new a(gVar2, (u0) oe.a.e((u0) this.f47099p.get(gVar2.l())));
                } else {
                    gVarArr2[i13] = null;
                }
            }
            int i14 = i12;
            long r10 = this.f47095d[i12].r(gVarArr2, zArr, m0VarArr3, zArr2, j11);
            if (i14 == 0) {
                j11 = r10;
            } else if (r10 != j11) {
                throw new IllegalStateException("Children enabled at different positions.");
            }
            boolean z11 = false;
            for (int i15 = 0; i15 < gVarArr.length; i15++) {
                if (iArr2[i15] == i14) {
                    m0VarArr2[i15] = m0VarArr3[i15];
                    this.f47096e.put((m0) oe.a.e(m0VarArr3[i15]), Integer.valueOf(i14));
                    z11 = true;
                } else if (iArr[i15] == i14) {
                    if (m0VarArr3[i15] == null) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    oe.a.g(z10);
                }
            }
            if (z11) {
                arrayList.add(this.f47095d[i14]);
            }
            i12 = i14 + 1;
            i10 = 0;
        }
        int i16 = i10;
        System.arraycopy(m0VarArr2, i16, m0VarArr, i16, length);
        p[] pVarArr = (p[]) arrayList.toArray(new p[i16]);
        this.f47102s = pVarArr;
        this.f47103t = this.f47097i.a(pVarArr);
        return j11;
    }

    @Override // rd.p
    public w0 s() {
        return (w0) oe.a.e(this.f47101r);
    }

    @Override // rd.p
    public void t(long j10, boolean z10) {
        for (p pVar : this.f47102s) {
            pVar.t(j10, z10);
        }
    }

    @Override // rd.p
    public void u(p.a aVar, long j10) {
        this.f47100q = aVar;
        Collections.addAll(this.f47098o, this.f47095d);
        for (p pVar : this.f47095d) {
            pVar.u(this, j10);
        }
    }
}
