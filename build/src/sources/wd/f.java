package wd;

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
import mc.t0;
import me.c0;
import nc.t1;
import oe.w0;
import qi.v;
import rd.u0;
import xd.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
class f {

    /* renamed from: a  reason: collision with root package name */
    private final h f52551a;

    /* renamed from: b  reason: collision with root package name */
    private final DataSource f52552b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f52553c;

    /* renamed from: d  reason: collision with root package name */
    private final s f52554d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri[] f52555e;

    /* renamed from: f  reason: collision with root package name */
    private final Format[] f52556f;

    /* renamed from: g  reason: collision with root package name */
    private final xd.k f52557g;

    /* renamed from: h  reason: collision with root package name */
    private final u0 f52558h;

    /* renamed from: i  reason: collision with root package name */
    private final List f52559i;

    /* renamed from: k  reason: collision with root package name */
    private final t1 f52561k;

    /* renamed from: l  reason: collision with root package name */
    private final long f52562l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f52563m;

    /* renamed from: o  reason: collision with root package name */
    private IOException f52565o;

    /* renamed from: p  reason: collision with root package name */
    private Uri f52566p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f52567q;

    /* renamed from: r  reason: collision with root package name */
    private com.google.android.exoplayer2.trackselection.g f52568r;

    /* renamed from: t  reason: collision with root package name */
    private boolean f52570t;

    /* renamed from: j  reason: collision with root package name */
    private final wd.e f52560j = new wd.e(4);

    /* renamed from: n  reason: collision with root package name */
    private byte[] f52564n = w0.f39043f;

    /* renamed from: s  reason: collision with root package name */
    private long f52569s = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends td.l {

        /* renamed from: l  reason: collision with root package name */
        private byte[] f52571l;

        public a(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, byte[] bArr) {
            super(dataSource, aVar, 3, format, i10, obj, bArr);
        }

        @Override // td.l
        protected void g(byte[] bArr, int i10) {
            this.f52571l = Arrays.copyOf(bArr, i10);
        }

        public byte[] j() {
            return this.f52571l;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public td.f f52572a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f52573b;

        /* renamed from: c  reason: collision with root package name */
        public Uri f52574c;

        public b() {
            a();
        }

        public void a() {
            this.f52572a = null;
            this.f52573b = false;
            this.f52574c = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends td.b {

        /* renamed from: e  reason: collision with root package name */
        private final List f52575e;

        /* renamed from: f  reason: collision with root package name */
        private final long f52576f;

        /* renamed from: g  reason: collision with root package name */
        private final String f52577g;

        public c(String str, long j10, List list) {
            super(0L, list.size() - 1);
            this.f52577g = str;
            this.f52576f = j10;
            this.f52575e = list;
        }

        @Override // td.o
        public long a() {
            c();
            return this.f52576f + ((f.e) this.f52575e.get((int) d())).f54540p;
        }

        @Override // td.o
        public long b() {
            c();
            f.e eVar = (f.e) this.f52575e.get((int) d());
            return this.f52576f + eVar.f54540p + eVar.f54538i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d extends ke.b {

        /* renamed from: h  reason: collision with root package name */
        private int f52578h;

        public d(u0 u0Var, int[] iArr) {
            super(u0Var, iArr);
            this.f52578h = o(u0Var.c(iArr[0]));
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int b() {
            return this.f52578h;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void e(long j10, long j11, long j12, List list, td.o[] oVarArr) {
            long elapsedRealtime = SystemClock.elapsedRealtime();
            if (!a(this.f52578h, elapsedRealtime)) {
                return;
            }
            for (int i10 = this.f31697b - 1; i10 >= 0; i10--) {
                if (!a(i10, elapsedRealtime)) {
                    this.f52578h = i10;
                    return;
                }
            }
            throw new IllegalStateException();
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public Object h() {
            return null;
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
        public final f.e f52579a;

        /* renamed from: b  reason: collision with root package name */
        public final long f52580b;

        /* renamed from: c  reason: collision with root package name */
        public final int f52581c;

        /* renamed from: d  reason: collision with root package name */
        public final boolean f52582d;

        public e(f.e eVar, long j10, int i10) {
            boolean z10;
            this.f52579a = eVar;
            this.f52580b = j10;
            this.f52581c = i10;
            if ((eVar instanceof f.b) && ((f.b) eVar).f54530x) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f52582d = z10;
        }
    }

    public f(h hVar, xd.k kVar, Uri[] uriArr, Format[] formatArr, g gVar, c0 c0Var, s sVar, long j10, List list, t1 t1Var, me.g gVar2) {
        this.f52551a = hVar;
        this.f52557g = kVar;
        this.f52555e = uriArr;
        this.f52556f = formatArr;
        this.f52554d = sVar;
        this.f52562l = j10;
        this.f52559i = list;
        this.f52561k = t1Var;
        DataSource a10 = gVar.a(1);
        this.f52552b = a10;
        if (c0Var != null) {
            a10.i(c0Var);
        }
        this.f52553c = gVar.a(3);
        this.f52558h = new u0(formatArr);
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < uriArr.length; i10++) {
            if ((formatArr[i10].f12298p & 16384) == 0) {
                arrayList.add(Integer.valueOf(i10));
            }
        }
        this.f52568r = new d(this.f52558h, si.e.l(arrayList));
    }

    private static Uri d(xd.f fVar, f.e eVar) {
        String str;
        if (eVar != null && (str = eVar.f54542r) != null) {
            return oe.u0.e(fVar.f54573a, str);
        }
        return null;
    }

    private Pair f(i iVar, boolean z10, xd.f fVar, long j10, long j11) {
        boolean z11;
        List list;
        long j12;
        long j13;
        int i10 = -1;
        if (iVar != null && !z10) {
            if (iVar.h()) {
                if (iVar.f52588o == -1) {
                    j13 = iVar.g();
                } else {
                    j13 = iVar.f48750j;
                }
                Long valueOf = Long.valueOf(j13);
                int i11 = iVar.f52588o;
                if (i11 != -1) {
                    i10 = i11 + 1;
                }
                return new Pair(valueOf, Integer.valueOf(i10));
            }
            return new Pair(Long.valueOf(iVar.f48750j), Integer.valueOf(iVar.f52588o));
        }
        long j14 = fVar.f54527u + j10;
        if (iVar != null && !this.f52567q) {
            j11 = iVar.f48713g;
        }
        if (!fVar.f54521o && j11 >= j14) {
            return new Pair(Long.valueOf(fVar.f54517k + fVar.f54524r.size()), -1);
        }
        long j15 = j11 - j10;
        List list2 = fVar.f54524r;
        Long valueOf2 = Long.valueOf(j15);
        int i12 = 0;
        if (this.f52557g.j() && iVar != null) {
            z11 = false;
        } else {
            z11 = true;
        }
        int f10 = w0.f(list2, valueOf2, true, z11);
        long j16 = f10 + fVar.f54517k;
        if (f10 >= 0) {
            f.d dVar = (f.d) fVar.f54524r.get(f10);
            if (j15 < dVar.f54540p + dVar.f54538i) {
                list = dVar.f54535x;
            } else {
                list = fVar.f54525s;
            }
            while (true) {
                if (i12 >= list.size()) {
                    break;
                }
                f.b bVar = (f.b) list.get(i12);
                if (j15 < bVar.f54540p + bVar.f54538i) {
                    if (bVar.f54529w) {
                        if (list == fVar.f54525s) {
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

    private static e g(xd.f fVar, long j10, int i10) {
        int i11 = (int) (j10 - fVar.f54517k);
        if (i11 == fVar.f54524r.size()) {
            if (i10 == -1) {
                i10 = 0;
            }
            if (i10 >= fVar.f54525s.size()) {
                return null;
            }
            return new e((f.e) fVar.f54525s.get(i10), j10, i10);
        }
        f.d dVar = (f.d) fVar.f54524r.get(i11);
        if (i10 == -1) {
            return new e(dVar, j10, -1);
        }
        if (i10 < dVar.f54535x.size()) {
            return new e((f.e) dVar.f54535x.get(i10), j10, i10);
        }
        int i12 = i11 + 1;
        if (i12 < fVar.f54524r.size()) {
            return new e((f.e) fVar.f54524r.get(i12), j10 + 1, -1);
        }
        if (fVar.f54525s.isEmpty()) {
            return null;
        }
        return new e((f.e) fVar.f54525s.get(0), j10 + 1, 0);
    }

    static List i(xd.f fVar, long j10, int i10) {
        int i11 = (int) (j10 - fVar.f54517k);
        if (i11 >= 0 && fVar.f54524r.size() >= i11) {
            ArrayList arrayList = new ArrayList();
            int i12 = 0;
            if (i11 < fVar.f54524r.size()) {
                if (i10 != -1) {
                    f.d dVar = (f.d) fVar.f54524r.get(i11);
                    if (i10 == 0) {
                        arrayList.add(dVar);
                    } else if (i10 < dVar.f54535x.size()) {
                        List list = dVar.f54535x;
                        arrayList.addAll(list.subList(i10, list.size()));
                    }
                    i11++;
                }
                List list2 = fVar.f54524r;
                arrayList.addAll(list2.subList(i11, list2.size()));
                i10 = 0;
            }
            if (fVar.f54520n != -9223372036854775807L) {
                if (i10 != -1) {
                    i12 = i10;
                }
                if (i12 < fVar.f54525s.size()) {
                    List list3 = fVar.f54525s;
                    arrayList.addAll(list3.subList(i12, list3.size()));
                }
            }
            return Collections.unmodifiableList(arrayList);
        }
        return qi.s.t();
    }

    private td.f l(Uri uri, int i10, boolean z10, me.h hVar) {
        if (uri == null) {
            return null;
        }
        byte[] c10 = this.f52560j.c(uri);
        if (c10 != null) {
            this.f52560j.b(uri, c10);
            return null;
        }
        return new a(this.f52553c, new a.b().i(uri).b(1).e(qi.t.j()).a(), this.f52556f[i10], this.f52568r.r(), this.f52568r.h(), this.f52564n);
    }

    private long s(long j10) {
        long j11 = this.f52569s;
        if (j11 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        return j11 - j10;
    }

    private void w(xd.f fVar) {
        long e10;
        if (fVar.f54521o) {
            e10 = -9223372036854775807L;
        } else {
            e10 = fVar.e() - this.f52557g.c();
        }
        this.f52569s = e10;
    }

    public td.o[] a(i iVar, long j10) {
        int d10;
        boolean z10;
        if (iVar == null) {
            d10 = -1;
        } else {
            d10 = this.f52558h.d(iVar.f48710d);
        }
        int i10 = d10;
        int length = this.f52568r.length();
        td.o[] oVarArr = new td.o[length];
        for (int i11 = 0; i11 < length; i11++) {
            int d11 = this.f52568r.d(i11);
            Uri uri = this.f52555e[d11];
            if (!this.f52557g.h(uri)) {
                oVarArr[i11] = td.o.f48751a;
            } else {
                xd.f o10 = this.f52557g.o(uri, false);
                oe.a.e(o10);
                long c10 = o10.f54514h - this.f52557g.c();
                if (d11 != i10) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                Pair f10 = f(iVar, z10, o10, c10, j10);
                oVarArr[i11] = new c(o10.f54573a, c10, i(o10, ((Long) f10.first).longValue(), ((Integer) f10.second).intValue()));
            }
        }
        return oVarArr;
    }

    public long b(long j10, t0 t0Var) {
        xd.f fVar;
        long j11;
        int b10 = this.f52568r.b();
        Uri[] uriArr = this.f52555e;
        if (b10 < uriArr.length && b10 != -1) {
            fVar = this.f52557g.o(uriArr[this.f52568r.p()], true);
        } else {
            fVar = null;
        }
        if (fVar != null && !fVar.f54524r.isEmpty() && fVar.f54575c) {
            long c10 = fVar.f54514h - this.f52557g.c();
            long j12 = j10 - c10;
            int f10 = w0.f(fVar.f54524r, Long.valueOf(j12), true, true);
            long j13 = ((f.d) fVar.f54524r.get(f10)).f54540p;
            if (f10 != fVar.f54524r.size() - 1) {
                j11 = ((f.d) fVar.f54524r.get(f10 + 1)).f54540p;
            } else {
                j11 = j13;
            }
            return t0Var.a(j12, j13, j11) + c10;
        }
        return j10;
    }

    public int c(i iVar) {
        List list;
        if (iVar.f52588o == -1) {
            return 1;
        }
        xd.f fVar = (xd.f) oe.a.e(this.f52557g.o(this.f52555e[this.f52558h.d(iVar.f48710d)], false));
        int i10 = (int) (iVar.f48750j - fVar.f54517k);
        if (i10 < 0) {
            return 1;
        }
        if (i10 < fVar.f54524r.size()) {
            list = ((f.d) fVar.f54524r.get(i10)).f54535x;
        } else {
            list = fVar.f54525s;
        }
        if (iVar.f52588o >= list.size()) {
            return 2;
        }
        f.b bVar = (f.b) list.get(iVar.f52588o);
        if (bVar.f54530x) {
            return 0;
        }
        if (w0.c(Uri.parse(oe.u0.d(fVar.f54573a, bVar.f54536d)), iVar.f48708b.f13983a)) {
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
            d10 = this.f52558h.d(iVar.f48710d);
        }
        long j12 = j11 - j10;
        long s10 = s(j10);
        if (iVar != null && !this.f52567q) {
            long d11 = iVar.d();
            j12 = Math.max(0L, j12 - d11);
            if (s10 != -9223372036854775807L) {
                s10 = Math.max(0L, s10 - d11);
            }
        }
        this.f52568r.e(j10, j12, s10, list, a(iVar, j11));
        int p10 = this.f52568r.p();
        if (d10 != p10) {
            z11 = true;
        } else {
            z11 = false;
        }
        Uri uri = this.f52555e[p10];
        if (!this.f52557g.h(uri)) {
            bVar.f52574c = uri;
            this.f52570t &= uri.equals(this.f52566p);
            this.f52566p = uri;
            return;
        }
        xd.f o10 = this.f52557g.o(uri, true);
        oe.a.e(o10);
        this.f52567q = o10.f54575c;
        w(o10);
        long c10 = o10.f54514h - this.f52557g.c();
        Pair f10 = f(iVar, z11, o10, c10, j11);
        long longValue = ((Long) f10.first).longValue();
        int intValue = ((Integer) f10.second).intValue();
        int i11 = d10;
        if (longValue < o10.f54517k && iVar != null && z11) {
            uri = this.f52555e[i11];
            o10 = this.f52557g.o(uri, true);
            oe.a.e(o10);
            c10 = o10.f54514h - this.f52557g.c();
            Pair f11 = f(iVar, false, o10, c10, j11);
            longValue = ((Long) f11.first).longValue();
            intValue = ((Integer) f11.second).intValue();
            i10 = i11;
        } else {
            i10 = p10;
        }
        Uri uri2 = uri;
        xd.f fVar = o10;
        if (longValue < fVar.f54517k) {
            this.f52565o = new rd.b();
            return;
        }
        e g10 = g(fVar, longValue, intValue);
        if (g10 == null) {
            if (!fVar.f54521o) {
                bVar.f52574c = uri2;
                this.f52570t &= uri2.equals(this.f52566p);
                this.f52566p = uri2;
                return;
            } else if (!z10 && !fVar.f54524r.isEmpty()) {
                g10 = new e((f.e) v.c(fVar.f54524r), (fVar.f54517k + fVar.f54524r.size()) - 1, -1);
            } else {
                bVar.f52573b = true;
                return;
            }
        }
        this.f52570t = false;
        this.f52566p = null;
        Uri d12 = d(fVar, g10.f52579a.f54537e);
        td.f l10 = l(d12, i10, true, null);
        bVar.f52572a = l10;
        if (l10 == null) {
            Uri d13 = d(fVar, g10.f52579a);
            td.f l11 = l(d13, i10, false, null);
            bVar.f52572a = l11;
            if (l11 == null) {
                long j13 = c10;
                boolean w10 = i.w(iVar, uri2, fVar, g10, j13);
                if (w10 && g10.f52582d) {
                    return;
                }
                bVar.f52572a = i.j(this.f52551a, this.f52552b, this.f52556f[i10], j13, fVar, g10, uri2, this.f52559i, this.f52568r.r(), this.f52568r.h(), this.f52563m, this.f52554d, this.f52562l, iVar, this.f52560j.a(d13), this.f52560j.a(d12), w10, this.f52561k, null);
            }
        }
    }

    public int h(long j10, List list) {
        if (this.f52565o == null && this.f52568r.length() >= 2) {
            return this.f52568r.n(j10, list);
        }
        return list.size();
    }

    public u0 j() {
        return this.f52558h;
    }

    public com.google.android.exoplayer2.trackselection.g k() {
        return this.f52568r;
    }

    public boolean m(td.f fVar, long j10) {
        com.google.android.exoplayer2.trackselection.g gVar = this.f52568r;
        return gVar.f(gVar.j(this.f52558h.d(fVar.f48710d)), j10);
    }

    public void n() {
        IOException iOException = this.f52565o;
        if (iOException == null) {
            Uri uri = this.f52566p;
            if (uri != null && this.f52570t) {
                this.f52557g.a(uri);
                return;
            }
            return;
        }
        throw iOException;
    }

    public boolean o(Uri uri) {
        return w0.s(this.f52555e, uri);
    }

    public void p(td.f fVar) {
        if (fVar instanceof a) {
            a aVar = (a) fVar;
            this.f52564n = aVar.h();
            this.f52560j.b(aVar.f48708b.f13983a, (byte[]) oe.a.e(aVar.j()));
        }
    }

    public boolean q(Uri uri, long j10) {
        int j11;
        int i10 = 0;
        while (true) {
            Uri[] uriArr = this.f52555e;
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
        if (i10 == -1 || (j11 = this.f52568r.j(i10)) == -1) {
            return true;
        }
        this.f52570t |= uri.equals(this.f52566p);
        if (j10 != -9223372036854775807L && (!this.f52568r.f(j11, j10) || !this.f52557g.l(uri, j10))) {
            return false;
        }
        return true;
    }

    public void r() {
        this.f52565o = null;
    }

    public void t(boolean z10) {
        this.f52563m = z10;
    }

    public void u(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f52568r = gVar;
    }

    public boolean v(long j10, td.f fVar, List list) {
        if (this.f52565o != null) {
            return false;
        }
        return this.f52568r.k(j10, fVar, list);
    }
}
