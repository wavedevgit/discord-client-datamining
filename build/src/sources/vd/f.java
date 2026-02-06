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
import ne.w0;
import ni.v;
import qd.u0;
import wd.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class f {

    /* renamed from: a  reason: collision with root package name */
    private final h f52446a;

    /* renamed from: b  reason: collision with root package name */
    private final DataSource f52447b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f52448c;

    /* renamed from: d  reason: collision with root package name */
    private final s f52449d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri[] f52450e;

    /* renamed from: f  reason: collision with root package name */
    private final Format[] f52451f;

    /* renamed from: g  reason: collision with root package name */
    private final wd.k f52452g;

    /* renamed from: h  reason: collision with root package name */
    private final u0 f52453h;

    /* renamed from: i  reason: collision with root package name */
    private final List f52454i;

    /* renamed from: k  reason: collision with root package name */
    private final t1 f52456k;

    /* renamed from: l  reason: collision with root package name */
    private final long f52457l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f52458m;

    /* renamed from: o  reason: collision with root package name */
    private IOException f52460o;

    /* renamed from: p  reason: collision with root package name */
    private Uri f52461p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f52462q;

    /* renamed from: r  reason: collision with root package name */
    private com.google.android.exoplayer2.trackselection.g f52463r;

    /* renamed from: t  reason: collision with root package name */
    private boolean f52465t;

    /* renamed from: j  reason: collision with root package name */
    private final vd.e f52455j = new vd.e(4);

    /* renamed from: n  reason: collision with root package name */
    private byte[] f52459n = w0.f39017f;

    /* renamed from: s  reason: collision with root package name */
    private long f52464s = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends sd.l {

        /* renamed from: l  reason: collision with root package name */
        private byte[] f52466l;

        public a(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, byte[] bArr) {
            super(dataSource, aVar, 3, format, i10, obj, bArr);
        }

        @Override // sd.l
        protected void g(byte[] bArr, int i10) {
            this.f52466l = Arrays.copyOf(bArr, i10);
        }

        public byte[] j() {
            return this.f52466l;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public sd.f f52467a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f52468b;

        /* renamed from: c  reason: collision with root package name */
        public Uri f52469c;

        public b() {
            a();
        }

        public void a() {
            this.f52467a = null;
            this.f52468b = false;
            this.f52469c = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends sd.b {

        /* renamed from: e  reason: collision with root package name */
        private final List f52470e;

        /* renamed from: f  reason: collision with root package name */
        private final long f52471f;

        /* renamed from: g  reason: collision with root package name */
        private final String f52472g;

        public c(String str, long j10, List list) {
            super(0L, list.size() - 1);
            this.f52472g = str;
            this.f52471f = j10;
            this.f52470e = list;
        }

        @Override // sd.o
        public long a() {
            c();
            return this.f52471f + ((f.e) this.f52470e.get((int) d())).f53596p;
        }

        @Override // sd.o
        public long b() {
            c();
            f.e eVar = (f.e) this.f52470e.get((int) d());
            return this.f52471f + eVar.f53596p + eVar.f53594i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d extends je.b {

        /* renamed from: h  reason: collision with root package name */
        private int f52473h;

        public d(u0 u0Var, int[] iArr) {
            super(u0Var, iArr);
            this.f52473h = o(u0Var.c(iArr[0]));
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int c() {
            return this.f52473h;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public Object h() {
            return null;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void l(long j10, long j11, long j12, List list, sd.o[] oVarArr) {
            long elapsedRealtime = SystemClock.elapsedRealtime();
            if (!a(this.f52473h, elapsedRealtime)) {
                return;
            }
            for (int i10 = this.f29839b - 1; i10 >= 0; i10--) {
                if (!a(i10, elapsedRealtime)) {
                    this.f52473h = i10;
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
        public final f.e f52474a;

        /* renamed from: b  reason: collision with root package name */
        public final long f52475b;

        /* renamed from: c  reason: collision with root package name */
        public final int f52476c;

        /* renamed from: d  reason: collision with root package name */
        public final boolean f52477d;

        public e(f.e eVar, long j10, int i10) {
            boolean z10;
            this.f52474a = eVar;
            this.f52475b = j10;
            this.f52476c = i10;
            if ((eVar instanceof f.b) && ((f.b) eVar).f53586x) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f52477d = z10;
        }
    }

    public f(h hVar, wd.k kVar, Uri[] uriArr, Format[] formatArr, g gVar, c0 c0Var, s sVar, long j10, List list, t1 t1Var, le.g gVar2) {
        this.f52446a = hVar;
        this.f52452g = kVar;
        this.f52450e = uriArr;
        this.f52451f = formatArr;
        this.f52449d = sVar;
        this.f52457l = j10;
        this.f52454i = list;
        this.f52456k = t1Var;
        DataSource a10 = gVar.a(1);
        this.f52447b = a10;
        if (c0Var != null) {
            a10.j(c0Var);
        }
        this.f52448c = gVar.a(3);
        this.f52453h = new u0(formatArr);
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < uriArr.length; i10++) {
            if ((formatArr[i10].f11580p & 16384) == 0) {
                arrayList.add(Integer.valueOf(i10));
            }
        }
        this.f52463r = new d(this.f52453h, pi.e.l(arrayList));
    }

    private static Uri d(wd.f fVar, f.e eVar) {
        String str;
        if (eVar != null && (str = eVar.f53598r) != null) {
            return ne.u0.e(fVar.f53629a, str);
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
                if (iVar.f52483o == -1) {
                    j13 = iVar.g();
                } else {
                    j13 = iVar.f49928j;
                }
                Long valueOf = Long.valueOf(j13);
                int i11 = iVar.f52483o;
                if (i11 != -1) {
                    i10 = i11 + 1;
                }
                return new Pair(valueOf, Integer.valueOf(i10));
            }
            return new Pair(Long.valueOf(iVar.f49928j), Integer.valueOf(iVar.f52483o));
        }
        long j14 = fVar.f53583u + j10;
        if (iVar != null && !this.f52462q) {
            j11 = iVar.f49891g;
        }
        if (!fVar.f53577o && j11 >= j14) {
            return new Pair(Long.valueOf(fVar.f53573k + fVar.f53580r.size()), -1);
        }
        long j15 = j11 - j10;
        List list2 = fVar.f53580r;
        Long valueOf2 = Long.valueOf(j15);
        int i12 = 0;
        if (this.f52452g.h() && iVar != null) {
            z11 = false;
        } else {
            z11 = true;
        }
        int f10 = w0.f(list2, valueOf2, true, z11);
        long j16 = f10 + fVar.f53573k;
        if (f10 >= 0) {
            f.d dVar = (f.d) fVar.f53580r.get(f10);
            if (j15 < dVar.f53596p + dVar.f53594i) {
                list = dVar.f53591x;
            } else {
                list = fVar.f53581s;
            }
            while (true) {
                if (i12 >= list.size()) {
                    break;
                }
                f.b bVar = (f.b) list.get(i12);
                if (j15 < bVar.f53596p + bVar.f53594i) {
                    if (bVar.f53585w) {
                        if (list == fVar.f53581s) {
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
        int i11 = (int) (j10 - fVar.f53573k);
        if (i11 == fVar.f53580r.size()) {
            if (i10 == -1) {
                i10 = 0;
            }
            if (i10 >= fVar.f53581s.size()) {
                return null;
            }
            return new e((f.e) fVar.f53581s.get(i10), j10, i10);
        }
        f.d dVar = (f.d) fVar.f53580r.get(i11);
        if (i10 == -1) {
            return new e(dVar, j10, -1);
        }
        if (i10 < dVar.f53591x.size()) {
            return new e((f.e) dVar.f53591x.get(i10), j10, i10);
        }
        int i12 = i11 + 1;
        if (i12 < fVar.f53580r.size()) {
            return new e((f.e) fVar.f53580r.get(i12), j10 + 1, -1);
        }
        if (fVar.f53581s.isEmpty()) {
            return null;
        }
        return new e((f.e) fVar.f53581s.get(0), j10 + 1, 0);
    }

    static List i(wd.f fVar, long j10, int i10) {
        int i11 = (int) (j10 - fVar.f53573k);
        if (i11 >= 0 && fVar.f53580r.size() >= i11) {
            ArrayList arrayList = new ArrayList();
            int i12 = 0;
            if (i11 < fVar.f53580r.size()) {
                if (i10 != -1) {
                    f.d dVar = (f.d) fVar.f53580r.get(i11);
                    if (i10 == 0) {
                        arrayList.add(dVar);
                    } else if (i10 < dVar.f53591x.size()) {
                        List list = dVar.f53591x;
                        arrayList.addAll(list.subList(i10, list.size()));
                    }
                    i11++;
                }
                List list2 = fVar.f53580r;
                arrayList.addAll(list2.subList(i11, list2.size()));
                i10 = 0;
            }
            if (fVar.f53576n != -9223372036854775807L) {
                if (i10 != -1) {
                    i12 = i10;
                }
                if (i12 < fVar.f53581s.size()) {
                    List list3 = fVar.f53581s;
                    arrayList.addAll(list3.subList(i12, list3.size()));
                }
            }
            return Collections.unmodifiableList(arrayList);
        }
        return ni.s.t();
    }

    private sd.f l(Uri uri, int i10, boolean z10, le.h hVar) {
        if (uri == null) {
            return null;
        }
        byte[] c10 = this.f52455j.c(uri);
        if (c10 != null) {
            this.f52455j.b(uri, c10);
            return null;
        }
        return new a(this.f52448c, new a.b().i(uri).b(1).e(ni.t.j()).a(), this.f52451f[i10], this.f52463r.r(), this.f52463r.h(), this.f52459n);
    }

    private long s(long j10) {
        long j11 = this.f52464s;
        if (j11 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        return j11 - j10;
    }

    private void w(wd.f fVar) {
        long e10;
        if (fVar.f53577o) {
            e10 = -9223372036854775807L;
        } else {
            e10 = fVar.e() - this.f52452g.c();
        }
        this.f52464s = e10;
    }

    public sd.o[] a(i iVar, long j10) {
        int d10;
        boolean z10;
        if (iVar == null) {
            d10 = -1;
        } else {
            d10 = this.f52453h.d(iVar.f49888d);
        }
        int i10 = d10;
        int length = this.f52463r.length();
        sd.o[] oVarArr = new sd.o[length];
        for (int i11 = 0; i11 < length; i11++) {
            int e10 = this.f52463r.e(i11);
            Uri uri = this.f52450e[e10];
            if (!this.f52452g.g(uri)) {
                oVarArr[i11] = sd.o.f49929a;
            } else {
                wd.f m10 = this.f52452g.m(uri, false);
                ne.a.e(m10);
                long c10 = m10.f53570h - this.f52452g.c();
                if (e10 != i10) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                Pair f10 = f(iVar, z10, m10, c10, j10);
                oVarArr[i11] = new c(m10.f53629a, c10, i(m10, ((Long) f10.first).longValue(), ((Integer) f10.second).intValue()));
            }
        }
        return oVarArr;
    }

    public long b(long j10, t0 t0Var) {
        wd.f fVar;
        long j11;
        int c10 = this.f52463r.c();
        Uri[] uriArr = this.f52450e;
        if (c10 < uriArr.length && c10 != -1) {
            fVar = this.f52452g.m(uriArr[this.f52463r.p()], true);
        } else {
            fVar = null;
        }
        if (fVar != null && !fVar.f53580r.isEmpty() && fVar.f53631c) {
            long c11 = fVar.f53570h - this.f52452g.c();
            long j12 = j10 - c11;
            int f10 = w0.f(fVar.f53580r, Long.valueOf(j12), true, true);
            long j13 = ((f.d) fVar.f53580r.get(f10)).f53596p;
            if (f10 != fVar.f53580r.size() - 1) {
                j11 = ((f.d) fVar.f53580r.get(f10 + 1)).f53596p;
            } else {
                j11 = j13;
            }
            return t0Var.a(j12, j13, j11) + c11;
        }
        return j10;
    }

    public int c(i iVar) {
        List list;
        if (iVar.f52483o == -1) {
            return 1;
        }
        wd.f fVar = (wd.f) ne.a.e(this.f52452g.m(this.f52450e[this.f52453h.d(iVar.f49888d)], false));
        int i10 = (int) (iVar.f49928j - fVar.f53573k);
        if (i10 < 0) {
            return 1;
        }
        if (i10 < fVar.f53580r.size()) {
            list = ((f.d) fVar.f53580r.get(i10)).f53591x;
        } else {
            list = fVar.f53581s;
        }
        if (iVar.f52483o >= list.size()) {
            return 2;
        }
        f.b bVar = (f.b) list.get(iVar.f52483o);
        if (bVar.f53586x) {
            return 0;
        }
        if (w0.c(Uri.parse(ne.u0.d(fVar.f53629a, bVar.f53592d)), iVar.f49886b.f13265a)) {
            return 1;
        }
        return 2;
    }

    public void e(long j10, long j11, List list, boolean z10, b bVar) {
        int i10;
        i iVar = list.isEmpty() ? null : (i) v.c(list);
        int d10 = iVar == null ? -1 : this.f52453h.d(iVar.f49888d);
        long j12 = j11 - j10;
        long s10 = s(j10);
        if (iVar != null && !this.f52462q) {
            long d11 = iVar.d();
            j12 = Math.max(0L, j12 - d11);
            if (s10 != -9223372036854775807L) {
                s10 = Math.max(0L, s10 - d11);
            }
        }
        this.f52463r.l(j10, j12, s10, list, a(iVar, j11));
        int p10 = this.f52463r.p();
        boolean z11 = d10 != p10;
        Uri uri = this.f52450e[p10];
        if (!this.f52452g.g(uri)) {
            bVar.f52469c = uri;
            this.f52465t &= uri.equals(this.f52461p);
            this.f52461p = uri;
            return;
        }
        wd.f m10 = this.f52452g.m(uri, true);
        ne.a.e(m10);
        this.f52462q = m10.f53631c;
        w(m10);
        long c10 = m10.f53570h - this.f52452g.c();
        Pair f10 = f(iVar, z11, m10, c10, j11);
        long longValue = ((Long) f10.first).longValue();
        int intValue = ((Integer) f10.second).intValue();
        int i11 = d10;
        if (longValue >= m10.f53573k || iVar == null || !z11) {
            i10 = p10;
        } else {
            uri = this.f52450e[i11];
            m10 = this.f52452g.m(uri, true);
            ne.a.e(m10);
            c10 = m10.f53570h - this.f52452g.c();
            Pair f11 = f(iVar, false, m10, c10, j11);
            longValue = ((Long) f11.first).longValue();
            intValue = ((Integer) f11.second).intValue();
            i10 = i11;
        }
        Uri uri2 = uri;
        wd.f fVar = m10;
        if (longValue < fVar.f53573k) {
            this.f52460o = new qd.b();
            return;
        }
        e g10 = g(fVar, longValue, intValue);
        if (g10 == null) {
            if (!fVar.f53577o) {
                bVar.f52469c = uri2;
                this.f52465t &= uri2.equals(this.f52461p);
                this.f52461p = uri2;
                return;
            } else if (!z10 && !fVar.f53580r.isEmpty()) {
                g10 = new e((f.e) v.c(fVar.f53580r), (fVar.f53573k + fVar.f53580r.size()) - 1, -1);
            } else {
                bVar.f52468b = true;
                return;
            }
        }
        this.f52465t = false;
        this.f52461p = null;
        Uri d12 = d(fVar, g10.f52474a.f53593e);
        sd.f l10 = l(d12, i10, true, null);
        bVar.f52467a = l10;
        if (l10 != null) {
            return;
        }
        Uri d13 = d(fVar, g10.f52474a);
        sd.f l11 = l(d13, i10, false, null);
        bVar.f52467a = l11;
        if (l11 != null) {
            return;
        }
        long j13 = c10;
        boolean w10 = i.w(iVar, uri2, fVar, g10, j13);
        if (w10 && g10.f52477d) {
            return;
        }
        bVar.f52467a = i.j(this.f52446a, this.f52447b, this.f52451f[i10], j13, fVar, g10, uri2, this.f52454i, this.f52463r.r(), this.f52463r.h(), this.f52458m, this.f52449d, this.f52457l, iVar, this.f52455j.a(d13), this.f52455j.a(d12), w10, this.f52456k, null);
    }

    public int h(long j10, List list) {
        if (this.f52460o == null && this.f52463r.length() >= 2) {
            return this.f52463r.n(j10, list);
        }
        return list.size();
    }

    public u0 j() {
        return this.f52453h;
    }

    public com.google.android.exoplayer2.trackselection.g k() {
        return this.f52463r;
    }

    public boolean m(sd.f fVar, long j10) {
        com.google.android.exoplayer2.trackselection.g gVar = this.f52463r;
        return gVar.f(gVar.j(this.f52453h.d(fVar.f49888d)), j10);
    }

    public void n() {
        IOException iOException = this.f52460o;
        if (iOException == null) {
            Uri uri = this.f52461p;
            if (uri != null && this.f52465t) {
                this.f52452g.b(uri);
                return;
            }
            return;
        }
        throw iOException;
    }

    public boolean o(Uri uri) {
        return w0.s(this.f52450e, uri);
    }

    public void p(sd.f fVar) {
        if (fVar instanceof a) {
            a aVar = (a) fVar;
            this.f52459n = aVar.h();
            this.f52455j.b(aVar.f49886b.f13265a, (byte[]) ne.a.e(aVar.j()));
        }
    }

    public boolean q(Uri uri, long j10) {
        int j11;
        int i10 = 0;
        while (true) {
            Uri[] uriArr = this.f52450e;
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
        if (i10 == -1 || (j11 = this.f52463r.j(i10)) == -1) {
            return true;
        }
        this.f52465t |= uri.equals(this.f52461p);
        if (j10 != -9223372036854775807L && (!this.f52463r.f(j11, j10) || !this.f52452g.k(uri, j10))) {
            return false;
        }
        return true;
    }

    public void r() {
        this.f52460o = null;
    }

    public void t(boolean z10) {
        this.f52458m = z10;
    }

    public void u(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f52463r = gVar;
    }

    public boolean v(long j10, sd.f fVar, List list) {
        if (this.f52460o != null) {
            return false;
        }
        return this.f52463r.b(j10, fVar, list);
    }
}
