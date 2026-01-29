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
    private final h f50927a;

    /* renamed from: b  reason: collision with root package name */
    private final DataSource f50928b;

    /* renamed from: c  reason: collision with root package name */
    private final DataSource f50929c;

    /* renamed from: d  reason: collision with root package name */
    private final s f50930d;

    /* renamed from: e  reason: collision with root package name */
    private final Uri[] f50931e;

    /* renamed from: f  reason: collision with root package name */
    private final Format[] f50932f;

    /* renamed from: g  reason: collision with root package name */
    private final wd.k f50933g;

    /* renamed from: h  reason: collision with root package name */
    private final u0 f50934h;

    /* renamed from: i  reason: collision with root package name */
    private final List f50935i;

    /* renamed from: k  reason: collision with root package name */
    private final t1 f50937k;

    /* renamed from: l  reason: collision with root package name */
    private final long f50938l;

    /* renamed from: m  reason: collision with root package name */
    private boolean f50939m;

    /* renamed from: o  reason: collision with root package name */
    private IOException f50941o;

    /* renamed from: p  reason: collision with root package name */
    private Uri f50942p;

    /* renamed from: q  reason: collision with root package name */
    private boolean f50943q;

    /* renamed from: r  reason: collision with root package name */
    private com.google.android.exoplayer2.trackselection.g f50944r;

    /* renamed from: t  reason: collision with root package name */
    private boolean f50946t;

    /* renamed from: j  reason: collision with root package name */
    private final vd.e f50936j = new vd.e(4);

    /* renamed from: n  reason: collision with root package name */
    private byte[] f50940n = w0.f40284f;

    /* renamed from: s  reason: collision with root package name */
    private long f50945s = -9223372036854775807L;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends sd.l {

        /* renamed from: l  reason: collision with root package name */
        private byte[] f50947l;

        public a(DataSource dataSource, com.google.android.exoplayer2.upstream.a aVar, Format format, int i10, Object obj, byte[] bArr) {
            super(dataSource, aVar, 3, format, i10, obj, bArr);
        }

        @Override // sd.l
        protected void g(byte[] bArr, int i10) {
            this.f50947l = Arrays.copyOf(bArr, i10);
        }

        public byte[] j() {
            return this.f50947l;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public sd.f f50948a;

        /* renamed from: b  reason: collision with root package name */
        public boolean f50949b;

        /* renamed from: c  reason: collision with root package name */
        public Uri f50950c;

        public b() {
            a();
        }

        public void a() {
            this.f50948a = null;
            this.f50949b = false;
            this.f50950c = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class c extends sd.b {

        /* renamed from: e  reason: collision with root package name */
        private final List f50951e;

        /* renamed from: f  reason: collision with root package name */
        private final long f50952f;

        /* renamed from: g  reason: collision with root package name */
        private final String f50953g;

        public c(String str, long j10, List list) {
            super(0L, list.size() - 1);
            this.f50953g = str;
            this.f50952f = j10;
            this.f50951e = list;
        }

        @Override // sd.o
        public long a() {
            c();
            return this.f50952f + ((f.e) this.f50951e.get((int) d())).f52358p;
        }

        @Override // sd.o
        public long b() {
            c();
            f.e eVar = (f.e) this.f50951e.get((int) d());
            return this.f50952f + eVar.f52358p + eVar.f52356i;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d extends je.b {

        /* renamed from: h  reason: collision with root package name */
        private int f50954h;

        public d(u0 u0Var, int[] iArr) {
            super(u0Var, iArr);
            this.f50954h = o(u0Var.c(iArr[0]));
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public int c() {
            return this.f50954h;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public Object h() {
            return null;
        }

        @Override // com.google.android.exoplayer2.trackselection.g
        public void l(long j10, long j11, long j12, List list, sd.o[] oVarArr) {
            long elapsedRealtime = SystemClock.elapsedRealtime();
            if (!a(this.f50954h, elapsedRealtime)) {
                return;
            }
            for (int i10 = this.f31967b - 1; i10 >= 0; i10--) {
                if (!a(i10, elapsedRealtime)) {
                    this.f50954h = i10;
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
        public final f.e f50955a;

        /* renamed from: b  reason: collision with root package name */
        public final long f50956b;

        /* renamed from: c  reason: collision with root package name */
        public final int f50957c;

        /* renamed from: d  reason: collision with root package name */
        public final boolean f50958d;

        public e(f.e eVar, long j10, int i10) {
            boolean z10;
            this.f50955a = eVar;
            this.f50956b = j10;
            this.f50957c = i10;
            if ((eVar instanceof f.b) && ((f.b) eVar).f52348x) {
                z10 = true;
            } else {
                z10 = false;
            }
            this.f50958d = z10;
        }
    }

    public f(h hVar, wd.k kVar, Uri[] uriArr, Format[] formatArr, g gVar, c0 c0Var, s sVar, long j10, List list, t1 t1Var, le.g gVar2) {
        this.f50927a = hVar;
        this.f50933g = kVar;
        this.f50931e = uriArr;
        this.f50932f = formatArr;
        this.f50930d = sVar;
        this.f50938l = j10;
        this.f50935i = list;
        this.f50937k = t1Var;
        DataSource a10 = gVar.a(1);
        this.f50928b = a10;
        if (c0Var != null) {
            a10.j(c0Var);
        }
        this.f50929c = gVar.a(3);
        this.f50934h = new u0(formatArr);
        ArrayList arrayList = new ArrayList();
        for (int i10 = 0; i10 < uriArr.length; i10++) {
            if ((formatArr[i10].f12699p & 16384) == 0) {
                arrayList.add(Integer.valueOf(i10));
            }
        }
        this.f50944r = new d(this.f50934h, li.e.l(arrayList));
    }

    private static Uri d(wd.f fVar, f.e eVar) {
        String str;
        if (eVar != null && (str = eVar.f52360r) != null) {
            return ne.u0.e(fVar.f52391a, str);
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
                if (iVar.f50964o == -1) {
                    j13 = iVar.g();
                } else {
                    j13 = iVar.f48981j;
                }
                Long valueOf = Long.valueOf(j13);
                int i11 = iVar.f50964o;
                if (i11 != -1) {
                    i10 = i11 + 1;
                }
                return new Pair(valueOf, Integer.valueOf(i10));
            }
            return new Pair(Long.valueOf(iVar.f48981j), Integer.valueOf(iVar.f50964o));
        }
        long j14 = fVar.f52345u + j10;
        if (iVar != null && !this.f50943q) {
            j11 = iVar.f48944g;
        }
        if (!fVar.f52339o && j11 >= j14) {
            return new Pair(Long.valueOf(fVar.f52335k + fVar.f52342r.size()), -1);
        }
        long j15 = j11 - j10;
        List list2 = fVar.f52342r;
        Long valueOf2 = Long.valueOf(j15);
        int i12 = 0;
        if (this.f50933g.h() && iVar != null) {
            z11 = false;
        } else {
            z11 = true;
        }
        int f10 = w0.f(list2, valueOf2, true, z11);
        long j16 = f10 + fVar.f52335k;
        if (f10 >= 0) {
            f.d dVar = (f.d) fVar.f52342r.get(f10);
            if (j15 < dVar.f52358p + dVar.f52356i) {
                list = dVar.f52353x;
            } else {
                list = fVar.f52343s;
            }
            while (true) {
                if (i12 >= list.size()) {
                    break;
                }
                f.b bVar = (f.b) list.get(i12);
                if (j15 < bVar.f52358p + bVar.f52356i) {
                    if (bVar.f52347w) {
                        if (list == fVar.f52343s) {
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
        int i11 = (int) (j10 - fVar.f52335k);
        if (i11 == fVar.f52342r.size()) {
            if (i10 == -1) {
                i10 = 0;
            }
            if (i10 >= fVar.f52343s.size()) {
                return null;
            }
            return new e((f.e) fVar.f52343s.get(i10), j10, i10);
        }
        f.d dVar = (f.d) fVar.f52342r.get(i11);
        if (i10 == -1) {
            return new e(dVar, j10, -1);
        }
        if (i10 < dVar.f52353x.size()) {
            return new e((f.e) dVar.f52353x.get(i10), j10, i10);
        }
        int i12 = i11 + 1;
        if (i12 < fVar.f52342r.size()) {
            return new e((f.e) fVar.f52342r.get(i12), j10 + 1, -1);
        }
        if (fVar.f52343s.isEmpty()) {
            return null;
        }
        return new e((f.e) fVar.f52343s.get(0), j10 + 1, 0);
    }

    static List i(wd.f fVar, long j10, int i10) {
        int i11 = (int) (j10 - fVar.f52335k);
        if (i11 >= 0 && fVar.f52342r.size() >= i11) {
            ArrayList arrayList = new ArrayList();
            int i12 = 0;
            if (i11 < fVar.f52342r.size()) {
                if (i10 != -1) {
                    f.d dVar = (f.d) fVar.f52342r.get(i11);
                    if (i10 == 0) {
                        arrayList.add(dVar);
                    } else if (i10 < dVar.f52353x.size()) {
                        List list = dVar.f52353x;
                        arrayList.addAll(list.subList(i10, list.size()));
                    }
                    i11++;
                }
                List list2 = fVar.f52342r;
                arrayList.addAll(list2.subList(i11, list2.size()));
                i10 = 0;
            }
            if (fVar.f52338n != -9223372036854775807L) {
                if (i10 != -1) {
                    i12 = i10;
                }
                if (i12 < fVar.f52343s.size()) {
                    List list3 = fVar.f52343s;
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
        byte[] c10 = this.f50936j.c(uri);
        if (c10 != null) {
            this.f50936j.b(uri, c10);
            return null;
        }
        return new a(this.f50929c, new a.b().i(uri).b(1).e(ji.t.j()).a(), this.f50932f[i10], this.f50944r.r(), this.f50944r.h(), this.f50940n);
    }

    private long s(long j10) {
        long j11 = this.f50945s;
        if (j11 == -9223372036854775807L) {
            return -9223372036854775807L;
        }
        return j11 - j10;
    }

    private void w(wd.f fVar) {
        long e10;
        if (fVar.f52339o) {
            e10 = -9223372036854775807L;
        } else {
            e10 = fVar.e() - this.f50933g.c();
        }
        this.f50945s = e10;
    }

    public sd.o[] a(i iVar, long j10) {
        int d10;
        boolean z10;
        if (iVar == null) {
            d10 = -1;
        } else {
            d10 = this.f50934h.d(iVar.f48941d);
        }
        int i10 = d10;
        int length = this.f50944r.length();
        sd.o[] oVarArr = new sd.o[length];
        for (int i11 = 0; i11 < length; i11++) {
            int e10 = this.f50944r.e(i11);
            Uri uri = this.f50931e[e10];
            if (!this.f50933g.g(uri)) {
                oVarArr[i11] = sd.o.f48982a;
            } else {
                wd.f m10 = this.f50933g.m(uri, false);
                ne.a.e(m10);
                long c10 = m10.f52332h - this.f50933g.c();
                if (e10 != i10) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                Pair f10 = f(iVar, z10, m10, c10, j10);
                oVarArr[i11] = new c(m10.f52391a, c10, i(m10, ((Long) f10.first).longValue(), ((Integer) f10.second).intValue()));
            }
        }
        return oVarArr;
    }

    public long b(long j10, t0 t0Var) {
        wd.f fVar;
        long j11;
        int c10 = this.f50944r.c();
        Uri[] uriArr = this.f50931e;
        if (c10 < uriArr.length && c10 != -1) {
            fVar = this.f50933g.m(uriArr[this.f50944r.p()], true);
        } else {
            fVar = null;
        }
        if (fVar != null && !fVar.f52342r.isEmpty() && fVar.f52393c) {
            long c11 = fVar.f52332h - this.f50933g.c();
            long j12 = j10 - c11;
            int f10 = w0.f(fVar.f52342r, Long.valueOf(j12), true, true);
            long j13 = ((f.d) fVar.f52342r.get(f10)).f52358p;
            if (f10 != fVar.f52342r.size() - 1) {
                j11 = ((f.d) fVar.f52342r.get(f10 + 1)).f52358p;
            } else {
                j11 = j13;
            }
            return t0Var.a(j12, j13, j11) + c11;
        }
        return j10;
    }

    public int c(i iVar) {
        List list;
        if (iVar.f50964o == -1) {
            return 1;
        }
        wd.f fVar = (wd.f) ne.a.e(this.f50933g.m(this.f50931e[this.f50934h.d(iVar.f48941d)], false));
        int i10 = (int) (iVar.f48981j - fVar.f52335k);
        if (i10 < 0) {
            return 1;
        }
        if (i10 < fVar.f52342r.size()) {
            list = ((f.d) fVar.f52342r.get(i10)).f52353x;
        } else {
            list = fVar.f52343s;
        }
        if (iVar.f50964o >= list.size()) {
            return 2;
        }
        f.b bVar = (f.b) list.get(iVar.f50964o);
        if (bVar.f52348x) {
            return 0;
        }
        if (w0.c(Uri.parse(ne.u0.d(fVar.f52391a, bVar.f52354d)), iVar.f48939b.f14346a)) {
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
            d10 = this.f50934h.d(iVar.f48941d);
        }
        long j12 = j11 - j10;
        long s10 = s(j10);
        if (iVar != null && !this.f50943q) {
            long d11 = iVar.d();
            j12 = Math.max(0L, j12 - d11);
            if (s10 != -9223372036854775807L) {
                s10 = Math.max(0L, s10 - d11);
            }
        }
        this.f50944r.l(j10, j12, s10, list, a(iVar, j11));
        int p10 = this.f50944r.p();
        if (d10 != p10) {
            z11 = true;
        } else {
            z11 = false;
        }
        Uri uri = this.f50931e[p10];
        if (!this.f50933g.g(uri)) {
            bVar.f50950c = uri;
            this.f50946t &= uri.equals(this.f50942p);
            this.f50942p = uri;
            return;
        }
        wd.f m10 = this.f50933g.m(uri, true);
        ne.a.e(m10);
        this.f50943q = m10.f52393c;
        w(m10);
        long c10 = m10.f52332h - this.f50933g.c();
        Pair f10 = f(iVar, z11, m10, c10, j11);
        long longValue = ((Long) f10.first).longValue();
        int intValue = ((Integer) f10.second).intValue();
        int i11 = d10;
        if (longValue < m10.f52335k && iVar != null && z11) {
            uri = this.f50931e[i11];
            m10 = this.f50933g.m(uri, true);
            ne.a.e(m10);
            c10 = m10.f52332h - this.f50933g.c();
            Pair f11 = f(iVar, false, m10, c10, j11);
            longValue = ((Long) f11.first).longValue();
            intValue = ((Integer) f11.second).intValue();
            i10 = i11;
        } else {
            i10 = p10;
        }
        Uri uri2 = uri;
        wd.f fVar = m10;
        if (longValue < fVar.f52335k) {
            this.f50941o = new qd.b();
            return;
        }
        e g10 = g(fVar, longValue, intValue);
        if (g10 == null) {
            if (!fVar.f52339o) {
                bVar.f50950c = uri2;
                this.f50946t &= uri2.equals(this.f50942p);
                this.f50942p = uri2;
                return;
            } else if (!z10 && !fVar.f52342r.isEmpty()) {
                g10 = new e((f.e) v.c(fVar.f52342r), (fVar.f52335k + fVar.f52342r.size()) - 1, -1);
            } else {
                bVar.f50949b = true;
                return;
            }
        }
        this.f50946t = false;
        this.f50942p = null;
        Uri d12 = d(fVar, g10.f50955a.f52355e);
        sd.f l10 = l(d12, i10, true, null);
        bVar.f50948a = l10;
        if (l10 == null) {
            Uri d13 = d(fVar, g10.f50955a);
            sd.f l11 = l(d13, i10, false, null);
            bVar.f50948a = l11;
            if (l11 == null) {
                long j13 = c10;
                boolean w10 = i.w(iVar, uri2, fVar, g10, j13);
                if (w10 && g10.f50958d) {
                    return;
                }
                bVar.f50948a = i.j(this.f50927a, this.f50928b, this.f50932f[i10], j13, fVar, g10, uri2, this.f50935i, this.f50944r.r(), this.f50944r.h(), this.f50939m, this.f50930d, this.f50938l, iVar, this.f50936j.a(d13), this.f50936j.a(d12), w10, this.f50937k, null);
            }
        }
    }

    public int h(long j10, List list) {
        if (this.f50941o == null && this.f50944r.length() >= 2) {
            return this.f50944r.n(j10, list);
        }
        return list.size();
    }

    public u0 j() {
        return this.f50934h;
    }

    public com.google.android.exoplayer2.trackselection.g k() {
        return this.f50944r;
    }

    public boolean m(sd.f fVar, long j10) {
        com.google.android.exoplayer2.trackselection.g gVar = this.f50944r;
        return gVar.f(gVar.j(this.f50934h.d(fVar.f48941d)), j10);
    }

    public void n() {
        IOException iOException = this.f50941o;
        if (iOException == null) {
            Uri uri = this.f50942p;
            if (uri != null && this.f50946t) {
                this.f50933g.b(uri);
                return;
            }
            return;
        }
        throw iOException;
    }

    public boolean o(Uri uri) {
        return w0.s(this.f50931e, uri);
    }

    public void p(sd.f fVar) {
        if (fVar instanceof a) {
            a aVar = (a) fVar;
            this.f50940n = aVar.h();
            this.f50936j.b(aVar.f48939b.f14346a, (byte[]) ne.a.e(aVar.j()));
        }
    }

    public boolean q(Uri uri, long j10) {
        int j11;
        int i10 = 0;
        while (true) {
            Uri[] uriArr = this.f50931e;
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
        if (i10 == -1 || (j11 = this.f50944r.j(i10)) == -1) {
            return true;
        }
        this.f50946t |= uri.equals(this.f50942p);
        if (j10 != -9223372036854775807L && (!this.f50944r.f(j11, j10) || !this.f50933g.k(uri, j10))) {
            return false;
        }
        return true;
    }

    public void r() {
        this.f50941o = null;
    }

    public void t(boolean z10) {
        this.f50939m = z10;
    }

    public void u(com.google.android.exoplayer2.trackselection.g gVar) {
        this.f50944r = gVar;
    }

    public boolean v(long j10, sd.f fVar, List list) {
        if (this.f50941o != null) {
            return false;
        }
        return this.f50944r.b(j10, fVar, list);
    }
}
