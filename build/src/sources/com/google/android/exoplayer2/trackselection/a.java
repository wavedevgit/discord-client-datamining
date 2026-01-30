package com.google.android.exoplayer2.trackselection;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.trackselection.g;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import je.k;
import ji.c0;
import ji.s;
import ji.v;
import ji.x;
import ne.w0;
import ne.y;
import qd.r;
import qd.u0;
import sd.n;
import sd.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends je.b {

    /* renamed from: h  reason: collision with root package name */
    private final le.e f14132h;

    /* renamed from: i  reason: collision with root package name */
    private final long f14133i;

    /* renamed from: j  reason: collision with root package name */
    private final long f14134j;

    /* renamed from: k  reason: collision with root package name */
    private final long f14135k;

    /* renamed from: l  reason: collision with root package name */
    private final int f14136l;

    /* renamed from: m  reason: collision with root package name */
    private final int f14137m;

    /* renamed from: n  reason: collision with root package name */
    private final float f14138n;

    /* renamed from: o  reason: collision with root package name */
    private final float f14139o;

    /* renamed from: p  reason: collision with root package name */
    private final s f14140p;

    /* renamed from: q  reason: collision with root package name */
    private final ne.e f14141q;

    /* renamed from: r  reason: collision with root package name */
    private float f14142r;

    /* renamed from: s  reason: collision with root package name */
    private int f14143s;

    /* renamed from: t  reason: collision with root package name */
    private int f14144t;

    /* renamed from: u  reason: collision with root package name */
    private long f14145u;

    /* renamed from: v  reason: collision with root package name */
    private n f14146v;

    /* renamed from: w  reason: collision with root package name */
    private long f14147w;

    /* renamed from: com.google.android.exoplayer2.trackselection.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0170a {

        /* renamed from: a  reason: collision with root package name */
        public final long f14148a;

        /* renamed from: b  reason: collision with root package name */
        public final long f14149b;

        public C0170a(long j10, long j11) {
            this.f14148a = j10;
            this.f14149b = j11;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof C0170a)) {
                return false;
            }
            C0170a c0170a = (C0170a) obj;
            if (this.f14148a == c0170a.f14148a && this.f14149b == c0170a.f14149b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((int) this.f14148a) * 31) + ((int) this.f14149b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements g.b {

        /* renamed from: a  reason: collision with root package name */
        private final int f14150a;

        /* renamed from: b  reason: collision with root package name */
        private final int f14151b;

        /* renamed from: c  reason: collision with root package name */
        private final int f14152c;

        /* renamed from: d  reason: collision with root package name */
        private final int f14153d;

        /* renamed from: e  reason: collision with root package name */
        private final int f14154e;

        /* renamed from: f  reason: collision with root package name */
        private final float f14155f;

        /* renamed from: g  reason: collision with root package name */
        private final float f14156g;

        /* renamed from: h  reason: collision with root package name */
        private final ne.e f14157h;

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
                    int[] iArr = aVar.f14159b;
                    if (iArr.length != 0) {
                        if (iArr.length == 1) {
                            b10 = new k(aVar.f14158a, iArr[0], aVar.f14160c);
                            eVar2 = eVar;
                        } else {
                            eVar2 = eVar;
                            b10 = b(aVar.f14158a, iArr, aVar.f14160c, eVar2, (s) y10.get(i10));
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
            return new a(u0Var, iArr, i10, eVar, this.f14150a, this.f14151b, this.f14152c, this.f14153d, this.f14154e, this.f14155f, this.f14156g, sVar, this.f14157h);
        }

        public b(int i10, int i11, int i12, float f10) {
            this(i10, i11, i12, 1279, 719, f10, 0.75f, ne.e.f40188a);
        }

        public b(int i10, int i11, int i12, int i13, int i14, float f10, float f11, ne.e eVar) {
            this.f14150a = i10;
            this.f14151b = i11;
            this.f14152c = i12;
            this.f14153d = i13;
            this.f14154e = i14;
            this.f14155f = f10;
            this.f14156g = f11;
            this.f14157h = eVar;
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
        this.f14132h = eVar;
        this.f14133i = j10 * 1000;
        this.f14134j = j11 * 1000;
        this.f14135k = j13 * 1000;
        this.f14136l = i11;
        this.f14137m = i12;
        this.f14138n = f10;
        this.f14139o = f11;
        this.f14140p = s.m(list);
        this.f14141q = eVar2;
        this.f14142r = 1.0f;
        this.f14144t = 0;
        this.f14145u = -9223372036854775807L;
        this.f14147w = Long.MIN_VALUE;
    }

    private long A(List list) {
        if (list.isEmpty()) {
            return -9223372036854775807L;
        }
        n nVar = (n) v.c(list);
        long j10 = nVar.f48960g;
        if (j10 != -9223372036854775807L) {
            long j11 = nVar.f48961h;
            if (j11 != -9223372036854775807L) {
                return j11 - j10;
            }
        }
        return -9223372036854775807L;
    }

    private long C(o[] oVarArr, List list) {
        int i10 = this.f14143s;
        if (i10 < oVarArr.length && oVarArr[i10].next()) {
            o oVar = oVarArr[this.f14143s];
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
                jArr[i10] = new long[aVar.f14159b.length];
                int i11 = 0;
                while (true) {
                    int[] iArr = aVar.f14159b;
                    if (i11 >= iArr.length) {
                        break;
                    }
                    long j10 = aVar.f14158a.c(iArr[i11]).f12702s;
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
        return s.m(e10.values());
    }

    private long F(long j10) {
        long c10;
        long f10 = this.f14132h.f();
        this.f14147w = f10;
        long j11 = ((float) f10) * this.f14138n;
        if (this.f14132h.c() != -9223372036854775807L && j10 != -9223372036854775807L) {
            float f11 = (float) j10;
            return (((float) j11) * Math.max((f11 / this.f14142r) - ((float) c10), 0.0f)) / f11;
        }
        return ((float) j11) / this.f14142r;
    }

    private long G(long j10, long j11) {
        if (j10 == -9223372036854775807L) {
            return this.f14133i;
        }
        if (j11 != -9223372036854775807L) {
            j10 -= j11;
        }
        return Math.min(((float) j10) * this.f14139o, this.f14133i);
    }

    private static void v(List list, long[] jArr) {
        long j10 = 0;
        for (long j11 : jArr) {
            j10 += j11;
        }
        for (int i10 = 0; i10 < list.size(); i10++) {
            s.a aVar = (s.a) list.get(i10);
            if (aVar != null) {
                aVar.a(new C0170a(j10, jArr[i10]));
            }
        }
    }

    private int x(long j10, long j11) {
        long z10 = z(j11);
        int i10 = 0;
        for (int i11 = 0; i11 < this.f31983b; i11++) {
            if (j10 == Long.MIN_VALUE || !a(i11, j10)) {
                Format d10 = d(i11);
                if (w(d10, d10.f12702s, z10)) {
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
            if (aVar != null && aVar.f14159b.length > 1) {
                s.a j11 = s.j();
                j11.a(new C0170a(0L, 0L));
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
                k10 = s.r();
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
        if (this.f14140p.isEmpty()) {
            return F;
        }
        int i10 = 1;
        while (i10 < this.f14140p.size() - 1 && ((C0170a) this.f14140p.get(i10)).f14148a < F) {
            i10++;
        }
        C0170a c0170a = (C0170a) this.f14140p.get(i10 - 1);
        C0170a c0170a2 = (C0170a) this.f14140p.get(i10);
        long j12 = c0170a.f14148a;
        return c0170a.f14149b + ((((float) (F - j12)) / ((float) (c0170a2.f14148a - j12))) * ((float) (c0170a2.f14149b - j11)));
    }

    protected long B() {
        return this.f14135k;
    }

    protected boolean H(long j10, List list) {
        long j11 = this.f14145u;
        if (j11 != -9223372036854775807L && j10 - j11 < 1000) {
            if (list.isEmpty() || ((n) v.c(list)).equals(this.f14146v)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public int c() {
        return this.f14143s;
    }

    @Override // je.b, com.google.android.exoplayer2.trackselection.g
    public void disable() {
        this.f14146v = null;
    }

    @Override // je.b, com.google.android.exoplayer2.trackselection.g
    public void enable() {
        this.f14145u = -9223372036854775807L;
        this.f14146v = null;
    }

    @Override // je.b, com.google.android.exoplayer2.trackselection.g
    public void g(float f10) {
        this.f14142r = f10;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public Object h() {
        return null;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public void l(long j10, long j11, long j12, List list, o[] oVarArr) {
        int o10;
        long b10 = this.f14141q.b();
        long C = C(oVarArr, list);
        int i10 = this.f14144t;
        if (i10 == 0) {
            this.f14144t = 1;
            this.f14143s = x(b10, C);
            return;
        }
        int i11 = this.f14143s;
        if (list.isEmpty()) {
            o10 = -1;
        } else {
            o10 = o(((n) v.c(list)).f48957d);
        }
        if (o10 != -1) {
            i10 = ((n) v.c(list)).f48958e;
            i11 = o10;
        }
        int x10 = x(b10, C);
        if (x10 != i11 && !a(i11, b10)) {
            Format d10 = d(i11);
            Format d11 = d(x10);
            long G = G(j12, C);
            int i12 = d11.f12702s;
            int i13 = d10.f12702s;
            if ((i12 > i13 && j11 < G) || (i12 < i13 && j11 >= this.f14134j)) {
                x10 = i11;
            }
        }
        if (x10 != i11) {
            i10 = 3;
        }
        this.f14144t = i10;
        this.f14143s = x10;
    }

    @Override // je.b, com.google.android.exoplayer2.trackselection.g
    public int n(long j10, List list) {
        n nVar;
        int i10;
        int i11;
        long b10 = this.f14141q.b();
        if (!H(b10, list)) {
            return list.size();
        }
        this.f14145u = b10;
        if (list.isEmpty()) {
            nVar = null;
        } else {
            nVar = (n) v.c(list);
        }
        this.f14146v = nVar;
        if (list.isEmpty()) {
            return 0;
        }
        int size = list.size();
        long j02 = w0.j0(((n) list.get(size - 1)).f48960g - j10, this.f14142r);
        long B = B();
        if (j02 >= B) {
            Format d10 = d(x(b10, A(list)));
            for (int i12 = 0; i12 < size; i12++) {
                n nVar2 = (n) list.get(i12);
                Format format = nVar2.f48957d;
                if (w0.j0(nVar2.f48960g - j10, this.f14142r) >= B && format.f12702s < d10.f12702s && (i10 = format.C) != -1 && i10 <= this.f14137m && (i11 = format.B) != -1 && i11 <= this.f14136l && i10 < d10.C) {
                    return i12;
                }
            }
        }
        return size;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public int r() {
        return this.f14144t;
    }

    protected boolean w(Format format, int i10, long j10) {
        return ((long) i10) <= j10;
    }
}
