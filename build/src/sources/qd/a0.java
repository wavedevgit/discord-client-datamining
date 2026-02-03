package qd;

import com.google.android.exoplayer2.MediaItem;
import com.google.android.exoplayer2.Timeline;
import java.io.IOException;
import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import qd.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 extends f {
    private static final MediaItem G = new MediaItem.c().b("MergingMediaSource").a();
    private final h A;
    private final Map B;
    private final ji.b0 C;
    private int D;
    private long[][] E;
    private b F;

    /* renamed from: v  reason: collision with root package name */
    private final boolean f47378v;

    /* renamed from: w  reason: collision with root package name */
    private final boolean f47379w;

    /* renamed from: x  reason: collision with root package name */
    private final r[] f47380x;

    /* renamed from: y  reason: collision with root package name */
    private final Timeline[] f47381y;

    /* renamed from: z  reason: collision with root package name */
    private final ArrayList f47382z;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends l {

        /* renamed from: r  reason: collision with root package name */
        private final long[] f47383r;

        /* renamed from: s  reason: collision with root package name */
        private final long[] f47384s;

        public a(Timeline timeline, Map map) {
            super(timeline);
            int t10 = timeline.t();
            this.f47384s = new long[timeline.t()];
            Timeline.d dVar = new Timeline.d();
            for (int i10 = 0; i10 < t10; i10++) {
                this.f47384s[i10] = timeline.r(i10, dVar).f12647y;
            }
            int m10 = timeline.m();
            this.f47383r = new long[m10];
            Timeline.b bVar = new Timeline.b();
            for (int i11 = 0; i11 < m10; i11++) {
                timeline.k(i11, bVar, true);
                long longValue = ((Long) ne.a.e((Long) map.get(bVar.f12624e))).longValue();
                long[] jArr = this.f47383r;
                longValue = longValue == Long.MIN_VALUE ? bVar.f12626o : longValue;
                jArr[i11] = longValue;
                long j10 = bVar.f12626o;
                if (j10 != -9223372036854775807L) {
                    long[] jArr2 = this.f47384s;
                    int i12 = bVar.f12625i;
                    jArr2[i12] = jArr2[i12] - (j10 - longValue);
                }
            }
        }

        @Override // qd.l, com.google.android.exoplayer2.Timeline
        public Timeline.b k(int i10, Timeline.b bVar, boolean z10) {
            super.k(i10, bVar, z10);
            bVar.f12626o = this.f47383r[i10];
            return bVar;
        }

        @Override // qd.l, com.google.android.exoplayer2.Timeline
        public Timeline.d s(int i10, Timeline.d dVar, long j10) {
            long j11;
            super.s(i10, dVar, j10);
            long j12 = this.f47384s[i10];
            dVar.f12647y = j12;
            if (j12 != -9223372036854775807L) {
                long j13 = dVar.f12646x;
                if (j13 != -9223372036854775807L) {
                    j11 = Math.min(j13, j12);
                    dVar.f12646x = j11;
                    return dVar;
                }
            }
            j11 = dVar.f12646x;
            dVar.f12646x = j11;
            return dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b extends IOException {

        /* renamed from: d  reason: collision with root package name */
        public final int f47385d;

        public b(int i10) {
            this.f47385d = i10;
        }
    }

    public a0(r... rVarArr) {
        this(false, rVarArr);
    }

    private void K() {
        Timeline.b bVar = new Timeline.b();
        for (int i10 = 0; i10 < this.D; i10++) {
            long j10 = -this.f47381y[0].j(i10, bVar).q();
            int i11 = 1;
            while (true) {
                Timeline[] timelineArr = this.f47381y;
                if (i11 < timelineArr.length) {
                    this.E[i10][i11] = j10 - (-timelineArr[i11].j(i10, bVar).q());
                    i11++;
                }
            }
        }
    }

    private void N() {
        Timeline[] timelineArr;
        Timeline.b bVar = new Timeline.b();
        for (int i10 = 0; i10 < this.D; i10++) {
            int i11 = 0;
            long j10 = Long.MIN_VALUE;
            while (true) {
                timelineArr = this.f47381y;
                if (i11 >= timelineArr.length) {
                    break;
                }
                long m10 = timelineArr[i11].j(i10, bVar).m();
                if (m10 != -9223372036854775807L) {
                    long j11 = m10 + this.E[i10][i11];
                    if (j10 == Long.MIN_VALUE || j11 < j10) {
                        j10 = j11;
                    }
                }
                i11++;
            }
            Object q10 = timelineArr[0].q(i10);
            this.B.put(q10, Long.valueOf(j10));
            for (d dVar : this.C.get(q10)) {
                dVar.v(0L, j10);
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.f, qd.a
    public void B(le.c0 c0Var) {
        super.B(c0Var);
        for (int i10 = 0; i10 < this.f47380x.length; i10++) {
            J(Integer.valueOf(i10), this.f47380x[i10]);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.f, qd.a
    public void D() {
        super.D();
        Arrays.fill(this.f47381y, (Object) null);
        this.D = -1;
        this.F = null;
        this.f47382z.clear();
        Collections.addAll(this.f47382z, this.f47380x);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.f
    /* renamed from: L */
    public r.b F(Integer num, r.b bVar) {
        if (num.intValue() == 0) {
            return bVar;
        }
        return null;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // qd.f
    /* renamed from: M */
    public void I(Integer num, r rVar, Timeline timeline) {
        if (this.F == null) {
            if (this.D == -1) {
                this.D = timeline.m();
            } else if (timeline.m() != this.D) {
                this.F = new b(0);
                return;
            }
            if (this.E.length == 0) {
                this.E = (long[][]) Array.newInstance(Long.TYPE, this.D, this.f47381y.length);
            }
            this.f47382z.remove(rVar);
            this.f47381y[num.intValue()] = timeline;
            if (this.f47382z.isEmpty()) {
                if (this.f47378v) {
                    K();
                }
                a aVar = this.f47381y[0];
                if (this.f47379w) {
                    N();
                    aVar = new a(aVar, this.B);
                }
                C(aVar);
            }
        }
    }

    @Override // qd.r
    public void c(p pVar) {
        if (this.f47379w) {
            d dVar = (d) pVar;
            Iterator it = this.C.a().iterator();
            while (true) {
                if (!it.hasNext()) {
                    break;
                }
                Map.Entry entry = (Map.Entry) it.next();
                if (((d) entry.getValue()).equals(dVar)) {
                    this.C.remove(entry.getKey(), entry.getValue());
                    break;
                }
            }
            pVar = dVar.f47390d;
        }
        z zVar = (z) pVar;
        int i10 = 0;
        while (true) {
            r[] rVarArr = this.f47380x;
            if (i10 < rVarArr.length) {
                rVarArr[i10].c(zVar.a(i10));
                i10++;
            } else {
                return;
            }
        }
    }

    @Override // qd.r
    public MediaItem f() {
        r[] rVarArr = this.f47380x;
        if (rVarArr.length > 0) {
            return rVarArr[0].f();
        }
        return G;
    }

    @Override // qd.r
    public p h(r.b bVar, le.b bVar2, long j10) {
        int length = this.f47380x.length;
        p[] pVarArr = new p[length];
        int f10 = this.f47381y[0].f(bVar.f47555a);
        for (int i10 = 0; i10 < length; i10++) {
            pVarArr[i10] = this.f47380x[i10].h(bVar.c(this.f47381y[i10].q(f10)), bVar2, j10 - this.E[f10][i10]);
        }
        z zVar = new z(this.A, this.E[f10], pVarArr);
        if (this.f47379w) {
            d dVar = new d(zVar, true, 0L, ((Long) ne.a.e((Long) this.B.get(bVar.f47555a))).longValue());
            this.C.put(bVar.f47555a, dVar);
            return dVar;
        }
        return zVar;
    }

    @Override // qd.f, qd.r
    public void o() {
        b bVar = this.F;
        if (bVar == null) {
            super.o();
            return;
        }
        throw bVar;
    }

    public a0(boolean z10, r... rVarArr) {
        this(z10, false, rVarArr);
    }

    public a0(boolean z10, boolean z11, r... rVarArr) {
        this(z10, z11, new i(), rVarArr);
    }

    public a0(boolean z10, boolean z11, h hVar, r... rVarArr) {
        this.f47378v = z10;
        this.f47379w = z11;
        this.f47380x = rVarArr;
        this.A = hVar;
        this.f47382z = new ArrayList(Arrays.asList(rVarArr));
        this.D = -1;
        this.f47381y = new Timeline[rVarArr.length];
        this.E = new long[0];
        this.B = new HashMap();
        this.C = ji.c0.a().a().e();
    }
}
