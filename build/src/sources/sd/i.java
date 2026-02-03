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
    public final int f49019d;

    /* renamed from: e  reason: collision with root package name */
    private final int[] f49020e;

    /* renamed from: i  reason: collision with root package name */
    private final Format[] f49021i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean[] f49022o;

    /* renamed from: p  reason: collision with root package name */
    private final j f49023p;

    /* renamed from: q  reason: collision with root package name */
    private final n0.a f49024q;

    /* renamed from: r  reason: collision with root package name */
    private final y.a f49025r;

    /* renamed from: s  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.h f49026s;

    /* renamed from: t  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f49027t;

    /* renamed from: u  reason: collision with root package name */
    private final h f49028u;

    /* renamed from: v  reason: collision with root package name */
    private final ArrayList f49029v;

    /* renamed from: w  reason: collision with root package name */
    private final List f49030w;

    /* renamed from: x  reason: collision with root package name */
    private final l0 f49031x;

    /* renamed from: y  reason: collision with root package name */
    private final l0[] f49032y;

    /* renamed from: z  reason: collision with root package name */
    private final c f49033z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a(i iVar);
    }

    public i(int i10, int[] iArr, Format[] formatArr, j jVar, n0.a aVar, le.b bVar, long j10, v vVar, u.a aVar2, com.google.android.exoplayer2.upstream.h hVar, y.a aVar3) {
        this.f49019d = i10;
        int i11 = 0;
        iArr = iArr == null ? new int[0] : iArr;
        this.f49020e = iArr;
        this.f49021i = formatArr == null ? new Format[0] : formatArr;
        this.f49023p = jVar;
        this.f49024q = aVar;
        this.f49025r = aVar3;
        this.f49026s = hVar;
        this.f49027t = new com.google.android.exoplayer2.upstream.i("ChunkSampleStream");
        this.f49028u = new h();
        ArrayList arrayList = new ArrayList();
        this.f49029v = arrayList;
        this.f49030w = Collections.unmodifiableList(arrayList);
        int length = iArr.length;
        this.f49032y = new l0[length];
        this.f49022o = new boolean[length];
        int i12 = length + 1;
        int[] iArr2 = new int[i12];
        l0[] l0VarArr = new l0[i12];
        l0 k10 = l0.k(bVar, vVar, aVar2);
        this.f49031x = k10;
        iArr2[0] = i10;
        l0VarArr[0] = k10;
        while (i11 < length) {
            l0 l10 = l0.l(bVar);
            this.f49032y[i11] = l10;
            int i13 = i11 + 1;
            l0VarArr[i13] = l10;
            iArr2[i13] = this.f49020e[i11];
            i11 = i13;
        }
        this.f49033z = new c(iArr2, l0VarArr);
        this.D = j10;
        this.E = j10;
    }

    private void A(int i10) {
        int min = Math.min(N(i10, 0), this.F);
        if (min > 0) {
            w0.V0(this.f49029v, 0, min);
            this.F -= min;
        }
    }

    private void B(int i10) {
        ne.a.g(!this.f49027t.j());
        int size = this.f49029v.size();
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
        long j10 = E().f49015h;
        sd.a C = C(i10);
        if (this.f49029v.isEmpty()) {
            this.D = this.E;
        }
        this.H = false;
        this.f49025r.w(this.f49019d, C.f49014g, j10);
    }

    private sd.a C(int i10) {
        sd.a aVar = (sd.a) this.f49029v.get(i10);
        ArrayList arrayList = this.f49029v;
        w0.V0(arrayList, i10, arrayList.size());
        this.F = Math.max(this.F, this.f49029v.size());
        int i11 = 0;
        this.f49031x.u(aVar.i(0));
        while (true) {
            l0[] l0VarArr = this.f49032y;
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
        ArrayList arrayList = this.f49029v;
        return (sd.a) arrayList.get(arrayList.size() - 1);
    }

    private boolean F(int i10) {
        int C;
        sd.a aVar = (sd.a) this.f49029v.get(i10);
        if (this.f49031x.C() > aVar.i(0)) {
            return true;
        }
        int i11 = 0;
        do {
            l0[] l0VarArr = this.f49032y;
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
        int N = N(this.f49031x.C(), this.F - 1);
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
        sd.a aVar = (sd.a) this.f49029v.get(i10);
        Format format = aVar.f49011d;
        if (!format.equals(this.B)) {
            this.f49025r.h(this.f49019d, format, aVar.f49012e, aVar.f49013f, aVar.f49014g);
        }
        this.B = format;
    }

    private int N(int i10, int i11) {
        do {
            i11++;
            if (i11 >= this.f49029v.size()) {
                return this.f49029v.size() - 1;
            }
        } while (((sd.a) this.f49029v.get(i11)).i(0) <= i10);
        return i11 - 1;
    }

    private void Q() {
        this.f49031x.U();
        for (l0 l0Var : this.f49032y) {
            l0Var.U();
        }
    }

    public j D() {
        return this.f49023p;
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
        LoadEventInfo loadEventInfo = new LoadEventInfo(fVar.f49008a, fVar.f49009b, fVar.f(), fVar.e(), j10, j11, fVar.a());
        this.f49026s.d(fVar.f49008a);
        this.f49025r.k(loadEventInfo, fVar.f49010c, this.f49019d, fVar.f49011d, fVar.f49012e, fVar.f49013f, fVar.f49014g, fVar.f49015h);
        if (!z10) {
            if (H()) {
                Q();
            } else if (G(fVar)) {
                C(this.f49029v.size() - 1);
                if (this.f49029v.isEmpty()) {
                    this.D = this.E;
                }
            }
            this.f49024q.i(this);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.i.b
    /* renamed from: L */
    public void j(f fVar, long j10, long j11) {
        this.A = null;
        this.f49023p.h(fVar);
        LoadEventInfo loadEventInfo = new LoadEventInfo(fVar.f49008a, fVar.f49009b, fVar.f(), fVar.e(), j10, j11, fVar.a());
        this.f49026s.d(fVar.f49008a);
        this.f49025r.n(loadEventInfo, fVar.f49010c, this.f49019d, fVar.f49011d, fVar.f49012e, fVar.f49013f, fVar.f49014g, fVar.f49015h);
        this.f49024q.i(this);
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
        this.f49031x.Q();
        for (l0 l0Var : this.f49032y) {
            l0Var.Q();
        }
        this.f49027t.m(this);
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
        for (int i11 = 0; i11 < this.f49029v.size(); i11++) {
            aVar = (sd.a) this.f49029v.get(i11);
            int i12 = (aVar.f49014g > j10 ? 1 : (aVar.f49014g == j10 ? 0 : -1));
            if (i12 == 0 && aVar.f48981k == -9223372036854775807L) {
                break;
            } else if (i12 > 0) {
                break;
            }
        }
        aVar = null;
        if (aVar != null) {
            Y = this.f49031x.X(aVar.i(0));
        } else {
            l0 l0Var = this.f49031x;
            if (j10 < b()) {
                z10 = true;
            } else {
                z10 = false;
            }
            Y = l0Var.Y(j10, z10);
        }
        if (Y) {
            this.F = N(this.f49031x.C(), 0);
            l0[] l0VarArr = this.f49032y;
            int length = l0VarArr.length;
            while (i10 < length) {
                l0VarArr[i10].Y(j10, true);
                i10++;
            }
            return;
        }
        this.D = j10;
        this.H = false;
        this.f49029v.clear();
        this.F = 0;
        if (this.f49027t.j()) {
            this.f49031x.r();
            l0[] l0VarArr2 = this.f49032y;
            int length2 = l0VarArr2.length;
            while (i10 < length2) {
                l0VarArr2[i10].r();
                i10++;
            }
            this.f49027t.f();
            return;
        }
        this.f49027t.g();
        Q();
    }

    public a S(long j10, int i10) {
        for (int i11 = 0; i11 < this.f49032y.length; i11++) {
            if (this.f49020e[i11] == i10) {
                ne.a.g(!this.f49022o[i11]);
                this.f49022o[i11] = true;
                this.f49032y[i11].Y(j10, true);
                return new a(this, this.f49032y[i11], i11);
            }
        }
        throw new IllegalStateException();
    }

    @Override // qd.m0
    public void a() {
        this.f49027t.a();
        this.f49031x.M();
        if (!this.f49027t.j()) {
            this.f49023p.a();
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
        return E().f49015h;
    }

    @Override // qd.m0
    public int c(x xVar, qc.f fVar, int i10) {
        if (H()) {
            return -3;
        }
        sd.a aVar = this.G;
        if (aVar != null && aVar.i(0) <= this.f49031x.C()) {
            return -3;
        }
        I();
        return this.f49031x.R(xVar, fVar, i10, this.H);
    }

    @Override // qd.n0
    public boolean d() {
        return this.f49027t.j();
    }

    public long e(long j10, t0 t0Var) {
        return this.f49023p.e(j10, t0Var);
    }

    @Override // qd.n0
    public boolean f(long j10) {
        List list;
        long j11;
        if (this.H || this.f49027t.j() || this.f49027t.i()) {
            return false;
        }
        boolean H = H();
        if (H) {
            list = Collections.EMPTY_LIST;
            j11 = this.D;
        } else {
            list = this.f49030w;
            j11 = E().f49015h;
        }
        this.f49023p.d(j10, j11, list, this.f49028u);
        h hVar = this.f49028u;
        boolean z10 = hVar.f49018b;
        f fVar = hVar.f49017a;
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
                    long j12 = aVar.f49014g;
                    long j13 = this.D;
                    if (j12 != j13) {
                        this.f49031x.a0(j13);
                        for (l0 l0Var : this.f49032y) {
                            l0Var.a0(this.D);
                        }
                    }
                    this.D = -9223372036854775807L;
                }
                aVar.k(this.f49033z);
                this.f49029v.add(aVar);
            } else if (fVar instanceof m) {
                ((m) fVar).g(this.f49033z);
            }
            this.f49025r.t(new LoadEventInfo(fVar.f49008a, fVar.f49009b, this.f49027t.n(fVar, this, this.f49026s.b(fVar.f49010c))), fVar.f49010c, this.f49019d, fVar.f49011d, fVar.f49012e, fVar.f49013f, fVar.f49014g, fVar.f49015h);
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
            if (this.f49029v.size() > 1) {
                ArrayList arrayList = this.f49029v;
                E = (sd.a) arrayList.get(arrayList.size() - 2);
            } else {
                E = null;
            }
        }
        if (E != null) {
            j10 = Math.max(j10, E.f49015h);
        }
        return Math.max(j10, this.f49031x.z());
    }

    @Override // qd.n0
    public void h(long j10) {
        if (!this.f49027t.i() && !H()) {
            if (this.f49027t.j()) {
                f fVar = (f) ne.a.e(this.A);
                if ((!G(fVar) || !F(this.f49029v.size() - 1)) && this.f49023p.g(j10, fVar, this.f49030w)) {
                    this.f49027t.f();
                    if (G(fVar)) {
                        this.G = (sd.a) fVar;
                        return;
                    }
                    return;
                }
                return;
            }
            int j11 = this.f49023p.j(j10, this.f49030w);
            if (j11 < this.f49029v.size()) {
                B(j11);
            }
        }
    }

    @Override // qd.m0
    public boolean isReady() {
        if (!H() && this.f49031x.K(this.H)) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.upstream.i.f
    public void p() {
        this.f49031x.S();
        for (l0 l0Var : this.f49032y) {
            l0Var.S();
        }
        this.f49023p.release();
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
        int E = this.f49031x.E(j10, this.H);
        sd.a aVar = this.G;
        if (aVar != null) {
            E = Math.min(E, aVar.i(0) - this.f49031x.C());
        }
        this.f49031x.d0(E);
        I();
        return E;
    }

    public void u(long j10, boolean z10) {
        if (H()) {
            return;
        }
        int x10 = this.f49031x.x();
        this.f49031x.q(j10, z10, true);
        int x11 = this.f49031x.x();
        if (x11 > x10) {
            long y10 = this.f49031x.y();
            int i10 = 0;
            while (true) {
                l0[] l0VarArr = this.f49032y;
                if (i10 >= l0VarArr.length) {
                    break;
                }
                l0VarArr[i10].q(y10, z10, this.f49022o[i10]);
                i10++;
            }
        }
        A(x11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a implements m0 {

        /* renamed from: d  reason: collision with root package name */
        public final i f49034d;

        /* renamed from: e  reason: collision with root package name */
        private final l0 f49035e;

        /* renamed from: i  reason: collision with root package name */
        private final int f49036i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f49037o;

        public a(i iVar, l0 l0Var, int i10) {
            this.f49034d = iVar;
            this.f49035e = l0Var;
            this.f49036i = i10;
        }

        private void b() {
            if (!this.f49037o) {
                i.this.f49025r.h(i.this.f49020e[this.f49036i], i.this.f49021i[this.f49036i], 0, null, i.this.E);
                this.f49037o = true;
            }
        }

        @Override // qd.m0
        public int c(x xVar, qc.f fVar, int i10) {
            if (i.this.H()) {
                return -3;
            }
            if (i.this.G != null && i.this.G.i(this.f49036i + 1) <= this.f49035e.C()) {
                return -3;
            }
            b();
            return this.f49035e.R(xVar, fVar, i10, i.this.H);
        }

        public void d() {
            ne.a.g(i.this.f49022o[this.f49036i]);
            i.this.f49022o[this.f49036i] = false;
        }

        @Override // qd.m0
        public boolean isReady() {
            if (!i.this.H() && this.f49035e.K(i.this.H)) {
                return true;
            }
            return false;
        }

        @Override // qd.m0
        public int q(long j10) {
            if (i.this.H()) {
                return 0;
            }
            int E = this.f49035e.E(j10, i.this.H);
            if (i.this.G != null) {
                E = Math.min(E, i.this.G.i(this.f49036i + 1) - this.f49035e.C());
            }
            this.f49035e.d0(E);
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
