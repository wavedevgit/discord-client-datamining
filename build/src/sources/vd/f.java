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
import lc.t0;
import le.c0;
import mc.t1;
import mi.v;
import ne.w0;
import qd.u0;
import wd.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class f {

    /* renamed from: a  reason: collision with root package name */
    private final h f52081a;

    /* renamed from: b  reason: collision with root package name */
    private final DataSource f52082b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f52083c;

    /* renamed from: d  reason: collision with root package name */
    private final s f52084d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri[] f52085e;

    /* renamed from: f  reason: collision with root package name */
    private final Format[] f52086f;

    /* renamed from: g  reason: collision with root package name */
    private final wd.k f52087g;

    /* renamed from: h  reason: collision with root package name */
    private final u0 f52088h;

    /* renamed from: i  reason: collision with root package name */
    private final List f52089i;

    /* renamed from: k  reason: collision with root package name */
    private final t1 f52091k;

    /* renamed from: l  reason: collision with root package name */
    private final long f52092l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f52093m;

    /* renamed from: o  reason: collision with root package name */
    private IOException f52095o;

    /* renamed from: p  reason: collision with root package name */
    private Uri f52096p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f52097q;

    /* renamed from: r  reason: collision with root package name */
    private com.google.android.exoplayer2.trackselection.g f52098r;

    /* renamed from: t  reason: collision with root package name */
    private boolean f52100t;

    /* renamed from: j  reason: collision with root package name */
    private final vd.e f52090j = new vd.e(4);

    /* renamed from: n  reason: collision with root package name */
    private byte[] f52094n = w0.f39662f;

    /* renamed from: s  reason: collision with root package name */
    private long f52099s = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends sd.l {

        /* renamed from: l  reason: collision with root package name */
        private byte[] f52101l;

        public a(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, byte[] bArr) {
            super(dataSource, aVar, 3, format, i10, obj, bArr);
        }

        @Override // sd.l
        protected void g(byte[] bArr, int i10) {
            this.f52101l = Arrays.copyOf(bArr, i10);
        }

        public byte[] j() {
            return this.f52101l;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public sd.f f52102a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f52103b;

        /* renamed from: c  reason: collision with root package name */
        public Uri f52104c;

        public b() {
            a();
        }

        public void a() {
            this.f52102a = null;
            this.f52103b = false;
            this.f52104c = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends sd.b {

        /* renamed from: e  reason: collision with root package name */
        private final List f52105e;

        /* renamed from: f  reason: collision with root package name */
        private final long f52106f;

        /* renamed from: g  reason: collision with root package name */
        private final String f52107g;

        public c(String str, long j10, List list) {
            super(0L, list.size() - 1);
            this.f52107g = str;
            this.f52106f = j10;
            this.f52105e = list;
        }

        @Override // sd.o
        public long a() {
            c();
            return this.f52106f + ((f.e) this.f52105e.get((int) d())).f52817p;
        }

        @Override // sd.o
        public long b() {
            c();
            f.e eVar = (f.e) this.f52105e.get((int) d());
            return this.f52106f + eVar.f52817p + eVar.f52815i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d extends je.b {

        /* renamed from: h  reason: collision with root package name */
        private int f52108h;

        public d(u0 u0Var, int[] iArr) {
            super(u0Var, iArr);
            this.f52108h = o(u0Var.c(iArr[0]));
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int c() {
            return this.f52108h;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public Object h() {
            return null;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void l(long j10, long j11, long j12, List list, sd.o[] oVarArr) {
            long elapsedRealtime = SystemClock.elapsedRealtime();
            if (!a(this.f52108h, elapsedRealtime)) {
                return;
            }
            for (int i10 = this.f30866b - 1; i10 >= 0; i10--) {
                if (!a(i10, elapsedRealtime)) {
                    this.f52108h = i10;
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
        public final f.e f52109a;

        /* renamed from: b  reason: collision with root package name */
        public final long f52110b;

        /* renamed from: c  reason: collision with root package name */
        public final int f52111c;

        /* renamed from: d  reason: collision with root package name */
        public final boolean f52112d;

        public e(f.e eVar, long j10, int i10) {
            boolean z10;
            this.f52109a = eVar;
            this.f52110b = j10;
            this.f52111c = i10;
            if ((eVar instanceof f.b) && ((f.b) eVar).f52807x) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f52112d = z10;
        }
    }

    public f(h hVar, wd.k kVar, Uri[] uriArr, Format[] formatArr, g gVar, c0 c0Var, s sVar, long j10, List list, t1 t1Var, le.g gVar2) {
        this.f52081a = hVar;
        this.f52087g = kVar;
        this.f52085e = uriArr;
        this.f52086f = formatArr;
        this.f52084d = sVar;
        this.f52092l = j10;
        this.f52089i = list;
        this.f52091k = t1Var;
        DataSource a10 = gVar.a(1);
        this.f52082b = a10;
        if (c0Var != null) {
            a10.j(c0Var);
        }
        this.f52083c = gVar.a(3);
        this.f52088h = new u0(formatArr);
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < uriArr.length; i10++) {
            if ((formatArr[i10].f11681p & 16384) == 0) {
                arrayList.add(Integer.valueOf(i10));
            }
        }
        this.f52098r = new d(this.f52088h, oi.e.l(arrayList));
    }

    private static Uri d(wd.f fVar, f.e eVar) {
        String str;
        if (eVar != null && (str = eVar.f52819r) != null) {
            return ne.u0.e(fVar.f52850a, str);
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
                if (iVar.f52118o == -1) {
                    j13 = iVar.g();
                } else {
                    j13 = iVar.f49607j;
                }
                Long valueOf = Long.valueOf(j13);
                int i11 = iVar.f52118o;
                if (i11 != -1) {
                    i10 = i11 + 1;
                }
                return new Pair(valueOf, Integer.valueOf(i10));
            }
            return new Pair(Long.valueOf(iVar.f49607j), Integer.valueOf(iVar.f52118o));
        }
        long j14 = fVar.f52804u + j10;
        if (iVar != null && !this.f52097q) {
            j11 = iVar.f49570g;
        }
        if (!fVar.f52798o && j11 >= j14) {
            return new Pair(Long.valueOf(fVar.f52794k + fVar.f52801r.size()), -1);
        }
        long j15 = j11 - j10;
        List list2 = fVar.f52801r;
        Long valueOf2 = Long.valueOf(j15);
        int i12 = 0;
        if (this.f52087g.h() && iVar != null) {
            z11 = false;
        } else {
            z11 = true;
        }
        int f10 = w0.f(list2, valueOf2, true, z11);
        long j16 = f10 + fVar.f52794k;
        if (f10 >= 0) {
            f.d dVar = (f.d) fVar.f52801r.get(f10);
            if (j15 < dVar.f52817p + dVar.f52815i) {
                list = dVar.f52812x;
            } else {
                list = fVar.f52802s;
            }
            while (true) {
                if (i12 >= list.size()) {
                    break;
                }
                f.b bVar = (f.b) list.get(i12);
                if (j15 < bVar.f52817p + bVar.f52815i) {
                    if (bVar.f52806w) {
                        if (list == fVar.f52802s) {
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
        int i11 = (int) (j10 - fVar.f52794k);
        if (i11 == fVar.f52801r.size()) {
            if (i10 == -1) {
                i10 = 0;
            }
            if (i10 >= fVar.f52802s.size()) {
                return null;
            }
            return new e((f.e) fVar.f52802s.get(i10), j10, i10);
        }
        f.d dVar = (f.d) fVar.f52801r.get(i11);
        if (i10 == -1) {
            return new e(dVar, j10, -1);
        }
        if (i10 < dVar.f52812x.size()) {
            return new e((f.e) dVar.f52812x.get(i10), j10, i10);
        }
        int i12 = i11 + 1;
        if (i12 < fVar.f52801r.size()) {
            return new e((f.e) fVar.f52801r.get(i12), j10 + 1, -1);
        }
        if (fVar.f52802s.isEmpty()) {
            return null;
        }
        return new e((f.e) fVar.f52802s.get(0), j10 + 1, 0);
    }

    static List i(wd.f fVar, long j10, int i10) {
        int i11 = (int) (j10 - fVar.f52794k);
        if (i11 >= 0 && fVar.f52801r.size() >= i11) {
            ArrayList arrayList = new ArrayList();
            int i12 = 0;
            if (i11 < fVar.f52801r.size()) {
                if (i10 != -1) {
                    f.d dVar = (f.d) fVar.f52801r.get(i11);
                    if (i10 == 0) {
                        arrayList.add(dVar);
                    } else if (i10 < dVar.f52812x.size()) {
                        List list = dVar.f52812x;
                        arrayList.addAll(list.subList(i10, list.size()));
                    }
                    i11++;
                }
                List list2 = fVar.f52801r;
                arrayList.addAll(list2.subList(i11, list2.size()));
                i10 = 0;
            }
            if (fVar.f52797n != -9223372036854775807L) {
                if (i10 != -1) {
                    i12 = i10;
                }
                if (i12 < fVar.f52802s.size()) {
                    List list3 = fVar.f52802s;
                    arrayList.addAll(list3.subList(i12, list3.size()));
                }
            }
            return Collections.unmodifiableList(arrayList);
        }
        return mi.s.s();
    }

    private sd.f l(Uri uri, int i10, boolean z10, le.h hVar) {
        if (uri == null) {
            return null;
        }
        byte[] c10 = this.f52090j.c(uri);
        if (c10 != null) {
            this.f52090j.b(uri, c10);
            return null;
        }
        return new a(this.f52083c, new a.b().i(uri).b(1).e(mi.t.j()).a(), this.f52086f[i10], this.f52098r.r(), this.f52098r.h(), this.f52094n);
    }

    private long s(long j10) {
        long j11 = this.f52099s;
        if (j11 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        return j11 - j10;
    }

    private void w(wd.f fVar) {
        long e10;
        if (fVar.f52798o) {
            e10 = -9223372036854775807L;
        } else {
            e10 = fVar.e() - this.f52087g.c();
        }
        this.f52099s = e10;
    }

    public sd.o[] a(i iVar, long j10) {
        int d10;
        boolean z10;
        if (iVar == null) {
            d10 = -1;
        } else {
            d10 = this.f52088h.d(iVar.f49567d);
        }
        int i10 = d10;
        int length = this.f52098r.length();
        sd.o[] oVarArr = new sd.o[length];
        for (int i11 = 0; i11 < length; i11++) {
            int e10 = this.f52098r.e(i11);
            Uri uri = this.f52085e[e10];
            if (!this.f52087g.g(uri)) {
                oVarArr[i11] = sd.o.f49608a;
            } else {
                wd.f m10 = this.f52087g.m(uri, false);
                ne.a.e(m10);
                long c10 = m10.f52791h - this.f52087g.c();
                if (e10 != i10) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                Pair f10 = f(iVar, z10, m10, c10, j10);
                oVarArr[i11] = new c(m10.f52850a, c10, i(m10, ((Long) f10.first).longValue(), ((Integer) f10.second).intValue()));
            }
        }
        return oVarArr;
    }

    public long b(long j10, t0 t0Var) {
        wd.f fVar;
        long j11;
        int c10 = this.f52098r.c();
        Uri[] uriArr = this.f52085e;
        if (c10 < uriArr.length && c10 != -1) {
            fVar = this.f52087g.m(uriArr[this.f52098r.p()], true);
        } else {
            fVar = null;
        }
        if (fVar != null && !fVar.f52801r.isEmpty() && fVar.f52852c) {
            long c11 = fVar.f52791h - this.f52087g.c();
            long j12 = j10 - c11;
            int f10 = w0.f(fVar.f52801r, Long.valueOf(j12), true, true);
            long j13 = ((f.d) fVar.f52801r.get(f10)).f52817p;
            if (f10 != fVar.f52801r.size() - 1) {
                j11 = ((f.d) fVar.f52801r.get(f10 + 1)).f52817p;
            } else {
                j11 = j13;
            }
            return t0Var.a(j12, j13, j11) + c11;
        }
        return j10;
    }

    public int c(i iVar) {
        List list;
        if (iVar.f52118o == -1) {
            return 1;
        }
        wd.f fVar = (wd.f) ne.a.e(this.f52087g.m(this.f52085e[this.f52088h.d(iVar.f49567d)], false));
        int i10 = (int) (iVar.f49607j - fVar.f52794k);
        if (i10 < 0) {
            return 1;
        }
        if (i10 < fVar.f52801r.size()) {
            list = ((f.d) fVar.f52801r.get(i10)).f52812x;
        } else {
            list = fVar.f52802s;
        }
        if (iVar.f52118o >= list.size()) {
            return 2;
        }
        f.b bVar = (f.b) list.get(iVar.f52118o);
        if (bVar.f52807x) {
            return 0;
        }
        if (w0.c(Uri.parse(ne.u0.d(fVar.f52850a, bVar.f52813d)), iVar.f49565b.f13328a)) {
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
            d10 = this.f52088h.d(iVar.f49567d);
        }
        long j12 = j11 - j10;
        long s10 = s(j10);
        if (iVar != null && !this.f52097q) {
            long d11 = iVar.d();
            j12 = Math.max(0L, j12 - d11);
            if (s10 != -9223372036854775807L) {
                s10 = Math.max(0L, s10 - d11);
            }
        }
        this.f52098r.l(j10, j12, s10, list, a(iVar, j11));
        int p10 = this.f52098r.p();
        if (d10 != p10) {
            z11 = true;
        } else {
            z11 = false;
        }
        Uri uri = this.f52085e[p10];
        if (!this.f52087g.g(uri)) {
            bVar.f52104c = uri;
            this.f52100t &= uri.equals(this.f52096p);
            this.f52096p = uri;
            return;
        }
        wd.f m10 = this.f52087g.m(uri, true);
        ne.a.e(m10);
        this.f52097q = m10.f52852c;
        w(m10);
        long c10 = m10.f52791h - this.f52087g.c();
        Pair f10 = f(iVar, z11, m10, c10, j11);
        long longValue = ((Long) f10.first).longValue();
        int intValue = ((Integer) f10.second).intValue();
        int i11 = d10;
        if (longValue < m10.f52794k && iVar != null && z11) {
            uri = this.f52085e[i11];
            m10 = this.f52087g.m(uri, true);
            ne.a.e(m10);
            c10 = m10.f52791h - this.f52087g.c();
            Pair f11 = f(iVar, false, m10, c10, j11);
            longValue = ((Long) f11.first).longValue();
            intValue = ((Integer) f11.second).intValue();
            i10 = i11;
        } else {
            i10 = p10;
        }
        Uri uri2 = uri;
        wd.f fVar = m10;
        if (longValue < fVar.f52794k) {
            this.f52095o = new qd.b();
            return;
        }
        e g10 = g(fVar, longValue, intValue);
        if (g10 == null) {
            if (!fVar.f52798o) {
                bVar.f52104c = uri2;
                this.f52100t &= uri2.equals(this.f52096p);
                this.f52096p = uri2;
                return;
            } else if (!z10 && !fVar.f52801r.isEmpty()) {
                g10 = new e((f.e) v.c(fVar.f52801r), (fVar.f52794k + fVar.f52801r.size()) - 1, -1);
            } else {
                bVar.f52103b = true;
                return;
            }
        }
        this.f52100t = false;
        this.f52096p = null;
        Uri d12 = d(fVar, g10.f52109a.f52814e);
        sd.f l10 = l(d12, i10, true, null);
        bVar.f52102a = l10;
        if (l10 == null) {
            Uri d13 = d(fVar, g10.f52109a);
            sd.f l11 = l(d13, i10, false, null);
            bVar.f52102a = l11;
            if (l11 == null) {
                long j13 = c10;
                boolean w10 = i.w(iVar, uri2, fVar, g10, j13);
                if (w10 && g10.f52112d) {
                    return;
                }
                bVar.f52102a = i.j(this.f52081a, this.f52082b, this.f52086f[i10], j13, fVar, g10, uri2, this.f52089i, this.f52098r.r(), this.f52098r.h(), this.f52093m, this.f52084d, this.f52092l, iVar, this.f52090j.a(d13), this.f52090j.a(d12), w10, this.f52091k, null);
            }
        }
    }

    public int h(long j10, List list) {
        if (this.f52095o == null && this.f52098r.length() >= 2) {
            return this.f52098r.n(j10, list);
        }
        return list.size();
    }

    public u0 j() {
        return this.f52088h;
    }

    public com.google.android.exoplayer2.trackselection.g k() {
        return this.f52098r;
    }

    public boolean m(sd.f fVar, long j10) {
        com.google.android.exoplayer2.trackselection.g gVar = this.f52098r;
        return gVar.f(gVar.j(this.f52088h.d(fVar.f49567d)), j10);
    }

    public void n() {
        IOException iOException = this.f52095o;
        if (iOException == null) {
            Uri uri = this.f52096p;
            if (uri != null && this.f52100t) {
                this.f52087g.b(uri);
                return;
            }
            return;
        }
        throw iOException;
    }

    public boolean o(Uri uri) {
        return w0.s(this.f52085e, uri);
    }

    public void p(sd.f fVar) {
        if (fVar instanceof a) {
            a aVar = (a) fVar;
            this.f52094n = aVar.h();
            this.f52090j.b(aVar.f49565b.f13328a, (byte[]) ne.a.e(aVar.j()));
        }
    }

    public boolean q(Uri uri, long j10) {
        int j11;
        int i10 = 0;
        while (true) {
            Uri[] uriArr = this.f52085e;
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
        if (i10 == -1 || (j11 = this.f52098r.j(i10)) == -1) {
            return true;
        }
        this.f52100t |= uri.equals(this.f52096p);
        if (j10 != -9223372036854775807L && (!this.f52098r.f(j11, j10) || !this.f52087g.k(uri, j10))) {
            return false;
        }
        return true;
    }

    public void r() {
        this.f52095o = null;
    }

    public void t(boolean z10) {
        this.f52093m = z10;
    }

    public void u(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f52098r = gVar;
    }

    public boolean v(long j10, sd.f fVar, List list) {
        if (this.f52095o != null) {
            return false;
        }
        return this.f52098r.b(j10, fVar, list);
    }
}
