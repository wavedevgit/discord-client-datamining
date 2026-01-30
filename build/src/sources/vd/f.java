package vd;

import android.net.Uri;
import android.os.SystemClock;
import android.util.Pair;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.upstream.DataSource;
import com.google.android.exoplayer2.upstream.a;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import ji.v;
import lc.t0;
import le.c0;
import mc.t1;
import ne.w0;
import qd.u0;
import wd.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class f {

    /* renamed from: a  reason: collision with root package name */
    private final h f50943a;

    /* renamed from: b  reason: collision with root package name */
    private final DataSource f50944b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f50945c;

    /* renamed from: d  reason: collision with root package name */
    private final s f50946d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri[] f50947e;

    /* renamed from: f  reason: collision with root package name */
    private final Format[] f50948f;

    /* renamed from: g  reason: collision with root package name */
    private final wd.k f50949g;

    /* renamed from: h  reason: collision with root package name */
    private final u0 f50950h;

    /* renamed from: i  reason: collision with root package name */
    private final List f50951i;

    /* renamed from: k  reason: collision with root package name */
    private final t1 f50953k;

    /* renamed from: l  reason: collision with root package name */
    private final long f50954l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f50955m;

    /* renamed from: o  reason: collision with root package name */
    private IOException f50957o;

    /* renamed from: p  reason: collision with root package name */
    private Uri f50958p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f50959q;

    /* renamed from: r  reason: collision with root package name */
    private com.google.android.exoplayer2.trackselection.g f50960r;

    /* renamed from: t  reason: collision with root package name */
    private boolean f50962t;

    /* renamed from: j  reason: collision with root package name */
    private final vd.e f50952j = new vd.e(4);

    /* renamed from: n  reason: collision with root package name */
    private byte[] f50956n = w0.f40300f;

    /* renamed from: s  reason: collision with root package name */
    private long f50961s = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends sd.l {

        /* renamed from: l  reason: collision with root package name */
        private byte[] f50963l;

        public a(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, byte[] bArr) {
            super(dataSource, aVar, 3, format, i10, obj, bArr);
        }

        @Override // sd.l
        protected void g(byte[] bArr, int i10) {
            this.f50963l = Arrays.copyOf(bArr, i10);
        }

        public byte[] j() {
            return this.f50963l;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public sd.f f50964a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f50965b;

        /* renamed from: c  reason: collision with root package name */
        public Uri f50966c;

        public b() {
            a();
        }

        public void a() {
            this.f50964a = null;
            this.f50965b = false;
            this.f50966c = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends sd.b {

        /* renamed from: e  reason: collision with root package name */
        private final List f50967e;

        /* renamed from: f  reason: collision with root package name */
        private final long f50968f;

        /* renamed from: g  reason: collision with root package name */
        private final String f50969g;

        public c(String str, long j10, List list) {
            super(0L, list.size() - 1);
            this.f50969g = str;
            this.f50968f = j10;
            this.f50967e = list;
        }

        @Override // sd.o
        public long a() {
            c();
            return this.f50968f + ((f.e) this.f50967e.get((int) d())).f52374p;
        }

        @Override // sd.o
        public long b() {
            c();
            f.e eVar = (f.e) this.f50967e.get((int) d());
            return this.f50968f + eVar.f52374p + eVar.f52372i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d extends je.b {

        /* renamed from: h  reason: collision with root package name */
        private int f50970h;

        public d(u0 u0Var, int[] iArr) {
            super(u0Var, iArr);
            this.f50970h = o(u0Var.c(iArr[0]));
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int c() {
            return this.f50970h;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public Object h() {
            return null;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void l(long j10, long j11, long j12, List list, sd.o[] oVarArr) {
            long elapsedRealtime = SystemClock.elapsedRealtime();
            if (!a(this.f50970h, elapsedRealtime)) {
                return;
            }
            for (int i10 = this.f31983b - 1; i10 >= 0; i10--) {
                if (!a(i10, elapsedRealtime)) {
                    this.f50970h = i10;
                    return;
                }
            }
            throw new IllegalStateException();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int r() {
            return 0;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class e {

        /* renamed from: a  reason: collision with root package name */
        public final f.e f50971a;

        /* renamed from: b  reason: collision with root package name */
        public final long f50972b;

        /* renamed from: c  reason: collision with root package name */
        public final int f50973c;

        /* renamed from: d  reason: collision with root package name */
        public final boolean f50974d;

        public e(f.e eVar, long j10, int i10) {
            boolean z10;
            this.f50971a = eVar;
            this.f50972b = j10;
            this.f50973c = i10;
            if ((eVar instanceof f.b) && ((f.b) eVar).f52364x) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f50974d = z10;
        }
    }

    public f(h hVar, wd.k kVar, Uri[] uriArr, Format[] formatArr, g gVar, c0 c0Var, s sVar, long j10, List list, t1 t1Var, le.g gVar2) {
        this.f50943a = hVar;
        this.f50949g = kVar;
        this.f50947e = uriArr;
        this.f50948f = formatArr;
        this.f50946d = sVar;
        this.f50954l = j10;
        this.f50951i = list;
        this.f50953k = t1Var;
        DataSource a10 = gVar.a(1);
        this.f50944b = a10;
        if (c0Var != null) {
            a10.j(c0Var);
        }
        this.f50945c = gVar.a(3);
        this.f50950h = new u0(formatArr);
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < uriArr.length; i10++) {
            if ((formatArr[i10].f12699p & 16384) == 0) {
                arrayList.add(Integer.valueOf(i10));
            }
        }
        this.f50960r = new d(this.f50950h, li.e.l(arrayList));
    }

    private static Uri d(wd.f fVar, f.e eVar) {
        String str;
        if (eVar != null && (str = eVar.f52376r) != null) {
            return ne.u0.e(fVar.f52407a, str);
        }
        return null;
    }

    private Pair f(i iVar, boolean z10, wd.f fVar, long j10, long j11) {
        boolean z11;
        List list;
        long j12;
        long j13;
        int i10 = -1;
        if (iVar != null && !z10) {
            if (iVar.h()) {
                if (iVar.f50980o == -1) {
                    j13 = iVar.g();
                } else {
                    j13 = iVar.f48997j;
                }
                Long valueOf = Long.valueOf(j13);
                int i11 = iVar.f50980o;
                if (i11 != -1) {
                    i10 = i11 + 1;
                }
                return new Pair(valueOf, Integer.valueOf(i10));
            }
            return new Pair(Long.valueOf(iVar.f48997j), Integer.valueOf(iVar.f50980o));
        }
        long j14 = fVar.f52361u + j10;
        if (iVar != null && !this.f50959q) {
            j11 = iVar.f48960g;
        }
        if (!fVar.f52355o && j11 >= j14) {
            return new Pair(Long.valueOf(fVar.f52351k + fVar.f52358r.size()), -1);
        }
        long j15 = j11 - j10;
        List list2 = fVar.f52358r;
        Long valueOf2 = Long.valueOf(j15);
        int i12 = 0;
        if (this.f50949g.h() && iVar != null) {
            z11 = false;
        } else {
            z11 = true;
        }
        int f10 = w0.f(list2, valueOf2, true, z11);
        long j16 = f10 + fVar.f52351k;
        if (f10 >= 0) {
            f.d dVar = (f.d) fVar.f52358r.get(f10);
            if (j15 < dVar.f52374p + dVar.f52372i) {
                list = dVar.f52369x;
            } else {
                list = fVar.f52359s;
            }
            while (true) {
                if (i12 >= list.size()) {
                    break;
                }
                f.b bVar = (f.b) list.get(i12);
                if (j15 < bVar.f52374p + bVar.f52372i) {
                    if (bVar.f52363w) {
                        if (list == fVar.f52359s) {
                            j12 = 1;
                        } else {
                            j12 = 0;
                        }
                        j16 += j12;
                        i10 = i12;
                    }
                } else {
                    i12++;
                }
            }
        }
        return new Pair(Long.valueOf(j16), Integer.valueOf(i10));
    }

    private static e g(wd.f fVar, long j10, int i10) {
        int i11 = (int) (j10 - fVar.f52351k);
        if (i11 == fVar.f52358r.size()) {
            if (i10 == -1) {
                i10 = 0;
            }
            if (i10 >= fVar.f52359s.size()) {
                return null;
            }
            return new e((f.e) fVar.f52359s.get(i10), j10, i10);
        }
        f.d dVar = (f.d) fVar.f52358r.get(i11);
        if (i10 == -1) {
            return new e(dVar, j10, -1);
        }
        if (i10 < dVar.f52369x.size()) {
            return new e((f.e) dVar.f52369x.get(i10), j10, i10);
        }
        int i12 = i11 + 1;
        if (i12 < fVar.f52358r.size()) {
            return new e((f.e) fVar.f52358r.get(i12), j10 + 1, -1);
        }
        if (fVar.f52359s.isEmpty()) {
            return null;
        }
        return new e((f.e) fVar.f52359s.get(0), j10 + 1, 0);
    }

    static List i(wd.f fVar, long j10, int i10) {
        int i11 = (int) (j10 - fVar.f52351k);
        if (i11 >= 0 && fVar.f52358r.size() >= i11) {
            ArrayList arrayList = new ArrayList();
            int i12 = 0;
            if (i11 < fVar.f52358r.size()) {
                if (i10 != -1) {
                    f.d dVar = (f.d) fVar.f52358r.get(i11);
                    if (i10 == 0) {
                        arrayList.add(dVar);
                    } else if (i10 < dVar.f52369x.size()) {
                        List list = dVar.f52369x;
                        arrayList.addAll(list.subList(i10, list.size()));
                    }
                    i11++;
                }
                List list2 = fVar.f52358r;
                arrayList.addAll(list2.subList(i11, list2.size()));
                i10 = 0;
            }
            if (fVar.f52354n != -9223372036854775807L) {
                if (i10 != -1) {
                    i12 = i10;
                }
                if (i12 < fVar.f52359s.size()) {
                    List list3 = fVar.f52359s;
                    arrayList.addAll(list3.subList(i12, list3.size()));
                }
            }
            return Collections.unmodifiableList(arrayList);
        }
        return ji.s.r();
    }

    private sd.f l(Uri uri, int i10, boolean z10, le.h hVar) {
        if (uri == null) {
            return null;
        }
        byte[] c10 = this.f50952j.c(uri);
        if (c10 != null) {
            this.f50952j.b(uri, c10);
            return null;
        }
        return new a(this.f50945c, new a.b().i(uri).b(1).e(ji.t.j()).a(), this.f50948f[i10], this.f50960r.r(), this.f50960r.h(), this.f50956n);
    }

    private long s(long j10) {
        long j11 = this.f50961s;
        if (j11 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        return j11 - j10;
    }

    private void w(wd.f fVar) {
        long e10;
        if (fVar.f52355o) {
            e10 = -9223372036854775807L;
        } else {
            e10 = fVar.e() - this.f50949g.c();
        }
        this.f50961s = e10;
    }

    public sd.o[] a(i iVar, long j10) {
        int d10;
        boolean z10;
        if (iVar == null) {
            d10 = -1;
        } else {
            d10 = this.f50950h.d(iVar.f48957d);
        }
        int i10 = d10;
        int length = this.f50960r.length();
        sd.o[] oVarArr = new sd.o[length];
        for (int i11 = 0; i11 < length; i11++) {
            int e10 = this.f50960r.e(i11);
            Uri uri = this.f50947e[e10];
            if (!this.f50949g.g(uri)) {
                oVarArr[i11] = sd.o.f48998a;
            } else {
                wd.f m10 = this.f50949g.m(uri, false);
                ne.a.e(m10);
                long c10 = m10.f52348h - this.f50949g.c();
                if (e10 != i10) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                Pair f10 = f(iVar, z10, m10, c10, j10);
                oVarArr[i11] = new c(m10.f52407a, c10, i(m10, ((Long) f10.first).longValue(), ((Integer) f10.second).intValue()));
            }
        }
        return oVarArr;
    }

    public long b(long j10, t0 t0Var) {
        wd.f fVar;
        long j11;
        int c10 = this.f50960r.c();
        Uri[] uriArr = this.f50947e;
        if (c10 < uriArr.length && c10 != -1) {
            fVar = this.f50949g.m(uriArr[this.f50960r.p()], true);
        } else {
            fVar = null;
        }
        if (fVar != null && !fVar.f52358r.isEmpty() && fVar.f52409c) {
            long c11 = fVar.f52348h - this.f50949g.c();
            long j12 = j10 - c11;
            int f10 = w0.f(fVar.f52358r, Long.valueOf(j12), true, true);
            long j13 = ((f.d) fVar.f52358r.get(f10)).f52374p;
            if (f10 != fVar.f52358r.size() - 1) {
                j11 = ((f.d) fVar.f52358r.get(f10 + 1)).f52374p;
            } else {
                j11 = j13;
            }
            return t0Var.a(j12, j13, j11) + c11;
        }
        return j10;
    }

    public int c(i iVar) {
        List list;
        if (iVar.f50980o == -1) {
            return 1;
        }
        wd.f fVar = (wd.f) ne.a.e(this.f50949g.m(this.f50947e[this.f50950h.d(iVar.f48957d)], false));
        int i10 = (int) (iVar.f48997j - fVar.f52351k);
        if (i10 < 0) {
            return 1;
        }
        if (i10 < fVar.f52358r.size()) {
            list = ((f.d) fVar.f52358r.get(i10)).f52369x;
        } else {
            list = fVar.f52359s;
        }
        if (iVar.f50980o >= list.size()) {
            return 2;
        }
        f.b bVar = (f.b) list.get(iVar.f50980o);
        if (bVar.f52364x) {
            return 0;
        }
        if (w0.c(Uri.parse(ne.u0.d(fVar.f52407a, bVar.f52370d)), iVar.f48955b.f14346a)) {
            return 1;
        }
        return 2;
    }

    public void e(long j10, long j11, List list, boolean z10, b bVar) {
        i iVar;
        int d10;
        boolean z11;
        int i10;
        if (list.isEmpty()) {
            iVar = null;
        } else {
            iVar = (i) v.c(list);
        }
        if (iVar == null) {
            d10 = -1;
        } else {
            d10 = this.f50950h.d(iVar.f48957d);
        }
        long j12 = j11 - j10;
        long s10 = s(j10);
        if (iVar != null && !this.f50959q) {
            long d11 = iVar.d();
            j12 = Math.max(0L, j12 - d11);
            if (s10 != -9223372036854775807L) {
                s10 = Math.max(0L, s10 - d11);
            }
        }
        this.f50960r.l(j10, j12, s10, list, a(iVar, j11));
        int p10 = this.f50960r.p();
        if (d10 != p10) {
            z11 = true;
        } else {
            z11 = false;
        }
        Uri uri = this.f50947e[p10];
        if (!this.f50949g.g(uri)) {
            bVar.f50966c = uri;
            this.f50962t &= uri.equals(this.f50958p);
            this.f50958p = uri;
            return;
        }
        wd.f m10 = this.f50949g.m(uri, true);
        ne.a.e(m10);
        this.f50959q = m10.f52409c;
        w(m10);
        long c10 = m10.f52348h - this.f50949g.c();
        Pair f10 = f(iVar, z11, m10, c10, j11);
        long longValue = ((Long) f10.first).longValue();
        int intValue = ((Integer) f10.second).intValue();
        int i11 = d10;
        if (longValue < m10.f52351k && iVar != null && z11) {
            uri = this.f50947e[i11];
            m10 = this.f50949g.m(uri, true);
            ne.a.e(m10);
            c10 = m10.f52348h - this.f50949g.c();
            Pair f11 = f(iVar, false, m10, c10, j11);
            longValue = ((Long) f11.first).longValue();
            intValue = ((Integer) f11.second).intValue();
            i10 = i11;
        } else {
            i10 = p10;
        }
        Uri uri2 = uri;
        wd.f fVar = m10;
        if (longValue < fVar.f52351k) {
            this.f50957o = new qd.b();
            return;
        }
        e g10 = g(fVar, longValue, intValue);
        if (g10 == null) {
            if (!fVar.f52355o) {
                bVar.f50966c = uri2;
                this.f50962t &= uri2.equals(this.f50958p);
                this.f50958p = uri2;
                return;
            } else if (!z10 && !fVar.f52358r.isEmpty()) {
                g10 = new e((f.e) v.c(fVar.f52358r), (fVar.f52351k + fVar.f52358r.size()) - 1, -1);
            } else {
                bVar.f50965b = true;
                return;
            }
        }
        this.f50962t = false;
        this.f50958p = null;
        Uri d12 = d(fVar, g10.f50971a.f52371e);
        sd.f l10 = l(d12, i10, true, null);
        bVar.f50964a = l10;
        if (l10 == null) {
            Uri d13 = d(fVar, g10.f50971a);
            sd.f l11 = l(d13, i10, false, null);
            bVar.f50964a = l11;
            if (l11 == null) {
                long j13 = c10;
                boolean w10 = i.w(iVar, uri2, fVar, g10, j13);
                if (w10 && g10.f50974d) {
                    return;
                }
                bVar.f50964a = i.j(this.f50943a, this.f50944b, this.f50948f[i10], j13, fVar, g10, uri2, this.f50951i, this.f50960r.r(), this.f50960r.h(), this.f50955m, this.f50946d, this.f50954l, iVar, this.f50952j.a(d13), this.f50952j.a(d12), w10, this.f50953k, null);
            }
        }
    }

    public int h(long j10, List list) {
        if (this.f50957o == null && this.f50960r.length() >= 2) {
            return this.f50960r.n(j10, list);
        }
        return list.size();
    }

    public u0 j() {
        return this.f50950h;
    }

    public com.google.android.exoplayer2.trackselection.g k() {
        return this.f50960r;
    }

    public boolean m(sd.f fVar, long j10) {
        com.google.android.exoplayer2.trackselection.g gVar = this.f50960r;
        return gVar.f(gVar.j(this.f50950h.d(fVar.f48957d)), j10);
    }

    public void n() {
        IOException iOException = this.f50957o;
        if (iOException == null) {
            Uri uri = this.f50958p;
            if (uri != null && this.f50962t) {
                this.f50949g.b(uri);
                return;
            }
            return;
        }
        throw iOException;
    }

    public boolean o(Uri uri) {
        return w0.s(this.f50947e, uri);
    }

    public void p(sd.f fVar) {
        if (fVar instanceof a) {
            a aVar = (a) fVar;
            this.f50956n = aVar.h();
            this.f50952j.b(aVar.f48955b.f14346a, (byte[]) ne.a.e(aVar.j()));
        }
    }

    public boolean q(Uri uri, long j10) {
        int j11;
        int i10 = 0;
        while (true) {
            Uri[] uriArr = this.f50947e;
            if (i10 < uriArr.length) {
                if (uriArr[i10].equals(uri)) {
                    break;
                }
                i10++;
            } else {
                i10 = -1;
                break;
            }
        }
        if (i10 == -1 || (j11 = this.f50960r.j(i10)) == -1) {
            return true;
        }
        this.f50962t |= uri.equals(this.f50958p);
        if (j10 != -9223372036854775807L && (!this.f50960r.f(j11, j10) || !this.f50949g.k(uri, j10))) {
            return false;
        }
        return true;
    }

    public void r() {
        this.f50957o = null;
    }

    public void t(boolean z10) {
        this.f50955m = z10;
    }

    public void u(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f50960r = gVar;
    }

    public boolean v(long j10, sd.f fVar, List list) {
        if (this.f50957o != null) {
            return false;
        }
        return this.f50960r.b(j10, fVar, list);
    }
}
