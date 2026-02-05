package vd;

import android.net.Uri;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.a;
import java.io.EOFException;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.math.BigInteger;
import java.util.List;
import java.util.concurrent.TimeoutException;
import java.util.concurrent.atomic.AtomicInteger;
import mc.t1;
import ne.h0;
import ne.s0;
import ne.u0;
import vd.f;
import wd.f;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends sd.n {
    private static final AtomicInteger N = new AtomicInteger();
    private final boolean A;
    private final boolean B;
    private final t1 C;
    private final long D;
    private j E;
    private p F;
    private int G;
    private boolean H;
    private volatile boolean I;
    private boolean J;
    private mi.s K;
    private boolean L;
    private boolean M;

    /* renamed from: k  reason: collision with root package name */
    public final int f52114k;

    /* renamed from: l  reason: collision with root package name */
    public final int f52115l;

    /* renamed from: m  reason: collision with root package name */
    public final Uri f52116m;

    /* renamed from: n  reason: collision with root package name */
    public final boolean f52117n;

    /* renamed from: o  reason: collision with root package name */
    public final int f52118o;

    /* renamed from: p  reason: collision with root package name */
    private final DataSource f52119p;

    /* renamed from: q  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.a f52120q;

    /* renamed from: r  reason: collision with root package name */
    private final j f52121r;

    /* renamed from: s  reason: collision with root package name */
    private final boolean f52122s;

    /* renamed from: t  reason: collision with root package name */
    private final boolean f52123t;

    /* renamed from: u  reason: collision with root package name */
    private final s0 f52124u;

    /* renamed from: v  reason: collision with root package name */
    private final h f52125v;

    /* renamed from: w  reason: collision with root package name */
    private final List f52126w;

    /* renamed from: x  reason: collision with root package name */
    private final rc.m f52127x;

    /* renamed from: y  reason: collision with root package name */
    private final ld.h f52128y;

    /* renamed from: z  reason: collision with root package name */
    private final h0 f52129z;

    private i(h hVar, DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, boolean z10, DataSource dataSource2, com.google.android.exoplayer2.upstream.a aVar2, boolean z11, Uri uri, List list, int i10, Object obj, long j10, long j11, long j12, int i11, boolean z12, int i12, boolean z13, boolean z14, s0 s0Var, long j13, rc.m mVar, j jVar, ld.h hVar2, h0 h0Var, boolean z15, t1 t1Var) {
        super(dataSource, aVar, format, i10, obj, j10, j11, j12);
        this.A = z10;
        this.f52118o = i11;
        this.M = z12;
        this.f52115l = i12;
        this.f52120q = aVar2;
        this.f52119p = dataSource2;
        this.H = aVar2 != null;
        this.B = z11;
        this.f52116m = uri;
        this.f52122s = z14;
        this.f52124u = s0Var;
        this.D = j13;
        this.f52123t = z13;
        this.f52125v = hVar;
        this.f52126w = list;
        this.f52127x = mVar;
        this.f52121r = jVar;
        this.f52128y = hVar2;
        this.f52129z = h0Var;
        this.f52117n = z15;
        this.C = t1Var;
        this.K = mi.s.s();
        this.f52114k = N.getAndIncrement();
    }

    private static DataSource i(DataSource dataSource, byte[] bArr, byte[] bArr2) {
        if (bArr != null) {
            ne.a.e(bArr2);
            return new a(dataSource, bArr, bArr2);
        }
        return dataSource;
    }

    public static i j(h hVar, DataSource dataSource, Format format, long j10, wd.f fVar, f.e eVar, Uri uri, List list, int i10, Object obj, boolean z10, s sVar, long j11, i iVar, byte[] bArr, byte[] bArr2, boolean z11, t1 t1Var, le.h hVar2) {
        boolean z12;
        com.google.android.exoplayer2.upstream.a aVar;
        DataSource dataSource2;
        boolean z13;
        Uri uri2;
        ld.h hVar3;
        h0 h0Var;
        j jVar;
        f.e eVar2 = eVar.f52109a;
        com.google.android.exoplayer2.upstream.a a10 = new a.b().i(u0.e(fVar.f52850a, eVar2.f52813d)).h(eVar2.f52821t).g(eVar2.f52822u).b(eVar.f52112d ? 8 : 0).e(mi.t.j()).a();
        boolean z14 = bArr != null;
        DataSource i11 = i(dataSource, bArr, z14 ? l((String) ne.a.e(eVar2.f52820s)) : null);
        f.d dVar = eVar2.f52814e;
        if (dVar != null) {
            boolean z15 = bArr2 != null;
            byte[] l10 = z15 ? l((String) ne.a.e(dVar.f52820s)) : null;
            z12 = true;
            aVar = new a.b().i(u0.e(fVar.f52850a, dVar.f52813d)).h(dVar.f52821t).g(dVar.f52822u).e(mi.t.j()).a();
            z13 = z15;
            dataSource2 = i(dataSource, bArr2, l10);
        } else {
            z12 = true;
            aVar = null;
            dataSource2 = null;
            z13 = false;
        }
        long j12 = j10 + eVar2.f52817p;
        long j13 = j12 + eVar2.f52815i;
        int i12 = fVar.f52793j + eVar2.f52816o;
        if (iVar != null) {
            com.google.android.exoplayer2.upstream.a aVar2 = iVar.f52120q;
            boolean z16 = (aVar == aVar2 || (aVar != null && aVar2 != null && aVar.f13328a.equals(aVar2.f13328a) && aVar.f13334g == iVar.f52120q.f13334g)) ? z12 : false;
            uri2 = uri;
            boolean z17 = (uri2.equals(iVar.f52116m) && iVar.J) ? z12 : false;
            hVar3 = iVar.f52128y;
            h0Var = iVar.f52129z;
            jVar = (z16 && z17 && !iVar.L && iVar.f52115l == i12) ? iVar.E : null;
        } else {
            uri2 = uri;
            hVar3 = new ld.h();
            h0Var = new h0(10);
            jVar = null;
        }
        return new i(hVar, i11, a10, format, z14, dataSource2, aVar, z13, uri2, list, i10, obj, j12, j13, eVar.f52110b, eVar.f52111c, !eVar.f52112d, i12, eVar2.f52823v, z10, sVar.a(i12), j11, eVar2.f52818q, jVar, hVar3, h0Var, z11, t1Var);
    }

    private void k(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, boolean z10, boolean z11) {
        com.google.android.exoplayer2.upstream.a e10;
        long position;
        boolean z12 = false;
        if (z10) {
            if (this.G != 0) {
                z12 = true;
            }
            e10 = aVar;
        } else {
            e10 = aVar.e(this.G);
        }
        try {
            tc.e u10 = u(dataSource, e10, z11);
            if (z12) {
                u10.k(this.G);
            }
            do {
                try {
                    if (this.I) {
                        break;
                    }
                } catch (EOFException e11) {
                    if ((this.f49567d.f11681p & 16384) != 0) {
                        this.E.b();
                        position = u10.getPosition();
                    } else {
                        throw e11;
                    }
                }
            } while (this.E.a(u10));
            position = u10.getPosition();
            this.G = (int) (position - aVar.f13334g);
        } finally {
            le.o.a(dataSource);
        }
    }

    private static byte[] l(String str) {
        int i10;
        if (li.b.e(str).startsWith("0x")) {
            str = str.substring(2);
        }
        byte[] byteArray = new BigInteger(str, 16).toByteArray();
        byte[] bArr = new byte[16];
        if (byteArray.length > 16) {
            i10 = byteArray.length - 16;
        } else {
            i10 = 0;
        }
        System.arraycopy(byteArray, i10, bArr, (16 - byteArray.length) + i10, byteArray.length - i10);
        return bArr;
    }

    private static boolean p(f.e eVar, wd.f fVar) {
        f.e eVar2 = eVar.f52109a;
        if (eVar2 instanceof f.b) {
            if (!((f.b) eVar2).f52806w) {
                if (eVar.f52111c != 0 || !fVar.f52852c) {
                    return false;
                }
                return true;
            }
            return true;
        }
        return fVar.f52852c;
    }

    private void r() {
        k(this.f49572i, this.f49565b, this.A, true);
    }

    private void s() {
        if (!this.H) {
            return;
        }
        ne.a.e(this.f52119p);
        ne.a.e(this.f52120q);
        k(this.f52119p, this.f52120q, this.B, false);
        this.G = 0;
        this.H = false;
    }

    private long t(tc.l lVar) {
        lVar.e();
        try {
            this.f52129z.Q(10);
            lVar.n(this.f52129z.e(), 0, 10);
        } catch (EOFException unused) {
        }
        if (this.f52129z.K() != 4801587) {
            return -9223372036854775807L;
        }
        this.f52129z.V(3);
        int G = this.f52129z.G();
        int i10 = G + 10;
        if (i10 > this.f52129z.b()) {
            byte[] e10 = this.f52129z.e();
            this.f52129z.Q(i10);
            System.arraycopy(e10, 0, this.f52129z.e(), 0, 10);
        }
        lVar.n(this.f52129z.e(), 10, G);
        Metadata e11 = this.f52128y.e(this.f52129z.e(), G);
        if (e11 == null) {
            return -9223372036854775807L;
        }
        int e12 = e11.e();
        for (int i11 = 0; i11 < e12; i11++) {
            Metadata.b d10 = e11.d(i11);
            if (d10 instanceof ld.l) {
                ld.l lVar2 = (ld.l) d10;
                if ("com.apple.streaming.transportStreamTimestamp".equals(lVar2.f36677e)) {
                    System.arraycopy(lVar2.f36678i, 0, this.f52129z.e(), 0, 8);
                    this.f52129z.U(0);
                    this.f52129z.T(8);
                    return this.f52129z.A() & 8589934591L;
                }
            }
        }
        return -9223372036854775807L;
    }

    private tc.e u(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, boolean z10) {
        j a10;
        long j10;
        long b10 = dataSource.b(aVar);
        if (z10) {
            try {
                this.f52124u.i(this.f52122s, this.f49570g, this.D);
            } catch (InterruptedException unused) {
                throw new InterruptedIOException();
            } catch (TimeoutException e10) {
                throw new IOException(e10);
            }
        }
        tc.e eVar = new tc.e(dataSource, aVar.f13334g, b10);
        if (this.E == null) {
            long t10 = t(eVar);
            eVar.e();
            j jVar = this.f52121r;
            if (jVar != null) {
                a10 = jVar.f();
            } else {
                a10 = this.f52125v.a(aVar.f13328a, this.f49567d, this.f52126w, this.f52124u, dataSource.d(), eVar, this.C);
                eVar = eVar;
            }
            this.E = a10;
            if (a10.e()) {
                p pVar = this.F;
                if (t10 != -9223372036854775807L) {
                    j10 = this.f52124u.b(t10);
                } else {
                    j10 = this.f49570g;
                }
                pVar.n0(j10);
            } else {
                this.F.n0(0L);
            }
            this.F.Z();
            this.E.c(this.F);
        }
        this.F.k0(this.f52127x);
        return eVar;
    }

    public static boolean w(i iVar, Uri uri, wd.f fVar, f.e eVar, long j10) {
        if (iVar == null) {
            return false;
        }
        if (uri.equals(iVar.f52116m) && iVar.J) {
            return false;
        }
        long j11 = j10 + eVar.f52109a.f52817p;
        if (p(eVar, fVar) && j11 >= iVar.f49571h) {
            return false;
        }
        return true;
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void b() {
        j jVar;
        ne.a.e(this.F);
        if (this.E == null && (jVar = this.f52121r) != null && jVar.d()) {
            this.E = this.f52121r;
            this.H = false;
        }
        s();
        if (!this.I) {
            if (!this.f52123t) {
                r();
            }
            this.J = !this.I;
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.e
    public void c() {
        this.I = true;
    }

    @Override // sd.n
    public boolean h() {
        return this.J;
    }

    public int m(int i10) {
        ne.a.g(!this.f52117n);
        if (i10 >= this.K.size()) {
            return 0;
        }
        return ((Integer) this.K.get(i10)).intValue();
    }

    public void n(p pVar, mi.s sVar) {
        this.F = pVar;
        this.K = sVar;
    }

    public void o() {
        this.L = true;
    }

    public boolean q() {
        return this.M;
    }

    public void v() {
        this.M = true;
    }
}
