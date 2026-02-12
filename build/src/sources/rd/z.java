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
    private final p[] f46527d;

    /* renamed from: i  reason: collision with root package name */
    private final h f46529i;

    /* renamed from: q  reason: collision with root package name */
    private p.a f46532q;

    /* renamed from: r  reason: collision with root package name */
    private w0 f46533r;

    /* renamed from: t  reason: collision with root package name */
    private n0 f46535t;

    /* renamed from: o  reason: collision with root package name */
    private final ArrayList f46530o = new ArrayList();

    /* renamed from: p  reason: collision with root package name */
    private final HashMap f46531p = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private final IdentityHashMap f46528e = new IdentityHashMap();

    /* renamed from: s  reason: collision with root package name */
    private p[] f46534s = new p[0];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a implements com.google.android.exoplayer2.trackselection.g {

        /* renamed from: a  reason: collision with root package name */
        private final com.google.android.exoplayer2.trackselection.g f46536a;

        /* renamed from: b  reason: collision with root package name */
        private final u0 f46537b;

        public a(com.google.android.exoplayer2.trackselection.g gVar, u0 u0Var) {
            this.f46536a = gVar;
            this.f46537b = u0Var;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public boolean a(int i10, long j10) {
            return this.f46536a.a(i10, j10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int b() {
            return this.f46536a.b();
        }

        @Override // ke.l
        public Format c(int i10) {
            return this.f46536a.c(i10);
        }

        @Override // ke.l
        public int d(int i10) {
            return this.f46536a.d(i10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void disable() {
            this.f46536a.disable();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void e(long j10, long j11, long j12, List list, td.o[] oVarArr) {
            this.f46536a.e(j10, j11, j12, list, oVarArr);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void enable() {
            this.f46536a.enable();
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (this.f46536a.equals(aVar.f46536a) && this.f46537b.equals(aVar.f46537b)) {
                return true;
            }
            return false;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public boolean f(int i10, long j10) {
            return this.f46536a.f(i10, j10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void g(float f10) {
            this.f46536a.g(f10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public Object h() {
            return this.f46536a.h();
        }

        public int hashCode() {
            return ((527 + this.f46537b.hashCode()) * 31) + this.f46536a.hashCode();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void i() {
            this.f46536a.i();
        }

        @Override // ke.l
        public int j(int i10) {
            return this.f46536a.j(i10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public boolean k(long j10, td.f fVar, List list) {
            return this.f46536a.k(j10, fVar, list);
        }

        @Override // ke.l
        public u0 l() {
            return this.f46537b;
        }

        @Override // ke.l
        public int length() {
            return this.f46536a.length();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void m(boolean z10) {
            this.f46536a.m(z10);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int n(long j10, List list) {
            return this.f46536a.n(j10, list);
        }

        @Override // ke.l
        public int o(Format format) {
            return this.f46536a.o(format);
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int p() {
            return this.f46536a.p();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public Format q() {
            return this.f46536a.q();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int r() {
            return this.f46536a.r();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void s() {
            this.f46536a.s();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b implements p, p.a {

        /* renamed from: d  reason: collision with root package name */
        private final p f46538d;

        /* renamed from: e  reason: collision with root package name */
        private final long f46539e;

        /* renamed from: i  reason: collision with root package name */
        private p.a f46540i;

        public b(p pVar, long j10) {
            this.f46538d = pVar;
            this.f46539e = j10;
        }

        @Override // rd.p, rd.n0
        public long b() {
            long b10 = this.f46538d.b();
            if (b10 == Long.MIN_VALUE) {
                return Long.MIN_VALUE;
            }
            return b10 + this.f46539e;
        }

        @Override // rd.p, rd.n0
        public boolean d() {
            return this.f46538d.d();
        }

        @Override // rd.p
        public long e(long j10, mc.t0 t0Var) {
            return this.f46538d.e(j10 - this.f46539e, t0Var) + this.f46539e;
        }

        @Override // rd.p, rd.n0
        public boolean f(long j10) {
            return this.f46538d.f(j10 - this.f46539e);
        }

        @Override // rd.p, rd.n0
        public long g() {
            long g10 = this.f46538d.g();
            if (g10 == Long.MIN_VALUE) {
                return Long.MIN_VALUE;
            }
            return g10 + this.f46539e;
        }

        @Override // rd.p, rd.n0
        public void h(long j10) {
            this.f46538d.h(j10 - this.f46539e);
        }

        @Override // rd.p.a
        public void j(p pVar) {
            ((p.a) oe.a.e(this.f46540i)).j(this);
        }

        @Override // rd.p
        public long l(long j10) {
            return this.f46538d.l(j10 - this.f46539e) + this.f46539e;
        }

        @Override // rd.p
        public long m() {
            long m10 = this.f46538d.m();
            if (m10 == -9223372036854775807L) {
                return -9223372036854775807L;
            }
            return m10 + this.f46539e;
        }

        @Override // rd.n0.a
        /* renamed from: n */
        public void i(p pVar) {
            ((p.a) oe.a.e(this.f46540i)).i(this);
        }

        @Override // rd.p
        public void p() {
            this.f46538d.p();
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
            long r10 = this.f46538d.r(gVarArr, zArr, m0VarArr2, zArr2, j10 - this.f46539e);
            for (int i11 = 0; i11 < m0VarArr.length; i11++) {
                m0 m0Var2 = m0VarArr2[i11];
                if (m0Var2 == null) {
                    m0VarArr[i11] = null;
                } else {
                    m0 m0Var3 = m0VarArr[i11];
                    if (m0Var3 == null || ((c) m0Var3).b() != m0Var2) {
                        m0VarArr[i11] = new c(m0Var2, this.f46539e);
                    }
                }
            }
            return r10 + this.f46539e;
        }

        @Override // rd.p
        public w0 s() {
            return this.f46538d.s();
        }

        @Override // rd.p
        public void t(long j10, boolean z10) {
            this.f46538d.t(j10 - this.f46539e, z10);
        }

        @Override // rd.p
        public void u(p.a aVar, long j10) {
            this.f46540i = aVar;
            this.f46538d.u(this, j10 - this.f46539e);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class c implements m0 {

        /* renamed from: d  reason: collision with root package name */
        private final m0 f46541d;

        /* renamed from: e  reason: collision with root package name */
        private final long f46542e;

        public c(m0 m0Var, long j10) {
            this.f46541d = m0Var;
            this.f46542e = j10;
        }

        @Override // rd.m0
        public void a() {
            this.f46541d.a();
        }

        public m0 b() {
            return this.f46541d;
        }

        @Override // rd.m0
        public int c(mc.x xVar, rc.f fVar, int i10) {
            int c10 = this.f46541d.c(xVar, fVar, i10);
            if (c10 == -4) {
                fVar.f46232p = Math.max(0L, fVar.f46232p + this.f46542e);
            }
            return c10;
        }

        @Override // rd.m0
        public boolean isReady() {
            return this.f46541d.isReady();
        }

        @Override // rd.m0
        public int j(long j10) {
            return this.f46541d.j(j10 - this.f46542e);
        }
    }

    public z(h hVar, long[] jArr, p... pVarArr) {
        this.f46529i = hVar;
        this.f46527d = pVarArr;
        this.f46535t = hVar.a(new n0[0]);
        for (int i10 = 0; i10 < pVarArr.length; i10++) {
            long j10 = jArr[i10];
            if (j10 != 0) {
                this.f46527d[i10] = new b(pVarArr[i10], j10);
            }
        }
    }

    public p a(int i10) {
        p pVar = this.f46527d[i10];
        if (pVar instanceof b) {
            return ((b) pVar).f46538d;
        }
        return pVar;
    }

    @Override // rd.p, rd.n0
    public long b() {
        return this.f46535t.b();
    }

    @Override // rd.p, rd.n0
    public boolean d() {
        return this.f46535t.d();
    }

    @Override // rd.p
    public long e(long j10, mc.t0 t0Var) {
        p pVar;
        p[] pVarArr = this.f46534s;
        if (pVarArr.length > 0) {
            pVar = pVarArr[0];
        } else {
            pVar = this.f46527d[0];
        }
        return pVar.e(j10, t0Var);
    }

    @Override // rd.p, rd.n0
    public boolean f(long j10) {
        if (!this.f46530o.isEmpty()) {
            int size = this.f46530o.size();
            for (int i10 = 0; i10 < size; i10++) {
                ((p) this.f46530o.get(i10)).f(j10);
            }
            return false;
        }
        return this.f46535t.f(j10);
    }

    @Override // rd.p, rd.n0
    public long g() {
        return this.f46535t.g();
    }

    @Override // rd.p, rd.n0
    public void h(long j10) {
        this.f46535t.h(j10);
    }

    @Override // rd.p.a
    public void j(p pVar) {
        this.f46530o.remove(pVar);
        if (!this.f46530o.isEmpty()) {
            return;
        }
        int i10 = 0;
        for (p pVar2 : this.f46527d) {
            i10 += pVar2.s().f46513d;
        }
        u0[] u0VarArr = new u0[i10];
        int i11 = 0;
        int i12 = 0;
        while (true) {
            p[] pVarArr = this.f46527d;
            if (i11 < pVarArr.length) {
                w0 s10 = pVarArr[i11].s();
                int i13 = s10.f46513d;
                int i14 = 0;
                while (i14 < i13) {
                    u0 b10 = s10.b(i14);
                    u0 b11 = b10.b(i11 + ":" + b10.f46498e);
                    this.f46531p.put(b11, b10);
                    u0VarArr[i12] = b11;
                    i14++;
                    i12++;
                }
                i11++;
            } else {
                this.f46533r = new w0(u0VarArr);
                ((p.a) oe.a.e(this.f46532q)).j(this);
                return;
            }
        }
    }

    @Override // rd.p
    public long l(long j10) {
        long l10 = this.f46534s[0].l(j10);
        int i10 = 1;
        while (true) {
            p[] pVarArr = this.f46534s;
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
        for (p pVar : this.f46534s) {
            long m10 = pVar.m();
            if (m10 != -9223372036854775807L) {
                if (j10 == -9223372036854775807L) {
                    for (p pVar2 : this.f46534s) {
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
        ((p.a) oe.a.e(this.f46532q)).i(this);
    }

    @Override // rd.p
    public void p() {
        for (p pVar : this.f46527d) {
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
                num = (Integer) this.f46528e.get(m0Var2);
            }
            if (num == null) {
                intValue = -1;
            } else {
                intValue = num.intValue();
            }
            iArr[i11] = intValue;
            com.google.android.exoplayer2.trackselection.g gVar = gVarArr[i11];
            if (gVar != null) {
                String str = gVar.l().f46498e;
                iArr2[i11] = Integer.parseInt(str.substring(0, str.indexOf(":")));
            } else {
                iArr2[i11] = -1;
            }
        }
        this.f46528e.clear();
        int length = gVarArr.length;
        m0[] m0VarArr2 = new m0[length];
        m0[] m0VarArr3 = new m0[gVarArr.length];
        com.google.android.exoplayer2.trackselection.g[] gVarArr2 = new com.google.android.exoplayer2.trackselection.g[gVarArr.length];
        ArrayList arrayList = new ArrayList(this.f46527d.length);
        long j11 = j10;
        int i12 = 0;
        while (i12 < this.f46527d.length) {
            for (int i13 = i10; i13 < gVarArr.length; i13++) {
                if (iArr[i13] == i12) {
                    m0Var = m0VarArr[i13];
                } else {
                    m0Var = null;
                }
                m0VarArr3[i13] = m0Var;
                if (iArr2[i13] == i12) {
                    com.google.android.exoplayer2.trackselection.g gVar2 = (com.google.android.exoplayer2.trackselection.g) oe.a.e(gVarArr[i13]);
                    gVarArr2[i13] = new a(gVar2, (u0) oe.a.e((u0) this.f46531p.get(gVar2.l())));
                } else {
                    gVarArr2[i13] = null;
                }
            }
            int i14 = i12;
            long r10 = this.f46527d[i12].r(gVarArr2, zArr, m0VarArr3, zArr2, j11);
            if (i14 == 0) {
                j11 = r10;
            } else if (r10 != j11) {
                throw new IllegalStateException("Children enabled at different positions.");
            }
            boolean z11 = false;
            for (int i15 = 0; i15 < gVarArr.length; i15++) {
                if (iArr2[i15] == i14) {
                    m0VarArr2[i15] = m0VarArr3[i15];
                    this.f46528e.put((m0) oe.a.e(m0VarArr3[i15]), Integer.valueOf(i14));
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
                arrayList.add(this.f46527d[i14]);
            }
            i12 = i14 + 1;
            i10 = 0;
        }
        int i16 = i10;
        System.arraycopy(m0VarArr2, i16, m0VarArr, i16, length);
        p[] pVarArr = (p[]) arrayList.toArray(new p[i16]);
        this.f46534s = pVarArr;
        this.f46535t = this.f46529i.a(pVarArr);
        return j11;
    }

    @Override // rd.p
    public w0 s() {
        return (w0) oe.a.e(this.f46533r);
    }

    @Override // rd.p
    public void t(long j10, boolean z10) {
        for (p pVar : this.f46534s) {
            pVar.t(j10, z10);
        }
    }

    @Override // rd.p
    public void u(p.a aVar, long j10) {
        this.f46532q = aVar;
        Collections.addAll(this.f46530o, this.f46527d);
        for (p pVar : this.f46527d) {
            pVar.u(this, j10);
        }
    }
}
