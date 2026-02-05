package com.google.android.exoplayer2.trackselection;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.trackselection.g;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import je.k;
import mi.c0;
import mi.s;
import mi.v;
import mi.x;
import ne.w0;
import ne.y;
import qd.r;
import qd.u0;
import sd.n;
import sd.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends je.b {

    /* renamed from: h  reason: collision with root package name */
    private final le.e f13114h;

    /* renamed from: i  reason: collision with root package name */
    private final long f13115i;

    /* renamed from: j  reason: collision with root package name */
    private final long f13116j;

    /* renamed from: k  reason: collision with root package name */
    private final long f13117k;

    /* renamed from: l  reason: collision with root package name */
    private final int f13118l;

    /* renamed from: m  reason: collision with root package name */
    private final int f13119m;

    /* renamed from: n  reason: collision with root package name */
    private final float f13120n;

    /* renamed from: o  reason: collision with root package name */
    private final float f13121o;

    /* renamed from: p  reason: collision with root package name */
    private final s f13122p;

    /* renamed from: q  reason: collision with root package name */
    private final ne.e f13123q;

    /* renamed from: r  reason: collision with root package name */
    private float f13124r;

    /* renamed from: s  reason: collision with root package name */
    private int f13125s;

    /* renamed from: t  reason: collision with root package name */
    private int f13126t;

    /* renamed from: u  reason: collision with root package name */
    private long f13127u;

    /* renamed from: v  reason: collision with root package name */
    private n f13128v;

    /* renamed from: w  reason: collision with root package name */
    private long f13129w;

    /* renamed from: com.google.android.exoplayer2.trackselection.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0172a {

        /* renamed from: a  reason: collision with root package name */
        public final long f13130a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13131b;

        public C0172a(long j10, long j11) {
            this.f13130a = j10;
            this.f13131b = j11;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof C0172a)) {
                return false;
            }
            C0172a c0172a = (C0172a) obj;
            if (this.f13130a == c0172a.f13130a && this.f13131b == c0172a.f13131b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((int) this.f13130a) * 31) + ((int) this.f13131b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements g.b {

        /* renamed from: a  reason: collision with root package name */
        private final int f13132a;

        /* renamed from: b  reason: collision with root package name */
        private final int f13133b;

        /* renamed from: c  reason: collision with root package name */
        private final int f13134c;

        /* renamed from: d  reason: collision with root package name */
        private final int f13135d;

        /* renamed from: e  reason: collision with root package name */
        private final int f13136e;

        /* renamed from: f  reason: collision with root package name */
        private final float f13137f;

        /* renamed from: g  reason: collision with root package name */
        private final float f13138g;

        /* renamed from: h  reason: collision with root package name */
        private final ne.e f13139h;

        public b() {
            this(10000, 25000, 25000, 0.7f);
        }

        @Override // com.google.android.exoplayer2.trackselection.g.b
        public final g[] a(g.a[] aVarArr, le.e eVar, r.b bVar, Timeline timeline) {
            le.e eVar2;
            g b10;
            s y10 = a.y(aVarArr);
            g[] gVarArr = new g[aVarArr.length];
            int i10 = 0;
            while (i10 < aVarArr.length) {
                g.a aVar = aVarArr[i10];
                if (aVar != null) {
                    int[] iArr = aVar.f13141b;
                    if (iArr.length != 0) {
                        if (iArr.length == 1) {
                            b10 = new k(aVar.f13140a, iArr[0], aVar.f13142c);
                            eVar2 = eVar;
                        } else {
                            eVar2 = eVar;
                            b10 = b(aVar.f13140a, iArr, aVar.f13142c, eVar2, (s) y10.get(i10));
                        }
                        gVarArr[i10] = b10;
                        i10++;
                        eVar = eVar2;
                    }
                }
                eVar2 = eVar;
                i10++;
                eVar = eVar2;
            }
            return gVarArr;
        }

        protected a b(u0 u0Var, int[] iArr, int i10, le.e eVar, s sVar) {
            return new a(u0Var, iArr, i10, eVar, this.f13132a, this.f13133b, this.f13134c, this.f13135d, this.f13136e, this.f13137f, this.f13138g, sVar, this.f13139h);
        }

        public b(int i10, int i11, int i12, float f10) {
            this(i10, i11, i12, 1279, 719, f10, 0.75f, ne.e.f39550a);
        }

        public b(int i10, int i11, int i12, int i13, int i14, float f10, float f11, ne.e eVar) {
            this.f13132a = i10;
            this.f13133b = i11;
            this.f13134c = i12;
            this.f13135d = i13;
            this.f13136e = i14;
            this.f13137f = f10;
            this.f13138g = f11;
            this.f13139h = eVar;
        }
    }

    protected a(u0 u0Var, int[] iArr, int i10, le.e eVar, long j10, long j11, long j12, int i11, int i12, float f10, float f11, List list, ne.e eVar2) {
        super(u0Var, iArr, i10);
        long j13;
        if (j12 < j10) {
            y.i("AdaptiveTrackSelection", "Adjusting minDurationToRetainAfterDiscardMs to be at least minDurationForQualityIncreaseMs");
            j13 = j10;
        } else {
            j13 = j12;
        }
        this.f13114h = eVar;
        this.f13115i = j10 * 1000;
        this.f13116j = j11 * 1000;
        this.f13117k = j13 * 1000;
        this.f13118l = i11;
        this.f13119m = i12;
        this.f13120n = f10;
        this.f13121o = f11;
        this.f13122p = s.n(list);
        this.f13123q = eVar2;
        this.f13124r = 1.0f;
        this.f13126t = 0;
        this.f13127u = -9223372036854775807L;
        this.f13129w = Long.MIN_VALUE;
    }

    private long A(List list) {
        if (list.isEmpty()) {
            return -9223372036854775807L;
        }
        n nVar = (n) v.c(list);
        long j10 = nVar.f49570g;
        if (j10 != -9223372036854775807L) {
            long j11 = nVar.f49571h;
            if (j11 != -9223372036854775807L) {
                return j11 - j10;
            }
        }
        return -9223372036854775807L;
    }

    private long C(o[] oVarArr, List list) {
        int i10 = this.f13125s;
        if (i10 < oVarArr.length && oVarArr[i10].next()) {
            o oVar = oVarArr[this.f13125s];
            return oVar.b() - oVar.a();
        }
        for (o oVar2 : oVarArr) {
            if (oVar2.next()) {
                return oVar2.b() - oVar2.a();
            }
        }
        return A(list);
    }

    private static long[][] D(g.a[] aVarArr) {
        long[][] jArr = new long[aVarArr.length];
        for (int i10 = 0; i10 < aVarArr.length; i10++) {
            g.a aVar = aVarArr[i10];
            if (aVar == null) {
                jArr[i10] = new long[0];
            } else {
                jArr[i10] = new long[aVar.f13141b.length];
                int i11 = 0;
                while (true) {
                    int[] iArr = aVar.f13141b;
                    if (i11 >= iArr.length) {
                        break;
                    }
                    long j10 = aVar.f13140a.c(iArr[i11]).f11684s;
                    long[] jArr2 = jArr[i10];
                    if (j10 == -1) {
                        j10 = 0;
                    }
                    jArr2[i11] = j10;
                    i11++;
                }
                Arrays.sort(jArr[i10]);
            }
        }
        return jArr;
    }

    private static s E(long[][] jArr) {
        double d10;
        x e10 = c0.c().a().e();
        for (int i10 = 0; i10 < jArr.length; i10++) {
            long[] jArr2 = jArr[i10];
            if (jArr2.length > 1) {
                int length = jArr2.length;
                double[] dArr = new double[length];
                int i11 = 0;
                while (true) {
                    long[] jArr3 = jArr[i10];
                    double d11 = 0.0d;
                    if (i11 >= jArr3.length) {
                        break;
                    }
                    long j10 = jArr3[i11];
                    if (j10 != -1) {
                        d11 = Math.log(j10);
                    }
                    dArr[i11] = d11;
                    i11++;
                }
                int i12 = length - 1;
                double d12 = dArr[i12] - dArr[0];
                int i13 = 0;
                while (i13 < i12) {
                    double d13 = dArr[i13];
                    i13++;
                    double d14 = (d13 + dArr[i13]) * 0.5d;
                    if (d12 == 0.0d) {
                        d10 = 1.0d;
                    } else {
                        d10 = (d14 - dArr[0]) / d12;
                    }
                    e10.put(Double.valueOf(d10), Integer.valueOf(i10));
                }
            }
        }
        return s.n(e10.values());
    }

    private long F(long j10) {
        long c10;
        long f10 = this.f13114h.f();
        this.f13129w = f10;
        long j11 = ((float) f10) * this.f13120n;
        if (this.f13114h.c() != -9223372036854775807L && j10 != -9223372036854775807L) {
            float f11 = (float) j10;
            return (((float) j11) * Math.max((f11 / this.f13124r) - ((float) c10), 0.0f)) / f11;
        }
        return ((float) j11) / this.f13124r;
    }

    private long G(long j10, long j11) {
        if (j10 == -9223372036854775807L) {
            return this.f13115i;
        }
        if (j11 != -9223372036854775807L) {
            j10 -= j11;
        }
        return Math.min(((float) j10) * this.f13121o, this.f13115i);
    }

    private static void v(List list, long[] jArr) {
        long j10 = 0;
        for (long j11 : jArr) {
            j10 += j11;
        }
        for (int i10 = 0; i10 < list.size(); i10++) {
            s.a aVar = (s.a) list.get(i10);
            if (aVar != null) {
                aVar.a(new C0172a(j10, jArr[i10]));
            }
        }
    }

    private int x(long j10, long j11) {
        long z10 = z(j11);
        int i10 = 0;
        for (int i11 = 0; i11 < this.f30866b; i11++) {
            if (j10 == Long.MIN_VALUE || !a(i11, j10)) {
                Format d10 = d(i11);
                if (w(d10, d10.f11684s, z10)) {
                    return i11;
                }
                i10 = i11;
            }
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static s y(g.a[] aVarArr) {
        s k10;
        long j10;
        ArrayList arrayList = new ArrayList();
        for (g.a aVar : aVarArr) {
            if (aVar != null && aVar.f13141b.length > 1) {
                s.a j11 = s.j();
                j11.a(new C0172a(0L, 0L));
                arrayList.add(j11);
            } else {
                arrayList.add(null);
            }
        }
        long[][] D = D(aVarArr);
        int[] iArr = new int[D.length];
        long[] jArr = new long[D.length];
        for (int i10 = 0; i10 < D.length; i10++) {
            long[] jArr2 = D[i10];
            if (jArr2.length == 0) {
                j10 = 0;
            } else {
                j10 = jArr2[0];
            }
            jArr[i10] = j10;
        }
        v(arrayList, jArr);
        s E = E(D);
        for (int i11 = 0; i11 < E.size(); i11++) {
            int intValue = ((Integer) E.get(i11)).intValue();
            int i12 = iArr[intValue] + 1;
            iArr[intValue] = i12;
            jArr[intValue] = D[intValue][i12];
            v(arrayList, jArr);
        }
        for (int i13 = 0; i13 < aVarArr.length; i13++) {
            if (arrayList.get(i13) != null) {
                jArr[i13] = jArr[i13] * 2;
            }
        }
        v(arrayList, jArr);
        s.a j12 = s.j();
        for (int i14 = 0; i14 < arrayList.size(); i14++) {
            s.a aVar2 = (s.a) arrayList.get(i14);
            if (aVar2 == null) {
                k10 = s.s();
            } else {
                k10 = aVar2.k();
            }
            j12.a(k10);
        }
        return j12.k();
    }

    private long z(long j10) {
        long j11;
        long F = F(j10);
        if (this.f13122p.isEmpty()) {
            return F;
        }
        int i10 = 1;
        while (i10 < this.f13122p.size() - 1 && ((C0172a) this.f13122p.get(i10)).f13130a < F) {
            i10++;
        }
        C0172a c0172a = (C0172a) this.f13122p.get(i10 - 1);
        C0172a c0172a2 = (C0172a) this.f13122p.get(i10);
        long j12 = c0172a.f13130a;
        return c0172a.f13131b + ((((float) (F - j12)) / ((float) (c0172a2.f13130a - j12))) * ((float) (c0172a2.f13131b - j11)));
    }

    protected long B() {
        return this.f13117k;
    }

    protected boolean H(long j10, List list) {
        long j11 = this.f13127u;
        if (j11 != -9223372036854775807L && j10 - j11 < 1000) {
            if (list.isEmpty() || ((n) v.c(list)).equals(this.f13128v)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public int c() {
        return this.f13125s;
    }

    @Override // je.b, com.google.android.exoplayer2.trackselection.g
    public void disable() {
        this.f13128v = null;
    }

    @Override // je.b, com.google.android.exoplayer2.trackselection.g
    public void enable() {
        this.f13127u = -9223372036854775807L;
        this.f13128v = null;
    }

    @Override // je.b, com.google.android.exoplayer2.trackselection.g
    public void g(float f10) {
        this.f13124r = f10;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public Object h() {
        return null;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public void l(long j10, long j11, long j12, List list, o[] oVarArr) {
        int o10;
        long b10 = this.f13123q.b();
        long C = C(oVarArr, list);
        int i10 = this.f13126t;
        if (i10 == 0) {
            this.f13126t = 1;
            this.f13125s = x(b10, C);
            return;
        }
        int i11 = this.f13125s;
        if (list.isEmpty()) {
            o10 = -1;
        } else {
            o10 = o(((n) v.c(list)).f49567d);
        }
        if (o10 != -1) {
            i10 = ((n) v.c(list)).f49568e;
            i11 = o10;
        }
        int x10 = x(b10, C);
        if (x10 != i11 && !a(i11, b10)) {
            Format d10 = d(i11);
            Format d11 = d(x10);
            long G = G(j12, C);
            int i12 = d11.f11684s;
            int i13 = d10.f11684s;
            if ((i12 > i13 && j11 < G) || (i12 < i13 && j11 >= this.f13116j)) {
                x10 = i11;
            }
        }
        if (x10 != i11) {
            i10 = 3;
        }
        this.f13126t = i10;
        this.f13125s = x10;
    }

    @Override // je.b, com.google.android.exoplayer2.trackselection.g
    public int n(long j10, List list) {
        n nVar;
        int i10;
        int i11;
        long b10 = this.f13123q.b();
        if (!H(b10, list)) {
            return list.size();
        }
        this.f13127u = b10;
        if (list.isEmpty()) {
            nVar = null;
        } else {
            nVar = (n) v.c(list);
        }
        this.f13128v = nVar;
        if (list.isEmpty()) {
            return 0;
        }
        int size = list.size();
        long j02 = w0.j0(((n) list.get(size - 1)).f49570g - j10, this.f13124r);
        long B = B();
        if (j02 >= B) {
            Format d10 = d(x(b10, A(list)));
            for (int i12 = 0; i12 < size; i12++) {
                n nVar2 = (n) list.get(i12);
                Format format = nVar2.f49567d;
                if (w0.j0(nVar2.f49570g - j10, this.f13124r) >= B && format.f11684s < d10.f11684s && (i10 = format.C) != -1 && i10 <= this.f13119m && (i11 = format.B) != -1 && i11 <= this.f13118l && i10 < d10.C) {
                    return i12;
                }
            }
        }
        return size;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public int r() {
        return this.f13126t;
    }

    protected boolean w(Format format, int i10, long j10) {
        return ((long) i10) <= j10;
    }
}
