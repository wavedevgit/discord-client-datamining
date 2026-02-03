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
    private final u f12421a;

    /* renamed from: b  reason: collision with root package name */
    private final td.b f12422b;

    /* renamed from: c  reason: collision with root package name */
    private final int[] f12423c;

    /* renamed from: d  reason: collision with root package name */
    private final int f12424d;

    /* renamed from: e  reason: collision with root package name */
    private final DataSource f12425e;

    /* renamed from: f  reason: collision with root package name */
    private final long f12426f;

    /* renamed from: g  reason: collision with root package name */
    private final int f12427g;

    /* renamed from: h  reason: collision with root package name */
    private final e.c f12428h;

    /* renamed from: i  reason: collision with root package name */
    protected final b[] f12429i;

    /* renamed from: j  reason: collision with root package name */
    private g f12430j;

    /* renamed from: k  reason: collision with root package name */
    private ud.c f12431k;

    /* renamed from: l  reason: collision with root package name */
    private int f12432l;

    /* renamed from: m  reason: collision with root package name */
    private IOException f12433m;

    /* renamed from: n  reason: collision with root package name */
    private boolean f12434n;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a implements a.InterfaceC0153a {

        /* renamed from: a  reason: collision with root package name */
        private final DataSource.Factory f12435a;

        /* renamed from: b  reason: collision with root package name */
        private final int f12436b;

        /* renamed from: c  reason: collision with root package name */
        private final g.a f12437c;

        public a(DataSource.Factory factory) {
            this(factory, 1);
        }

        @Override // com.google.android.exoplayer2.source.dash.a.InterfaceC0153a
        public com.google.android.exoplayer2.source.dash.a a(u uVar, ud.c cVar, td.b bVar, int i10, int[] iArr, com.google.android.exoplayer2.trackselection.g gVar, int i11, long j10, boolean z10, List list, e.c cVar2, c0 c0Var, t1 t1Var, le.g gVar2) {
            DataSource createDataSource = this.f12435a.createDataSource();
            if (c0Var != null) {
                createDataSource.j(c0Var);
            }
            return new c(this.f12437c, uVar, cVar, bVar, i10, iArr, gVar, i11, createDataSource, j10, this.f12436b, z10, list, cVar2, t1Var, gVar2);
        }

        public a(DataSource.Factory factory, int i10) {
            this(sd.e.f49400u, factory, i10);
        }

        public a(g.a aVar, DataSource.Factory factory, int i10) {
            this.f12437c = aVar;
            this.f12435a = factory;
            this.f12436b = i10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        final sd.g f12438a;

        /* renamed from: b  reason: collision with root package name */
        public final j f12439b;

        /* renamed from: c  reason: collision with root package name */
        public final ud.b f12440c;

        /* renamed from: d  reason: collision with root package name */
        public final f f12441d;

        /* renamed from: e  reason: collision with root package name */
        private final long f12442e;

        /* renamed from: f  reason: collision with root package name */
        private final long f12443f;

        b(long j10, j jVar, ud.b bVar, sd.g gVar, long j11, f fVar) {
            this.f12442e = j10;
            this.f12439b = jVar;
            this.f12440c = bVar;
            this.f12443f = j11;
            this.f12438a = gVar;
            this.f12441d = fVar;
        }

        b b(long j10, j jVar) {
            long f10;
            long f11;
            f l10 = this.f12439b.l();
            f l11 = jVar.l();
            if (l10 == null) {
                return new b(j10, jVar, this.f12440c, this.f12438a, this.f12443f, l10);
            }
            if (!l10.h()) {
                return new b(j10, jVar, this.f12440c, this.f12438a, this.f12443f, l11);
            }
            long g10 = l10.g(j10);
            if (g10 == 0) {
                return new b(j10, jVar, this.f12440c, this.f12438a, this.f12443f, l11);
            }
            long i10 = l10.i();
            long b10 = l10.b(i10);
            long j11 = g10 + i10;
            long j12 = j11 - 1;
            long b11 = l10.b(j12) + l10.a(j12, j10);
            long i11 = l11.i();
            long b12 = l11.b(i11);
            long j13 = this.f12443f;
            int i12 = (b11 > b12 ? 1 : (b11 == b12 ? 0 : -1));
            if (i12 == 0) {
                f10 = j11 - i11;
            } else if (i12 >= 0) {
                if (b12 < b10) {
                    f11 = j13 - (l11.f(b10, j10) - i10);
                    return new b(j10, jVar, this.f12440c, this.f12438a, f11, l11);
                }
                f10 = l10.f(b12, j10) - i11;
            } else {
                throw new qd.b();
            }
            f11 = j13 + f10;
            return new b(j10, jVar, this.f12440c, this.f12438a, f11, l11);
        }

        b c(f fVar) {
            return new b(this.f12442e, this.f12439b, this.f12440c, this.f12438a, this.f12443f, fVar);
        }

        b d(ud.b bVar) {
            return new b(this.f12442e, this.f12439b, bVar, this.f12438a, this.f12443f, this.f12441d);
        }

        public long e(long j10) {
            return this.f12441d.c(this.f12442e, j10) + this.f12443f;
        }

        public long f() {
            return this.f12441d.i() + this.f12443f;
        }

        public long g(long j10) {
            return (e(j10) + this.f12441d.j(this.f12442e, j10)) - 1;
        }

        public long h() {
            return this.f12441d.g(this.f12442e);
        }

        public long i(long j10) {
            return k(j10) + this.f12441d.a(j10 - this.f12443f, this.f12442e);
        }

        public long j(long j10) {
            return this.f12441d.f(j10, this.f12442e) + this.f12443f;
        }

        public long k(long j10) {
            return this.f12441d.b(j10 - this.f12443f);
        }

        public i l(long j10) {
            return this.f12441d.e(j10 - this.f12443f);
        }

        public boolean m(long j10, long j11) {
            if (this.f12441d.h() || j11 == -9223372036854775807L || i(j10) <= j11) {
                return true;
            }
            return false;
        }
    }

    /* renamed from: com.google.android.exoplayer2.source.dash.c$c  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    protected static final class C0154c extends sd.b {

        /* renamed from: e  reason: collision with root package name */
        private final b f12444e;

        /* renamed from: f  reason: collision with root package name */
        private final long f12445f;

        public C0154c(b bVar, long j10, long j11, long j12) {
            super(j10, j11);
            this.f12444e = bVar;
            this.f12445f = j12;
        }

        @Override // sd.o
        public long a() {
            c();
            return this.f12444e.k(d());
        }

        @Override // sd.o
        public long b() {
            c();
            return this.f12444e.i(d());
        }
    }

    public c(g.a aVar, u uVar, ud.c cVar, td.b bVar, int i10, int[] iArr, com.google.android.exoplayer2.trackselection.g gVar, int i11, DataSource dataSource, long j10, int i12, boolean z10, List list, e.c cVar2, t1 t1Var, le.g gVar2) {
        this.f12421a = uVar;
        this.f12431k = cVar;
        this.f12422b = bVar;
        this.f12423c = iArr;
        this.f12430j = gVar;
        int i13 = i11;
        this.f12424d = i13;
        this.f12425e = dataSource;
        this.f12432l = i10;
        this.f12426f = j10;
        this.f12427g = i12;
        e.c cVar3 = cVar2;
        this.f12428h = cVar3;
        long g10 = cVar.g(i10);
        ArrayList n10 = n();
        this.f12429i = new b[gVar.length()];
        int i14 = 0;
        while (i14 < this.f12429i.length) {
            j jVar = (j) n10.get(gVar.e(i14));
            ud.b j11 = bVar.j(jVar.f50558c);
            b[] bVarArr = this.f12429i;
            ud.b bVar2 = j11 == null ? (ud.b) jVar.f50558c.get(0) : j11;
            sd.g a10 = aVar.a(i13, jVar.f50557b, z10, list, cVar3, t1Var);
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
        return new h.a(f10, f10 - this.f12422b.g(list), length, i10);
    }

    private long l(long j10, long j11) {
        if (this.f12431k.f50510d && this.f12429i[0].h() != 0) {
            return Math.max(0L, Math.min(m(j10), this.f12429i[0].i(this.f12429i[0].g(j10))) - j11);
        }
        return -9223372036854775807L;
    }

    private long m(long j10) {
        ud.c cVar = this.f12431k;
        long j11 = cVar.f50507a;
        if (j11 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        return j10 - w0.K0(j11 + cVar.d(this.f12432l).f50543b);
    }

    private ArrayList n() {
        List list = this.f12431k.d(this.f12432l).f50544c;
        ArrayList arrayList = new ArrayList();
        for (int i10 : this.f12423c) {
            arrayList.addAll(((ud.a) list.get(i10)).f50499c);
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
        b bVar = this.f12429i[i10];
        ud.b j10 = this.f12422b.j(bVar.f12439b.f50558c);
        if (j10 != null && !j10.equals(bVar.f12440c)) {
            b d10 = bVar.d(j10);
            this.f12429i[i10] = d10;
            return d10;
        }
        return bVar;
    }

    @Override // sd.j
    public void a() {
        IOException iOException = this.f12433m;
        if (iOException == null) {
            this.f12421a.a();
            return;
        }
        throw iOException;
    }

    @Override // com.google.android.exoplayer2.source.dash.a
    public void b(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f12430j = gVar;
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
        if (cVar3.f12433m == null) {
            long j14 = j11 - j10;
            long K0 = w0.K0(cVar3.f12431k.f50507a) + w0.K0(cVar3.f12431k.d(cVar3.f12432l).f50543b) + j11;
            e.c cVar4 = cVar3.f12428h;
            if (cVar4 != null && cVar4.h(K0)) {
                return;
            }
            long K02 = w0.K0(w0.f0(cVar3.f12426f));
            long m10 = cVar3.m(K02);
            i iVar2 = null;
            boolean z14 = true;
            if (list.isEmpty()) {
                nVar = null;
            } else {
                nVar = (n) list.get(list.size() - 1);
            }
            int length = cVar3.f12430j.length();
            o[] oVarArr2 = new o[length];
            int i12 = 0;
            while (i12 < length) {
                b bVar = cVar3.f12429i[i12];
                if (bVar.f12441d == null) {
                    oVarArr2[i12] = o.f49462a;
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
                        oVarArr[i10] = o.f49462a;
                    } else {
                        oVarArr[i10] = new C0154c(cVar2.r(i10), o10, g10, m10);
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
            cVar5.f12430j.l(j10, j14, cVar5.l(K02, j10), list, oVarArr4);
            b r10 = cVar5.r(cVar5.f12430j.c());
            sd.g gVar = r10.f12438a;
            if (gVar != null) {
                j jVar = r10.f12439b;
                if (gVar.d() == null) {
                    iVar = jVar.n();
                } else {
                    iVar = null;
                }
                if (r10.f12441d == null) {
                    iVar2 = jVar.m();
                }
                i iVar3 = iVar2;
                if (iVar != null || iVar3 != null) {
                    hVar.f49427a = cVar5.p(r10, cVar5.f12425e, cVar5.f12430j.q(), cVar5.f12430j.r(), cVar5.f12430j.h(), iVar, iVar3, null);
                    return;
                }
            }
            long j15 = r10.f12442e;
            if (cVar5.f12431k.f50510d && cVar5.f12432l == cVar.e() - 1) {
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
                hVar.f49428b = z11;
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
                cVar5.f12433m = new qd.b();
                return;
            }
            int i14 = (o11 > g11 ? 1 : (o11 == g11 ? 0 : -1));
            if (i14 <= 0 && (!cVar5.f12434n || i14 < 0)) {
                if (z16 && r10.k(o11) >= j15) {
                    hVar.f49428b = z15;
                    return;
                }
                int min = (int) Math.min(cVar5.f12427g, (g11 - o11) + 1);
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
                hVar.f49427a = cVar5.q(r10, cVar5.f12425e, cVar5.f12424d, cVar5.f12430j.q(), cVar5.f12430j.r(), cVar5.f12430j.h(), o11, min, j12, m10, null);
                return;
            }
            hVar.f49428b = z16;
        }
    }

    @Override // sd.j
    public long e(long j10, t0 t0Var) {
        long j11;
        long j12 = j10;
        b[] bVarArr = this.f12429i;
        int length = bVarArr.length;
        int i10 = 0;
        while (i10 < length) {
            b bVar = bVarArr[i10];
            if (bVar.f12441d != null) {
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
        e.c cVar2 = this.f12428h;
        if (cVar2 != null && cVar2.j(fVar)) {
            return true;
        }
        if (!this.f12431k.f50510d && (fVar instanceof n)) {
            IOException iOException = cVar.f13078c;
            if ((iOException instanceof g.f) && ((g.f) iOException).f13064o == 404) {
                b bVar = this.f12429i[this.f12430j.o(fVar.f49421d)];
                long h10 = bVar.h();
                if (h10 != -1 && h10 != 0) {
                    if (((n) fVar).g() > (bVar.f() + h10) - 1) {
                        this.f12434n = true;
                        return true;
                    }
                }
            }
        }
        b bVar2 = this.f12429i[this.f12430j.o(fVar.f49421d)];
        ud.b j10 = this.f12422b.j(bVar2.f12439b.f50558c);
        if (j10 != null && !bVar2.f12440c.equals(j10)) {
            return true;
        }
        h.a k10 = k(this.f12430j, bVar2.f12439b.f50558c);
        if ((k10.a(2) || k10.a(1)) && (c10 = hVar.c(k10, cVar)) != null && k10.a(c10.f13074a)) {
            int i10 = c10.f13074a;
            if (i10 == 2) {
                com.google.android.exoplayer2.trackselection.g gVar = this.f12430j;
                return gVar.f(gVar.o(fVar.f49421d), c10.f13075b);
            } else if (i10 == 1) {
                this.f12422b.e(bVar2.f12440c, c10.f13075b);
                return true;
            }
        }
        return false;
    }

    @Override // sd.j
    public boolean g(long j10, sd.f fVar, List list) {
        if (this.f12433m != null) {
            return false;
        }
        return this.f12430j.b(j10, fVar, list);
    }

    @Override // sd.j
    public void h(sd.f fVar) {
        tc.c b10;
        if (fVar instanceof m) {
            int o10 = this.f12430j.o(((m) fVar).f49421d);
            b bVar = this.f12429i[o10];
            if (bVar.f12441d == null && (b10 = bVar.f12438a.b()) != null) {
                this.f12429i[o10] = bVar.c(new td.h(b10, bVar.f12439b.f50559d));
            }
        }
        e.c cVar = this.f12428h;
        if (cVar != null) {
            cVar.i(fVar);
        }
    }

    @Override // com.google.android.exoplayer2.source.dash.a
    public void i(ud.c cVar, int i10) {
        try {
            this.f12431k = cVar;
            this.f12432l = i10;
            long g10 = cVar.g(i10);
            ArrayList n10 = n();
            for (int i11 = 0; i11 < this.f12429i.length; i11++) {
                b[] bVarArr = this.f12429i;
                bVarArr[i11] = bVarArr[i11].b(g10, (j) n10.get(this.f12430j.e(i11)));
            }
        } catch (qd.b e10) {
            this.f12433m = e10;
        }
    }

    @Override // sd.j
    public int j(long j10, List list) {
        if (this.f12433m == null && this.f12430j.length() >= 2) {
            return this.f12430j.n(j10, list);
        }
        return list.size();
    }

    protected sd.f p(b bVar, DataSource dataSource, Format format, int i10, Object obj, i iVar, i iVar2, le.h hVar) {
        i iVar3 = iVar;
        j jVar = bVar.f12439b;
        if (iVar3 != null) {
            i a10 = iVar3.a(iVar2, bVar.f12440c.f50503a);
            if (a10 != null) {
                iVar3 = a10;
            }
        } else {
            iVar3 = iVar2;
        }
        return new m(dataSource, td.g.a(jVar, bVar.f12440c.f50503a, iVar3, 0, t.j()), format, i10, obj, bVar.f12438a);
    }

    protected sd.f q(b bVar, DataSource dataSource, int i10, Format format, int i11, Object obj, long j10, int i12, long j11, long j12, le.h hVar) {
        j jVar = bVar.f12439b;
        long k10 = bVar.k(j10);
        i l10 = bVar.l(j10);
        if (bVar.f12438a == null) {
            int i13 = 8;
            long i14 = bVar.i(j10);
            if (bVar.m(j10, j12)) {
                i13 = 0;
            }
            return new p(dataSource, td.g.a(jVar, bVar.f12440c.f50503a, l10, i13, t.j()), format, i11, obj, k10, i14, j10, i10, format);
        }
        int i15 = 8;
        int i16 = 1;
        int i17 = 1;
        while (i16 < i12) {
            i a10 = l10.a(bVar.l(j10 + i16), bVar.f12440c.f50503a);
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
        long j14 = bVar.f12442e;
        if (j14 == -9223372036854775807L || j14 > i19) {
            j14 = -9223372036854775807L;
        }
        if (bVar.m(j13, j12)) {
            i15 = 0;
        }
        return new k(dataSource, td.g.a(jVar, bVar.f12440c.f50503a, l10, i15, t.j()), format, i11, obj, k10, i19, j11, j14, j10, i18, -jVar.f50559d, bVar.f12438a);
    }

    @Override // sd.j
    public void release() {
        for (b bVar : this.f12429i) {
            sd.g gVar = bVar.f12438a;
            if (gVar != null) {
                gVar.release();
            }
        }
    }
}
