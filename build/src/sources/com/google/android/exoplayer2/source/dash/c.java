package com.google.android.exoplayer2.source.dash;

import android.os.SystemClock;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.dash.a;
import com.google.android.exoplayer2.source.dash.e;
import com.google.android.exoplayer2.trackselection.g;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.g;
import com.google.android.exoplayer2.upstream.h;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import ji.t;
import lc.t0;
import le.c0;
import le.u;
import mc.t1;
import ne.w0;
import sd.g;
import sd.k;
import sd.m;
import sd.n;
import sd.o;
import sd.p;
import td.f;
import ud.i;
import ud.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c implements com.google.android.exoplayer2.source.dash.a {

    /* renamed from: a  reason: collision with root package name */
    private final u f13824a;

    /* renamed from: b  reason: collision with root package name */
    private final td.b f13825b;

    /* renamed from: c  reason: collision with root package name */
    private final int[] f13826c;

    /* renamed from: d  reason: collision with root package name */
    private final int f13827d;

    /* renamed from: e  reason: collision with root package name */
    private final DataSource f13828e;

    /* renamed from: f  reason: collision with root package name */
    private final long f13829f;

    /* renamed from: g  reason: collision with root package name */
    private final int f13830g;

    /* renamed from: h  reason: collision with root package name */
    private final e.c f13831h;

    /* renamed from: i  reason: collision with root package name */
    protected final b[] f13832i;

    /* renamed from: j  reason: collision with root package name */
    private g f13833j;

    /* renamed from: k  reason: collision with root package name */
    private ud.c f13834k;

    /* renamed from: l  reason: collision with root package name */
    private int f13835l;

    /* renamed from: m  reason: collision with root package name */
    private IOException f13836m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f13837n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements a.InterfaceC0167a {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f13838a;

        /* renamed from: b  reason: collision with root package name */
        private final int f13839b;

        /* renamed from: c  reason: collision with root package name */
        private final g.a f13840c;

        public a(DataSource.Factory factory) {
            this(factory, 1);
        }

        @Override // com.google.android.exoplayer2.source.dash.a.InterfaceC0167a
        public com.google.android.exoplayer2.source.dash.a a(u uVar, ud.c cVar, td.b bVar, int i10, int[] iArr, com.google.android.exoplayer2.trackselection.g gVar, int i11, long j10, boolean z10, List list, e.c cVar2, c0 c0Var, t1 t1Var, le.g gVar2) {
            DataSource createDataSource = this.f13838a.createDataSource();
            if (c0Var != null) {
                createDataSource.j(c0Var);
            }
            return new c(this.f13840c, uVar, cVar, bVar, i10, iArr, gVar, i11, createDataSource, j10, this.f13839b, z10, list, cVar2, t1Var, gVar2);
        }

        public a(DataSource.Factory factory, int i10) {
            this(sd.e.f48936u, factory, i10);
        }

        public a(g.a aVar, DataSource.Factory factory, int i10) {
            this.f13840c = aVar;
            this.f13838a = factory;
            this.f13839b = i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final sd.g f13841a;

        /* renamed from: b  reason: collision with root package name */
        public final j f13842b;

        /* renamed from: c  reason: collision with root package name */
        public final ud.b f13843c;

        /* renamed from: d  reason: collision with root package name */
        public final f f13844d;

        /* renamed from: e  reason: collision with root package name */
        private final long f13845e;

        /* renamed from: f  reason: collision with root package name */
        private final long f13846f;

        b(long j10, j jVar, ud.b bVar, sd.g gVar, long j11, f fVar) {
            this.f13845e = j10;
            this.f13842b = jVar;
            this.f13843c = bVar;
            this.f13846f = j11;
            this.f13841a = gVar;
            this.f13844d = fVar;
        }

        b b(long j10, j jVar) {
            long f10;
            long f11;
            f l10 = this.f13842b.l();
            f l11 = jVar.l();
            if (l10 == null) {
                return new b(j10, jVar, this.f13843c, this.f13841a, this.f13846f, l10);
            }
            if (!l10.h()) {
                return new b(j10, jVar, this.f13843c, this.f13841a, this.f13846f, l11);
            }
            long g10 = l10.g(j10);
            if (g10 == 0) {
                return new b(j10, jVar, this.f13843c, this.f13841a, this.f13846f, l11);
            }
            long i10 = l10.i();
            long b10 = l10.b(i10);
            long j11 = g10 + i10;
            long j12 = j11 - 1;
            long b11 = l10.b(j12) + l10.a(j12, j10);
            long i11 = l11.i();
            long b12 = l11.b(i11);
            long j13 = this.f13846f;
            int i12 = (b11 > b12 ? 1 : (b11 == b12 ? 0 : -1));
            if (i12 == 0) {
                f10 = j11 - i11;
            } else if (i12 >= 0) {
                if (b12 < b10) {
                    f11 = j13 - (l11.f(b10, j10) - i10);
                    return new b(j10, jVar, this.f13843c, this.f13841a, f11, l11);
                }
                f10 = l10.f(b12, j10) - i11;
            } else {
                throw new qd.b();
            }
            f11 = j13 + f10;
            return new b(j10, jVar, this.f13843c, this.f13841a, f11, l11);
        }

        b c(f fVar) {
            return new b(this.f13845e, this.f13842b, this.f13843c, this.f13841a, this.f13846f, fVar);
        }

        b d(ud.b bVar) {
            return new b(this.f13845e, this.f13842b, bVar, this.f13841a, this.f13846f, this.f13844d);
        }

        public long e(long j10) {
            return this.f13844d.c(this.f13845e, j10) + this.f13846f;
        }

        public long f() {
            return this.f13844d.i() + this.f13846f;
        }

        public long g(long j10) {
            return (e(j10) + this.f13844d.j(this.f13845e, j10)) - 1;
        }

        public long h() {
            return this.f13844d.g(this.f13845e);
        }

        public long i(long j10) {
            return k(j10) + this.f13844d.a(j10 - this.f13846f, this.f13845e);
        }

        public long j(long j10) {
            return this.f13844d.f(j10, this.f13845e) + this.f13846f;
        }

        public long k(long j10) {
            return this.f13844d.b(j10 - this.f13846f);
        }

        public i l(long j10) {
            return this.f13844d.e(j10 - this.f13846f);
        }

        public boolean m(long j10, long j11) {
            if (this.f13844d.h() || j11 == -9223372036854775807L || i(j10) <= j11) {
                return true;
            }
            return false;
        }
    }

    /* renamed from: com.google.android.exoplayer2.source.dash.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    protected static final class C0168c extends sd.b {

        /* renamed from: e  reason: collision with root package name */
        private final b f13847e;

        /* renamed from: f  reason: collision with root package name */
        private final long f13848f;

        public C0168c(b bVar, long j10, long j11, long j12) {
            super(j10, j11);
            this.f13847e = bVar;
            this.f13848f = j12;
        }

        @Override // sd.o
        public long a() {
            c();
            return this.f13847e.k(d());
        }

        @Override // sd.o
        public long b() {
            c();
            return this.f13847e.i(d());
        }
    }

    public c(g.a aVar, u uVar, ud.c cVar, td.b bVar, int i10, int[] iArr, com.google.android.exoplayer2.trackselection.g gVar, int i11, DataSource dataSource, long j10, int i12, boolean z10, List list, e.c cVar2, t1 t1Var, le.g gVar2) {
        this.f13824a = uVar;
        this.f13834k = cVar;
        this.f13825b = bVar;
        this.f13826c = iArr;
        this.f13833j = gVar;
        int i13 = i11;
        this.f13827d = i13;
        this.f13828e = dataSource;
        this.f13835l = i10;
        this.f13829f = j10;
        this.f13830g = i12;
        e.c cVar3 = cVar2;
        this.f13831h = cVar3;
        long g10 = cVar.g(i10);
        ArrayList n10 = n();
        this.f13832i = new b[gVar.length()];
        int i14 = 0;
        while (i14 < this.f13832i.length) {
            j jVar = (j) n10.get(gVar.e(i14));
            ud.b j11 = bVar.j(jVar.f50215c);
            b[] bVarArr = this.f13832i;
            ud.b bVar2 = j11 == null ? (ud.b) jVar.f50215c.get(0) : j11;
            sd.g a10 = aVar.a(i13, jVar.f50214b, z10, list, cVar3, t1Var);
            long j12 = g10;
            bVarArr[i14] = new b(j12, jVar, bVar2, a10, 0L, jVar.l());
            i14++;
            cVar3 = cVar2;
            g10 = j12;
            i13 = i11;
        }
    }

    private h.a k(com.google.android.exoplayer2.trackselection.g gVar, List list) {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        int length = gVar.length();
        int i10 = 0;
        for (int i11 = 0; i11 < length; i11++) {
            if (gVar.a(i11, elapsedRealtime)) {
                i10++;
            }
        }
        int f10 = td.b.f(list);
        return new h.a(f10, f10 - this.f13825b.g(list), length, i10);
    }

    private long l(long j10, long j11) {
        if (this.f13834k.f50167d && this.f13832i[0].h() != 0) {
            return Math.max(0L, Math.min(m(j10), this.f13832i[0].i(this.f13832i[0].g(j10))) - j11);
        }
        return -9223372036854775807L;
    }

    private long m(long j10) {
        ud.c cVar = this.f13834k;
        long j11 = cVar.f50164a;
        if (j11 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        return j10 - w0.K0(j11 + cVar.d(this.f13835l).f50200b);
    }

    private ArrayList n() {
        List list = this.f13834k.d(this.f13835l).f50201c;
        ArrayList arrayList = new ArrayList();
        for (int i10 : this.f13826c) {
            arrayList.addAll(((ud.a) list.get(i10)).f50156c);
        }
        return arrayList;
    }

    private long o(b bVar, n nVar, long j10, long j11, long j12) {
        if (nVar != null) {
            return nVar.g();
        }
        return w0.r(bVar.j(j10), j11, j12);
    }

    private b r(int i10) {
        b bVar = this.f13832i[i10];
        ud.b j10 = this.f13825b.j(bVar.f13842b.f50215c);
        if (j10 != null && !j10.equals(bVar.f13843c)) {
            b d10 = bVar.d(j10);
            this.f13832i[i10] = d10;
            return d10;
        }
        return bVar;
    }

    @Override // sd.j
    public void a() {
        IOException iOException = this.f13836m;
        if (iOException == null) {
            this.f13824a.a();
            return;
        }
        throw iOException;
    }

    @Override // com.google.android.exoplayer2.source.dash.a
    public void b(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f13833j = gVar;
    }

    @Override // sd.j
    public void d(long j10, long j11, List list, sd.h hVar) {
        n nVar;
        ud.c cVar;
        boolean z10;
        boolean z11;
        long j12;
        boolean z12;
        i iVar;
        boolean z13;
        o[] oVarArr;
        long j13;
        int i10;
        int i11;
        c cVar2;
        n nVar2;
        c cVar3 = this;
        if (cVar3.f13836m == null) {
            long j14 = j11 - j10;
            long K0 = w0.K0(cVar3.f13834k.f50164a) + w0.K0(cVar3.f13834k.d(cVar3.f13835l).f50200b) + j11;
            e.c cVar4 = cVar3.f13831h;
            if (cVar4 != null && cVar4.h(K0)) {
                return;
            }
            long K02 = w0.K0(w0.f0(cVar3.f13829f));
            long m10 = cVar3.m(K02);
            i iVar2 = null;
            boolean z14 = true;
            if (list.isEmpty()) {
                nVar = null;
            } else {
                nVar = (n) list.get(list.size() - 1);
            }
            int length = cVar3.f13833j.length();
            o[] oVarArr2 = new o[length];
            int i12 = 0;
            while (i12 < length) {
                b bVar = cVar3.f13832i[i12];
                if (bVar.f13844d == null) {
                    oVarArr2[i12] = o.f48998a;
                    cVar2 = cVar3;
                    nVar2 = nVar;
                    z13 = z14;
                    oVarArr = oVarArr2;
                    j13 = j14;
                    i11 = length;
                    i10 = i12;
                } else {
                    o[] oVarArr3 = oVarArr2;
                    long e10 = bVar.e(K02);
                    z13 = z14;
                    oVarArr = oVarArr3;
                    n nVar3 = nVar;
                    long g10 = bVar.g(K02);
                    j13 = j14;
                    i10 = i12;
                    i11 = length;
                    long o10 = cVar3.o(bVar, nVar3, j11, e10, g10);
                    cVar2 = cVar3;
                    nVar2 = nVar3;
                    if (o10 < e10) {
                        oVarArr[i10] = o.f48998a;
                    } else {
                        oVarArr[i10] = new C0168c(cVar2.r(i10), o10, g10, m10);
                    }
                }
                i12 = i10 + 1;
                cVar3 = cVar2;
                length = i11;
                nVar = nVar2;
                oVarArr2 = oVarArr;
                z14 = z13;
                j14 = j13;
            }
            c cVar5 = cVar3;
            n nVar4 = nVar;
            boolean z15 = z14;
            o[] oVarArr4 = oVarArr2;
            cVar5.f13833j.l(j10, j14, cVar5.l(K02, j10), list, oVarArr4);
            b r10 = cVar5.r(cVar5.f13833j.c());
            sd.g gVar = r10.f13841a;
            if (gVar != null) {
                j jVar = r10.f13842b;
                if (gVar.d() == null) {
                    iVar = jVar.n();
                } else {
                    iVar = null;
                }
                if (r10.f13844d == null) {
                    iVar2 = jVar.m();
                }
                i iVar3 = iVar2;
                if (iVar != null || iVar3 != null) {
                    hVar.f48963a = cVar5.p(r10, cVar5.f13828e, cVar5.f13833j.q(), cVar5.f13833j.r(), cVar5.f13833j.h(), iVar, iVar3, null);
                    return;
                }
            }
            long j15 = r10.f13845e;
            if (cVar5.f13834k.f50167d && cVar5.f13835l == cVar.e() - 1) {
                z10 = z15;
            } else {
                z10 = false;
            }
            if (z10 && j15 == -9223372036854775807L) {
                z11 = false;
            } else {
                z11 = z15;
            }
            if (r10.h() == 0) {
                hVar.f48964b = z11;
                return;
            }
            long e11 = r10.e(K02);
            long g11 = r10.g(K02);
            if (z10) {
                long i13 = r10.i(g11);
                if (i13 + (i13 - r10.k(g11)) >= j15) {
                    z12 = z15;
                } else {
                    z12 = false;
                }
                z11 &= z12;
            }
            boolean z16 = z11;
            long o11 = cVar5.o(r10, nVar4, j11, e11, g11);
            if (o11 < e11) {
                cVar5.f13836m = new qd.b();
                return;
            }
            int i14 = (o11 > g11 ? 1 : (o11 == g11 ? 0 : -1));
            if (i14 <= 0 && (!cVar5.f13837n || i14 < 0)) {
                if (z16 && r10.k(o11) >= j15) {
                    hVar.f48964b = z15;
                    return;
                }
                int min = (int) Math.min(cVar5.f13830g, (g11 - o11) + 1);
                if (j15 != -9223372036854775807L) {
                    while (min > 1 && r10.k((min + o11) - 1) >= j15) {
                        min--;
                    }
                }
                if (list.isEmpty()) {
                    j12 = j11;
                } else {
                    j12 = -9223372036854775807L;
                }
                hVar.f48963a = cVar5.q(r10, cVar5.f13828e, cVar5.f13827d, cVar5.f13833j.q(), cVar5.f13833j.r(), cVar5.f13833j.h(), o11, min, j12, m10, null);
                return;
            }
            hVar.f48964b = z16;
        }
    }

    @Override // sd.j
    public long e(long j10, t0 t0Var) {
        long j11;
        long j12 = j10;
        b[] bVarArr = this.f13832i;
        int length = bVarArr.length;
        int i10 = 0;
        while (i10 < length) {
            b bVar = bVarArr[i10];
            if (bVar.f13844d != null) {
                long h10 = bVar.h();
                if (h10 != 0) {
                    long j13 = bVar.j(j12);
                    long k10 = bVar.k(j13);
                    if (k10 < j12 && (h10 == -1 || j13 < (bVar.f() + h10) - 1)) {
                        j11 = bVar.k(j13 + 1);
                    } else {
                        j11 = k10;
                    }
                    return t0Var.a(j12, k10, j11);
                }
            }
            i10++;
            j12 = j10;
        }
        return j10;
    }

    @Override // sd.j
    public boolean f(sd.f fVar, boolean z10, h.c cVar, h hVar) {
        h.b c10;
        if (!z10) {
            return false;
        }
        e.c cVar2 = this.f13831h;
        if (cVar2 != null && cVar2.j(fVar)) {
            return true;
        }
        if (!this.f13834k.f50167d && (fVar instanceof n)) {
            IOException iOException = cVar.f14481c;
            if ((iOException instanceof g.f) && ((g.f) iOException).f14467o == 404) {
                b bVar = this.f13832i[this.f13833j.o(fVar.f48957d)];
                long h10 = bVar.h();
                if (h10 != -1 && h10 != 0) {
                    if (((n) fVar).g() > (bVar.f() + h10) - 1) {
                        this.f13837n = true;
                        return true;
                    }
                }
            }
        }
        b bVar2 = this.f13832i[this.f13833j.o(fVar.f48957d)];
        ud.b j10 = this.f13825b.j(bVar2.f13842b.f50215c);
        if (j10 != null && !bVar2.f13843c.equals(j10)) {
            return true;
        }
        h.a k10 = k(this.f13833j, bVar2.f13842b.f50215c);
        if ((k10.a(2) || k10.a(1)) && (c10 = hVar.c(k10, cVar)) != null && k10.a(c10.f14477a)) {
            int i10 = c10.f14477a;
            if (i10 == 2) {
                com.google.android.exoplayer2.trackselection.g gVar = this.f13833j;
                return gVar.f(gVar.o(fVar.f48957d), c10.f14478b);
            } else if (i10 == 1) {
                this.f13825b.e(bVar2.f13843c, c10.f14478b);
                return true;
            }
        }
        return false;
    }

    @Override // sd.j
    public boolean g(long j10, sd.f fVar, List list) {
        if (this.f13836m != null) {
            return false;
        }
        return this.f13833j.b(j10, fVar, list);
    }

    @Override // sd.j
    public void h(sd.f fVar) {
        tc.c b10;
        if (fVar instanceof m) {
            int o10 = this.f13833j.o(((m) fVar).f48957d);
            b bVar = this.f13832i[o10];
            if (bVar.f13844d == null && (b10 = bVar.f13841a.b()) != null) {
                this.f13832i[o10] = bVar.c(new td.h(b10, bVar.f13842b.f50216d));
            }
        }
        e.c cVar = this.f13831h;
        if (cVar != null) {
            cVar.i(fVar);
        }
    }

    @Override // com.google.android.exoplayer2.source.dash.a
    public void i(ud.c cVar, int i10) {
        try {
            this.f13834k = cVar;
            this.f13835l = i10;
            long g10 = cVar.g(i10);
            ArrayList n10 = n();
            for (int i11 = 0; i11 < this.f13832i.length; i11++) {
                b[] bVarArr = this.f13832i;
                bVarArr[i11] = bVarArr[i11].b(g10, (j) n10.get(this.f13833j.e(i11)));
            }
        } catch (qd.b e10) {
            this.f13836m = e10;
        }
    }

    @Override // sd.j
    public int j(long j10, List list) {
        if (this.f13836m == null && this.f13833j.length() >= 2) {
            return this.f13833j.n(j10, list);
        }
        return list.size();
    }

    protected sd.f p(b bVar, DataSource dataSource, Format format, int i10, Object obj, i iVar, i iVar2, le.h hVar) {
        i iVar3 = iVar;
        j jVar = bVar.f13842b;
        if (iVar3 != null) {
            i a10 = iVar3.a(iVar2, bVar.f13843c.f50160a);
            if (a10 != null) {
                iVar3 = a10;
            }
        } else {
            iVar3 = iVar2;
        }
        return new m(dataSource, td.g.a(jVar, bVar.f13843c.f50160a, iVar3, 0, t.j()), format, i10, obj, bVar.f13841a);
    }

    protected sd.f q(b bVar, DataSource dataSource, int i10, Format format, int i11, Object obj, long j10, int i12, long j11, long j12, le.h hVar) {
        j jVar = bVar.f13842b;
        long k10 = bVar.k(j10);
        i l10 = bVar.l(j10);
        if (bVar.f13841a == null) {
            int i13 = 8;
            long i14 = bVar.i(j10);
            if (bVar.m(j10, j12)) {
                i13 = 0;
            }
            return new p(dataSource, td.g.a(jVar, bVar.f13843c.f50160a, l10, i13, t.j()), format, i11, obj, k10, i14, j10, i10, format);
        }
        int i15 = 8;
        int i16 = 1;
        int i17 = 1;
        while (i16 < i12) {
            i a10 = l10.a(bVar.l(j10 + i16), bVar.f13843c.f50160a);
            if (a10 == null) {
                break;
            }
            i17++;
            i16++;
            l10 = a10;
        }
        long j13 = (j10 + i17) - 1;
        int i18 = i17;
        long i19 = bVar.i(j13);
        long j14 = bVar.f13845e;
        if (j14 == -9223372036854775807L || j14 > i19) {
            j14 = -9223372036854775807L;
        }
        if (bVar.m(j13, j12)) {
            i15 = 0;
        }
        return new k(dataSource, td.g.a(jVar, bVar.f13843c.f50160a, l10, i15, t.j()), format, i11, obj, k10, i19, j11, j14, j10, i18, -jVar.f50216d, bVar.f13841a);
    }

    @Override // sd.j
    public void release() {
        for (b bVar : this.f13832i) {
            sd.g gVar = bVar.f13841a;
            if (gVar != null) {
                gVar.release();
            }
        }
    }
}
