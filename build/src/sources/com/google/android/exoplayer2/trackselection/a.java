package com.google.android.exoplayer2.trackselection;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.Timeline;
import com.google.android.exoplayer2.trackselection.g;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import ke.k;
import oe.w0;
import oe.y;
import qi.c0;
import qi.s;
import qi.v;
import qi.x;
import rd.r;
import rd.u0;
import td.n;
import td.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends ke.b {

    /* renamed from: h  reason: collision with root package name */
    private final me.e f13793h;

    /* renamed from: i  reason: collision with root package name */
    private final long f13794i;

    /* renamed from: j  reason: collision with root package name */
    private final long f13795j;

    /* renamed from: k  reason: collision with root package name */
    private final long f13796k;

    /* renamed from: l  reason: collision with root package name */
    private final int f13797l;

    /* renamed from: m  reason: collision with root package name */
    private final int f13798m;

    /* renamed from: n  reason: collision with root package name */
    private final float f13799n;

    /* renamed from: o  reason: collision with root package name */
    private final float f13800o;

    /* renamed from: p  reason: collision with root package name */
    private final s f13801p;

    /* renamed from: q  reason: collision with root package name */
    private final oe.e f13802q;

    /* renamed from: r  reason: collision with root package name */
    private float f13803r;

    /* renamed from: s  reason: collision with root package name */
    private int f13804s;

    /* renamed from: t  reason: collision with root package name */
    private int f13805t;

    /* renamed from: u  reason: collision with root package name */
    private long f13806u;

    /* renamed from: v  reason: collision with root package name */
    private n f13807v;

    /* renamed from: w  reason: collision with root package name */
    private long f13808w;

    /* renamed from: com.google.android.exoplayer2.trackselection.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0169a {

        /* renamed from: a  reason: collision with root package name */
        public final long f13809a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13810b;

        public C0169a(long j10, long j11) {
            this.f13809a = j10;
            this.f13810b = j11;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof C0169a)) {
                return false;
            }
            C0169a c0169a = (C0169a) obj;
            if (this.f13809a == c0169a.f13809a && this.f13810b == c0169a.f13810b) {
                return true;
            }
            return false;
        }

        public int hashCode() {
            return (((int) this.f13809a) * 31) + ((int) this.f13810b);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class b implements g.b {

        /* renamed from: a  reason: collision with root package name */
        private final int f13811a;

        /* renamed from: b  reason: collision with root package name */
        private final int f13812b;

        /* renamed from: c  reason: collision with root package name */
        private final int f13813c;

        /* renamed from: d  reason: collision with root package name */
        private final int f13814d;

        /* renamed from: e  reason: collision with root package name */
        private final int f13815e;

        /* renamed from: f  reason: collision with root package name */
        private final float f13816f;

        /* renamed from: g  reason: collision with root package name */
        private final float f13817g;

        /* renamed from: h  reason: collision with root package name */
        private final oe.e f13818h;

        public b() {
            this(10000, 25000, 25000, 0.7f);
        }

        @Override // com.google.android.exoplayer2.trackselection.g.b
        public final g[] a(g.a[] aVarArr, me.e eVar, r.b bVar, Timeline timeline) {
            me.e eVar2;
            g b10;
            s y10 = a.y(aVarArr);
            g[] gVarArr = new g[aVarArr.length];
            int i10 = 0;
            while (i10 < aVarArr.length) {
                g.a aVar = aVarArr[i10];
                if (aVar != null) {
                    int[] iArr = aVar.f13820b;
                    if (iArr.length != 0) {
                        if (iArr.length == 1) {
                            b10 = new k(aVar.f13819a, iArr[0], aVar.f13821c);
                            eVar2 = eVar;
                        } else {
                            eVar2 = eVar;
                            b10 = b(aVar.f13819a, iArr, aVar.f13821c, eVar2, (s) y10.get(i10));
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

        protected a b(u0 u0Var, int[] iArr, int i10, me.e eVar, s sVar) {
            return new a(u0Var, iArr, i10, eVar, this.f13811a, this.f13812b, this.f13813c, this.f13814d, this.f13815e, this.f13816f, this.f13817g, sVar, this.f13818h);
        }

        public b(int i10, int i11, int i12, float f10) {
            this(i10, i11, i12, 1279, 719, f10, 0.75f, oe.e.f39499a);
        }

        public b(int i10, int i11, int i12, int i13, int i14, float f10, float f11, oe.e eVar) {
            this.f13811a = i10;
            this.f13812b = i11;
            this.f13813c = i12;
            this.f13814d = i13;
            this.f13815e = i14;
            this.f13816f = f10;
            this.f13817g = f11;
            this.f13818h = eVar;
        }
    }

    protected a(u0 u0Var, int[] iArr, int i10, me.e eVar, long j10, long j11, long j12, int i11, int i12, float f10, float f11, List list, oe.e eVar2) {
        super(u0Var, iArr, i10);
        long j13;
        if (j12 < j10) {
            y.i("AdaptiveTrackSelection", "Adjusting minDurationToRetainAfterDiscardMs to be at least minDurationForQualityIncreaseMs");
            j13 = j10;
        } else {
            j13 = j12;
        }
        this.f13793h = eVar;
        this.f13794i = j10 * 1000;
        this.f13795j = j11 * 1000;
        this.f13796k = j13 * 1000;
        this.f13797l = i11;
        this.f13798m = i12;
        this.f13799n = f10;
        this.f13800o = f11;
        this.f13801p = s.o(list);
        this.f13802q = eVar2;
        this.f13803r = 1.0f;
        this.f13805t = 0;
        this.f13806u = -9223372036854775807L;
        this.f13808w = Long.MIN_VALUE;
    }

    private long A(List list) {
        if (list.isEmpty()) {
            return -9223372036854775807L;
        }
        n nVar = (n) v.c(list);
        long j10 = nVar.f49281g;
        if (j10 != -9223372036854775807L) {
            long j11 = nVar.f49282h;
            if (j11 != -9223372036854775807L) {
                return j11 - j10;
            }
        }
        return -9223372036854775807L;
    }

    private long C(o[] oVarArr, List list) {
        int i10 = this.f13804s;
        if (i10 < oVarArr.length && oVarArr[i10].next()) {
            o oVar = oVarArr[this.f13804s];
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
                jArr[i10] = new long[aVar.f13820b.length];
                int i11 = 0;
                while (true) {
                    int[] iArr = aVar.f13820b;
                    if (i11 >= iArr.length) {
                        break;
                    }
                    long j10 = aVar.f13819a.c(iArr[i11]).f12301s;
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
        return s.o(e10.values());
    }

    private long F(long j10) {
        long b10;
        long f10 = this.f13793h.f();
        this.f13808w = f10;
        long j11 = ((float) f10) * this.f13799n;
        if (this.f13793h.b() != -9223372036854775807L && j10 != -9223372036854775807L) {
            float f11 = (float) j10;
            return (((float) j11) * Math.max((f11 / this.f13803r) - ((float) b10), 0.0f)) / f11;
        }
        return ((float) j11) / this.f13803r;
    }

    private long G(long j10, long j11) {
        if (j10 == -9223372036854775807L) {
            return this.f13794i;
        }
        if (j11 != -9223372036854775807L) {
            j10 -= j11;
        }
        return Math.min(((float) j10) * this.f13800o, this.f13794i);
    }

    private static void v(List list, long[] jArr) {
        long j10 = 0;
        for (long j11 : jArr) {
            j10 += j11;
        }
        for (int i10 = 0; i10 < list.size(); i10++) {
            s.a aVar = (s.a) list.get(i10);
            if (aVar != null) {
                aVar.a(new C0169a(j10, jArr[i10]));
            }
        }
    }

    private int x(long j10, long j11) {
        long z10 = z(j11);
        int i10 = 0;
        for (int i11 = 0; i11 < this.f32265b; i11++) {
            if (j10 == Long.MIN_VALUE || !a(i11, j10)) {
                Format c10 = c(i11);
                if (w(c10, c10.f12301s, z10)) {
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
            if (aVar != null && aVar.f13820b.length > 1) {
                s.a k11 = s.k();
                k11.a(new C0169a(0L, 0L));
                arrayList.add(k11);
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
        s.a k12 = s.k();
        for (int i14 = 0; i14 < arrayList.size(); i14++) {
            s.a aVar2 = (s.a) arrayList.get(i14);
            if (aVar2 == null) {
                k10 = s.t();
            } else {
                k10 = aVar2.k();
            }
            k12.a(k10);
        }
        return k12.k();
    }

    private long z(long j10) {
        long j11;
        long F = F(j10);
        if (this.f13801p.isEmpty()) {
            return F;
        }
        int i10 = 1;
        while (i10 < this.f13801p.size() - 1 && ((C0169a) this.f13801p.get(i10)).f13809a < F) {
            i10++;
        }
        C0169a c0169a = (C0169a) this.f13801p.get(i10 - 1);
        C0169a c0169a2 = (C0169a) this.f13801p.get(i10);
        long j12 = c0169a.f13809a;
        return c0169a.f13810b + ((((float) (F - j12)) / ((float) (c0169a2.f13809a - j12))) * ((float) (c0169a2.f13810b - j11)));
    }

    protected long B() {
        return this.f13796k;
    }

    protected boolean H(long j10, List list) {
        long j11 = this.f13806u;
        if (j11 != -9223372036854775807L && j10 - j11 < 1000) {
            if (list.isEmpty() || ((n) v.c(list)).equals(this.f13807v)) {
                return false;
            }
            return true;
        }
        return true;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public int b() {
        return this.f13804s;
    }

    @Override // ke.b, com.google.android.exoplayer2.trackselection.g
    public void disable() {
        this.f13807v = null;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public void e(long j10, long j11, long j12, List list, o[] oVarArr) {
        int o10;
        long b10 = this.f13802q.b();
        long C = C(oVarArr, list);
        int i10 = this.f13805t;
        if (i10 == 0) {
            this.f13805t = 1;
            this.f13804s = x(b10, C);
            return;
        }
        int i11 = this.f13804s;
        if (list.isEmpty()) {
            o10 = -1;
        } else {
            o10 = o(((n) v.c(list)).f49278d);
        }
        if (o10 != -1) {
            i10 = ((n) v.c(list)).f49279e;
            i11 = o10;
        }
        int x10 = x(b10, C);
        if (x10 != i11 && !a(i11, b10)) {
            Format c10 = c(i11);
            Format c11 = c(x10);
            long G = G(j12, C);
            int i12 = c11.f12301s;
            int i13 = c10.f12301s;
            if ((i12 > i13 && j11 < G) || (i12 < i13 && j11 >= this.f13795j)) {
                x10 = i11;
            }
        }
        if (x10 != i11) {
            i10 = 3;
        }
        this.f13805t = i10;
        this.f13804s = x10;
    }

    @Override // ke.b, com.google.android.exoplayer2.trackselection.g
    public void enable() {
        this.f13806u = -9223372036854775807L;
        this.f13807v = null;
    }

    @Override // ke.b, com.google.android.exoplayer2.trackselection.g
    public void g(float f10) {
        this.f13803r = f10;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public Object h() {
        return null;
    }

    @Override // ke.b, com.google.android.exoplayer2.trackselection.g
    public int n(long j10, List list) {
        n nVar;
        int i10;
        int i11;
        long b10 = this.f13802q.b();
        if (!H(b10, list)) {
            return list.size();
        }
        this.f13806u = b10;
        if (list.isEmpty()) {
            nVar = null;
        } else {
            nVar = (n) v.c(list);
        }
        this.f13807v = nVar;
        if (list.isEmpty()) {
            return 0;
        }
        int size = list.size();
        long j02 = w0.j0(((n) list.get(size - 1)).f49281g - j10, this.f13803r);
        long B = B();
        if (j02 >= B) {
            Format c10 = c(x(b10, A(list)));
            for (int i12 = 0; i12 < size; i12++) {
                n nVar2 = (n) list.get(i12);
                Format format = nVar2.f49278d;
                if (w0.j0(nVar2.f49281g - j10, this.f13803r) >= B && format.f12301s < c10.f12301s && (i10 = format.C) != -1 && i10 <= this.f13798m && (i11 = format.B) != -1 && i11 <= this.f13797l && i10 < c10.C) {
                    return i12;
                }
            }
        }
        return size;
    }

    @Override // com.google.android.exoplayer2.trackselection.g
    public int r() {
        return this.f13805t;
    }

    protected boolean w(Format format, int i10, long j10) {
        return ((long) i10) <= j10;
    }
}
