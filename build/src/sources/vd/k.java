package vd;

import android.net.Uri;
import android.text.TextUtils;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.metadata.Metadata;
import com.google.android.exoplayer2.upstream.h;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.IdentityHashMap;
import java.util.List;
import java.util.Map;
import lc.t0;
import le.c0;
import mc.t1;
import qd.m0;
import qd.n0;
import qd.p;
import qd.u0;
import qd.w0;
import qd.y;
import rc.u;
import rc.v;
import vd.p;
import wd.g;
import wd.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k implements qd.p, k.b {
    private final t1 A;
    private final long C;
    private p.a D;
    private int E;
    private w0 F;
    private int J;
    private n0 K;

    /* renamed from: d  reason: collision with root package name */
    private final h f50992d;

    /* renamed from: e  reason: collision with root package name */
    private final wd.k f50993e;

    /* renamed from: i  reason: collision with root package name */
    private final g f50994i;

    /* renamed from: o  reason: collision with root package name */
    private final c0 f50995o;

    /* renamed from: p  reason: collision with root package name */
    private final v f50996p;

    /* renamed from: q  reason: collision with root package name */
    private final u.a f50997q;

    /* renamed from: r  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f50998r;

    /* renamed from: s  reason: collision with root package name */
    private final y.a f50999s;

    /* renamed from: t  reason: collision with root package name */
    private final le.b f51000t;

    /* renamed from: w  reason: collision with root package name */
    private final qd.h f51003w;

    /* renamed from: x  reason: collision with root package name */
    private final boolean f51004x;

    /* renamed from: y  reason: collision with root package name */
    private final int f51005y;

    /* renamed from: z  reason: collision with root package name */
    private final boolean f51006z;
    private final p.b B = new b();

    /* renamed from: u  reason: collision with root package name */
    private final IdentityHashMap f51001u = new IdentityHashMap();

    /* renamed from: v  reason: collision with root package name */
    private final s f51002v = new s();
    private p[] G = new p[0];
    private p[] H = new p[0];
    private int[][] I = new int[0];

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private class b implements p.b {
        private b() {
        }

        @Override // qd.n0.a
        /* renamed from: a */
        public void i(p pVar) {
            k.this.D.i(k.this);
        }

        @Override // vd.p.b
        public void c() {
            p[] pVarArr;
            if (k.i(k.this) <= 0) {
                int i10 = 0;
                for (p pVar : k.this.G) {
                    i10 += pVar.t().f47375d;
                }
                u0[] u0VarArr = new u0[i10];
                int i11 = 0;
                for (p pVar2 : k.this.G) {
                    int i12 = pVar2.t().f47375d;
                    int i13 = 0;
                    while (i13 < i12) {
                        u0VarArr[i11] = pVar2.t().b(i13);
                        i13++;
                        i11++;
                    }
                }
                k.this.F = new w0(u0VarArr);
                k.this.D.j(k.this);
            }
        }

        @Override // vd.p.b
        public void n(Uri uri) {
            k.this.f50993e.e(uri);
        }
    }

    public k(h hVar, wd.k kVar, g gVar, c0 c0Var, le.g gVar2, v vVar, u.a aVar, com.google.android.exoplayer2.upstream.h hVar2, y.a aVar2, le.b bVar, qd.h hVar3, boolean z10, int i10, boolean z11, t1 t1Var, long j10) {
        this.f50992d = hVar;
        this.f50993e = kVar;
        this.f50994i = gVar;
        this.f50995o = c0Var;
        this.f50996p = vVar;
        this.f50997q = aVar;
        this.f50998r = hVar2;
        this.f50999s = aVar2;
        this.f51000t = bVar;
        this.f51003w = hVar3;
        this.f51004x = z10;
        this.f51005y = i10;
        this.f51006z = z11;
        this.A = t1Var;
        this.C = j10;
        this.K = hVar3.a(new n0[0]);
    }

    private static Format A(Format format) {
        String M = ne.w0.M(format.f12703t, 2);
        return new Format.b().U(format.f12695d).W(format.f12696e).M(format.f12705v).g0(ne.c0.g(M)).K(M).Z(format.f12704u).I(format.f12700q).b0(format.f12701r).n0(format.B).S(format.C).R(format.D).i0(format.f12698o).e0(format.f12699p).G();
    }

    static /* synthetic */ int i(k kVar) {
        int i10 = kVar.E - 1;
        kVar.E = i10;
        return i10;
    }

    private void s(long j10, List list, List list2, List list3, Map map) {
        boolean z10;
        ArrayList arrayList = new ArrayList(list.size());
        ArrayList arrayList2 = new ArrayList(list.size());
        ArrayList arrayList3 = new ArrayList(list.size());
        HashSet hashSet = new HashSet();
        for (int i10 = 0; i10 < list.size(); i10++) {
            String str = ((g.a) list.get(i10)).f52400d;
            if (hashSet.add(str)) {
                arrayList.clear();
                arrayList2.clear();
                arrayList3.clear();
                boolean z11 = true;
                for (int i11 = 0; i11 < list.size(); i11++) {
                    if (ne.w0.c(str, ((g.a) list.get(i11)).f52400d)) {
                        g.a aVar = (g.a) list.get(i11);
                        arrayList3.add(Integer.valueOf(i11));
                        arrayList.add(aVar.f52397a);
                        arrayList2.add(aVar.f52398b);
                        if (ne.w0.L(aVar.f52398b.f12703t, 1) == 1) {
                            z10 = true;
                        } else {
                            z10 = false;
                        }
                        z11 &= z10;
                    }
                }
                String str2 = "audio:" + str;
                p x10 = x(str2, 1, (Uri[]) arrayList.toArray((Uri[]) ne.w0.k(new Uri[0])), (Format[]) arrayList2.toArray(new Format[0]), null, Collections.EMPTY_LIST, map, j10);
                list3.add(li.e.l(arrayList3));
                list2.add(x10);
                if (this.f51004x && z11) {
                    x10.d0(new u0[]{new u0(str2, (Format[]) arrayList2.toArray(new Format[0]))}, 0, new int[0]);
                }
            }
        }
    }

    private void v(wd.g gVar, long j10, List list, List list2, Map map) {
        boolean z10;
        boolean z11;
        boolean z12;
        int i10;
        int size = gVar.f52388e.size();
        int[] iArr = new int[size];
        int i11 = 0;
        int i12 = 0;
        for (int i13 = 0; i13 < gVar.f52388e.size(); i13++) {
            Format format = ((g.b) gVar.f52388e.get(i13)).f52402b;
            if (format.C <= 0 && ne.w0.M(format.f12703t, 2) == null) {
                if (ne.w0.M(format.f12703t, 1) != null) {
                    iArr[i13] = 1;
                    i12++;
                } else {
                    iArr[i13] = -1;
                }
            } else {
                iArr[i13] = 2;
                i11++;
            }
        }
        if (i11 > 0) {
            size = i11;
            z10 = true;
            z11 = false;
        } else if (i12 < size) {
            size -= i12;
            z10 = false;
            z11 = true;
        } else {
            z10 = false;
            z11 = false;
        }
        Uri[] uriArr = new Uri[size];
        Format[] formatArr = new Format[size];
        int[] iArr2 = new int[size];
        int i14 = 0;
        for (int i15 = 0; i15 < gVar.f52388e.size(); i15++) {
            if ((!z10 || iArr[i15] == 2) && (!z11 || iArr[i15] != 1)) {
                g.b bVar = (g.b) gVar.f52388e.get(i15);
                uriArr[i14] = bVar.f52401a;
                formatArr[i14] = bVar.f52402b;
                iArr2[i14] = i15;
                i14++;
            }
        }
        String str = formatArr[0].f12703t;
        int L = ne.w0.L(str, 2);
        int L2 = ne.w0.L(str, 1);
        if ((L2 == 1 || (L2 == 0 && gVar.f52390g.isEmpty())) && L <= 1 && L2 + L > 0) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (!z10 && L2 > 0) {
            i10 = 1;
        } else {
            i10 = 0;
        }
        p x10 = x("main", i10, uriArr, formatArr, gVar.f52393j, gVar.f52394k, map, j10);
        list.add(x10);
        list2.add(iArr2);
        if (this.f51004x && z12) {
            ArrayList arrayList = new ArrayList();
            if (L > 0) {
                Format[] formatArr2 = new Format[size];
                for (int i16 = 0; i16 < size; i16++) {
                    formatArr2[i16] = A(formatArr[i16]);
                }
                arrayList.add(new u0("main", formatArr2));
                if (L2 > 0 && (gVar.f52393j != null || gVar.f52390g.isEmpty())) {
                    arrayList.add(new u0("main:audio", y(formatArr[0], gVar.f52393j, false)));
                }
                List list3 = gVar.f52394k;
                if (list3 != null) {
                    for (int i17 = 0; i17 < list3.size(); i17++) {
                        arrayList.add(new u0("main:cc:" + i17, (Format) list3.get(i17)));
                    }
                }
            } else {
                Format[] formatArr3 = new Format[size];
                for (int i18 = 0; i18 < size; i18++) {
                    formatArr3[i18] = y(formatArr[i18], gVar.f52393j, true);
                }
                arrayList.add(new u0("main", formatArr3));
            }
            u0 u0Var = new u0("main:id3", new Format.b().U("ID3").g0("application/id3").G());
            arrayList.add(u0Var);
            x10.d0((u0[]) arrayList.toArray(new u0[0]), 0, arrayList.indexOf(u0Var));
        }
    }

    private void w(long j10) {
        Map map;
        wd.g gVar = (wd.g) ne.a.e(this.f50993e.d());
        if (this.f51006z) {
            map = z(gVar.f52396m);
        } else {
            map = Collections.EMPTY_MAP;
        }
        Map map2 = map;
        boolean isEmpty = gVar.f52388e.isEmpty();
        List list = gVar.f52390g;
        List list2 = gVar.f52391h;
        this.E = 0;
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        if (!isEmpty) {
            v(gVar, j10, arrayList, arrayList2, map2);
        }
        s(j10, list, arrayList, arrayList2, map2);
        this.J = arrayList.size();
        for (int i10 = 0; i10 < list2.size(); i10++) {
            g.a aVar = (g.a) list2.get(i10);
            String str = "subtitle:" + i10 + ":" + aVar.f52400d;
            Map map3 = map2;
            p x10 = x(str, 3, new Uri[]{aVar.f52397a}, new Format[]{aVar.f52398b}, null, Collections.EMPTY_LIST, map3, j10);
            map2 = map3;
            arrayList2.add(new int[]{i10});
            arrayList.add(x10);
            x10.d0(new u0[]{new u0(str, aVar.f52398b)}, 0, new int[0]);
        }
        this.G = (p[]) arrayList.toArray(new p[0]);
        this.I = (int[][]) arrayList2.toArray(new int[0]);
        this.E = this.G.length;
        for (int i11 = 0; i11 < this.J; i11++) {
            this.G[i11].m0(true);
        }
        for (p pVar : this.G) {
            pVar.B();
        }
        this.H = this.G;
    }

    private p x(String str, int i10, Uri[] uriArr, Format[] formatArr, Format format, List list, Map map, long j10) {
        return new p(str, i10, this.B, new f(this.f50992d, this.f50993e, uriArr, formatArr, this.f50994i, this.f50995o, this.f51002v, this.C, list, this.A, null), map, this.f51000t, j10, format, this.f50996p, this.f50997q, this.f50998r, this.f50999s, this.f51005y);
    }

    private static Format y(Format format, Format format2, boolean z10) {
        String M;
        Metadata metadata;
        int i10;
        String str;
        int i11;
        int i12;
        String str2;
        int i13;
        int i14 = -1;
        if (format2 != null) {
            M = format2.f12703t;
            metadata = format2.f12704u;
            i11 = format2.J;
            i10 = format2.f12698o;
            i12 = format2.f12699p;
            str = format2.f12697i;
            str2 = format2.f12696e;
        } else {
            M = ne.w0.M(format.f12703t, 1);
            metadata = format.f12704u;
            if (z10) {
                i11 = format.J;
                i10 = format.f12698o;
                i12 = format.f12699p;
                str = format.f12697i;
                str2 = format.f12696e;
            } else {
                i10 = 0;
                str = null;
                i11 = -1;
                i12 = 0;
                str2 = null;
            }
        }
        String g10 = ne.c0.g(M);
        if (z10) {
            i13 = format.f12700q;
        } else {
            i13 = -1;
        }
        if (z10) {
            i14 = format.f12701r;
        }
        return new Format.b().U(format.f12695d).W(str2).M(format.f12705v).g0(g10).K(M).Z(metadata).I(i13).b0(i14).J(i11).i0(i10).e0(i12).X(str).G();
    }

    private static Map z(List list) {
        ArrayList arrayList = new ArrayList(list);
        HashMap hashMap = new HashMap();
        int i10 = 0;
        while (i10 < arrayList.size()) {
            rc.m mVar = (rc.m) list.get(i10);
            String str = mVar.f48235i;
            i10++;
            int i11 = i10;
            while (i11 < arrayList.size()) {
                rc.m mVar2 = (rc.m) arrayList.get(i11);
                if (TextUtils.equals(mVar2.f48235i, str)) {
                    mVar = mVar.m(mVar2);
                    arrayList.remove(i11);
                } else {
                    i11++;
                }
            }
            hashMap.put(str, mVar);
        }
        return hashMap;
    }

    public void B() {
        this.f50993e.o(this);
        for (p pVar : this.G) {
            pVar.f0();
        }
        this.D = null;
    }

    @Override // wd.k.b
    public void a() {
        for (p pVar : this.G) {
            pVar.b0();
        }
        this.D.i(this);
    }

    @Override // qd.p, qd.n0
    public long b() {
        return this.K.b();
    }

    @Override // wd.k.b
    public boolean c(Uri uri, h.c cVar, boolean z10) {
        boolean z11 = true;
        for (p pVar : this.G) {
            z11 &= pVar.a0(uri, cVar, z10);
        }
        this.D.i(this);
        return z11;
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        return this.K.d();
    }

    @Override // qd.p
    public long e(long j10, t0 t0Var) {
        p[] pVarArr;
        for (p pVar : this.H) {
            if (pVar.R()) {
                return pVar.e(j10, t0Var);
            }
        }
        return j10;
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        if (this.F == null) {
            for (p pVar : this.G) {
                pVar.B();
            }
            return false;
        }
        return this.K.f(j10);
    }

    @Override // qd.p, qd.n0
    public long g() {
        return this.K.g();
    }

    @Override // qd.p, qd.n0
    public void h(long j10) {
        this.K.h(j10);
    }

    @Override // qd.p
    public void k(p.a aVar, long j10) {
        this.D = aVar;
        this.f50993e.f(this);
        w(j10);
    }

    @Override // qd.p
    public long l(long j10) {
        p[] pVarArr = this.H;
        if (pVarArr.length > 0) {
            boolean i02 = pVarArr[0].i0(j10, false);
            int i10 = 1;
            while (true) {
                p[] pVarArr2 = this.H;
                if (i10 >= pVarArr2.length) {
                    break;
                }
                pVarArr2[i10].i0(j10, i02);
                i10++;
            }
            if (i02) {
                this.f51002v.b();
            }
        }
        return j10;
    }

    @Override // qd.p
    public long m() {
        return -9223372036854775807L;
    }

    @Override // qd.p
    public long o(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        boolean z10;
        boolean z11;
        m0 m0Var;
        int intValue;
        int[] iArr = new int[gVarArr.length];
        int[] iArr2 = new int[gVarArr.length];
        for (int i10 = 0; i10 < gVarArr.length; i10++) {
            m0 m0Var2 = m0VarArr[i10];
            if (m0Var2 == null) {
                intValue = -1;
            } else {
                intValue = ((Integer) this.f51001u.get(m0Var2)).intValue();
            }
            iArr[i10] = intValue;
            iArr2[i10] = -1;
            com.google.android.exoplayer2.trackselection.g gVar = gVarArr[i10];
            if (gVar != null) {
                u0 k10 = gVar.k();
                int i11 = 0;
                while (true) {
                    p[] pVarArr = this.G;
                    if (i11 >= pVarArr.length) {
                        break;
                    } else if (pVarArr[i11].t().c(k10) != -1) {
                        iArr2[i10] = i11;
                        break;
                    } else {
                        i11++;
                    }
                }
            }
        }
        this.f51001u.clear();
        int length = gVarArr.length;
        m0[] m0VarArr2 = new m0[length];
        m0[] m0VarArr3 = new m0[gVarArr.length];
        com.google.android.exoplayer2.trackselection.g[] gVarArr2 = new com.google.android.exoplayer2.trackselection.g[gVarArr.length];
        p[] pVarArr2 = new p[this.G.length];
        int i12 = 0;
        int i13 = 0;
        boolean z12 = false;
        while (i12 < this.G.length) {
            for (int i14 = 0; i14 < gVarArr.length; i14++) {
                com.google.android.exoplayer2.trackselection.g gVar2 = null;
                if (iArr[i14] == i12) {
                    m0Var = m0VarArr[i14];
                } else {
                    m0Var = null;
                }
                m0VarArr3[i14] = m0Var;
                if (iArr2[i14] == i12) {
                    gVar2 = gVarArr[i14];
                }
                gVarArr2[i14] = gVar2;
            }
            p pVar = this.G[i12];
            int[] iArr3 = iArr;
            int i15 = i12;
            int i16 = i13;
            boolean j02 = pVar.j0(gVarArr2, zArr, m0VarArr3, zArr2, j10, z12);
            boolean z13 = false;
            for (int i17 = 0; i17 < gVarArr.length; i17++) {
                m0 m0Var3 = m0VarArr3[i17];
                if (iArr2[i17] == i15) {
                    ne.a.e(m0Var3);
                    m0VarArr2[i17] = m0Var3;
                    this.f51001u.put(m0Var3, Integer.valueOf(i15));
                    z13 = true;
                } else if (iArr3[i17] == i15) {
                    if (m0Var3 == null) {
                        z11 = true;
                    } else {
                        z11 = false;
                    }
                    ne.a.g(z11);
                }
            }
            if (z13) {
                pVarArr2[i16] = pVar;
                i13 = i16 + 1;
                if (i16 == 0) {
                    pVar.m0(true);
                    if (!j02) {
                        p[] pVarArr3 = this.H;
                        if (pVarArr3.length != 0 && pVar == pVarArr3[0]) {
                        }
                    }
                    this.f51002v.b();
                    z12 = true;
                } else {
                    if (i15 < this.J) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                    pVar.m0(z10);
                }
            } else {
                i13 = i16;
            }
            i12 = i15 + 1;
            iArr = iArr3;
        }
        System.arraycopy(m0VarArr2, 0, m0VarArr, 0, length);
        p[] pVarArr4 = (p[]) ne.w0.P0(pVarArr2, i13);
        this.H = pVarArr4;
        this.K = this.f51003w.a(pVarArr4);
        return j10;
    }

    @Override // qd.p
    public void r() {
        for (p pVar : this.G) {
            pVar.r();
        }
    }

    @Override // qd.p
    public w0 t() {
        return (w0) ne.a.e(this.F);
    }

    @Override // qd.p
    public void u(long j10, boolean z10) {
        for (p pVar : this.H) {
            pVar.u(j10, z10);
        }
    }
}
