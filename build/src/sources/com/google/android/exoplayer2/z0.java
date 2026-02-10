package com.google.android.exoplayer2;

import android.util.Pair;
import com.google.android.exoplayer2.Timeline;
import kotlin.jvm.internal.LongCompanionObject;
import qi.s;
import rd.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z0 {

    /* renamed from: a  reason: collision with root package name */
    private final Timeline.b f14230a = new Timeline.b();

    /* renamed from: b  reason: collision with root package name */
    private final Timeline.d f14231b = new Timeline.d();

    /* renamed from: c  reason: collision with root package name */
    private final nc.a f14232c;

    /* renamed from: d  reason: collision with root package name */
    private final oe.u f14233d;

    /* renamed from: e  reason: collision with root package name */
    private long f14234e;

    /* renamed from: f  reason: collision with root package name */
    private int f14235f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f14236g;

    /* renamed from: h  reason: collision with root package name */
    private w0 f14237h;

    /* renamed from: i  reason: collision with root package name */
    private w0 f14238i;

    /* renamed from: j  reason: collision with root package name */
    private w0 f14239j;

    /* renamed from: k  reason: collision with root package name */
    private int f14240k;

    /* renamed from: l  reason: collision with root package name */
    private Object f14241l;

    /* renamed from: m  reason: collision with root package name */
    private long f14242m;

    public z0(nc.a aVar, oe.u uVar) {
        this.f14232c = aVar;
        this.f14233d = uVar;
    }

    private void A() {
        final r.b bVar;
        final s.a k10 = qi.s.k();
        for (w0 w0Var = this.f14237h; w0Var != null; w0Var = w0Var.j()) {
            k10.a(w0Var.f14190f.f14201a);
        }
        w0 w0Var2 = this.f14238i;
        if (w0Var2 == null) {
            bVar = null;
        } else {
            bVar = w0Var2.f14190f.f14201a;
        }
        this.f14233d.post(new Runnable() { // from class: com.google.android.exoplayer2.y0
            @Override // java.lang.Runnable
            public final void run() {
                z0.this.f14232c.v(k10.k(), bVar);
            }
        });
    }

    private static r.b D(Timeline timeline, Object obj, long j10, long j11, Timeline.d dVar, Timeline.b bVar) {
        timeline.l(obj, bVar);
        timeline.r(bVar.f12594i, dVar);
        for (int f10 = timeline.f(obj); z(bVar) && f10 <= dVar.A; f10++) {
            timeline.k(f10, bVar, true);
            obj = oe.a.e(bVar.f12593e);
        }
        timeline.l(obj, bVar);
        int h10 = bVar.h(j10);
        if (h10 == -1) {
            return new r.b(obj, j11, bVar.g(j10));
        }
        return new r.b(obj, h10, bVar.n(h10), j11);
    }

    private long F(Timeline timeline, Object obj) {
        int f10;
        int i10 = timeline.l(obj, this.f14230a).f12594i;
        Object obj2 = this.f14241l;
        if (obj2 != null && (f10 = timeline.f(obj2)) != -1 && timeline.j(f10, this.f14230a).f12594i == i10) {
            return this.f14242m;
        }
        for (w0 w0Var = this.f14237h; w0Var != null; w0Var = w0Var.j()) {
            if (w0Var.f14186b.equals(obj)) {
                return w0Var.f14190f.f14201a.f46440d;
            }
        }
        for (w0 w0Var2 = this.f14237h; w0Var2 != null; w0Var2 = w0Var2.j()) {
            int f11 = timeline.f(w0Var2.f14186b);
            if (f11 != -1 && timeline.j(f11, this.f14230a).f12594i == i10) {
                return w0Var2.f14190f.f14201a.f46440d;
            }
        }
        long j10 = this.f14234e;
        this.f14234e = 1 + j10;
        if (this.f14237h == null) {
            this.f14241l = obj;
            this.f14242m = j10;
        }
        return j10;
    }

    private boolean H(Timeline timeline) {
        Timeline timeline2;
        w0 w0Var = this.f14237h;
        if (w0Var == null) {
            return true;
        }
        int f10 = timeline.f(w0Var.f14186b);
        while (true) {
            timeline2 = timeline;
            f10 = timeline2.h(f10, this.f14230a, this.f14231b, this.f14235f, this.f14236g);
            while (w0Var.j() != null && !w0Var.f14190f.f14207g) {
                w0Var = w0Var.j();
            }
            w0 j10 = w0Var.j();
            if (f10 == -1 || j10 == null || timeline2.f(j10.f14186b) != f10) {
                break;
            }
            w0Var = j10;
            timeline = timeline2;
        }
        boolean C = C(w0Var);
        w0Var.f14190f = t(timeline2, w0Var.f14190f);
        return !C;
    }

    private boolean d(long j10, long j11) {
        return j10 == -9223372036854775807L || j10 == j11;
    }

    private boolean e(x0 x0Var, x0 x0Var2) {
        if (x0Var.f14202b == x0Var2.f14202b && x0Var.f14201a.equals(x0Var2.f14201a)) {
            return true;
        }
        return false;
    }

    private x0 h(r1 r1Var) {
        return m(r1Var.f13378a, r1Var.f13379b, r1Var.f13380c, r1Var.f13395r);
    }

    private x0 i(Timeline timeline, w0 w0Var, long j10) {
        Object obj;
        long j11;
        x0 x0Var = w0Var.f14190f;
        int h10 = timeline.h(timeline.f(x0Var.f14201a.f46437a), this.f14230a, this.f14231b, this.f14235f, this.f14236g);
        if (h10 == -1) {
            return null;
        }
        int i10 = timeline.k(h10, this.f14230a, true).f12594i;
        Object e10 = oe.a.e(this.f14230a.f12593e);
        long j12 = x0Var.f14201a.f46440d;
        long j13 = 0;
        if (timeline.r(i10, this.f14231b).f12617z == h10) {
            Pair o10 = timeline.o(this.f14231b, this.f14230a, i10, -9223372036854775807L, Math.max(0L, j10));
            if (o10 == null) {
                return null;
            }
            Object obj2 = o10.first;
            long longValue = ((Long) o10.second).longValue();
            w0 j14 = w0Var.j();
            if (j14 != null && j14.f14186b.equals(obj2)) {
                j12 = j14.f14190f.f14201a.f46440d;
            } else {
                j12 = this.f14234e;
                this.f14234e = 1 + j12;
            }
            obj = obj2;
            j11 = longValue;
            j13 = -9223372036854775807L;
        } else {
            obj = e10;
            j11 = 0;
        }
        r.b D = D(timeline, obj, j11, j12, this.f14231b, this.f14230a);
        if (j13 != -9223372036854775807L && x0Var.f14203c != -9223372036854775807L) {
            boolean u10 = u(x0Var.f14201a.f46437a, timeline);
            if (D.b() && u10) {
                j13 = x0Var.f14203c;
            } else if (u10) {
                j11 = x0Var.f14203c;
            }
        }
        return m(timeline, D, j13, j11);
    }

    private x0 j(Timeline timeline, w0 w0Var, long j10) {
        x0 x0Var = w0Var.f14190f;
        long l10 = (w0Var.l() + x0Var.f14205e) - j10;
        if (x0Var.f14207g) {
            return i(timeline, w0Var, l10);
        }
        return k(timeline, w0Var, l10);
    }

    private x0 k(Timeline timeline, w0 w0Var, long j10) {
        boolean z10;
        x0 x0Var = w0Var.f14190f;
        r.b bVar = x0Var.f14201a;
        timeline.l(bVar.f46437a, this.f14230a);
        if (bVar.b()) {
            int i10 = bVar.f46438b;
            int d10 = this.f14230a.d(i10);
            if (d10 == -1) {
                return null;
            }
            int o10 = this.f14230a.o(i10, bVar.f46439c);
            if (o10 < d10) {
                return n(timeline, bVar.f46437a, i10, o10, x0Var.f14203c, bVar.f46440d);
            }
            long j11 = x0Var.f14203c;
            if (j11 == -9223372036854775807L) {
                Timeline.d dVar = this.f14231b;
                Timeline.b bVar2 = this.f14230a;
                Pair o11 = timeline.o(dVar, bVar2, bVar2.f12594i, -9223372036854775807L, Math.max(0L, j10));
                if (o11 == null) {
                    return null;
                }
                j11 = ((Long) o11.second).longValue();
            }
            return o(timeline, bVar.f46437a, Math.max(p(timeline, bVar.f46437a, bVar.f46438b), j11), x0Var.f14203c, bVar.f46440d);
        }
        int i11 = bVar.f46441e;
        if (i11 != -1 && this.f14230a.t(i11)) {
            return i(timeline, w0Var, j10);
        }
        int n10 = this.f14230a.n(bVar.f46441e);
        if (this.f14230a.u(bVar.f46441e) && this.f14230a.k(bVar.f46441e, n10) == 3) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (n10 != this.f14230a.d(bVar.f46441e) && !z10) {
            return n(timeline, bVar.f46437a, bVar.f46441e, n10, x0Var.f14205e, bVar.f46440d);
        }
        return o(timeline, bVar.f46437a, p(timeline, bVar.f46437a, bVar.f46441e), x0Var.f14205e, bVar.f46440d);
    }

    private x0 m(Timeline timeline, r.b bVar, long j10, long j11) {
        timeline.l(bVar.f46437a, this.f14230a);
        if (bVar.b()) {
            return n(timeline, bVar.f46437a, bVar.f46438b, bVar.f46439c, j10, bVar.f46440d);
        }
        return o(timeline, bVar.f46437a, j11, j10, bVar.f46440d);
    }

    private x0 n(Timeline timeline, Object obj, int i10, int i11, long j10, long j11) {
        long j12;
        r.b bVar = new r.b(obj, i10, i11, j11);
        long e10 = timeline.l(bVar.f46437a, this.f14230a).e(bVar.f46438b, bVar.f46439c);
        if (i11 == this.f14230a.n(i10)) {
            j12 = this.f14230a.j();
        } else {
            j12 = 0;
        }
        boolean u10 = this.f14230a.u(bVar.f46438b);
        if (e10 != -9223372036854775807L && j12 >= e10) {
            j12 = Math.max(0L, e10 - 1);
        }
        return new x0(bVar, j12, j10, -9223372036854775807L, e10, u10, false, false, false);
    }

    private x0 o(Timeline timeline, Object obj, long j10, long j11, long j12) {
        boolean z10;
        boolean z11;
        boolean z12;
        long j13;
        long j14;
        long j15;
        long j16 = j10;
        timeline.l(obj, this.f14230a);
        int g10 = this.f14230a.g(j16);
        int i10 = 0;
        if (g10 != -1 && this.f14230a.t(g10)) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (g10 == -1) {
            if (this.f14230a.f() > 0) {
                Timeline.b bVar = this.f14230a;
                if (bVar.u(bVar.r())) {
                    z11 = true;
                }
            }
            z11 = false;
        } else {
            if (this.f14230a.u(g10)) {
                long i11 = this.f14230a.i(g10);
                Timeline.b bVar2 = this.f14230a;
                if (i11 == bVar2.f12595o && bVar2.s(g10)) {
                    z11 = true;
                    g10 = -1;
                }
            }
            z11 = false;
        }
        r.b bVar3 = new r.b(obj, j12, g10);
        boolean v10 = v(bVar3);
        boolean x10 = x(timeline, bVar3);
        boolean w10 = w(timeline, bVar3, v10);
        if (g10 != -1 && this.f14230a.u(g10) && !z10) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (g10 != -1 && !z10) {
            j14 = this.f14230a.i(g10);
        } else if (z11) {
            j14 = this.f14230a.f12595o;
        } else {
            j13 = -9223372036854775807L;
            if (j13 == -9223372036854775807L && j13 != Long.MIN_VALUE) {
                j15 = j13;
            } else {
                j15 = this.f14230a.f12595o;
            }
            if (j15 != -9223372036854775807L && j16 >= j15) {
                if (!w10 || !z11) {
                    i10 = 1;
                }
                j16 = Math.max(0L, j15 - i10);
            }
            return new x0(bVar3, j16, j11, j13, j15, z12, v10, x10, w10);
        }
        j13 = j14;
        if (j13 == -9223372036854775807L) {
        }
        j15 = this.f14230a.f12595o;
        if (j15 != -9223372036854775807L) {
            if (!w10) {
            }
            i10 = 1;
            j16 = Math.max(0L, j15 - i10);
        }
        return new x0(bVar3, j16, j11, j13, j15, z12, v10, x10, w10);
    }

    private long p(Timeline timeline, Object obj, int i10) {
        timeline.l(obj, this.f14230a);
        long i11 = this.f14230a.i(i10);
        if (i11 == Long.MIN_VALUE) {
            return this.f14230a.f12595o;
        }
        return i11 + this.f14230a.l(i10);
    }

    private boolean u(Object obj, Timeline timeline) {
        int f10 = timeline.l(obj, this.f14230a).f();
        int r10 = this.f14230a.r();
        if (f10 > 0 && this.f14230a.u(r10)) {
            if (f10 > 1 || this.f14230a.i(r10) != Long.MIN_VALUE) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean v(r.b bVar) {
        if (!bVar.b() && bVar.f46441e == -1) {
            return true;
        }
        return false;
    }

    private boolean w(Timeline timeline, r.b bVar, boolean z10) {
        int f10 = timeline.f(bVar.f46437a);
        if (!timeline.r(timeline.j(f10, this.f14230a).f12594i, this.f14231b).f12611t && timeline.v(f10, this.f14230a, this.f14231b, this.f14235f, this.f14236g) && z10) {
            return true;
        }
        return false;
    }

    private boolean x(Timeline timeline, r.b bVar) {
        if (!v(bVar)) {
            return false;
        }
        int i10 = timeline.l(bVar.f46437a, this.f14230a).f12594i;
        if (timeline.r(i10, this.f14231b).A != timeline.f(bVar.f46437a)) {
            return false;
        }
        return true;
    }

    private static boolean z(Timeline.b bVar) {
        int i10;
        int f10 = bVar.f();
        if (f10 != 0 && ((f10 != 1 || !bVar.t(0)) && bVar.u(bVar.r()))) {
            long j10 = 0;
            if (bVar.h(0L) == -1) {
                if (bVar.f12595o == 0) {
                    return true;
                }
                if (bVar.t(f10 - 1)) {
                    i10 = 2;
                } else {
                    i10 = 1;
                }
                int i11 = f10 - i10;
                for (int i12 = 0; i12 <= i11; i12++) {
                    j10 += bVar.l(i12);
                }
                if (bVar.f12595o <= j10) {
                    return true;
                }
            }
        }
        return false;
    }

    public void B(long j10) {
        w0 w0Var = this.f14239j;
        if (w0Var != null) {
            w0Var.s(j10);
        }
    }

    public boolean C(w0 w0Var) {
        boolean z10;
        boolean z11 = false;
        if (w0Var != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        if (w0Var.equals(this.f14239j)) {
            return false;
        }
        this.f14239j = w0Var;
        while (w0Var.j() != null) {
            w0Var = w0Var.j();
            if (w0Var == this.f14238i) {
                this.f14238i = this.f14237h;
                z11 = true;
            }
            w0Var.t();
            this.f14240k--;
        }
        this.f14239j.w(null);
        A();
        return z11;
    }

    public r.b E(Timeline timeline, Object obj, long j10) {
        long F = F(timeline, obj);
        timeline.l(obj, this.f14230a);
        timeline.r(this.f14230a.f12594i, this.f14231b);
        boolean z10 = false;
        for (int f10 = timeline.f(obj); f10 >= this.f14231b.f12617z; f10--) {
            boolean z11 = true;
            timeline.k(f10, this.f14230a, true);
            if (this.f14230a.f() <= 0) {
                z11 = false;
            }
            z10 |= z11;
            Timeline.b bVar = this.f14230a;
            if (bVar.h(bVar.f12595o) != -1) {
                obj = oe.a.e(this.f14230a.f12593e);
            }
            if (z10 && (!z11 || this.f14230a.f12595o != 0)) {
                break;
            }
        }
        return D(timeline, obj, j10, F, this.f14231b, this.f14230a);
    }

    public boolean G() {
        w0 w0Var = this.f14239j;
        if (w0Var != null) {
            if (w0Var.f14190f.f14209i || !w0Var.q() || this.f14239j.f14190f.f14205e == -9223372036854775807L || this.f14240k >= 100) {
                return false;
            }
            return true;
        }
        return true;
    }

    public boolean I(Timeline timeline, long j10, long j11) {
        boolean C;
        x0 x0Var;
        long z10;
        boolean z11;
        w0 w0Var = null;
        for (w0 w0Var2 = this.f14237h; w0Var2 != null; w0Var2 = w0Var2.j()) {
            x0 x0Var2 = w0Var2.f14190f;
            if (w0Var == null) {
                x0Var = t(timeline, x0Var2);
            } else {
                x0 j12 = j(timeline, w0Var, j10);
                if (j12 == null) {
                    C = C(w0Var);
                } else if (!e(x0Var2, j12)) {
                    C = C(w0Var);
                } else {
                    x0Var = j12;
                }
                return !C;
            }
            w0Var2.f14190f = x0Var.a(x0Var2.f14203c);
            if (!d(x0Var2.f14205e, x0Var.f14205e)) {
                w0Var2.A();
                long j13 = x0Var.f14205e;
                if (j13 == -9223372036854775807L) {
                    z10 = LongCompanionObject.MAX_VALUE;
                } else {
                    z10 = w0Var2.z(j13);
                }
                if (w0Var2 == this.f14238i && !w0Var2.f14190f.f14206f && (j11 == Long.MIN_VALUE || j11 >= z10)) {
                    z11 = true;
                } else {
                    z11 = false;
                }
                if (!C(w0Var2) && !z11) {
                    return true;
                }
                return false;
            }
            w0Var = w0Var2;
        }
        return true;
    }

    public boolean J(Timeline timeline, int i10) {
        this.f14235f = i10;
        return H(timeline);
    }

    public boolean K(Timeline timeline, boolean z10) {
        this.f14236g = z10;
        return H(timeline);
    }

    public w0 b() {
        w0 w0Var = this.f14237h;
        if (w0Var == null) {
            return null;
        }
        if (w0Var == this.f14238i) {
            this.f14238i = w0Var.j();
        }
        this.f14237h.t();
        int i10 = this.f14240k - 1;
        this.f14240k = i10;
        if (i10 == 0) {
            this.f14239j = null;
            w0 w0Var2 = this.f14237h;
            this.f14241l = w0Var2.f14186b;
            this.f14242m = w0Var2.f14190f.f14201a.f46440d;
        }
        this.f14237h = this.f14237h.j();
        A();
        return this.f14237h;
    }

    public w0 c() {
        boolean z10;
        w0 w0Var = this.f14238i;
        if (w0Var != null && w0Var.j() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        oe.a.g(z10);
        this.f14238i = this.f14238i.j();
        A();
        return this.f14238i;
    }

    public void f() {
        if (this.f14240k == 0) {
            return;
        }
        w0 w0Var = (w0) oe.a.i(this.f14237h);
        this.f14241l = w0Var.f14186b;
        this.f14242m = w0Var.f14190f.f14201a.f46440d;
        while (w0Var != null) {
            w0Var.t();
            w0Var = w0Var.j();
        }
        this.f14237h = null;
        this.f14239j = null;
        this.f14238i = null;
        this.f14240k = 0;
        A();
    }

    public w0 g(w1[] w1VarArr, ke.q qVar, me.b bVar, o1 o1Var, x0 x0Var, ke.r rVar) {
        x0 x0Var2;
        long l10;
        w0 w0Var = this.f14239j;
        if (w0Var == null) {
            l10 = 1000000000000L;
            x0Var2 = x0Var;
        } else {
            x0Var2 = x0Var;
            l10 = (w0Var.l() + this.f14239j.f14190f.f14205e) - x0Var2.f14202b;
        }
        w0 w0Var2 = new w0(w1VarArr, l10, qVar, bVar, o1Var, x0Var2, rVar);
        w0 w0Var3 = this.f14239j;
        if (w0Var3 != null) {
            w0Var3.w(w0Var2);
        } else {
            this.f14237h = w0Var2;
            this.f14238i = w0Var2;
        }
        this.f14241l = null;
        this.f14239j = w0Var2;
        this.f14240k++;
        A();
        return w0Var2;
    }

    public w0 l() {
        return this.f14239j;
    }

    public x0 q(long j10, r1 r1Var) {
        w0 w0Var = this.f14239j;
        if (w0Var == null) {
            return h(r1Var);
        }
        return j(r1Var.f13378a, w0Var, j10);
    }

    public w0 r() {
        return this.f14237h;
    }

    public w0 s() {
        return this.f14238i;
    }

    /* JADX WARN: Removed duplicated region for block: B:22:0x0060  */
    /* JADX WARN: Removed duplicated region for block: B:24:0x006a  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public com.google.android.exoplayer2.x0 t(com.google.android.exoplayer2.Timeline r16, com.google.android.exoplayer2.x0 r17) {
        /*
            r15 = this;
            r1 = r16
            r2 = r17
            rd.r$b r3 = r2.f14201a
            boolean r12 = r15.v(r3)
            boolean r13 = r15.x(r1, r3)
            boolean r14 = r15.w(r1, r3, r12)
            rd.r$b r4 = r2.f14201a
            java.lang.Object r4 = r4.f46437a
            com.google.android.exoplayer2.Timeline$b r5 = r15.f14230a
            r1.l(r4, r5)
            boolean r1 = r3.b()
            r4 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            r6 = -1
            if (r1 != 0) goto L33
            int r1 = r3.f46441e
            if (r1 != r6) goto L2c
            goto L33
        L2c:
            com.google.android.exoplayer2.Timeline$b r7 = r15.f14230a
            long r7 = r7.i(r1)
            goto L34
        L33:
            r7 = r4
        L34:
            boolean r1 = r3.b()
            if (r1 == 0) goto L46
            com.google.android.exoplayer2.Timeline$b r1 = r15.f14230a
            int r4 = r3.f46438b
            int r5 = r3.f46439c
            long r4 = r1.e(r4, r5)
        L44:
            r9 = r4
            goto L5a
        L46:
            int r1 = (r7 > r4 ? 1 : (r7 == r4 ? 0 : -1))
            if (r1 == 0) goto L53
            r4 = -9223372036854775808
            int r1 = (r7 > r4 ? 1 : (r7 == r4 ? 0 : -1))
            if (r1 != 0) goto L51
            goto L53
        L51:
            r9 = r7
            goto L5a
        L53:
            com.google.android.exoplayer2.Timeline$b r1 = r15.f14230a
            long r4 = r1.m()
            goto L44
        L5a:
            boolean r1 = r3.b()
            if (r1 == 0) goto L6a
            com.google.android.exoplayer2.Timeline$b r1 = r15.f14230a
            int r4 = r3.f46438b
            boolean r1 = r1.u(r4)
        L68:
            r11 = r1
            goto L7a
        L6a:
            int r1 = r3.f46441e
            if (r1 == r6) goto L78
            com.google.android.exoplayer2.Timeline$b r4 = r15.f14230a
            boolean r1 = r4.u(r1)
            if (r1 == 0) goto L78
            r1 = 1
            goto L68
        L78:
            r1 = 0
            goto L68
        L7a:
            com.google.android.exoplayer2.x0 r1 = new com.google.android.exoplayer2.x0
            r5 = r3
            long r3 = r2.f14202b
            r16 = r1
            long r0 = r2.f14203c
            r2 = r5
            r5 = r0
            r1 = r16
            r1.<init>(r2, r3, r5, r7, r9, r11, r12, r13, r14)
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.z0.t(com.google.android.exoplayer2.Timeline, com.google.android.exoplayer2.x0):com.google.android.exoplayer2.x0");
    }

    public boolean y(rd.p pVar) {
        w0 w0Var = this.f14239j;
        if (w0Var != null && w0Var.f14185a == pVar) {
            return true;
        }
        return false;
    }
}
