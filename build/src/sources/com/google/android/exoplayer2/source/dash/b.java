package com.google.android.exoplayer2.source.dash;

import android.util.Pair;
import android.util.SparseArray;
import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.dash.a;
import com.google.android.exoplayer2.source.dash.e;
import com.google.android.exoplayer2.upstream.h;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashMap;
import java.util.IdentityHashMap;
import java.util.Iterator;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import ji.a0;
import lc.t0;
import le.c0;
import le.g;
import mc.t1;
import qd.k;
import qd.m0;
import qd.n0;
import qd.p;
import qd.u0;
import qd.w0;
import qd.y;
import rc.u;
import rc.v;
import sd.i;
import ud.f;
import ud.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class b implements p, n0.a, i.b {
    private static final Pattern J = Pattern.compile("CC([1-4])=(.+)");
    private static final Pattern K = Pattern.compile("([1-4])=lang:(\\w+)(,.+)?");
    private final u.a A;
    private final t1 B;
    private p.a C;
    private n0 F;
    private ud.c G;
    private int H;
    private List I;

    /* renamed from: d  reason: collision with root package name */
    final int f12399d;

    /* renamed from: e  reason: collision with root package name */
    private final a.InterfaceC0153a f12400e;

    /* renamed from: i  reason: collision with root package name */
    private final c0 f12401i;

    /* renamed from: o  reason: collision with root package name */
    private final v f12402o;

    /* renamed from: p  reason: collision with root package name */
    private final h f12403p;

    /* renamed from: q  reason: collision with root package name */
    private final td.b f12404q;

    /* renamed from: r  reason: collision with root package name */
    private final long f12405r;

    /* renamed from: s  reason: collision with root package name */
    private final le.u f12406s;

    /* renamed from: t  reason: collision with root package name */
    private final le.b f12407t;

    /* renamed from: u  reason: collision with root package name */
    private final w0 f12408u;

    /* renamed from: v  reason: collision with root package name */
    private final a[] f12409v;

    /* renamed from: w  reason: collision with root package name */
    private final qd.h f12410w;

    /* renamed from: x  reason: collision with root package name */
    private final e f12411x;

    /* renamed from: z  reason: collision with root package name */
    private final y.a f12413z;
    private i[] D = F(0);
    private d[] E = new d[0];

    /* renamed from: y  reason: collision with root package name */
    private final IdentityHashMap f12412y = new IdentityHashMap();

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final int[] f12414a;

        /* renamed from: b  reason: collision with root package name */
        public final int f12415b;

        /* renamed from: c  reason: collision with root package name */
        public final int f12416c;

        /* renamed from: d  reason: collision with root package name */
        public final int f12417d;

        /* renamed from: e  reason: collision with root package name */
        public final int f12418e;

        /* renamed from: f  reason: collision with root package name */
        public final int f12419f;

        /* renamed from: g  reason: collision with root package name */
        public final int f12420g;

        private a(int i10, int i11, int[] iArr, int i12, int i13, int i14, int i15) {
            this.f12415b = i10;
            this.f12414a = iArr;
            this.f12416c = i11;
            this.f12418e = i12;
            this.f12419f = i13;
            this.f12420g = i14;
            this.f12417d = i15;
        }

        public static a a(int[] iArr, int i10) {
            return new a(3, 1, iArr, i10, -1, -1, -1);
        }

        public static a b(int[] iArr, int i10) {
            return new a(5, 1, iArr, i10, -1, -1, -1);
        }

        public static a c(int i10) {
            return new a(5, 2, new int[0], -1, -1, -1, i10);
        }

        public static a d(int i10, int[] iArr, int i11, int i12, int i13) {
            return new a(i10, 0, iArr, i11, i12, i13, -1);
        }
    }

    public b(int i10, ud.c cVar, td.b bVar, int i11, a.InterfaceC0153a interfaceC0153a, c0 c0Var, g gVar, v vVar, u.a aVar, h hVar, y.a aVar2, long j10, le.u uVar, le.b bVar2, qd.h hVar2, e.b bVar3, t1 t1Var) {
        this.f12399d = i10;
        this.G = cVar;
        this.f12404q = bVar;
        this.H = i11;
        this.f12400e = interfaceC0153a;
        this.f12401i = c0Var;
        this.f12402o = vVar;
        this.A = aVar;
        this.f12403p = hVar;
        this.f12413z = aVar2;
        this.f12405r = j10;
        this.f12406s = uVar;
        this.f12407t = bVar2;
        this.f12410w = hVar2;
        this.B = t1Var;
        this.f12411x = new e(cVar, bVar3, bVar2);
        this.F = hVar2.a(this.D);
        ud.g d10 = cVar.d(i11);
        List list = d10.f50545d;
        this.I = list;
        Pair v10 = v(vVar, d10.f50544c, list);
        this.f12408u = (w0) v10.first;
        this.f12409v = (a[]) v10.second;
    }

    private static int[][] A(List list) {
        int i10;
        ud.e w10;
        Integer num;
        int size = list.size();
        HashMap e10 = a0.e(size);
        ArrayList arrayList = new ArrayList(size);
        SparseArray sparseArray = new SparseArray(size);
        for (int i11 = 0; i11 < size; i11++) {
            e10.put(Long.valueOf(((ud.a) list.get(i11)).f50497a), Integer.valueOf(i11));
            ArrayList arrayList2 = new ArrayList();
            arrayList2.add(Integer.valueOf(i11));
            arrayList.add(arrayList2);
            sparseArray.put(i11, arrayList2);
        }
        for (int i12 = 0; i12 < size; i12++) {
            ud.a aVar = (ud.a) list.get(i12);
            ud.e y10 = y(aVar.f50501e);
            if (y10 == null) {
                y10 = y(aVar.f50502f);
            }
            if (y10 != null && (num = (Integer) e10.get(Long.valueOf(Long.parseLong(y10.f50535b)))) != null) {
                i10 = num.intValue();
            } else {
                i10 = i12;
            }
            if (i10 == i12 && (w10 = w(aVar.f50502f)) != null) {
                for (String str : ne.w0.d1(w10.f50535b, ",")) {
                    Integer num2 = (Integer) e10.get(Long.valueOf(Long.parseLong(str)));
                    if (num2 != null) {
                        i10 = Math.min(i10, num2.intValue());
                    }
                }
            }
            if (i10 != i12) {
                List list2 = (List) sparseArray.get(i12);
                List list3 = (List) sparseArray.get(i10);
                list3.addAll(list2);
                sparseArray.put(i12, list3);
                arrayList.remove(list2);
            }
        }
        int size2 = arrayList.size();
        int[][] iArr = new int[size2];
        for (int i13 = 0; i13 < size2; i13++) {
            int[] l10 = li.e.l((Collection) arrayList.get(i13));
            iArr[i13] = l10;
            Arrays.sort(l10);
        }
        return iArr;
    }

    private int B(int i10, int[] iArr) {
        int i11 = iArr[i10];
        if (i11 == -1) {
            return -1;
        }
        int i12 = this.f12409v[i11].f12418e;
        for (int i13 = 0; i13 < iArr.length; i13++) {
            int i14 = iArr[i13];
            if (i14 == i12 && this.f12409v[i14].f12416c == 0) {
                return i13;
            }
        }
        return -1;
    }

    private int[] C(com.google.android.exoplayer2.trackselection.g[] gVarArr) {
        int[] iArr = new int[gVarArr.length];
        for (int i10 = 0; i10 < gVarArr.length; i10++) {
            com.google.android.exoplayer2.trackselection.g gVar = gVarArr[i10];
            if (gVar != null) {
                iArr[i10] = this.f12408u.c(gVar.k());
            } else {
                iArr[i10] = -1;
            }
        }
        return iArr;
    }

    private static boolean D(List list, int[] iArr) {
        for (int i10 : iArr) {
            List list2 = ((ud.a) list.get(i10)).f50499c;
            for (int i11 = 0; i11 < list2.size(); i11++) {
                if (!((j) list2.get(i11)).f50560e.isEmpty()) {
                    return true;
                }
            }
        }
        return false;
    }

    private static int E(int i10, List list, int[][] iArr, boolean[] zArr, Format[][] formatArr) {
        int i11 = 0;
        for (int i12 = 0; i12 < i10; i12++) {
            if (D(list, iArr[i12])) {
                zArr[i12] = true;
                i11++;
            }
            Format[] z10 = z(list, iArr[i12]);
            formatArr[i12] = z10;
            if (z10.length != 0) {
                i11++;
            }
        }
        return i11;
    }

    private static i[] F(int i10) {
        return new i[i10];
    }

    private static Format[] H(ud.e eVar, Pattern pattern, Format format) {
        String str = eVar.f50535b;
        if (str == null) {
            return new Format[]{format};
        }
        String[] d12 = ne.w0.d1(str, ";");
        Format[] formatArr = new Format[d12.length];
        for (int i10 = 0; i10 < d12.length; i10++) {
            Matcher matcher = pattern.matcher(d12[i10]);
            if (!matcher.matches()) {
                return new Format[]{format};
            }
            int parseInt = Integer.parseInt(matcher.group(1));
            Format.b b10 = format.b();
            formatArr[i10] = b10.U(format.f11292d + ":" + parseInt).H(parseInt).X(matcher.group(2)).G();
        }
        return formatArr;
    }

    private void J(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr) {
        for (int i10 = 0; i10 < gVarArr.length; i10++) {
            if (gVarArr[i10] == null || !zArr[i10]) {
                m0 m0Var = m0VarArr[i10];
                if (m0Var instanceof i) {
                    ((i) m0Var).P(this);
                } else if (m0Var instanceof i.a) {
                    ((i.a) m0Var).d();
                }
                m0VarArr[i10] = null;
            }
        }
    }

    private void K(com.google.android.exoplayer2.trackselection.g[] gVarArr, m0[] m0VarArr, int[] iArr) {
        boolean z10;
        for (int i10 = 0; i10 < gVarArr.length; i10++) {
            m0 m0Var = m0VarArr[i10];
            if ((m0Var instanceof k) || (m0Var instanceof i.a)) {
                int B = B(i10, iArr);
                if (B == -1) {
                    z10 = m0VarArr[i10] instanceof k;
                } else {
                    m0 m0Var2 = m0VarArr[i10];
                    if ((m0Var2 instanceof i.a) && ((i.a) m0Var2).f49444d == m0VarArr[B]) {
                        z10 = true;
                    } else {
                        z10 = false;
                    }
                }
                if (!z10) {
                    m0 m0Var3 = m0VarArr[i10];
                    if (m0Var3 instanceof i.a) {
                        ((i.a) m0Var3).d();
                    }
                    m0VarArr[i10] = null;
                }
            }
        }
    }

    private void L(com.google.android.exoplayer2.trackselection.g[] gVarArr, m0[] m0VarArr, boolean[] zArr, long j10, int[] iArr) {
        for (int i10 = 0; i10 < gVarArr.length; i10++) {
            com.google.android.exoplayer2.trackselection.g gVar = gVarArr[i10];
            if (gVar != null) {
                m0 m0Var = m0VarArr[i10];
                if (m0Var == null) {
                    zArr[i10] = true;
                    a aVar = this.f12409v[iArr[i10]];
                    int i11 = aVar.f12416c;
                    if (i11 == 0) {
                        m0VarArr[i10] = s(aVar, gVar, j10);
                    } else if (i11 == 2) {
                        m0VarArr[i10] = new d((f) this.I.get(aVar.f12417d), gVar.k().c(0), this.G.f50510d);
                    }
                } else if (m0Var instanceof i) {
                    ((com.google.android.exoplayer2.source.dash.a) ((i) m0Var).D()).b(gVar);
                }
            }
        }
        for (int i12 = 0; i12 < gVarArr.length; i12++) {
            if (m0VarArr[i12] == null && gVarArr[i12] != null) {
                a aVar2 = this.f12409v[iArr[i12]];
                if (aVar2.f12416c == 1) {
                    int B = B(i12, iArr);
                    if (B == -1) {
                        m0VarArr[i12] = new k();
                    } else {
                        m0VarArr[i12] = ((i) m0VarArr[B]).S(j10, aVar2.f12415b);
                    }
                }
            }
        }
    }

    private static void p(List list, u0[] u0VarArr, a[] aVarArr, int i10) {
        int i11 = 0;
        while (i11 < list.size()) {
            f fVar = (f) list.get(i11);
            Format G = new Format.b().U(fVar.a()).g0("application/x-emsg").G();
            u0VarArr[i10] = new u0(fVar.a() + ":" + i11, G);
            aVarArr[i10] = a.c(i11);
            i11++;
            i10++;
        }
    }

    private static int q(v vVar, List list, int[][] iArr, int i10, boolean[] zArr, Format[][] formatArr, u0[] u0VarArr, a[] aVarArr) {
        String str;
        int i11;
        int i12;
        int i13 = 0;
        int i14 = 0;
        while (i13 < i10) {
            int[] iArr2 = iArr[i13];
            ArrayList arrayList = new ArrayList();
            for (int i15 : iArr2) {
                arrayList.addAll(((ud.a) list.get(i15)).f50499c);
            }
            int size = arrayList.size();
            Format[] formatArr2 = new Format[size];
            for (int i16 = 0; i16 < size; i16++) {
                Format format = ((j) arrayList.get(i16)).f50557b;
                formatArr2[i16] = format.c(vVar.b(format));
            }
            ud.a aVar = (ud.a) list.get(iArr2[0]);
            long j10 = aVar.f50497a;
            if (j10 != -1) {
                str = Long.toString(j10);
            } else {
                str = "unset:" + i13;
            }
            int i17 = i14 + 1;
            if (zArr[i13]) {
                i11 = i14 + 2;
            } else {
                i11 = i17;
                i17 = -1;
            }
            if (formatArr[i13].length != 0) {
                i12 = i11 + 1;
            } else {
                i12 = i11;
                i11 = -1;
            }
            u0VarArr[i14] = new u0(str, formatArr2);
            aVarArr[i14] = a.d(aVar.f50498b, iArr2, i14, i17, i11);
            if (i17 != -1) {
                String str2 = str + ":emsg";
                u0VarArr[i17] = new u0(str2, new Format.b().U(str2).g0("application/x-emsg").G());
                aVarArr[i17] = a.b(iArr2, i14);
            }
            if (i11 != -1) {
                u0VarArr[i11] = new u0(str + ":cc", formatArr[i13]);
                aVarArr[i11] = a.a(iArr2, i14);
            }
            i13++;
            i14 = i12;
        }
        return i14;
    }

    private i s(a aVar, com.google.android.exoplayer2.trackselection.g gVar, long j10) {
        boolean z10;
        int i10;
        u0 u0Var;
        boolean z11;
        u0 u0Var2;
        int i11;
        int i12 = aVar.f12419f;
        if (i12 != -1) {
            z10 = true;
        } else {
            z10 = false;
        }
        e.c cVar = null;
        if (z10) {
            u0Var = this.f12408u.b(i12);
            i10 = 1;
        } else {
            i10 = 0;
            u0Var = null;
        }
        int i13 = aVar.f12420g;
        if (i13 != -1) {
            z11 = true;
        } else {
            z11 = false;
        }
        if (z11) {
            u0Var2 = this.f12408u.b(i13);
            i10 += u0Var2.f47764d;
        } else {
            u0Var2 = null;
        }
        Format[] formatArr = new Format[i10];
        int[] iArr = new int[i10];
        if (z10) {
            formatArr[0] = u0Var.c(0);
            iArr[0] = 5;
            i11 = 1;
        } else {
            i11 = 0;
        }
        ArrayList arrayList = new ArrayList();
        if (z11) {
            for (int i14 = 0; i14 < u0Var2.f47764d; i14++) {
                Format c10 = u0Var2.c(i14);
                formatArr[i11] = c10;
                iArr[i11] = 3;
                arrayList.add(c10);
                i11++;
            }
        }
        if (this.G.f50510d && z10) {
            cVar = this.f12411x.k();
        }
        e.c cVar2 = cVar;
        i iVar = new i(aVar.f12415b, iArr, formatArr, this.f12400e.a(this.f12406s, this.G, this.f12404q, this.H, aVar.f12414a, gVar, aVar.f12415b, this.f12405r, z10, arrayList, cVar2, this.f12401i, this.B, null), this, this.f12407t, j10, this.f12402o, this.A, this.f12403p, this.f12413z);
        synchronized (this) {
            this.f12412y.put(iVar, cVar2);
        }
        return iVar;
    }

    private static Pair v(v vVar, List list, List list2) {
        int[][] A = A(list);
        int length = A.length;
        boolean[] zArr = new boolean[length];
        Format[][] formatArr = new Format[length];
        int E = E(length, list, A, zArr, formatArr) + length + list2.size();
        u0[] u0VarArr = new u0[E];
        a[] aVarArr = new a[E];
        p(list2, u0VarArr, aVarArr, q(vVar, list, A, length, zArr, formatArr, u0VarArr, aVarArr));
        return Pair.create(new w0(u0VarArr), aVarArr);
    }

    private static ud.e w(List list) {
        return x(list, "urn:mpeg:dash:adaptation-set-switching:2016");
    }

    private static ud.e x(List list, String str) {
        for (int i10 = 0; i10 < list.size(); i10++) {
            ud.e eVar = (ud.e) list.get(i10);
            if (str.equals(eVar.f50534a)) {
                return eVar;
            }
        }
        return null;
    }

    private static ud.e y(List list) {
        return x(list, "http://dashif.org/guidelines/trickmode");
    }

    private static Format[] z(List list, int[] iArr) {
        for (int i10 : iArr) {
            ud.a aVar = (ud.a) list.get(i10);
            List list2 = ((ud.a) list.get(i10)).f50500d;
            for (int i11 = 0; i11 < list2.size(); i11++) {
                ud.e eVar = (ud.e) list2.get(i11);
                if ("urn:scte:dash:cc:cea-608:2015".equals(eVar.f50534a)) {
                    return H(eVar, J, new Format.b().g0("application/cea-608").U(aVar.f50497a + ":cea608").G());
                } else if ("urn:scte:dash:cc:cea-708:2015".equals(eVar.f50534a)) {
                    return H(eVar, K, new Format.b().g0("application/cea-708").U(aVar.f50497a + ":cea708").G());
                }
            }
        }
        return new Format[0];
    }

    @Override // qd.n0.a
    /* renamed from: G */
    public void i(i iVar) {
        this.C.i(this);
    }

    public void I() {
        this.f12411x.o();
        for (i iVar : this.D) {
            iVar.P(this);
        }
        this.C = null;
    }

    public void M(ud.c cVar, int i10) {
        d[] dVarArr;
        this.G = cVar;
        this.H = i10;
        this.f12411x.q(cVar);
        i[] iVarArr = this.D;
        if (iVarArr != null) {
            for (i iVar : iVarArr) {
                ((com.google.android.exoplayer2.source.dash.a) iVar.D()).i(cVar, i10);
            }
            this.C.i(this);
        }
        this.I = cVar.d(i10).f50545d;
        for (d dVar : this.E) {
            Iterator it = this.I.iterator();
            while (true) {
                if (it.hasNext()) {
                    f fVar = (f) it.next();
                    if (fVar.a().equals(dVar.b())) {
                        boolean z10 = true;
                        dVar.e(fVar, (cVar.f50510d && i10 == cVar.e() - 1) ? false : false);
                    }
                }
            }
        }
    }

    @Override // sd.i.b
    public synchronized void a(i iVar) {
        e.c cVar = (e.c) this.f12412y.remove(iVar);
        if (cVar != null) {
            cVar.n();
        }
    }

    @Override // qd.p, qd.n0
    public long b() {
        return this.F.b();
    }

    @Override // qd.p, qd.n0
    public boolean d() {
        return this.F.d();
    }

    @Override // qd.p
    public long e(long j10, t0 t0Var) {
        i[] iVarArr;
        for (i iVar : this.D) {
            if (iVar.f49429d == 2) {
                return iVar.e(j10, t0Var);
            }
        }
        return j10;
    }

    @Override // qd.p, qd.n0
    public boolean f(long j10) {
        return this.F.f(j10);
    }

    @Override // qd.p, qd.n0
    public long g() {
        return this.F.g();
    }

    @Override // qd.p, qd.n0
    public void h(long j10) {
        this.F.h(j10);
    }

    @Override // qd.p
    public void k(p.a aVar, long j10) {
        this.C = aVar;
        aVar.j(this);
    }

    @Override // qd.p
    public long l(long j10) {
        for (i iVar : this.D) {
            iVar.R(j10);
        }
        for (d dVar : this.E) {
            dVar.d(j10);
        }
        return j10;
    }

    @Override // qd.p
    public long m() {
        return -9223372036854775807L;
    }

    @Override // qd.p
    public long o(com.google.android.exoplayer2.trackselection.g[] gVarArr, boolean[] zArr, m0[] m0VarArr, boolean[] zArr2, long j10) {
        int[] C = C(gVarArr);
        J(gVarArr, zArr, m0VarArr);
        K(gVarArr, m0VarArr, C);
        L(gVarArr, m0VarArr, zArr2, j10, C);
        ArrayList arrayList = new ArrayList();
        ArrayList arrayList2 = new ArrayList();
        for (m0 m0Var : m0VarArr) {
            if (m0Var instanceof i) {
                arrayList.add((i) m0Var);
            } else if (m0Var instanceof d) {
                arrayList2.add((d) m0Var);
            }
        }
        i[] F = F(arrayList.size());
        this.D = F;
        arrayList.toArray(F);
        d[] dVarArr = new d[arrayList2.size()];
        this.E = dVarArr;
        arrayList2.toArray(dVarArr);
        this.F = this.f12410w.a(this.D);
        return j10;
    }

    @Override // qd.p
    public void r() {
        this.f12406s.a();
    }

    @Override // qd.p
    public w0 t() {
        return this.f12408u;
    }

    @Override // qd.p
    public void u(long j10, boolean z10) {
        for (i iVar : this.D) {
            iVar.u(j10, z10);
        }
    }
}
