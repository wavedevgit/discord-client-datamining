package td;

import com.google.android.exoplayer2.Format;
import com.google.android.exoplayer2.source.LoadEventInfo;
import com.google.android.exoplayer2.upstream.j;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import mc.t0;
import mc.x;
import oe.w0;
import rd.l0;
import rd.m0;
import rd.n0;
import rd.y;
import sc.u;
import sc.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class i implements m0, n0, j.b, j.f {
    private f A;
    private Format B;
    private b C;
    private long D;
    private long E;
    private int F;
    private td.a G;
    boolean H;

    /* renamed from: d  reason: collision with root package name */
    public final int f50785d;

    /* renamed from: e  reason: collision with root package name */
    private final int[] f50786e;

    /* renamed from: i  reason: collision with root package name */
    private final Format[] f50787i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean[] f50788o;

    /* renamed from: p  reason: collision with root package name */
    private final j f50789p;

    /* renamed from: q  reason: collision with root package name */
    private final n0.a f50790q;

    /* renamed from: r  reason: collision with root package name */
    private final y.a f50791r;

    /* renamed from: s  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.i f50792s;

    /* renamed from: t  reason: collision with root package name */
    private final com.google.android.exoplayer2.upstream.j f50793t;

    /* renamed from: u  reason: collision with root package name */
    private final h f50794u;

    /* renamed from: v  reason: collision with root package name */
    private final ArrayList f50795v;

    /* renamed from: w  reason: collision with root package name */
    private final List f50796w;

    /* renamed from: x  reason: collision with root package name */
    private final l0 f50797x;

    /* renamed from: y  reason: collision with root package name */
    private final l0[] f50798y;

    /* renamed from: z  reason: collision with root package name */
    private final c f50799z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a(i iVar);
    }

    public i(int i10, int[] iArr, Format[] formatArr, j jVar, n0.a aVar, me.b bVar, long j10, v vVar, u.a aVar2, com.google.android.exoplayer2.upstream.i iVar, y.a aVar3) {
        this.f50785d = i10;
        int i11 = 0;
        iArr = iArr == null ? new int[0] : iArr;
        this.f50786e = iArr;
        this.f50787i = formatArr == null ? new Format[0] : formatArr;
        this.f50789p = jVar;
        this.f50790q = aVar;
        this.f50791r = aVar3;
        this.f50792s = iVar;
        this.f50793t = new com.google.android.exoplayer2.upstream.j("ChunkSampleStream");
        this.f50794u = new h();
        ArrayList arrayList = new ArrayList();
        this.f50795v = arrayList;
        this.f50796w = Collections.unmodifiableList(arrayList);
        int length = iArr.length;
        this.f50798y = new l0[length];
        this.f50788o = new boolean[length];
        int i12 = length + 1;
        int[] iArr2 = new int[i12];
        l0[] l0VarArr = new l0[i12];
        l0 k10 = l0.k(bVar, vVar, aVar2);
        this.f50797x = k10;
        iArr2[0] = i10;
        l0VarArr[0] = k10;
        while (i11 < length) {
            l0 l10 = l0.l(bVar);
            this.f50798y[i11] = l10;
            int i13 = i11 + 1;
            l0VarArr[i13] = l10;
            iArr2[i13] = this.f50786e[i11];
            i11 = i13;
        }
        this.f50799z = new c(iArr2, l0VarArr);
        this.D = j10;
        this.E = j10;
    }

    private void A(int i10) {
        int min = Math.min(N(i10, 0), this.F);
        if (min > 0) {
            w0.V0(this.f50795v, 0, min);
            this.F -= min;
        }
    }

    private void B(int i10) {
        oe.a.g(!this.f50793t.j());
        int size = this.f50795v.size();
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
        long j10 = E().f50781h;
        td.a C = C(i10);
        if (this.f50795v.isEmpty()) {
            this.D = this.E;
        }
        this.H = false;
        this.f50791r.w(this.f50785d, C.f50780g, j10);
    }

    private td.a C(int i10) {
        td.a aVar = (td.a) this.f50795v.get(i10);
        ArrayList arrayList = this.f50795v;
        w0.V0(arrayList, i10, arrayList.size());
        this.F = Math.max(this.F, this.f50795v.size());
        int i11 = 0;
        this.f50797x.u(aVar.i(0));
        while (true) {
            l0[] l0VarArr = this.f50798y;
            if (i11 < l0VarArr.length) {
                l0 l0Var = l0VarArr[i11];
                i11++;
                l0Var.u(aVar.i(i11));
            } else {
                return aVar;
            }
        }
    }

    private td.a E() {
        ArrayList arrayList = this.f50795v;
        return (td.a) arrayList.get(arrayList.size() - 1);
    }

    private boolean F(int i10) {
        int C;
        td.a aVar = (td.a) this.f50795v.get(i10);
        if (this.f50797x.C() > aVar.i(0)) {
            return true;
        }
        int i11 = 0;
        do {
            l0[] l0VarArr = this.f50798y;
            if (i11 >= l0VarArr.length) {
                return false;
            }
            C = l0VarArr[i11].C();
            i11++;
        } while (C <= aVar.i(i11));
        return true;
    }

    private boolean G(f fVar) {
        return fVar instanceof td.a;
    }

    private void I() {
        int N = N(this.f50797x.C(), this.F - 1);
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
        td.a aVar = (td.a) this.f50795v.get(i10);
        Format format = aVar.f50777d;
        if (!format.equals(this.B)) {
            this.f50791r.h(this.f50785d, format, aVar.f50778e, aVar.f50779f, aVar.f50780g);
        }
        this.B = format;
    }

    private int N(int i10, int i11) {
        do {
            i11++;
            if (i11 >= this.f50795v.size()) {
                return this.f50795v.size() - 1;
            }
        } while (((td.a) this.f50795v.get(i11)).i(0) <= i10);
        return i11 - 1;
    }

    private void Q() {
        this.f50797x.U();
        for (l0 l0Var : this.f50798y) {
            l0Var.U();
        }
    }

    public j D() {
        return this.f50789p;
    }

    boolean H() {
        if (this.D != -9223372036854775807L) {
            return true;
        }
        return false;
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: K */
    public void i(f fVar, long j10, long j11, boolean z10) {
        this.A = null;
        this.G = null;
        LoadEventInfo loadEventInfo = new LoadEventInfo(fVar.f50774a, fVar.f50775b, fVar.f(), fVar.e(), j10, j11, fVar.b());
        this.f50792s.d(fVar.f50774a);
        this.f50791r.k(loadEventInfo, fVar.f50776c, this.f50785d, fVar.f50777d, fVar.f50778e, fVar.f50779f, fVar.f50780g, fVar.f50781h);
        if (!z10) {
            if (H()) {
                Q();
            } else if (G(fVar)) {
                C(this.f50795v.size() - 1);
                if (this.f50795v.isEmpty()) {
                    this.D = this.E;
                }
            }
            this.f50790q.i(this);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: L */
    public void k(f fVar, long j10, long j11) {
        this.A = null;
        this.f50789p.g(fVar);
        LoadEventInfo loadEventInfo = new LoadEventInfo(fVar.f50774a, fVar.f50775b, fVar.f(), fVar.e(), j10, j11, fVar.b());
        this.f50792s.d(fVar.f50774a);
        this.f50791r.n(loadEventInfo, fVar.f50776c, this.f50785d, fVar.f50777d, fVar.f50778e, fVar.f50779f, fVar.f50780g, fVar.f50781h);
        this.f50790q.i(this);
    }

    /* JADX WARN: Removed duplicated region for block: B:25:0x009e  */
    /* JADX WARN: Removed duplicated region for block: B:31:0x00e4  */
    @Override // com.google.android.exoplayer2.upstream.j.b
    /* renamed from: M */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public com.google.android.exoplayer2.upstream.j.c n(td.f r30, long r31, long r33, java.io.IOException r35, int r36) {
        /*
            Method dump skipped, instructions count: 244
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: td.i.n(td.f, long, long, java.io.IOException, int):com.google.android.exoplayer2.upstream.j$c");
    }

    public void O() {
        P(null);
    }

    public void P(b bVar) {
        this.C = bVar;
        this.f50797x.Q();
        for (l0 l0Var : this.f50798y) {
            l0Var.Q();
        }
        this.f50793t.m(this);
    }

    public void R(long j10) {
        td.a aVar;
        boolean z10;
        boolean Y;
        this.E = j10;
        if (H()) {
            this.D = j10;
            return;
        }
        int i10 = 0;
        for (int i11 = 0; i11 < this.f50795v.size(); i11++) {
            aVar = (td.a) this.f50795v.get(i11);
            int i12 = (aVar.f50780g > j10 ? 1 : (aVar.f50780g == j10 ? 0 : -1));
            if (i12 == 0 && aVar.f50747k == -9223372036854775807L) {
                break;
            } else if (i12 > 0) {
                break;
            }
        }
        aVar = null;
        if (aVar != null) {
            Y = this.f50797x.X(aVar.i(0));
        } else {
            l0 l0Var = this.f50797x;
            if (j10 < b()) {
                z10 = true;
            } else {
                z10 = false;
            }
            Y = l0Var.Y(j10, z10);
        }
        if (Y) {
            this.F = N(this.f50797x.C(), 0);
            l0[] l0VarArr = this.f50798y;
            int length = l0VarArr.length;
            while (i10 < length) {
                l0VarArr[i10].Y(j10, true);
                i10++;
            }
            return;
        }
        this.D = j10;
        this.H = false;
        this.f50795v.clear();
        this.F = 0;
        if (this.f50793t.j()) {
            this.f50797x.r();
            l0[] l0VarArr2 = this.f50798y;
            int length2 = l0VarArr2.length;
            while (i10 < length2) {
                l0VarArr2[i10].r();
                i10++;
            }
            this.f50793t.f();
            return;
        }
        this.f50793t.g();
        Q();
    }

    public a S(long j10, int i10) {
        for (int i11 = 0; i11 < this.f50798y.length; i11++) {
            if (this.f50786e[i11] == i10) {
                oe.a.g(!this.f50788o[i11]);
                this.f50788o[i11] = true;
                this.f50798y[i11].Y(j10, true);
                return new a(this, this.f50798y[i11], i11);
            }
        }
        throw new IllegalStateException();
    }

    @Override // rd.m0
    public void a() {
        this.f50793t.a();
        this.f50797x.M();
        if (!this.f50793t.j()) {
            this.f50789p.a();
        }
    }

    @Override // rd.n0
    public long b() {
        if (H()) {
            return this.D;
        }
        if (this.H) {
            return Long.MIN_VALUE;
        }
        return E().f50781h;
    }

    @Override // rd.m0
    public int c(x xVar, rc.f fVar, int i10) {
        if (H()) {
            return -3;
        }
        td.a aVar = this.G;
        if (aVar != null && aVar.i(0) <= this.f50797x.C()) {
            return -3;
        }
        I();
        return this.f50797x.R(xVar, fVar, i10, this.H);
    }

    @Override // rd.n0
    public boolean d() {
        return this.f50793t.j();
    }

    public long e(long j10, t0 t0Var) {
        return this.f50789p.e(j10, t0Var);
    }

    @Override // rd.n0
    public boolean f(long j10) {
        List list;
        long j11;
        if (this.H || this.f50793t.j() || this.f50793t.i()) {
            return false;
        }
        boolean H = H();
        if (H) {
            list = Collections.EMPTY_LIST;
            j11 = this.D;
        } else {
            list = this.f50796w;
            j11 = E().f50781h;
        }
        this.f50789p.j(j10, j11, list, this.f50794u);
        h hVar = this.f50794u;
        boolean z10 = hVar.f50784b;
        f fVar = hVar.f50783a;
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
                td.a aVar = (td.a) fVar;
                if (H) {
                    long j12 = aVar.f50780g;
                    long j13 = this.D;
                    if (j12 != j13) {
                        this.f50797x.a0(j13);
                        for (l0 l0Var : this.f50798y) {
                            l0Var.a0(this.D);
                        }
                    }
                    this.D = -9223372036854775807L;
                }
                aVar.k(this.f50799z);
                this.f50795v.add(aVar);
            } else if (fVar instanceof m) {
                ((m) fVar).g(this.f50799z);
            }
            this.f50791r.t(new LoadEventInfo(fVar.f50774a, fVar.f50775b, this.f50793t.n(fVar, this, this.f50792s.b(fVar.f50776c))), fVar.f50776c, this.f50785d, fVar.f50777d, fVar.f50778e, fVar.f50779f, fVar.f50780g, fVar.f50781h);
            return true;
        }
    }

    @Override // rd.n0
    public long g() {
        if (this.H) {
            return Long.MIN_VALUE;
        }
        if (H()) {
            return this.D;
        }
        long j10 = this.E;
        td.a E = E();
        if (!E.h()) {
            if (this.f50795v.size() > 1) {
                ArrayList arrayList = this.f50795v;
                E = (td.a) arrayList.get(arrayList.size() - 2);
            } else {
                E = null;
            }
        }
        if (E != null) {
            j10 = Math.max(j10, E.f50781h);
        }
        return Math.max(j10, this.f50797x.z());
    }

    @Override // rd.n0
    public void h(long j10) {
        if (!this.f50793t.i() && !H()) {
            if (this.f50793t.j()) {
                f fVar = (f) oe.a.e(this.A);
                if ((!G(fVar) || !F(this.f50795v.size() - 1)) && this.f50789p.i(j10, fVar, this.f50796w)) {
                    this.f50793t.f();
                    if (G(fVar)) {
                        this.G = (td.a) fVar;
                        return;
                    }
                    return;
                }
                return;
            }
            int h10 = this.f50789p.h(j10, this.f50796w);
            if (h10 < this.f50795v.size()) {
                B(h10);
            }
        }
    }

    @Override // rd.m0
    public boolean isReady() {
        if (!H() && this.f50797x.K(this.H)) {
            return true;
        }
        return false;
    }

    @Override // rd.m0
    public int j(long j10) {
        if (H()) {
            return 0;
        }
        int E = this.f50797x.E(j10, this.H);
        td.a aVar = this.G;
        if (aVar != null) {
            E = Math.min(E, aVar.i(0) - this.f50797x.C());
        }
        this.f50797x.d0(E);
        I();
        return E;
    }

    @Override // com.google.android.exoplayer2.upstream.j.f
    public void o() {
        this.f50797x.S();
        for (l0 l0Var : this.f50798y) {
            l0Var.S();
        }
        this.f50789p.release();
        b bVar = this.C;
        if (bVar != null) {
            bVar.a(this);
        }
    }

    public void t(long j10, boolean z10) {
        if (H()) {
            return;
        }
        int x10 = this.f50797x.x();
        this.f50797x.q(j10, z10, true);
        int x11 = this.f50797x.x();
        if (x11 > x10) {
            long y10 = this.f50797x.y();
            int i10 = 0;
            while (true) {
                l0[] l0VarArr = this.f50798y;
                if (i10 >= l0VarArr.length) {
                    break;
                }
                l0VarArr[i10].q(y10, z10, this.f50788o[i10]);
                i10++;
            }
        }
        A(x11);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public final class a implements m0 {

        /* renamed from: d  reason: collision with root package name */
        public final i f50800d;

        /* renamed from: e  reason: collision with root package name */
        private final l0 f50801e;

        /* renamed from: i  reason: collision with root package name */
        private final int f50802i;

        /* renamed from: o  reason: collision with root package name */
        private boolean f50803o;

        public a(i iVar, l0 l0Var, int i10) {
            this.f50800d = iVar;
            this.f50801e = l0Var;
            this.f50802i = i10;
        }

        private void b() {
            if (!this.f50803o) {
                i.this.f50791r.h(i.this.f50786e[this.f50802i], i.this.f50787i[this.f50802i], 0, null, i.this.E);
                this.f50803o = true;
            }
        }

        @Override // rd.m0
        public int c(x xVar, rc.f fVar, int i10) {
            if (i.this.H()) {
                return -3;
            }
            if (i.this.G != null && i.this.G.i(this.f50802i + 1) <= this.f50801e.C()) {
                return -3;
            }
            b();
            return this.f50801e.R(xVar, fVar, i10, i.this.H);
        }

        public void d() {
            oe.a.g(i.this.f50788o[this.f50802i]);
            i.this.f50788o[this.f50802i] = false;
        }

        @Override // rd.m0
        public boolean isReady() {
            if (!i.this.H() && this.f50801e.K(i.this.H)) {
                return true;
            }
            return false;
        }

        @Override // rd.m0
        public int j(long j10) {
            if (i.this.H()) {
                return 0;
            }
            int E = this.f50801e.E(j10, i.this.H);
            if (i.this.G != null) {
                E = Math.min(E, i.this.G.i(this.f50802i + 1) - this.f50801e.C());
            }
            this.f50801e.d0(E);
            if (E > 0) {
                b();
            }
            return E;
        }

        @Override // rd.m0
        public void a() {
        }
    }
}
