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
    private final h f53119a;

    /* renamed from: b  reason: collision with root package name */
    private final DataSource f53120b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f53121c;

    /* renamed from: d  reason: collision with root package name */
    private final s f53122d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri[] f53123e;

    /* renamed from: f  reason: collision with root package name */
    private final Format[] f53124f;

    /* renamed from: g  reason: collision with root package name */
    private final xd.k f53125g;

    /* renamed from: h  reason: collision with root package name */
    private final u0 f53126h;

    /* renamed from: i  reason: collision with root package name */
    private final List f53127i;

    /* renamed from: k  reason: collision with root package name */
    private final t1 f53129k;

    /* renamed from: l  reason: collision with root package name */
    private final long f53130l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f53131m;

    /* renamed from: o  reason: collision with root package name */
    private IOException f53133o;

    /* renamed from: p  reason: collision with root package name */
    private Uri f53134p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f53135q;

    /* renamed from: r  reason: collision with root package name */
    private com.google.android.exoplayer2.trackselection.g f53136r;

    /* renamed from: t  reason: collision with root package name */
    private boolean f53138t;

    /* renamed from: j  reason: collision with root package name */
    private final wd.e f53128j = new wd.e(4);

    /* renamed from: n  reason: collision with root package name */
    private byte[] f53132n = w0.f39611f;

    /* renamed from: s  reason: collision with root package name */
    private long f53137s = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends td.l {

        /* renamed from: l  reason: collision with root package name */
        private byte[] f53139l;

        public a(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, byte[] bArr) {
            super(dataSource, aVar, 3, format, i10, obj, bArr);
        }

        @Override // td.l
        protected void g(byte[] bArr, int i10) {
            this.f53139l = Arrays.copyOf(bArr, i10);
        }

        public byte[] j() {
            return this.f53139l;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public td.f f53140a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f53141b;

        /* renamed from: c  reason: collision with root package name */
        public Uri f53142c;

        public b() {
            a();
        }

        public void a() {
            this.f53140a = null;
            this.f53141b = false;
            this.f53142c = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends td.b {

        /* renamed from: e  reason: collision with root package name */
        private final List f53143e;

        /* renamed from: f  reason: collision with root package name */
        private final long f53144f;

        /* renamed from: g  reason: collision with root package name */
        private final String f53145g;

        public c(String str, long j10, List list) {
            super(0L, list.size() - 1);
            this.f53145g = str;
            this.f53144f = j10;
            this.f53143e = list;
        }

        @Override // td.o
        public long a() {
            c();
            return this.f53144f + ((f.e) this.f53143e.get((int) d())).f55108p;
        }

        @Override // td.o
        public long b() {
            c();
            f.e eVar = (f.e) this.f53143e.get((int) d());
            return this.f53144f + eVar.f55108p + eVar.f55106i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d extends ke.b {

        /* renamed from: h  reason: collision with root package name */
        private int f53146h;

        public d(u0 u0Var, int[] iArr) {
            super(u0Var, iArr);
            this.f53146h = o(u0Var.c(iArr[0]));
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int b() {
            return this.f53146h;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void e(long j10, long j11, long j12, List list, td.o[] oVarArr) {
            long elapsedRealtime = SystemClock.elapsedRealtime();
            if (!a(this.f53146h, elapsedRealtime)) {
                return;
            }
            for (int i10 = this.f32265b - 1; i10 >= 0; i10--) {
                if (!a(i10, elapsedRealtime)) {
                    this.f53146h = i10;
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
        public final f.e f53147a;

        /* renamed from: b  reason: collision with root package name */
        public final long f53148b;

        /* renamed from: c  reason: collision with root package name */
        public final int f53149c;

        /* renamed from: d  reason: collision with root package name */
        public final boolean f53150d;

        public e(f.e eVar, long j10, int i10) {
            boolean z10;
            this.f53147a = eVar;
            this.f53148b = j10;
            this.f53149c = i10;
            if ((eVar instanceof f.b) && ((f.b) eVar).f55098x) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f53150d = z10;
        }
    }

    public f(h hVar, xd.k kVar, Uri[] uriArr, Format[] formatArr, g gVar, c0 c0Var, s sVar, long j10, List list, t1 t1Var, me.g gVar2) {
        this.f53119a = hVar;
        this.f53125g = kVar;
        this.f53123e = uriArr;
        this.f53124f = formatArr;
        this.f53122d = sVar;
        this.f53130l = j10;
        this.f53127i = list;
        this.f53129k = t1Var;
        DataSource a10 = gVar.a(1);
        this.f53120b = a10;
        if (c0Var != null) {
            a10.i(c0Var);
        }
        this.f53121c = gVar.a(3);
        this.f53126h = new u0(formatArr);
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < uriArr.length; i10++) {
            if ((formatArr[i10].f12298p & 16384) == 0) {
                arrayList.add(Integer.valueOf(i10));
            }
        }
        this.f53136r = new d(this.f53126h, si.e.l(arrayList));
    }

    private static Uri d(xd.f fVar, f.e eVar) {
        String str;
        if (eVar != null && (str = eVar.f55110r) != null) {
            return oe.u0.e(fVar.f55141a, str);
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
                if (iVar.f53156o == -1) {
                    j13 = iVar.g();
                } else {
                    j13 = iVar.f49318j;
                }
                Long valueOf = Long.valueOf(j13);
                int i11 = iVar.f53156o;
                if (i11 != -1) {
                    i10 = i11 + 1;
                }
                return new Pair(valueOf, Integer.valueOf(i10));
            }
            return new Pair(Long.valueOf(iVar.f49318j), Integer.valueOf(iVar.f53156o));
        }
        long j14 = fVar.f55095u + j10;
        if (iVar != null && !this.f53135q) {
            j11 = iVar.f49281g;
        }
        if (!fVar.f55089o && j11 >= j14) {
            return new Pair(Long.valueOf(fVar.f55085k + fVar.f55092r.size()), -1);
        }
        long j15 = j11 - j10;
        List list2 = fVar.f55092r;
        Long valueOf2 = Long.valueOf(j15);
        int i12 = 0;
        if (this.f53125g.j() && iVar != null) {
            z11 = false;
        } else {
            z11 = true;
        }
        int f10 = w0.f(list2, valueOf2, true, z11);
        long j16 = f10 + fVar.f55085k;
        if (f10 >= 0) {
            f.d dVar = (f.d) fVar.f55092r.get(f10);
            if (j15 < dVar.f55108p + dVar.f55106i) {
                list = dVar.f55103x;
            } else {
                list = fVar.f55093s;
            }
            while (true) {
                if (i12 >= list.size()) {
                    break;
                }
                f.b bVar = (f.b) list.get(i12);
                if (j15 < bVar.f55108p + bVar.f55106i) {
                    if (bVar.f55097w) {
                        if (list == fVar.f55093s) {
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
        int i11 = (int) (j10 - fVar.f55085k);
        if (i11 == fVar.f55092r.size()) {
            if (i10 == -1) {
                i10 = 0;
            }
            if (i10 >= fVar.f55093s.size()) {
                return null;
            }
            return new e((f.e) fVar.f55093s.get(i10), j10, i10);
        }
        f.d dVar = (f.d) fVar.f55092r.get(i11);
        if (i10 == -1) {
            return new e(dVar, j10, -1);
        }
        if (i10 < dVar.f55103x.size()) {
            return new e((f.e) dVar.f55103x.get(i10), j10, i10);
        }
        int i12 = i11 + 1;
        if (i12 < fVar.f55092r.size()) {
            return new e((f.e) fVar.f55092r.get(i12), j10 + 1, -1);
        }
        if (fVar.f55093s.isEmpty()) {
            return null;
        }
        return new e((f.e) fVar.f55093s.get(0), j10 + 1, 0);
    }

    static List i(xd.f fVar, long j10, int i10) {
        int i11 = (int) (j10 - fVar.f55085k);
        if (i11 >= 0 && fVar.f55092r.size() >= i11) {
            ArrayList arrayList = new ArrayList();
            int i12 = 0;
            if (i11 < fVar.f55092r.size()) {
                if (i10 != -1) {
                    f.d dVar = (f.d) fVar.f55092r.get(i11);
                    if (i10 == 0) {
                        arrayList.add(dVar);
                    } else if (i10 < dVar.f55103x.size()) {
                        List list = dVar.f55103x;
                        arrayList.addAll(list.subList(i10, list.size()));
                    }
                    i11++;
                }
                List list2 = fVar.f55092r;
                arrayList.addAll(list2.subList(i11, list2.size()));
                i10 = 0;
            }
            if (fVar.f55088n != -9223372036854775807L) {
                if (i10 != -1) {
                    i12 = i10;
                }
                if (i12 < fVar.f55093s.size()) {
                    List list3 = fVar.f55093s;
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
        byte[] c10 = this.f53128j.c(uri);
        if (c10 != null) {
            this.f53128j.b(uri, c10);
            return null;
        }
        return new a(this.f53121c, new a.b().i(uri).b(1).e(qi.t.j()).a(), this.f53124f[i10], this.f53136r.r(), this.f53136r.h(), this.f53132n);
    }

    private long s(long j10) {
        long j11 = this.f53137s;
        if (j11 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        return j11 - j10;
    }

    private void w(xd.f fVar) {
        long e10;
        if (fVar.f55089o) {
            e10 = -9223372036854775807L;
        } else {
            e10 = fVar.e() - this.f53125g.c();
        }
        this.f53137s = e10;
    }

    public td.o[] a(i iVar, long j10) {
        int d10;
        boolean z10;
        if (iVar == null) {
            d10 = -1;
        } else {
            d10 = this.f53126h.d(iVar.f49278d);
        }
        int i10 = d10;
        int length = this.f53136r.length();
        td.o[] oVarArr = new td.o[length];
        for (int i11 = 0; i11 < length; i11++) {
            int d11 = this.f53136r.d(i11);
            Uri uri = this.f53123e[d11];
            if (!this.f53125g.h(uri)) {
                oVarArr[i11] = td.o.f49319a;
            } else {
                xd.f o10 = this.f53125g.o(uri, false);
                oe.a.e(o10);
                long c10 = o10.f55082h - this.f53125g.c();
                if (d11 != i10) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                Pair f10 = f(iVar, z10, o10, c10, j10);
                oVarArr[i11] = new c(o10.f55141a, c10, i(o10, ((Long) f10.first).longValue(), ((Integer) f10.second).intValue()));
            }
        }
        return oVarArr;
    }

    public long b(long j10, t0 t0Var) {
        xd.f fVar;
        long j11;
        int b10 = this.f53136r.b();
        Uri[] uriArr = this.f53123e;
        if (b10 < uriArr.length && b10 != -1) {
            fVar = this.f53125g.o(uriArr[this.f53136r.p()], true);
        } else {
            fVar = null;
        }
        if (fVar != null && !fVar.f55092r.isEmpty() && fVar.f55143c) {
            long c10 = fVar.f55082h - this.f53125g.c();
            long j12 = j10 - c10;
            int f10 = w0.f(fVar.f55092r, Long.valueOf(j12), true, true);
            long j13 = ((f.d) fVar.f55092r.get(f10)).f55108p;
            if (f10 != fVar.f55092r.size() - 1) {
                j11 = ((f.d) fVar.f55092r.get(f10 + 1)).f55108p;
            } else {
                j11 = j13;
            }
            return t0Var.a(j12, j13, j11) + c10;
        }
        return j10;
    }

    public int c(i iVar) {
        List list;
        if (iVar.f53156o == -1) {
            return 1;
        }
        xd.f fVar = (xd.f) oe.a.e(this.f53125g.o(this.f53123e[this.f53126h.d(iVar.f49278d)], false));
        int i10 = (int) (iVar.f49318j - fVar.f55085k);
        if (i10 < 0) {
            return 1;
        }
        if (i10 < fVar.f55092r.size()) {
            list = ((f.d) fVar.f55092r.get(i10)).f55103x;
        } else {
            list = fVar.f55093s;
        }
        if (iVar.f53156o >= list.size()) {
            return 2;
        }
        f.b bVar = (f.b) list.get(iVar.f53156o);
        if (bVar.f55098x) {
            return 0;
        }
        if (w0.c(Uri.parse(oe.u0.d(fVar.f55141a, bVar.f55104d)), iVar.f49276b.f13983a)) {
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
            d10 = this.f53126h.d(iVar.f49278d);
        }
        long j12 = j11 - j10;
        long s10 = s(j10);
        if (iVar != null && !this.f53135q) {
            long d11 = iVar.d();
            j12 = Math.max(0L, j12 - d11);
            if (s10 != -9223372036854775807L) {
                s10 = Math.max(0L, s10 - d11);
            }
        }
        this.f53136r.e(j10, j12, s10, list, a(iVar, j11));
        int p10 = this.f53136r.p();
        if (d10 != p10) {
            z11 = true;
        } else {
            z11 = false;
        }
        Uri uri = this.f53123e[p10];
        if (!this.f53125g.h(uri)) {
            bVar.f53142c = uri;
            this.f53138t &= uri.equals(this.f53134p);
            this.f53134p = uri;
            return;
        }
        xd.f o10 = this.f53125g.o(uri, true);
        oe.a.e(o10);
        this.f53135q = o10.f55143c;
        w(o10);
        long c10 = o10.f55082h - this.f53125g.c();
        Pair f10 = f(iVar, z11, o10, c10, j11);
        long longValue = ((Long) f10.first).longValue();
        int intValue = ((Integer) f10.second).intValue();
        int i11 = d10;
        if (longValue < o10.f55085k && iVar != null && z11) {
            uri = this.f53123e[i11];
            o10 = this.f53125g.o(uri, true);
            oe.a.e(o10);
            c10 = o10.f55082h - this.f53125g.c();
            Pair f11 = f(iVar, false, o10, c10, j11);
            longValue = ((Long) f11.first).longValue();
            intValue = ((Integer) f11.second).intValue();
            i10 = i11;
        } else {
            i10 = p10;
        }
        Uri uri2 = uri;
        xd.f fVar = o10;
        if (longValue < fVar.f55085k) {
            this.f53133o = new rd.b();
            return;
        }
        e g10 = g(fVar, longValue, intValue);
        if (g10 == null) {
            if (!fVar.f55089o) {
                bVar.f53142c = uri2;
                this.f53138t &= uri2.equals(this.f53134p);
                this.f53134p = uri2;
                return;
            } else if (!z10 && !fVar.f55092r.isEmpty()) {
                g10 = new e((f.e) v.c(fVar.f55092r), (fVar.f55085k + fVar.f55092r.size()) - 1, -1);
            } else {
                bVar.f53141b = true;
                return;
            }
        }
        this.f53138t = false;
        this.f53134p = null;
        Uri d12 = d(fVar, g10.f53147a.f55105e);
        td.f l10 = l(d12, i10, true, null);
        bVar.f53140a = l10;
        if (l10 == null) {
            Uri d13 = d(fVar, g10.f53147a);
            td.f l11 = l(d13, i10, false, null);
            bVar.f53140a = l11;
            if (l11 == null) {
                long j13 = c10;
                boolean w10 = i.w(iVar, uri2, fVar, g10, j13);
                if (w10 && g10.f53150d) {
                    return;
                }
                bVar.f53140a = i.j(this.f53119a, this.f53120b, this.f53124f[i10], j13, fVar, g10, uri2, this.f53127i, this.f53136r.r(), this.f53136r.h(), this.f53131m, this.f53122d, this.f53130l, iVar, this.f53128j.a(d13), this.f53128j.a(d12), w10, this.f53129k, null);
            }
        }
    }

    public int h(long j10, List list) {
        if (this.f53133o == null && this.f53136r.length() >= 2) {
            return this.f53136r.n(j10, list);
        }
        return list.size();
    }

    public u0 j() {
        return this.f53126h;
    }

    public com.google.android.exoplayer2.trackselection.g k() {
        return this.f53136r;
    }

    public boolean m(td.f fVar, long j10) {
        com.google.android.exoplayer2.trackselection.g gVar = this.f53136r;
        return gVar.f(gVar.j(this.f53126h.d(fVar.f49278d)), j10);
    }

    public void n() {
        IOException iOException = this.f53133o;
        if (iOException == null) {
            Uri uri = this.f53134p;
            if (uri != null && this.f53138t) {
                this.f53125g.a(uri);
                return;
            }
            return;
        }
        throw iOException;
    }

    public boolean o(Uri uri) {
        return w0.s(this.f53123e, uri);
    }

    public void p(td.f fVar) {
        if (fVar instanceof a) {
            a aVar = (a) fVar;
            this.f53132n = aVar.h();
            this.f53128j.b(aVar.f49276b.f13983a, (byte[]) oe.a.e(aVar.j()));
        }
    }

    public boolean q(Uri uri, long j10) {
        int j11;
        int i10 = 0;
        while (true) {
            Uri[] uriArr = this.f53123e;
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
        if (i10 == -1 || (j11 = this.f53136r.j(i10)) == -1) {
            return true;
        }
        this.f53138t |= uri.equals(this.f53134p);
        if (j10 != -9223372036854775807L && (!this.f53136r.f(j11, j10) || !this.f53125g.l(uri, j10))) {
            return false;
        }
        return true;
    }

    public void r() {
        this.f53133o = null;
    }

    public void t(boolean z10) {
        this.f53131m = z10;
    }

    public void u(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f53136r = gVar;
    }

    public boolean v(long j10, td.f fVar, List list) {
        if (this.f53133o != null) {
            return false;
        }
        return this.f53136r.k(j10, fVar, list);
    }
}
