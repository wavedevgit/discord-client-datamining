package com.google.android.exoplayer2.source.dash;

import android.os.SystemClock;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.dash.a;
import com.google.android.exoplayer2.source.dash.e;
import com.google.android.exoplayer2.trackselection.g;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.h;
import com.google.android.exoplayer2.upstream.i;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import mc.t0;
import me.c0;
import me.u;
import nc.t1;
import oe.w0;
import qi.t;
import td.g;
import td.k;
import td.m;
import td.n;
import td.o;
import td.p;
import ud.f;
import vd.i;
import vd.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class c implements com.google.android.exoplayer2.source.dash.a {

    /* renamed from: a  reason: collision with root package name */
    private final u f13484a;

    /* renamed from: b  reason: collision with root package name */
    private final ud.b f13485b;

    /* renamed from: c  reason: collision with root package name */
    private final int[] f13486c;

    /* renamed from: d  reason: collision with root package name */
    private final int f13487d;

    /* renamed from: e  reason: collision with root package name */
    private final DataSource f13488e;

    /* renamed from: f  reason: collision with root package name */
    private final long f13489f;

    /* renamed from: g  reason: collision with root package name */
    private final int f13490g;

    /* renamed from: h  reason: collision with root package name */
    private final e.c f13491h;

    /* renamed from: i  reason: collision with root package name */
    protected final b[] f13492i;

    /* renamed from: j  reason: collision with root package name */
    private g f13493j;

    /* renamed from: k  reason: collision with root package name */
    private vd.c f13494k;

    /* renamed from: l  reason: collision with root package name */
    private int f13495l;

    /* renamed from: m  reason: collision with root package name */
    private IOException f13496m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f13497n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements a.InterfaceC0166a {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f13498a;

        /* renamed from: b  reason: collision with root package name */
        private final int f13499b;

        /* renamed from: c  reason: collision with root package name */
        private final g.a f13500c;

        public a(DataSource.Factory factory) {
            this(factory, 1);
        }

        @Override // com.google.android.exoplayer2.source.dash.a.InterfaceC0166a
        public com.google.android.exoplayer2.source.dash.a a(u uVar, vd.c cVar, ud.b bVar, int i10, int[] iArr, com.google.android.exoplayer2.trackselection.g gVar, int i11, long j10, boolean z10, List list, e.c cVar2, c0 c0Var, t1 t1Var, me.g gVar2) {
            DataSource createDataSource = this.f13498a.createDataSource();
            if (c0Var != null) {
                createDataSource.i(c0Var);
            }
            return new c(this.f13500c, uVar, cVar, bVar, i10, iArr, gVar, i11, createDataSource, j10, this.f13499b, z10, list, cVar2, t1Var, gVar2);
        }

        public a(DataSource.Factory factory, int i10) {
            this(td.e.f48688u, factory, i10);
        }

        public a(g.a aVar, DataSource.Factory factory, int i10) {
            this.f13500c = aVar;
            this.f13498a = factory;
            this.f13499b = i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final td.g f13501a;

        /* renamed from: b  reason: collision with root package name */
        public final j f13502b;

        /* renamed from: c  reason: collision with root package name */
        public final vd.b f13503c;

        /* renamed from: d  reason: collision with root package name */
        public final f f13504d;

        /* renamed from: e  reason: collision with root package name */
        private final long f13505e;

        /* renamed from: f  reason: collision with root package name */
        private final long f13506f;

        b(long j10, j jVar, vd.b bVar, td.g gVar, long j11, f fVar) {
            this.f13505e = j10;
            this.f13502b = jVar;
            this.f13503c = bVar;
            this.f13506f = j11;
            this.f13501a = gVar;
            this.f13504d = fVar;
        }

        b b(long j10, j jVar) {
            long f10;
            long f11;
            f l10 = this.f13502b.l();
            f l11 = jVar.l();
            if (l10 == null) {
                return new b(j10, jVar, this.f13503c, this.f13501a, this.f13506f, l10);
            }
            if (!l10.h()) {
                return new b(j10, jVar, this.f13503c, this.f13501a, this.f13506f, l11);
            }
            long g10 = l10.g(j10);
            if (g10 == 0) {
                return new b(j10, jVar, this.f13503c, this.f13501a, this.f13506f, l11);
            }
            long i10 = l10.i();
            long b10 = l10.b(i10);
            long j11 = g10 + i10;
            long j12 = j11 - 1;
            long b11 = l10.b(j12) + l10.a(j12, j10);
            long i11 = l11.i();
            long b12 = l11.b(i11);
            long j13 = this.f13506f;
            int i12 = (b11 > b12 ? 1 : (b11 == b12 ? 0 : -1));
            if (i12 == 0) {
                f10 = j11 - i11;
            } else if (i12 >= 0) {
                if (b12 < b10) {
                    f11 = j13 - (l11.f(b10, j10) - i10);
                    return new b(j10, jVar, this.f13503c, this.f13501a, f11, l11);
                }
                f10 = l10.f(b12, j10) - i11;
            } else {
                throw new rd.b();
            }
            f11 = j13 + f10;
            return new b(j10, jVar, this.f13503c, this.f13501a, f11, l11);
        }

        b c(f fVar) {
            return new b(this.f13505e, this.f13502b, this.f13503c, this.f13501a, this.f13506f, fVar);
        }

        b d(vd.b bVar) {
            return new b(this.f13505e, this.f13502b, bVar, this.f13501a, this.f13506f, this.f13504d);
        }

        public long e(long j10) {
            return this.f13504d.c(this.f13505e, j10) + this.f13506f;
        }

        public long f() {
            return this.f13504d.i() + this.f13506f;
        }

        public long g(long j10) {
            return (e(j10) + this.f13504d.j(this.f13505e, j10)) - 1;
        }

        public long h() {
            return this.f13504d.g(this.f13505e);
        }

        public long i(long j10) {
            return k(j10) + this.f13504d.a(j10 - this.f13506f, this.f13505e);
        }

        public long j(long j10) {
            return this.f13504d.f(j10, this.f13505e) + this.f13506f;
        }

        public long k(long j10) {
            return this.f13504d.b(j10 - this.f13506f);
        }

        public i l(long j10) {
            return this.f13504d.e(j10 - this.f13506f);
        }

        public boolean m(long j10, long j11) {
            if (this.f13504d.h() || j11 == -9223372036854775807L || i(j10) <= j11) {
                return true;
            }
            return false;
        }
    }

    /* renamed from: com.google.android.exoplayer2.source.dash.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    protected static final class C0167c extends td.b {

        /* renamed from: e  reason: collision with root package name */
        private final b f13507e;

        /* renamed from: f  reason: collision with root package name */
        private final long f13508f;

        public C0167c(b bVar, long j10, long j11, long j12) {
            super(j10, j11);
            this.f13507e = bVar;
            this.f13508f = j12;
        }

        @Override // td.o
        public long a() {
            c();
            return this.f13507e.k(d());
        }

        @Override // td.o
        public long b() {
            c();
            return this.f13507e.i(d());
        }
    }

    public c(g.a aVar, u uVar, vd.c cVar, ud.b bVar, int i10, int[] iArr, com.google.android.exoplayer2.trackselection.g gVar, int i11, DataSource dataSource, long j10, int i12, boolean z10, List list, e.c cVar2, t1 t1Var, me.g gVar2) {
        this.f13484a = uVar;
        this.f13494k = cVar;
        this.f13485b = bVar;
        this.f13486c = iArr;
        this.f13493j = gVar;
        int i13 = i11;
        this.f13487d = i13;
        this.f13488e = dataSource;
        this.f13495l = i10;
        this.f13489f = j10;
        this.f13490g = i12;
        e.c cVar3 = cVar2;
        this.f13491h = cVar3;
        long g10 = cVar.g(i10);
        ArrayList n10 = n();
        this.f13492i = new b[gVar.length()];
        int i14 = 0;
        while (i14 < this.f13492i.length) {
            j jVar = (j) n10.get(gVar.d(i14));
            vd.b j11 = bVar.j(jVar.f51518c);
            b[] bVarArr = this.f13492i;
            vd.b bVar2 = j11 == null ? (vd.b) jVar.f51518c.get(0) : j11;
            td.g a10 = aVar.a(i13, jVar.f51517b, z10, list, cVar3, t1Var);
            long j12 = g10;
            bVarArr[i14] = new b(j12, jVar, bVar2, a10, 0L, jVar.l());
            i14++;
            cVar3 = cVar2;
            g10 = j12;
            i13 = i11;
        }
    }

    private i.a k(com.google.android.exoplayer2.trackselection.g gVar, List list) {
        long elapsedRealtime = SystemClock.elapsedRealtime();
        int length = gVar.length();
        int i10 = 0;
        for (int i11 = 0; i11 < length; i11++) {
            if (gVar.a(i11, elapsedRealtime)) {
                i10++;
            }
        }
        int f10 = ud.b.f(list);
        return new i.a(f10, f10 - this.f13485b.g(list), length, i10);
    }

    private long l(long j10, long j11) {
        if (this.f13494k.f51470d && this.f13492i[0].h() != 0) {
            return Math.max(0L, Math.min(m(j10), this.f13492i[0].i(this.f13492i[0].g(j10))) - j11);
        }
        return -9223372036854775807L;
    }

    private long m(long j10) {
        vd.c cVar = this.f13494k;
        long j11 = cVar.f51467a;
        if (j11 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        return j10 - w0.K0(j11 + cVar.d(this.f13495l).f51503b);
    }

    private ArrayList n() {
        List list = this.f13494k.d(this.f13495l).f51504c;
        ArrayList arrayList = new ArrayList();
        for (int i10 : this.f13486c) {
            arrayList.addAll(((vd.a) list.get(i10)).f51459c);
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
        b bVar = this.f13492i[i10];
        vd.b j10 = this.f13485b.j(bVar.f13502b.f51518c);
        if (j10 != null && !j10.equals(bVar.f13503c)) {
            b d10 = bVar.d(j10);
            this.f13492i[i10] = d10;
            return d10;
        }
        return bVar;
    }

    @Override // td.j
    public void a() {
        IOException iOException = this.f13496m;
        if (iOException == null) {
            this.f13484a.a();
            return;
        }
        throw iOException;
    }

    @Override // com.google.android.exoplayer2.source.dash.a
    public void b(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f13493j = gVar;
    }

    @Override // td.j
    public boolean c(td.f fVar, boolean z10, i.c cVar, com.google.android.exoplayer2.upstream.i iVar) {
        i.b c10;
        if (!z10) {
            return false;
        }
        e.c cVar2 = this.f13491h;
        if (cVar2 != null && cVar2.j(fVar)) {
            return true;
        }
        if (!this.f13494k.f51470d && (fVar instanceof n)) {
            IOException iOException = cVar.f14141c;
            if ((iOException instanceof h.f) && ((h.f) iOException).f14127o == 404) {
                b bVar = this.f13492i[this.f13493j.o(fVar.f48709d)];
                long h10 = bVar.h();
                if (h10 != -1 && h10 != 0) {
                    if (((n) fVar).g() > (bVar.f() + h10) - 1) {
                        this.f13497n = true;
                        return true;
                    }
                }
            }
        }
        b bVar2 = this.f13492i[this.f13493j.o(fVar.f48709d)];
        vd.b j10 = this.f13485b.j(bVar2.f13502b.f51518c);
        if (j10 != null && !bVar2.f13503c.equals(j10)) {
            return true;
        }
        i.a k10 = k(this.f13493j, bVar2.f13502b.f51518c);
        if ((k10.a(2) || k10.a(1)) && (c10 = iVar.c(k10, cVar)) != null && k10.a(c10.f14137a)) {
            int i10 = c10.f14137a;
            if (i10 == 2) {
                com.google.android.exoplayer2.trackselection.g gVar = this.f13493j;
                return gVar.f(gVar.o(fVar.f48709d), c10.f14138b);
            } else if (i10 == 1) {
                this.f13485b.e(bVar2.f13503c, c10.f14138b);
                return true;
            }
        }
        return false;
    }

    @Override // td.j
    public long e(long j10, t0 t0Var) {
        long j11;
        long j12 = j10;
        b[] bVarArr = this.f13492i;
        int length = bVarArr.length;
        int i10 = 0;
        while (i10 < length) {
            b bVar = bVarArr[i10];
            if (bVar.f13504d != null) {
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

    @Override // com.google.android.exoplayer2.source.dash.a
    public void f(vd.c cVar, int i10) {
        try {
            this.f13494k = cVar;
            this.f13495l = i10;
            long g10 = cVar.g(i10);
            ArrayList n10 = n();
            for (int i11 = 0; i11 < this.f13492i.length; i11++) {
                b[] bVarArr = this.f13492i;
                bVarArr[i11] = bVarArr[i11].b(g10, (j) n10.get(this.f13493j.d(i11)));
            }
        } catch (rd.b e10) {
            this.f13496m = e10;
        }
    }

    @Override // td.j
    public void g(td.f fVar) {
        uc.c d10;
        if (fVar instanceof m) {
            int o10 = this.f13493j.o(((m) fVar).f48709d);
            b bVar = this.f13492i[o10];
            if (bVar.f13504d == null && (d10 = bVar.f13501a.d()) != null) {
                this.f13492i[o10] = bVar.c(new ud.h(d10, bVar.f13502b.f51519d));
            }
        }
        e.c cVar = this.f13491h;
        if (cVar != null) {
            cVar.i(fVar);
        }
    }

    @Override // td.j
    public int h(long j10, List list) {
        if (this.f13496m == null && this.f13493j.length() >= 2) {
            return this.f13493j.n(j10, list);
        }
        return list.size();
    }

    @Override // td.j
    public boolean i(long j10, td.f fVar, List list) {
        if (this.f13496m != null) {
            return false;
        }
        return this.f13493j.k(j10, fVar, list);
    }

    @Override // td.j
    public void j(long j10, long j11, List list, td.h hVar) {
        n nVar;
        vd.c cVar;
        boolean z10;
        boolean z11;
        long j12;
        boolean z12;
        vd.i iVar;
        boolean z13;
        o[] oVarArr;
        long j13;
        int i10;
        int i11;
        c cVar2;
        n nVar2;
        c cVar3 = this;
        if (cVar3.f13496m == null) {
            long j14 = j11 - j10;
            long K0 = w0.K0(cVar3.f13494k.f51467a) + w0.K0(cVar3.f13494k.d(cVar3.f13495l).f51503b) + j11;
            e.c cVar4 = cVar3.f13491h;
            if (cVar4 != null && cVar4.h(K0)) {
                return;
            }
            long K02 = w0.K0(w0.f0(cVar3.f13489f));
            long m10 = cVar3.m(K02);
            vd.i iVar2 = null;
            boolean z14 = true;
            if (list.isEmpty()) {
                nVar = null;
            } else {
                nVar = (n) list.get(list.size() - 1);
            }
            int length = cVar3.f13493j.length();
            o[] oVarArr2 = new o[length];
            int i12 = 0;
            while (i12 < length) {
                b bVar = cVar3.f13492i[i12];
                if (bVar.f13504d == null) {
                    oVarArr2[i12] = o.f48750a;
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
                        oVarArr[i10] = o.f48750a;
                    } else {
                        oVarArr[i10] = new C0167c(cVar2.r(i10), o10, g10, m10);
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
            cVar5.f13493j.e(j10, j14, cVar5.l(K02, j10), list, oVarArr4);
            b r10 = cVar5.r(cVar5.f13493j.b());
            td.g gVar = r10.f13501a;
            if (gVar != null) {
                j jVar = r10.f13502b;
                if (gVar.e() == null) {
                    iVar = jVar.n();
                } else {
                    iVar = null;
                }
                if (r10.f13504d == null) {
                    iVar2 = jVar.m();
                }
                vd.i iVar3 = iVar2;
                if (iVar != null || iVar3 != null) {
                    hVar.f48715a = cVar5.p(r10, cVar5.f13488e, cVar5.f13493j.q(), cVar5.f13493j.r(), cVar5.f13493j.h(), iVar, iVar3, null);
                    return;
                }
            }
            long j15 = r10.f13505e;
            if (cVar5.f13494k.f51470d && cVar5.f13495l == cVar.e() - 1) {
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
                hVar.f48716b = z11;
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
                cVar5.f13496m = new rd.b();
                return;
            }
            int i14 = (o11 > g11 ? 1 : (o11 == g11 ? 0 : -1));
            if (i14 <= 0 && (!cVar5.f13497n || i14 < 0)) {
                if (z16 && r10.k(o11) >= j15) {
                    hVar.f48716b = z15;
                    return;
                }
                int min = (int) Math.min(cVar5.f13490g, (g11 - o11) + 1);
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
                hVar.f48715a = cVar5.q(r10, cVar5.f13488e, cVar5.f13487d, cVar5.f13493j.q(), cVar5.f13493j.r(), cVar5.f13493j.h(), o11, min, j12, m10, null);
                return;
            }
            hVar.f48716b = z16;
        }
    }

    protected td.f p(b bVar, DataSource dataSource, Format format, int i10, Object obj, vd.i iVar, vd.i iVar2, me.h hVar) {
        vd.i iVar3 = iVar;
        j jVar = bVar.f13502b;
        if (iVar3 != null) {
            vd.i a10 = iVar3.a(iVar2, bVar.f13503c.f51463a);
            if (a10 != null) {
                iVar3 = a10;
            }
        } else {
            iVar3 = iVar2;
        }
        return new m(dataSource, ud.g.a(jVar, bVar.f13503c.f51463a, iVar3, 0, t.j()), format, i10, obj, bVar.f13501a);
    }

    protected td.f q(b bVar, DataSource dataSource, int i10, Format format, int i11, Object obj, long j10, int i12, long j11, long j12, me.h hVar) {
        j jVar = bVar.f13502b;
        long k10 = bVar.k(j10);
        vd.i l10 = bVar.l(j10);
        if (bVar.f13501a == null) {
            int i13 = 8;
            long i14 = bVar.i(j10);
            if (bVar.m(j10, j12)) {
                i13 = 0;
            }
            return new p(dataSource, ud.g.a(jVar, bVar.f13503c.f51463a, l10, i13, t.j()), format, i11, obj, k10, i14, j10, i10, format);
        }
        int i15 = 8;
        int i16 = 1;
        int i17 = 1;
        while (i16 < i12) {
            vd.i a10 = l10.a(bVar.l(j10 + i16), bVar.f13503c.f51463a);
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
        long j14 = bVar.f13505e;
        if (j14 == -9223372036854775807L || j14 > i19) {
            j14 = -9223372036854775807L;
        }
        if (bVar.m(j13, j12)) {
            i15 = 0;
        }
        return new k(dataSource, ud.g.a(jVar, bVar.f13503c.f51463a, l10, i15, t.j()), format, i11, obj, k10, i19, j11, j14, j10, i18, -jVar.f51519d, bVar.f13501a);
    }

    @Override // td.j
    public void release() {
        for (b bVar : this.f13492i) {
            td.g gVar = bVar.f13501a;
            if (gVar != null) {
                gVar.release();
            }
        }
    }
}
