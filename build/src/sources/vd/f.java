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
    private final h f51395a;

    /* renamed from: b  reason: collision with root package name */
    private final DataSource f51396b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f51397c;

    /* renamed from: d  reason: collision with root package name */
    private final s f51398d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri[] f51399e;

    /* renamed from: f  reason: collision with root package name */
    private final Format[] f51400f;

    /* renamed from: g  reason: collision with root package name */
    private final wd.k f51401g;

    /* renamed from: h  reason: collision with root package name */
    private final u0 f51402h;

    /* renamed from: i  reason: collision with root package name */
    private final List f51403i;

    /* renamed from: k  reason: collision with root package name */
    private final t1 f51405k;

    /* renamed from: l  reason: collision with root package name */
    private final long f51406l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f51407m;

    /* renamed from: o  reason: collision with root package name */
    private IOException f51409o;

    /* renamed from: p  reason: collision with root package name */
    private Uri f51410p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f51411q;

    /* renamed from: r  reason: collision with root package name */
    private com.google.android.exoplayer2.trackselection.g f51412r;

    /* renamed from: t  reason: collision with root package name */
    private boolean f51414t;

    /* renamed from: j  reason: collision with root package name */
    private final vd.e f51404j = new vd.e(4);

    /* renamed from: n  reason: collision with root package name */
    private byte[] f51408n = w0.f40202f;

    /* renamed from: s  reason: collision with root package name */
    private long f51413s = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends sd.l {

        /* renamed from: l  reason: collision with root package name */
        private byte[] f51415l;

        public a(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, byte[] bArr) {
            super(dataSource, aVar, 3, format, i10, obj, bArr);
        }

        @Override // sd.l
        protected void g(byte[] bArr, int i10) {
            this.f51415l = Arrays.copyOf(bArr, i10);
        }

        public byte[] j() {
            return this.f51415l;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public sd.f f51416a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f51417b;

        /* renamed from: c  reason: collision with root package name */
        public Uri f51418c;

        public b() {
            a();
        }

        public void a() {
            this.f51416a = null;
            this.f51417b = false;
            this.f51418c = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends sd.b {

        /* renamed from: e  reason: collision with root package name */
        private final List f51419e;

        /* renamed from: f  reason: collision with root package name */
        private final long f51420f;

        /* renamed from: g  reason: collision with root package name */
        private final String f51421g;

        public c(String str, long j10, List list) {
            super(0L, list.size() - 1);
            this.f51421g = str;
            this.f51420f = j10;
            this.f51419e = list;
        }

        @Override // sd.o
        public long a() {
            c();
            return this.f51420f + ((f.e) this.f51419e.get((int) d())).f52163p;
        }

        @Override // sd.o
        public long b() {
            c();
            f.e eVar = (f.e) this.f51419e.get((int) d());
            return this.f51420f + eVar.f52163p + eVar.f52161i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d extends je.b {

        /* renamed from: h  reason: collision with root package name */
        private int f51422h;

        public d(u0 u0Var, int[] iArr) {
            super(u0Var, iArr);
            this.f51422h = o(u0Var.c(iArr[0]));
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int c() {
            return this.f51422h;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public Object h() {
            return null;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void l(long j10, long j11, long j12, List list, sd.o[] oVarArr) {
            long elapsedRealtime = SystemClock.elapsedRealtime();
            if (!a(this.f51422h, elapsedRealtime)) {
                return;
            }
            for (int i10 = this.f31517b - 1; i10 >= 0; i10--) {
                if (!a(i10, elapsedRealtime)) {
                    this.f51422h = i10;
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
        public final f.e f51423a;

        /* renamed from: b  reason: collision with root package name */
        public final long f51424b;

        /* renamed from: c  reason: collision with root package name */
        public final int f51425c;

        /* renamed from: d  reason: collision with root package name */
        public final boolean f51426d;

        public e(f.e eVar, long j10, int i10) {
            boolean z10;
            this.f51423a = eVar;
            this.f51424b = j10;
            this.f51425c = i10;
            if ((eVar instanceof f.b) && ((f.b) eVar).f52153x) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f51426d = z10;
        }
    }

    public f(h hVar, wd.k kVar, Uri[] uriArr, Format[] formatArr, g gVar, c0 c0Var, s sVar, long j10, List list, t1 t1Var, le.g gVar2) {
        this.f51395a = hVar;
        this.f51401g = kVar;
        this.f51399e = uriArr;
        this.f51400f = formatArr;
        this.f51398d = sVar;
        this.f51406l = j10;
        this.f51403i = list;
        this.f51405k = t1Var;
        DataSource a10 = gVar.a(1);
        this.f51396b = a10;
        if (c0Var != null) {
            a10.j(c0Var);
        }
        this.f51397c = gVar.a(3);
        this.f51402h = new u0(formatArr);
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < uriArr.length; i10++) {
            if ((formatArr[i10].f11296p & 16384) == 0) {
                arrayList.add(Integer.valueOf(i10));
            }
        }
        this.f51412r = new d(this.f51402h, li.e.l(arrayList));
    }

    private static Uri d(wd.f fVar, f.e eVar) {
        String str;
        if (eVar != null && (str = eVar.f52165r) != null) {
            return ne.u0.e(fVar.f52196a, str);
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
                if (iVar.f51432o == -1) {
                    j13 = iVar.g();
                } else {
                    j13 = iVar.f49461j;
                }
                Long valueOf = Long.valueOf(j13);
                int i11 = iVar.f51432o;
                if (i11 != -1) {
                    i10 = i11 + 1;
                }
                return new Pair(valueOf, Integer.valueOf(i10));
            }
            return new Pair(Long.valueOf(iVar.f49461j), Integer.valueOf(iVar.f51432o));
        }
        long j14 = fVar.f52150u + j10;
        if (iVar != null && !this.f51411q) {
            j11 = iVar.f49424g;
        }
        if (!fVar.f52144o && j11 >= j14) {
            return new Pair(Long.valueOf(fVar.f52140k + fVar.f52147r.size()), -1);
        }
        long j15 = j11 - j10;
        List list2 = fVar.f52147r;
        Long valueOf2 = Long.valueOf(j15);
        int i12 = 0;
        if (this.f51401g.h() && iVar != null) {
            z11 = false;
        } else {
            z11 = true;
        }
        int f10 = w0.f(list2, valueOf2, true, z11);
        long j16 = f10 + fVar.f52140k;
        if (f10 >= 0) {
            f.d dVar = (f.d) fVar.f52147r.get(f10);
            if (j15 < dVar.f52163p + dVar.f52161i) {
                list = dVar.f52158x;
            } else {
                list = fVar.f52148s;
            }
            while (true) {
                if (i12 >= list.size()) {
                    break;
                }
                f.b bVar = (f.b) list.get(i12);
                if (j15 < bVar.f52163p + bVar.f52161i) {
                    if (bVar.f52152w) {
                        if (list == fVar.f52148s) {
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
        int i11 = (int) (j10 - fVar.f52140k);
        if (i11 == fVar.f52147r.size()) {
            if (i10 == -1) {
                i10 = 0;
            }
            if (i10 >= fVar.f52148s.size()) {
                return null;
            }
            return new e((f.e) fVar.f52148s.get(i10), j10, i10);
        }
        f.d dVar = (f.d) fVar.f52147r.get(i11);
        if (i10 == -1) {
            return new e(dVar, j10, -1);
        }
        if (i10 < dVar.f52158x.size()) {
            return new e((f.e) dVar.f52158x.get(i10), j10, i10);
        }
        int i12 = i11 + 1;
        if (i12 < fVar.f52147r.size()) {
            return new e((f.e) fVar.f52147r.get(i12), j10 + 1, -1);
        }
        if (fVar.f52148s.isEmpty()) {
            return null;
        }
        return new e((f.e) fVar.f52148s.get(0), j10 + 1, 0);
    }

    static List i(wd.f fVar, long j10, int i10) {
        int i11 = (int) (j10 - fVar.f52140k);
        if (i11 >= 0 && fVar.f52147r.size() >= i11) {
            ArrayList arrayList = new ArrayList();
            int i12 = 0;
            if (i11 < fVar.f52147r.size()) {
                if (i10 != -1) {
                    f.d dVar = (f.d) fVar.f52147r.get(i11);
                    if (i10 == 0) {
                        arrayList.add(dVar);
                    } else if (i10 < dVar.f52158x.size()) {
                        List list = dVar.f52158x;
                        arrayList.addAll(list.subList(i10, list.size()));
                    }
                    i11++;
                }
                List list2 = fVar.f52147r;
                arrayList.addAll(list2.subList(i11, list2.size()));
                i10 = 0;
            }
            if (fVar.f52143n != -9223372036854775807L) {
                if (i10 != -1) {
                    i12 = i10;
                }
                if (i12 < fVar.f52148s.size()) {
                    List list3 = fVar.f52148s;
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
        byte[] c10 = this.f51404j.c(uri);
        if (c10 != null) {
            this.f51404j.b(uri, c10);
            return null;
        }
        return new a(this.f51397c, new a.b().i(uri).b(1).e(ji.t.j()).a(), this.f51400f[i10], this.f51412r.r(), this.f51412r.h(), this.f51408n);
    }

    private long s(long j10) {
        long j11 = this.f51413s;
        if (j11 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        return j11 - j10;
    }

    private void w(wd.f fVar) {
        long e10;
        if (fVar.f52144o) {
            e10 = -9223372036854775807L;
        } else {
            e10 = fVar.e() - this.f51401g.c();
        }
        this.f51413s = e10;
    }

    public sd.o[] a(i iVar, long j10) {
        int d10;
        boolean z10;
        if (iVar == null) {
            d10 = -1;
        } else {
            d10 = this.f51402h.d(iVar.f49421d);
        }
        int i10 = d10;
        int length = this.f51412r.length();
        sd.o[] oVarArr = new sd.o[length];
        for (int i11 = 0; i11 < length; i11++) {
            int e10 = this.f51412r.e(i11);
            Uri uri = this.f51399e[e10];
            if (!this.f51401g.g(uri)) {
                oVarArr[i11] = sd.o.f49462a;
            } else {
                wd.f m10 = this.f51401g.m(uri, false);
                ne.a.e(m10);
                long c10 = m10.f52137h - this.f51401g.c();
                if (e10 != i10) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                Pair f10 = f(iVar, z10, m10, c10, j10);
                oVarArr[i11] = new c(m10.f52196a, c10, i(m10, ((Long) f10.first).longValue(), ((Integer) f10.second).intValue()));
            }
        }
        return oVarArr;
    }

    public long b(long j10, t0 t0Var) {
        wd.f fVar;
        long j11;
        int c10 = this.f51412r.c();
        Uri[] uriArr = this.f51399e;
        if (c10 < uriArr.length && c10 != -1) {
            fVar = this.f51401g.m(uriArr[this.f51412r.p()], true);
        } else {
            fVar = null;
        }
        if (fVar != null && !fVar.f52147r.isEmpty() && fVar.f52198c) {
            long c11 = fVar.f52137h - this.f51401g.c();
            long j12 = j10 - c11;
            int f10 = w0.f(fVar.f52147r, Long.valueOf(j12), true, true);
            long j13 = ((f.d) fVar.f52147r.get(f10)).f52163p;
            if (f10 != fVar.f52147r.size() - 1) {
                j11 = ((f.d) fVar.f52147r.get(f10 + 1)).f52163p;
            } else {
                j11 = j13;
            }
            return t0Var.a(j12, j13, j11) + c11;
        }
        return j10;
    }

    public int c(i iVar) {
        List list;
        if (iVar.f51432o == -1) {
            return 1;
        }
        wd.f fVar = (wd.f) ne.a.e(this.f51401g.m(this.f51399e[this.f51402h.d(iVar.f49421d)], false));
        int i10 = (int) (iVar.f49461j - fVar.f52140k);
        if (i10 < 0) {
            return 1;
        }
        if (i10 < fVar.f52147r.size()) {
            list = ((f.d) fVar.f52147r.get(i10)).f52158x;
        } else {
            list = fVar.f52148s;
        }
        if (iVar.f51432o >= list.size()) {
            return 2;
        }
        f.b bVar = (f.b) list.get(iVar.f51432o);
        if (bVar.f52153x) {
            return 0;
        }
        if (w0.c(Uri.parse(ne.u0.d(fVar.f52196a, bVar.f52159d)), iVar.f49419b.f12943a)) {
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
            d10 = this.f51402h.d(iVar.f49421d);
        }
        long j12 = j11 - j10;
        long s10 = s(j10);
        if (iVar != null && !this.f51411q) {
            long d11 = iVar.d();
            j12 = Math.max(0L, j12 - d11);
            if (s10 != -9223372036854775807L) {
                s10 = Math.max(0L, s10 - d11);
            }
        }
        this.f51412r.l(j10, j12, s10, list, a(iVar, j11));
        int p10 = this.f51412r.p();
        if (d10 != p10) {
            z11 = true;
        } else {
            z11 = false;
        }
        Uri uri = this.f51399e[p10];
        if (!this.f51401g.g(uri)) {
            bVar.f51418c = uri;
            this.f51414t &= uri.equals(this.f51410p);
            this.f51410p = uri;
            return;
        }
        wd.f m10 = this.f51401g.m(uri, true);
        ne.a.e(m10);
        this.f51411q = m10.f52198c;
        w(m10);
        long c10 = m10.f52137h - this.f51401g.c();
        Pair f10 = f(iVar, z11, m10, c10, j11);
        long longValue = ((Long) f10.first).longValue();
        int intValue = ((Integer) f10.second).intValue();
        int i11 = d10;
        if (longValue < m10.f52140k && iVar != null && z11) {
            uri = this.f51399e[i11];
            m10 = this.f51401g.m(uri, true);
            ne.a.e(m10);
            c10 = m10.f52137h - this.f51401g.c();
            Pair f11 = f(iVar, false, m10, c10, j11);
            longValue = ((Long) f11.first).longValue();
            intValue = ((Integer) f11.second).intValue();
            i10 = i11;
        } else {
            i10 = p10;
        }
        Uri uri2 = uri;
        wd.f fVar = m10;
        if (longValue < fVar.f52140k) {
            this.f51409o = new qd.b();
            return;
        }
        e g10 = g(fVar, longValue, intValue);
        if (g10 == null) {
            if (!fVar.f52144o) {
                bVar.f51418c = uri2;
                this.f51414t &= uri2.equals(this.f51410p);
                this.f51410p = uri2;
                return;
            } else if (!z10 && !fVar.f52147r.isEmpty()) {
                g10 = new e((f.e) v.c(fVar.f52147r), (fVar.f52140k + fVar.f52147r.size()) - 1, -1);
            } else {
                bVar.f51417b = true;
                return;
            }
        }
        this.f51414t = false;
        this.f51410p = null;
        Uri d12 = d(fVar, g10.f51423a.f52160e);
        sd.f l10 = l(d12, i10, true, null);
        bVar.f51416a = l10;
        if (l10 == null) {
            Uri d13 = d(fVar, g10.f51423a);
            sd.f l11 = l(d13, i10, false, null);
            bVar.f51416a = l11;
            if (l11 == null) {
                long j13 = c10;
                boolean w10 = i.w(iVar, uri2, fVar, g10, j13);
                if (w10 && g10.f51426d) {
                    return;
                }
                bVar.f51416a = i.j(this.f51395a, this.f51396b, this.f51400f[i10], j13, fVar, g10, uri2, this.f51403i, this.f51412r.r(), this.f51412r.h(), this.f51407m, this.f51398d, this.f51406l, iVar, this.f51404j.a(d13), this.f51404j.a(d12), w10, this.f51405k, null);
            }
        }
    }

    public int h(long j10, List list) {
        if (this.f51409o == null && this.f51412r.length() >= 2) {
            return this.f51412r.n(j10, list);
        }
        return list.size();
    }

    public u0 j() {
        return this.f51402h;
    }

    public com.google.android.exoplayer2.trackselection.g k() {
        return this.f51412r;
    }

    public boolean m(sd.f fVar, long j10) {
        com.google.android.exoplayer2.trackselection.g gVar = this.f51412r;
        return gVar.f(gVar.j(this.f51402h.d(fVar.f49421d)), j10);
    }

    public void n() {
        IOException iOException = this.f51409o;
        if (iOException == null) {
            Uri uri = this.f51410p;
            if (uri != null && this.f51414t) {
                this.f51401g.b(uri);
                return;
            }
            return;
        }
        throw iOException;
    }

    public boolean o(Uri uri) {
        return w0.s(this.f51399e, uri);
    }

    public void p(sd.f fVar) {
        if (fVar instanceof a) {
            a aVar = (a) fVar;
            this.f51408n = aVar.h();
            this.f51404j.b(aVar.f49419b.f12943a, (byte[]) ne.a.e(aVar.j()));
        }
    }

    public boolean q(Uri uri, long j10) {
        int j11;
        int i10 = 0;
        while (true) {
            Uri[] uriArr = this.f51399e;
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
        if (i10 == -1 || (j11 = this.f51412r.j(i10)) == -1) {
            return true;
        }
        this.f51414t |= uri.equals(this.f51410p);
        if (j10 != -9223372036854775807L && (!this.f51412r.f(j11, j10) || !this.f51401g.k(uri, j10))) {
            return false;
        }
        return true;
    }

    public void r() {
        this.f51409o = null;
    }

    public void t(boolean z10) {
        this.f51407m = z10;
    }

    public void u(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f51412r = gVar;
    }

    public boolean v(long j10, sd.f fVar, List list) {
        if (this.f51409o != null) {
            return false;
        }
        return this.f51412r.b(j10, fVar, list);
    }
}
