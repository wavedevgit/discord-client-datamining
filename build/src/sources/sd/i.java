package sd;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.upstream.i;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import lc.t0;
import lc.x;
import ne.w0;
import qd.l0;
import qd.m0;
import qd.n0;
import qd.y;
import rc.u;
import rc.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i implements m0, n0, i.b, i.f {
    private f A;
    private Format B;
    private b C;
    private long D;
    private long E;
    private int F;
    private sd.a G;
    boolean H;

    /* renamed from: d  reason: collision with root package name */
    public final int f49575d;

    /* renamed from: e  reason: collision with root package name */
    private final int[] f49576e;

    /* renamed from: i  reason: collision with root package name */
    private final Format[] f49577i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean[] f49578o;

    /* renamed from: p  reason: collision with root package name */
    private final j f49579p;

    /* renamed from: q  reason: collision with root package name */
    private final n0.a f49580q;

    /* renamed from: r  reason: collision with root package name */
    private final y.a f49581r;

    /* renamed from: s  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f49582s;

    /* renamed from: t  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f49583t;

    /* renamed from: u  reason: collision with root package name */
    private final h f49584u;

    /* renamed from: v  reason: collision with root package name */
    private final ArrayList f49585v;

    /* renamed from: w  reason: collision with root package name */
    private final List f49586w;

    /* renamed from: x  reason: collision with root package name */
    private final l0 f49587x;

    /* renamed from: y  reason: collision with root package name */
    private final l0[] f49588y;

    /* renamed from: z  reason: collision with root package name */
    private final c f49589z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a(i iVar);
    }

    public i(int i10, int[] iArr, Format[] formatArr, j jVar, n0.a aVar, le.b bVar, long j10, v vVar, u.a aVar2, com.google.android.exoplayer2.upstream.h hVar, y.a aVar3) {
        this.f49575d = i10;
        int i11 = 0;
        iArr = iArr == null ? new int[0] : iArr;
        this.f49576e = iArr;
        this.f49577i = formatArr == null ? new Format[0] : formatArr;
        this.f49579p = jVar;
        this.f49580q = aVar;
        this.f49581r = aVar3;
        this.f49582s = hVar;
        this.f49583t = new com.google.android.exoplayer2.upstream.i("ChunkSampleStream");
        this.f49584u = new h();
        ArrayList arrayList = new ArrayList();
        this.f49585v = arrayList;
        this.f49586w = Collections.unmodifiableList(arrayList);
        int length = iArr.length;
        this.f49588y = new l0[length];
        this.f49578o = new boolean[length];
        int i12 = length + 1;
        int[] iArr2 = new int[i12];
        l0[] l0VarArr = new l0[i12];
        l0 k10 = l0.k(bVar, vVar, aVar2);
        this.f49587x = k10;
        iArr2[0] = i10;
        l0VarArr[0] = k10;
        while (i11 < length) {
            l0 l10 = l0.l(bVar);
            this.f49588y[i11] = l10;
            int i13 = i11 + 1;
            l0VarArr[i13] = l10;
            iArr2[i13] = this.f49576e[i11];
            i11 = i13;
        }
        this.f49589z = new c(iArr2, l0VarArr);
        this.D = j10;
        this.E = j10;
    }

    private void A(int i10) {
        int min = Math.min(N(i10, 0), this.F);
        if (min > 0) {
            w0.V0(this.f49585v, 0, min);
            this.F -= min;
        }
    }

    private void B(int i10) {
        ne.a.g(!this.f49583t.j());
        int size = this.f49585v.size();
        while (true) {
            if (i10 < size) {
                if (!F(i10)) {
                    break;
                }
                i10++;
            } else {
                i10 = -1;
                break;
            }
        }
        if (i10 == -1) {
            return;
        }
        long j10 = E().f49571h;
        sd.a C = C(i10);
        if (this.f49585v.isEmpty()) {
            this.D = this.E;
        }
        this.H = false;
        this.f49581r.w(this.f49575d, C.f49570g, j10);
    }

    private sd.a C(int i10) {
        sd.a aVar = (sd.a) this.f49585v.get(i10);
        ArrayList arrayList = this.f49585v;
        w0.V0(arrayList, i10, arrayList.size());
        this.F = Math.max(this.F, this.f49585v.size());
        int i11 = 0;
        this.f49587x.u(aVar.i(0));
        while (true) {
            l0[] l0VarArr = this.f49588y;
            if (i11 < l0VarArr.length) {
                l0 l0Var = l0VarArr[i11];
                i11++;
                l0Var.u(aVar.i(i11));
            } else {
                return aVar;
            }
        }
    }

    private sd.a E() {
        ArrayList arrayList = this.f49585v;
        return (sd.a) arrayList.get(arrayList.size() - 1);
    }

    private boolean F(int i10) {
        int C;
        sd.a aVar = (sd.a) this.f49585v.get(i10);
        if (this.f49587x.C() > aVar.i(0)) {
            return true;
        }
        int i11 = 0;
        do {
            l0[] l0VarArr = this.f49588y;
            if (i11 >= l0VarArr.length) {
                return false;
            }
            C = l0VarArr[i11].C();
            i11++;
        } while (C <= aVar.i(i11));
        return true;
    }

    private boolean G(f fVar) {
        return fVar instanceof sd.a;
    }

    private void I() {
        int N = N(this.f49587x.C(), this.F - 1);
        while (true) {
            int i10 = this.F;
            if (i10 <= N) {
                this.F = i10 + 1;
                J(i10);
            } else {
                return;
            }
        }
    }

    private void J(int i10) {
        sd.a aVar = (sd.a) this.f49585v.get(i10);
        Format format = aVar.f49567d;
        if (!format.equals(this.B)) {
            this.f49581r.h(this.f49575d, format, aVar.f49568e, aVar.f49569f, aVar.f49570g);
        }
        this.B = format;
    }

    private int N(int i10, int i11) {
        do {
            i11++;
            if (i11 >= this.f49585v.size()) {
                return this.f49585v.size() - 1;
            }
        } while (((sd.a) this.f49585v.get(i11)).i(0) <= i10);
        return i11 - 1;
    }

    private void Q() {
        this.f49587x.U();
        for (l0 l0Var : this.f49588y) {
            l0Var.U();
        }
    }

    public j D() {
        return this.f49579p;
    }

    boolean H() {
        if (this.D != -9223372036854775807L) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: K */
    public void i(f fVar, long j10, long j11, boolean z10) {
        this.A = null;
        this.G = null;
        LoadEventInfo loadEventInfo = new LoadEventInfo(fVar.f49564a, fVar.f49565b, fVar.f(), fVar.e(), j10, j11, fVar.a());
        this.f49582s.d(fVar.f49564a);
        this.f49581r.k(loadEventInfo, fVar.f49566c, this.f49575d, fVar.f49567d, fVar.f49568e, fVar.f49569f, fVar.f49570g, fVar.f49571h);
        if (!z10) {
            if (H()) {
                Q();
            } else if (G(fVar)) {
                C(this.f49585v.size() - 1);
                if (this.f49585v.isEmpty()) {
                    this.D = this.E;
                }
            }
            this.f49580q.i(this);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: L */
    public void j(f fVar, long j10, long j11) {
        this.A = null;
        this.f49579p.h(fVar);
        LoadEventInfo loadEventInfo = new LoadEventInfo(fVar.f49564a, fVar.f49565b, fVar.f(), fVar.e(), j10, j11, fVar.a());
        this.f49582s.d(fVar.f49564a);
        this.f49581r.n(loadEventInfo, fVar.f49566c, this.f49575d, fVar.f49567d, fVar.f49568e, fVar.f49569f, fVar.f49570g, fVar.f49571h);
        this.f49580q.i(this);
    }

    /* JADX WARN: Removed duplicated region for block: B:25:0x009e  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x00e4  */
    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: M */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public com.google.android.exoplayer2.upstream.i.c n(sd.f r30, long r31, long r33, java.io.IOException r35, int r36) {
        /*
            Method dump skipped, instructions count: 244
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: sd.i.n(sd.f, long, long, java.io.IOException, int):com.google.android.exoplayer2.upstream.i$c");
    }

    public void O() {
        P(null);
    }

    public void P(b bVar) {
        this.C = bVar;
        this.f49587x.Q();
        for (l0 l0Var : this.f49588y) {
            l0Var.Q();
        }
        this.f49583t.m(this);
    }

    public void R(long j10) {
        sd.a aVar;
        boolean z10;
        boolean Y;
        this.E = j10;
        if (H()) {
            this.D = j10;
            return;
        }
        int i10 = 0;
        for (int i11 = 0; i11 < this.f49585v.size(); i11++) {
            aVar = (sd.a) this.f49585v.get(i11);
            int i12 = (aVar.f49570g > j10 ? 1 : (aVar.f49570g == j10 ? 0 : -1));
            if (i12 == 0 && aVar.f49537k == -9223372036854775807L) {
                break;
            } else if (i12 > 0) {
                break;
            }
        }
        aVar = null;
        if (aVar != null) {
            Y = this.f49587x.X(aVar.i(0));
        } else {
            l0 l0Var = this.f49587x;
            if (j10 < b()) {
                z10 = true;
            } else {
                z10 = false;
            }
            Y = l0Var.Y(j10, z10);
        }
        if (Y) {
            this.F = N(this.f49587x.C(), 0);
            l0[] l0VarArr = this.f49588y;
            int length = l0VarArr.length;
            while (i10 < length) {
                l0VarArr[i10].Y(j10, true);
                i10++;
            }
            return;
        }
        this.D = j10;
        this.H = false;
        this.f49585v.clear();
        this.F = 0;
        if (this.f49583t.j()) {
            this.f49587x.r();
            l0[] l0VarArr2 = this.f49588y;
            int length2 = l0VarArr2.length;
            while (i10 < length2) {
                l0VarArr2[i10].r();
                i10++;
            }
            this.f49583t.f();
            return;
        }
        this.f49583t.g();
        Q();
    }

    public a S(long j10, int i10) {
        for (int i11 = 0; i11 < this.f49588y.length; i11++) {
            if (this.f49576e[i11] == i10) {
                ne.a.g(!this.f49578o[i11]);
                this.f49578o[i11] = true;
                this.f49588y[i11].Y(j10, true);
                return new a(this, this.f49588y[i11], i11);
            }
        }
        throw new IllegalStateException();
    }

    @Override // qd.m0
    public void a() {
        this.f49583t.a();
        this.f49587x.M();
        if (!this.f49583t.j()) {
            this.f49579p.a();
        }
    }

    @Override // qd.n0
    public long b() {
        if (H()) {
            return this.D;
        }
        if (this.H) {
            return Long.MIN_VALUE;
        }
        return E().f49571h;
    }

    @Override // qd.m0
    public int c(x xVar, qc.f fVar, int i10) {
        if (H()) {
            return -3;
        }
        sd.a aVar = this.G;
        if (aVar != null && aVar.i(0) <= this.f49587x.C()) {
            return -3;
        }
        I();
        return this.f49587x.R(xVar, fVar, i10, this.H);
    }

    @Override // qd.n0
    public boolean d() {
        return this.f49583t.j();
    }

    public long e(long j10, t0 t0Var) {
        return this.f49579p.e(j10, t0Var);
    }

    @Override // qd.n0
    public boolean f(long j10) {
        List list;
        long j11;
        if (this.H || this.f49583t.j() || this.f49583t.i()) {
            return false;
        }
        boolean H = H();
        if (H) {
            list = Collections.EMPTY_LIST;
            j11 = this.D;
        } else {
            list = this.f49586w;
            j11 = E().f49571h;
        }
        this.f49579p.d(j10, j11, list, this.f49584u);
        h hVar = this.f49584u;
        boolean z10 = hVar.f49574b;
        f fVar = hVar.f49573a;
        hVar.a();
        if (z10) {
            this.D = -9223372036854775807L;
            this.H = true;
            return true;
        } else if (fVar == null) {
            return false;
        } else {
            this.A = fVar;
            if (G(fVar)) {
                sd.a aVar = (sd.a) fVar;
                if (H) {
                    long j12 = aVar.f49570g;
                    long j13 = this.D;
                    if (j12 != j13) {
                        this.f49587x.a0(j13);
                        for (l0 l0Var : this.f49588y) {
                            l0Var.a0(this.D);
                        }
                    }
                    this.D = -9223372036854775807L;
                }
                aVar.k(this.f49589z);
                this.f49585v.add(aVar);
            } else if (fVar instanceof m) {
                ((m) fVar).g(this.f49589z);
            }
            this.f49581r.t(new LoadEventInfo(fVar.f49564a, fVar.f49565b, this.f49583t.n(fVar, this, this.f49582s.b(fVar.f49566c))), fVar.f49566c, this.f49575d, fVar.f49567d, fVar.f49568e, fVar.f49569f, fVar.f49570g, fVar.f49571h);
            return true;
        }
    }

    @Override // qd.n0
    public long g() {
        if (this.H) {
            return Long.MIN_VALUE;
        }
        if (H()) {
            return this.D;
        }
        long j10 = this.E;
        sd.a E = E();
        if (!E.h()) {
            if (this.f49585v.size() > 1) {
                ArrayList arrayList = this.f49585v;
                E = (sd.a) arrayList.get(arrayList.size() - 2);
            } else {
                E = null;
            }
        }
        if (E != null) {
            j10 = Math.max(j10, E.f49571h);
        }
        return Math.max(j10, this.f49587x.z());
    }

    @Override // qd.n0
    public void h(long j10) {
        if (!this.f49583t.i() && !H()) {
            if (this.f49583t.j()) {
                f fVar = (f) ne.a.e(this.A);
                if ((!G(fVar) || !F(this.f49585v.size() - 1)) && this.f49579p.g(j10, fVar, this.f49586w)) {
                    this.f49583t.f();
                    if (G(fVar)) {
                        this.G = (sd.a) fVar;
                        return;
                    }
                    return;
                }
                return;
            }
            int j11 = this.f49579p.j(j10, this.f49586w);
            if (j11 < this.f49585v.size()) {
                B(j11);
            }
        }
    }

    @Override // qd.m0
    public boolean isReady() {
        if (!H() && this.f49587x.K(this.H)) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.upstream.i.f
    public void p() {
        this.f49587x.S();
        for (l0 l0Var : this.f49588y) {
            l0Var.S();
        }
        this.f49579p.release();
        b bVar = this.C;
        if (bVar != null) {
            bVar.a(this);
        }
    }

    @Override // qd.m0
    public int q(long j10) {
        if (H()) {
            return 0;
        }
        int E = this.f49587x.E(j10, this.H);
        sd.a aVar = this.G;
        if (aVar != null) {
            E = Math.min(E, aVar.i(0) - this.f49587x.C());
        }
        this.f49587x.d0(E);
        I();
        return E;
    }

    public void u(long j10, boolean z10) {
        if (H()) {
            return;
        }
        int x10 = this.f49587x.x();
        this.f49587x.q(j10, z10, true);
        int x11 = this.f49587x.x();
        if (x11 > x10) {
            long y10 = this.f49587x.y();
            int i10 = 0;
            while (true) {
                l0[] l0VarArr = this.f49588y;
                if (i10 >= l0VarArr.length) {
                    break;
                }
                l0VarArr[i10].q(y10, z10, this.f49578o[i10]);
                i10++;
            }
        }
        A(x11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a implements m0 {

        /* renamed from: d  reason: collision with root package name */
        public final i f49590d;

        /* renamed from: e  reason: collision with root package name */
        private final l0 f49591e;

        /* renamed from: i  reason: collision with root package name */
        private final int f49592i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f49593o;

        public a(i iVar, l0 l0Var, int i10) {
            this.f49590d = iVar;
            this.f49591e = l0Var;
            this.f49592i = i10;
        }

        private void b() {
            if (!this.f49593o) {
                i.this.f49581r.h(i.this.f49576e[this.f49592i], i.this.f49577i[this.f49592i], 0, null, i.this.E);
                this.f49593o = true;
            }
        }

        @Override // qd.m0
        public int c(x xVar, qc.f fVar, int i10) {
            if (i.this.H()) {
                return -3;
            }
            if (i.this.G != null && i.this.G.i(this.f49592i + 1) <= this.f49591e.C()) {
                return -3;
            }
            b();
            return this.f49591e.R(xVar, fVar, i10, i.this.H);
        }

        public void d() {
            ne.a.g(i.this.f49578o[this.f49592i]);
            i.this.f49578o[this.f49592i] = false;
        }

        @Override // qd.m0
        public boolean isReady() {
            if (!i.this.H() && this.f49591e.K(i.this.H)) {
                return true;
            }
            return false;
        }

        @Override // qd.m0
        public int q(long j10) {
            if (i.this.H()) {
                return 0;
            }
            int E = this.f49591e.E(j10, i.this.H);
            if (i.this.G != null) {
                E = Math.min(E, i.this.G.i(this.f49592i + 1) - this.f49591e.C());
            }
            this.f49591e.d0(E);
            if (E > 0) {
                b();
            }
            return E;
        }

        @Override // qd.m0
        public void a() {
        }
    }
}
