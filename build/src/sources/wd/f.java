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
    private final h f52550a;

    /* renamed from: b  reason: collision with root package name */
    private final DataSource f52551b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f52552c;

    /* renamed from: d  reason: collision with root package name */
    private final s f52553d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri[] f52554e;

    /* renamed from: f  reason: collision with root package name */
    private final Format[] f52555f;

    /* renamed from: g  reason: collision with root package name */
    private final xd.k f52556g;

    /* renamed from: h  reason: collision with root package name */
    private final u0 f52557h;

    /* renamed from: i  reason: collision with root package name */
    private final List f52558i;

    /* renamed from: k  reason: collision with root package name */
    private final t1 f52560k;

    /* renamed from: l  reason: collision with root package name */
    private final long f52561l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f52562m;

    /* renamed from: o  reason: collision with root package name */
    private IOException f52564o;

    /* renamed from: p  reason: collision with root package name */
    private Uri f52565p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f52566q;

    /* renamed from: r  reason: collision with root package name */
    private com.google.android.exoplayer2.trackselection.g f52567r;

    /* renamed from: t  reason: collision with root package name */
    private boolean f52569t;

    /* renamed from: j  reason: collision with root package name */
    private final wd.e f52559j = new wd.e(4);

    /* renamed from: n  reason: collision with root package name */
    private byte[] f52563n = w0.f39042f;

    /* renamed from: s  reason: collision with root package name */
    private long f52568s = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends td.l {

        /* renamed from: l  reason: collision with root package name */
        private byte[] f52570l;

        public a(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, byte[] bArr) {
            super(dataSource, aVar, 3, format, i10, obj, bArr);
        }

        @Override // td.l
        protected void g(byte[] bArr, int i10) {
            this.f52570l = Arrays.copyOf(bArr, i10);
        }

        public byte[] j() {
            return this.f52570l;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public td.f f52571a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f52572b;

        /* renamed from: c  reason: collision with root package name */
        public Uri f52573c;

        public b() {
            a();
        }

        public void a() {
            this.f52571a = null;
            this.f52572b = false;
            this.f52573c = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends td.b {

        /* renamed from: e  reason: collision with root package name */
        private final List f52574e;

        /* renamed from: f  reason: collision with root package name */
        private final long f52575f;

        /* renamed from: g  reason: collision with root package name */
        private final String f52576g;

        public c(String str, long j10, List list) {
            super(0L, list.size() - 1);
            this.f52576g = str;
            this.f52575f = j10;
            this.f52574e = list;
        }

        @Override // td.o
        public long a() {
            c();
            return this.f52575f + ((f.e) this.f52574e.get((int) d())).f54539p;
        }

        @Override // td.o
        public long b() {
            c();
            f.e eVar = (f.e) this.f52574e.get((int) d());
            return this.f52575f + eVar.f54539p + eVar.f54537i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d extends ke.b {

        /* renamed from: h  reason: collision with root package name */
        private int f52577h;

        public d(u0 u0Var, int[] iArr) {
            super(u0Var, iArr);
            this.f52577h = o(u0Var.c(iArr[0]));
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int b() {
            return this.f52577h;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void e(long j10, long j11, long j12, List list, td.o[] oVarArr) {
            long elapsedRealtime = SystemClock.elapsedRealtime();
            if (!a(this.f52577h, elapsedRealtime)) {
                return;
            }
            for (int i10 = this.f31696b - 1; i10 >= 0; i10--) {
                if (!a(i10, elapsedRealtime)) {
                    this.f52577h = i10;
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
        public final f.e f52578a;

        /* renamed from: b  reason: collision with root package name */
        public final long f52579b;

        /* renamed from: c  reason: collision with root package name */
        public final int f52580c;

        /* renamed from: d  reason: collision with root package name */
        public final boolean f52581d;

        public e(f.e eVar, long j10, int i10) {
            boolean z10;
            this.f52578a = eVar;
            this.f52579b = j10;
            this.f52580c = i10;
            if ((eVar instanceof f.b) && ((f.b) eVar).f54529x) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f52581d = z10;
        }
    }

    public f(h hVar, xd.k kVar, Uri[] uriArr, Format[] formatArr, g gVar, c0 c0Var, s sVar, long j10, List list, t1 t1Var, me.g gVar2) {
        this.f52550a = hVar;
        this.f52556g = kVar;
        this.f52554e = uriArr;
        this.f52555f = formatArr;
        this.f52553d = sVar;
        this.f52561l = j10;
        this.f52558i = list;
        this.f52560k = t1Var;
        DataSource a10 = gVar.a(1);
        this.f52551b = a10;
        if (c0Var != null) {
            a10.i(c0Var);
        }
        this.f52552c = gVar.a(3);
        this.f52557h = new u0(formatArr);
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < uriArr.length; i10++) {
            if ((formatArr[i10].f12297p & 16384) == 0) {
                arrayList.add(Integer.valueOf(i10));
            }
        }
        this.f52567r = new d(this.f52557h, si.e.l(arrayList));
    }

    private static Uri d(xd.f fVar, f.e eVar) {
        String str;
        if (eVar != null && (str = eVar.f54541r) != null) {
            return oe.u0.e(fVar.f54572a, str);
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
                if (iVar.f52587o == -1) {
                    j13 = iVar.g();
                } else {
                    j13 = iVar.f48749j;
                }
                Long valueOf = Long.valueOf(j13);
                int i11 = iVar.f52587o;
                if (i11 != -1) {
                    i10 = i11 + 1;
                }
                return new Pair(valueOf, Integer.valueOf(i10));
            }
            return new Pair(Long.valueOf(iVar.f48749j), Integer.valueOf(iVar.f52587o));
        }
        long j14 = fVar.f54526u + j10;
        if (iVar != null && !this.f52566q) {
            j11 = iVar.f48712g;
        }
        if (!fVar.f54520o && j11 >= j14) {
            return new Pair(Long.valueOf(fVar.f54516k + fVar.f54523r.size()), -1);
        }
        long j15 = j11 - j10;
        List list2 = fVar.f54523r;
        Long valueOf2 = Long.valueOf(j15);
        int i12 = 0;
        if (this.f52556g.j() && iVar != null) {
            z11 = false;
        } else {
            z11 = true;
        }
        int f10 = w0.f(list2, valueOf2, true, z11);
        long j16 = f10 + fVar.f54516k;
        if (f10 >= 0) {
            f.d dVar = (f.d) fVar.f54523r.get(f10);
            if (j15 < dVar.f54539p + dVar.f54537i) {
                list = dVar.f54534x;
            } else {
                list = fVar.f54524s;
            }
            while (true) {
                if (i12 >= list.size()) {
                    break;
                }
                f.b bVar = (f.b) list.get(i12);
                if (j15 < bVar.f54539p + bVar.f54537i) {
                    if (bVar.f54528w) {
                        if (list == fVar.f54524s) {
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
        int i11 = (int) (j10 - fVar.f54516k);
        if (i11 == fVar.f54523r.size()) {
            if (i10 == -1) {
                i10 = 0;
            }
            if (i10 >= fVar.f54524s.size()) {
                return null;
            }
            return new e((f.e) fVar.f54524s.get(i10), j10, i10);
        }
        f.d dVar = (f.d) fVar.f54523r.get(i11);
        if (i10 == -1) {
            return new e(dVar, j10, -1);
        }
        if (i10 < dVar.f54534x.size()) {
            return new e((f.e) dVar.f54534x.get(i10), j10, i10);
        }
        int i12 = i11 + 1;
        if (i12 < fVar.f54523r.size()) {
            return new e((f.e) fVar.f54523r.get(i12), j10 + 1, -1);
        }
        if (fVar.f54524s.isEmpty()) {
            return null;
        }
        return new e((f.e) fVar.f54524s.get(0), j10 + 1, 0);
    }

    static List i(xd.f fVar, long j10, int i10) {
        int i11 = (int) (j10 - fVar.f54516k);
        if (i11 >= 0 && fVar.f54523r.size() >= i11) {
            ArrayList arrayList = new ArrayList();
            int i12 = 0;
            if (i11 < fVar.f54523r.size()) {
                if (i10 != -1) {
                    f.d dVar = (f.d) fVar.f54523r.get(i11);
                    if (i10 == 0) {
                        arrayList.add(dVar);
                    } else if (i10 < dVar.f54534x.size()) {
                        List list = dVar.f54534x;
                        arrayList.addAll(list.subList(i10, list.size()));
                    }
                    i11++;
                }
                List list2 = fVar.f54523r;
                arrayList.addAll(list2.subList(i11, list2.size()));
                i10 = 0;
            }
            if (fVar.f54519n != -9223372036854775807L) {
                if (i10 != -1) {
                    i12 = i10;
                }
                if (i12 < fVar.f54524s.size()) {
                    List list3 = fVar.f54524s;
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
        byte[] c10 = this.f52559j.c(uri);
        if (c10 != null) {
            this.f52559j.b(uri, c10);
            return null;
        }
        return new a(this.f52552c, new a.b().i(uri).b(1).e(qi.t.j()).a(), this.f52555f[i10], this.f52567r.r(), this.f52567r.h(), this.f52563n);
    }

    private long s(long j10) {
        long j11 = this.f52568s;
        if (j11 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        return j11 - j10;
    }

    private void w(xd.f fVar) {
        long e10;
        if (fVar.f54520o) {
            e10 = -9223372036854775807L;
        } else {
            e10 = fVar.e() - this.f52556g.c();
        }
        this.f52568s = e10;
    }

    public td.o[] a(i iVar, long j10) {
        int d10;
        boolean z10;
        if (iVar == null) {
            d10 = -1;
        } else {
            d10 = this.f52557h.d(iVar.f48709d);
        }
        int i10 = d10;
        int length = this.f52567r.length();
        td.o[] oVarArr = new td.o[length];
        for (int i11 = 0; i11 < length; i11++) {
            int d11 = this.f52567r.d(i11);
            Uri uri = this.f52554e[d11];
            if (!this.f52556g.h(uri)) {
                oVarArr[i11] = td.o.f48750a;
            } else {
                xd.f o10 = this.f52556g.o(uri, false);
                oe.a.e(o10);
                long c10 = o10.f54513h - this.f52556g.c();
                if (d11 != i10) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                Pair f10 = f(iVar, z10, o10, c10, j10);
                oVarArr[i11] = new c(o10.f54572a, c10, i(o10, ((Long) f10.first).longValue(), ((Integer) f10.second).intValue()));
            }
        }
        return oVarArr;
    }

    public long b(long j10, t0 t0Var) {
        xd.f fVar;
        long j11;
        int b10 = this.f52567r.b();
        Uri[] uriArr = this.f52554e;
        if (b10 < uriArr.length && b10 != -1) {
            fVar = this.f52556g.o(uriArr[this.f52567r.p()], true);
        } else {
            fVar = null;
        }
        if (fVar != null && !fVar.f54523r.isEmpty() && fVar.f54574c) {
            long c10 = fVar.f54513h - this.f52556g.c();
            long j12 = j10 - c10;
            int f10 = w0.f(fVar.f54523r, Long.valueOf(j12), true, true);
            long j13 = ((f.d) fVar.f54523r.get(f10)).f54539p;
            if (f10 != fVar.f54523r.size() - 1) {
                j11 = ((f.d) fVar.f54523r.get(f10 + 1)).f54539p;
            } else {
                j11 = j13;
            }
            return t0Var.a(j12, j13, j11) + c10;
        }
        return j10;
    }

    public int c(i iVar) {
        List list;
        if (iVar.f52587o == -1) {
            return 1;
        }
        xd.f fVar = (xd.f) oe.a.e(this.f52556g.o(this.f52554e[this.f52557h.d(iVar.f48709d)], false));
        int i10 = (int) (iVar.f48749j - fVar.f54516k);
        if (i10 < 0) {
            return 1;
        }
        if (i10 < fVar.f54523r.size()) {
            list = ((f.d) fVar.f54523r.get(i10)).f54534x;
        } else {
            list = fVar.f54524s;
        }
        if (iVar.f52587o >= list.size()) {
            return 2;
        }
        f.b bVar = (f.b) list.get(iVar.f52587o);
        if (bVar.f54529x) {
            return 0;
        }
        if (w0.c(Uri.parse(oe.u0.d(fVar.f54572a, bVar.f54535d)), iVar.f48707b.f13982a)) {
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
            d10 = this.f52557h.d(iVar.f48709d);
        }
        long j12 = j11 - j10;
        long s10 = s(j10);
        if (iVar != null && !this.f52566q) {
            long d11 = iVar.d();
            j12 = Math.max(0L, j12 - d11);
            if (s10 != -9223372036854775807L) {
                s10 = Math.max(0L, s10 - d11);
            }
        }
        this.f52567r.e(j10, j12, s10, list, a(iVar, j11));
        int p10 = this.f52567r.p();
        if (d10 != p10) {
            z11 = true;
        } else {
            z11 = false;
        }
        Uri uri = this.f52554e[p10];
        if (!this.f52556g.h(uri)) {
            bVar.f52573c = uri;
            this.f52569t &= uri.equals(this.f52565p);
            this.f52565p = uri;
            return;
        }
        xd.f o10 = this.f52556g.o(uri, true);
        oe.a.e(o10);
        this.f52566q = o10.f54574c;
        w(o10);
        long c10 = o10.f54513h - this.f52556g.c();
        Pair f10 = f(iVar, z11, o10, c10, j11);
        long longValue = ((Long) f10.first).longValue();
        int intValue = ((Integer) f10.second).intValue();
        int i11 = d10;
        if (longValue < o10.f54516k && iVar != null && z11) {
            uri = this.f52554e[i11];
            o10 = this.f52556g.o(uri, true);
            oe.a.e(o10);
            c10 = o10.f54513h - this.f52556g.c();
            Pair f11 = f(iVar, false, o10, c10, j11);
            longValue = ((Long) f11.first).longValue();
            intValue = ((Integer) f11.second).intValue();
            i10 = i11;
        } else {
            i10 = p10;
        }
        Uri uri2 = uri;
        xd.f fVar = o10;
        if (longValue < fVar.f54516k) {
            this.f52564o = new rd.b();
            return;
        }
        e g10 = g(fVar, longValue, intValue);
        if (g10 == null) {
            if (!fVar.f54520o) {
                bVar.f52573c = uri2;
                this.f52569t &= uri2.equals(this.f52565p);
                this.f52565p = uri2;
                return;
            } else if (!z10 && !fVar.f54523r.isEmpty()) {
                g10 = new e((f.e) v.c(fVar.f54523r), (fVar.f54516k + fVar.f54523r.size()) - 1, -1);
            } else {
                bVar.f52572b = true;
                return;
            }
        }
        this.f52569t = false;
        this.f52565p = null;
        Uri d12 = d(fVar, g10.f52578a.f54536e);
        td.f l10 = l(d12, i10, true, null);
        bVar.f52571a = l10;
        if (l10 == null) {
            Uri d13 = d(fVar, g10.f52578a);
            td.f l11 = l(d13, i10, false, null);
            bVar.f52571a = l11;
            if (l11 == null) {
                long j13 = c10;
                boolean w10 = i.w(iVar, uri2, fVar, g10, j13);
                if (w10 && g10.f52581d) {
                    return;
                }
                bVar.f52571a = i.j(this.f52550a, this.f52551b, this.f52555f[i10], j13, fVar, g10, uri2, this.f52558i, this.f52567r.r(), this.f52567r.h(), this.f52562m, this.f52553d, this.f52561l, iVar, this.f52559j.a(d13), this.f52559j.a(d12), w10, this.f52560k, null);
            }
        }
    }

    public int h(long j10, List list) {
        if (this.f52564o == null && this.f52567r.length() >= 2) {
            return this.f52567r.n(j10, list);
        }
        return list.size();
    }

    public u0 j() {
        return this.f52557h;
    }

    public com.google.android.exoplayer2.trackselection.g k() {
        return this.f52567r;
    }

    public boolean m(td.f fVar, long j10) {
        com.google.android.exoplayer2.trackselection.g gVar = this.f52567r;
        return gVar.f(gVar.j(this.f52557h.d(fVar.f48709d)), j10);
    }

    public void n() {
        IOException iOException = this.f52564o;
        if (iOException == null) {
            Uri uri = this.f52565p;
            if (uri != null && this.f52569t) {
                this.f52556g.a(uri);
                return;
            }
            return;
        }
        throw iOException;
    }

    public boolean o(Uri uri) {
        return w0.s(this.f52554e, uri);
    }

    public void p(td.f fVar) {
        if (fVar instanceof a) {
            a aVar = (a) fVar;
            this.f52563n = aVar.h();
            this.f52559j.b(aVar.f48707b.f13982a, (byte[]) oe.a.e(aVar.j()));
        }
    }

    public boolean q(Uri uri, long j10) {
        int j11;
        int i10 = 0;
        while (true) {
            Uri[] uriArr = this.f52554e;
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
        if (i10 == -1 || (j11 = this.f52567r.j(i10)) == -1) {
            return true;
        }
        this.f52569t |= uri.equals(this.f52565p);
        if (j10 != -9223372036854775807L && (!this.f52567r.f(j11, j10) || !this.f52556g.l(uri, j10))) {
            return false;
        }
        return true;
    }

    public void r() {
        this.f52564o = null;
    }

    public void t(boolean z10) {
        this.f52562m = z10;
    }

    public void u(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f52567r = gVar;
    }

    public boolean v(long j10, td.f fVar, List list) {
        if (this.f52564o != null) {
            return false;
        }
        return this.f52567r.k(j10, fVar, list);
    }
}
