package com.google.android.exoplayer2;

import android.util.Pair;
import com.google.android.exoplayer2.Timeline;
import kotlin.jvm.internal.LongCompanionObject;
import ni.s;
import qd.r;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class z0 {

    /* renamed from: a  reason: collision with root package name */
    private final Timeline.b f13513a = new Timeline.b();

    /* renamed from: b  reason: collision with root package name */
    private final Timeline.d f13514b = new Timeline.d();

    /* renamed from: c  reason: collision with root package name */
    private final mc.a f13515c;

    /* renamed from: d  reason: collision with root package name */
    private final ne.u f13516d;

    /* renamed from: e  reason: collision with root package name */
    private long f13517e;

    /* renamed from: f  reason: collision with root package name */
    private int f13518f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f13519g;

    /* renamed from: h  reason: collision with root package name */
    private w0 f13520h;

    /* renamed from: i  reason: collision with root package name */
    private w0 f13521i;

    /* renamed from: j  reason: collision with root package name */
    private w0 f13522j;

    /* renamed from: k  reason: collision with root package name */
    private int f13523k;

    /* renamed from: l  reason: collision with root package name */
    private Object f13524l;

    /* renamed from: m  reason: collision with root package name */
    private long f13525m;

    public z0(mc.a aVar, ne.u uVar) {
        this.f13515c = aVar;
        this.f13516d = uVar;
    }

    private void A() {
        final r.b bVar;
        final s.a j10 = ni.s.j();
        for (w0 w0Var = this.f13520h; w0Var != null; w0Var = w0Var.j()) {
            j10.a(w0Var.f13473f.f13484a);
        }
        w0 w0Var2 = this.f13521i;
        if (w0Var2 == null) {
            bVar = null;
        } else {
            bVar = w0Var2.f13473f.f13484a;
        }
        this.f13516d.post(new Runnable() { // from class: com.google.android.exoplayer2.y0
            @Override // java.lang.Runnable
            public final void run() {
                z0.this.f13515c.E(j10.k(), bVar);
            }
        });
    }

    private static r.b D(Timeline timeline, Object obj, long j10, long j11, Timeline.d dVar, Timeline.b bVar) {
        timeline.l(obj, bVar);
        timeline.r(bVar.f11877i, dVar);
        for (int f10 = timeline.f(obj); z(bVar) && f10 <= dVar.A; f10++) {
            timeline.k(f10, bVar, true);
            obj = ne.a.e(bVar.f11876e);
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
        int i10 = timeline.l(obj, this.f13513a).f11877i;
        Object obj2 = this.f13524l;
        if (obj2 != null && (f10 = timeline.f(obj2)) != -1 && timeline.j(f10, this.f13513a).f11877i == i10) {
            return this.f13525m;
        }
        for (w0 w0Var = this.f13520h; w0Var != null; w0Var = w0Var.j()) {
            if (w0Var.f13469b.equals(obj)) {
                return w0Var.f13473f.f13484a.f46868d;
            }
        }
        for (w0 w0Var2 = this.f13520h; w0Var2 != null; w0Var2 = w0Var2.j()) {
            int f11 = timeline.f(w0Var2.f13469b);
            if (f11 != -1 && timeline.j(f11, this.f13513a).f11877i == i10) {
                return w0Var2.f13473f.f13484a.f46868d;
            }
        }
        long j10 = this.f13517e;
        this.f13517e = 1 + j10;
        if (this.f13520h == null) {
            this.f13524l = obj;
            this.f13525m = j10;
        }
        return j10;
    }

    private boolean H(Timeline timeline) {
        Timeline timeline2;
        w0 w0Var = this.f13520h;
        if (w0Var == null) {
            return true;
        }
        int f10 = timeline.f(w0Var.f13469b);
        while (true) {
            timeline2 = timeline;
            f10 = timeline2.h(f10, this.f13513a, this.f13514b, this.f13518f, this.f13519g);
            while (w0Var.j() != null && !w0Var.f13473f.f13490g) {
                w0Var = w0Var.j();
            }
            w0 j10 = w0Var.j();
            if (f10 == -1 || j10 == null || timeline2.f(j10.f13469b) != f10) {
                break;
            }
            w0Var = j10;
            timeline = timeline2;
        }
        boolean C = C(w0Var);
        w0Var.f13473f = t(timeline2, w0Var.f13473f);
        return !C;
    }

    private boolean d(long j10, long j11) {
        return j10 == -9223372036854775807L || j10 == j11;
    }

    private boolean e(x0 x0Var, x0 x0Var2) {
        if (x0Var.f13485b == x0Var2.f13485b && x0Var.f13484a.equals(x0Var2.f13484a)) {
            return true;
        }
        return false;
    }

    private x0 h(r1 r1Var) {
        return m(r1Var.f12661a, r1Var.f12662b, r1Var.f12663c, r1Var.f12678r);
    }

    private x0 i(Timeline timeline, w0 w0Var, long j10) {
        Object obj;
        long j11;
        x0 x0Var = w0Var.f13473f;
        int h10 = timeline.h(timeline.f(x0Var.f13484a.f46865a), this.f13513a, this.f13514b, this.f13518f, this.f13519g);
        if (h10 == -1) {
            return null;
        }
        int i10 = timeline.k(h10, this.f13513a, true).f11877i;
        Object e10 = ne.a.e(this.f13513a.f11876e);
        long j12 = x0Var.f13484a.f46868d;
        long j13 = 0;
        if (timeline.r(i10, this.f13514b).f11900z == h10) {
            Pair o10 = timeline.o(this.f13514b, this.f13513a, i10, -9223372036854775807L, Math.max(0L, j10));
            if (o10 == null) {
                return null;
            }
            Object obj2 = o10.first;
            long longValue = ((Long) o10.second).longValue();
            w0 j14 = w0Var.j();
            if (j14 != null && j14.f13469b.equals(obj2)) {
                j12 = j14.f13473f.f13484a.f46868d;
            } else {
                j12 = this.f13517e;
                this.f13517e = 1 + j12;
            }
            obj = obj2;
            j11 = longValue;
            j13 = -9223372036854775807L;
        } else {
            obj = e10;
            j11 = 0;
        }
        r.b D = D(timeline, obj, j11, j12, this.f13514b, this.f13513a);
        if (j13 != -9223372036854775807L && x0Var.f13486c != -9223372036854775807L) {
            boolean u10 = u(x0Var.f13484a.f46865a, timeline);
            if (D.b() && u10) {
                j13 = x0Var.f13486c;
            } else if (u10) {
                j11 = x0Var.f13486c;
            }
        }
        return m(timeline, D, j13, j11);
    }

    private x0 j(Timeline timeline, w0 w0Var, long j10) {
        x0 x0Var = w0Var.f13473f;
        long l10 = (w0Var.l() + x0Var.f13488e) - j10;
        if (x0Var.f13490g) {
            return i(timeline, w0Var, l10);
        }
        return k(timeline, w0Var, l10);
    }

    private x0 k(Timeline timeline, w0 w0Var, long j10) {
        boolean z10;
        x0 x0Var = w0Var.f13473f;
        r.b bVar = x0Var.f13484a;
        timeline.l(bVar.f46865a, this.f13513a);
        if (bVar.b()) {
            int i10 = bVar.f46866b;
            int d10 = this.f13513a.d(i10);
            if (d10 == -1) {
                return null;
            }
            int o10 = this.f13513a.o(i10, bVar.f46867c);
            if (o10 < d10) {
                return n(timeline, bVar.f46865a, i10, o10, x0Var.f13486c, bVar.f46868d);
            }
            long j11 = x0Var.f13486c;
            if (j11 == -9223372036854775807L) {
                Timeline.d dVar = this.f13514b;
                Timeline.b bVar2 = this.f13513a;
                Pair o11 = timeline.o(dVar, bVar2, bVar2.f11877i, -9223372036854775807L, Math.max(0L, j10));
                if (o11 == null) {
                    return null;
                }
                j11 = ((Long) o11.second).longValue();
            }
            return o(timeline, bVar.f46865a, Math.max(p(timeline, bVar.f46865a, bVar.f46866b), j11), x0Var.f13486c, bVar.f46868d);
        }
        int i11 = bVar.f46869e;
        if (i11 != -1 && this.f13513a.t(i11)) {
            return i(timeline, w0Var, j10);
        }
        int n10 = this.f13513a.n(bVar.f46869e);
        if (this.f13513a.u(bVar.f46869e) && this.f13513a.k(bVar.f46869e, n10) == 3) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (n10 != this.f13513a.d(bVar.f46869e) && !z10) {
            return n(timeline, bVar.f46865a, bVar.f46869e, n10, x0Var.f13488e, bVar.f46868d);
        }
        return o(timeline, bVar.f46865a, p(timeline, bVar.f46865a, bVar.f46869e), x0Var.f13488e, bVar.f46868d);
    }

    private x0 m(Timeline timeline, r.b bVar, long j10, long j11) {
        timeline.l(bVar.f46865a, this.f13513a);
        if (bVar.b()) {
            return n(timeline, bVar.f46865a, bVar.f46866b, bVar.f46867c, j10, bVar.f46868d);
        }
        return o(timeline, bVar.f46865a, j11, j10, bVar.f46868d);
    }

    private x0 n(Timeline timeline, Object obj, int i10, int i11, long j10, long j11) {
        long j12;
        r.b bVar = new r.b(obj, i10, i11, j11);
        long e10 = timeline.l(bVar.f46865a, this.f13513a).e(bVar.f46866b, bVar.f46867c);
        if (i11 == this.f13513a.n(i10)) {
            j12 = this.f13513a.j();
        } else {
            j12 = 0;
        }
        boolean u10 = this.f13513a.u(bVar.f46866b);
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
        timeline.l(obj, this.f13513a);
        int g10 = this.f13513a.g(j16);
        int i10 = 0;
        if (g10 != -1 && this.f13513a.t(g10)) {
            z10 = true;
        } else {
            z10 = false;
        }
        if (g10 == -1) {
            if (this.f13513a.f() > 0) {
                Timeline.b bVar = this.f13513a;
                if (bVar.u(bVar.r())) {
                    z11 = true;
                }
            }
            z11 = false;
        } else {
            if (this.f13513a.u(g10)) {
                long i11 = this.f13513a.i(g10);
                Timeline.b bVar2 = this.f13513a;
                if (i11 == bVar2.f11878o && bVar2.s(g10)) {
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
        if (g10 != -1 && this.f13513a.u(g10) && !z10) {
            z12 = true;
        } else {
            z12 = false;
        }
        if (g10 != -1 && !z10) {
            j14 = this.f13513a.i(g10);
        } else if (z11) {
            j14 = this.f13513a.f11878o;
        } else {
            j13 = -9223372036854775807L;
            if (j13 == -9223372036854775807L && j13 != Long.MIN_VALUE) {
                j15 = j13;
            } else {
                j15 = this.f13513a.f11878o;
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
        j15 = this.f13513a.f11878o;
        if (j15 != -9223372036854775807L) {
            if (!w10) {
            }
            i10 = 1;
            j16 = Math.max(0L, j15 - i10);
        }
        return new x0(bVar3, j16, j11, j13, j15, z12, v10, x10, w10);
    }

    private long p(Timeline timeline, Object obj, int i10) {
        timeline.l(obj, this.f13513a);
        long i11 = this.f13513a.i(i10);
        if (i11 == Long.MIN_VALUE) {
            return this.f13513a.f11878o;
        }
        return i11 + this.f13513a.l(i10);
    }

    private boolean u(Object obj, Timeline timeline) {
        int f10 = timeline.l(obj, this.f13513a).f();
        int r10 = this.f13513a.r();
        if (f10 > 0 && this.f13513a.u(r10)) {
            if (f10 > 1 || this.f13513a.i(r10) != Long.MIN_VALUE) {
                return true;
            }
            return false;
        }
        return false;
    }

    private boolean v(r.b bVar) {
        if (!bVar.b() && bVar.f46869e == -1) {
            return true;
        }
        return false;
    }

    private boolean w(Timeline timeline, r.b bVar, boolean z10) {
        int f10 = timeline.f(bVar.f46865a);
        if (!timeline.r(timeline.j(f10, this.f13513a).f11877i, this.f13514b).f11894t && timeline.v(f10, this.f13513a, this.f13514b, this.f13518f, this.f13519g) && z10) {
            return true;
        }
        return false;
    }

    private boolean x(Timeline timeline, r.b bVar) {
        if (!v(bVar)) {
            return false;
        }
        int i10 = timeline.l(bVar.f46865a, this.f13513a).f11877i;
        if (timeline.r(i10, this.f13514b).A != timeline.f(bVar.f46865a)) {
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
                if (bVar.f11878o == 0) {
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
                if (bVar.f11878o <= j10) {
                    return true;
                }
            }
        }
        return false;
    }

    public void B(long j10) {
        w0 w0Var = this.f13522j;
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
        ne.a.g(z10);
        if (w0Var.equals(this.f13522j)) {
            return false;
        }
        this.f13522j = w0Var;
        while (w0Var.j() != null) {
            w0Var = w0Var.j();
            if (w0Var == this.f13521i) {
                this.f13521i = this.f13520h;
                z11 = true;
            }
            w0Var.t();
            this.f13523k--;
        }
        this.f13522j.w(null);
        A();
        return z11;
    }

    public r.b E(Timeline timeline, Object obj, long j10) {
        long F = F(timeline, obj);
        timeline.l(obj, this.f13513a);
        timeline.r(this.f13513a.f11877i, this.f13514b);
        boolean z10 = false;
        for (int f10 = timeline.f(obj); f10 >= this.f13514b.f11900z; f10--) {
            boolean z11 = true;
            timeline.k(f10, this.f13513a, true);
            if (this.f13513a.f() <= 0) {
                z11 = false;
            }
            z10 |= z11;
            Timeline.b bVar = this.f13513a;
            if (bVar.h(bVar.f11878o) != -1) {
                obj = ne.a.e(this.f13513a.f11876e);
            }
            if (z10 && (!z11 || this.f13513a.f11878o != 0)) {
                break;
            }
        }
        return D(timeline, obj, j10, F, this.f13514b, this.f13513a);
    }

    public boolean G() {
        w0 w0Var = this.f13522j;
        if (w0Var != null) {
            if (w0Var.f13473f.f13492i || !w0Var.q() || this.f13522j.f13473f.f13488e == -9223372036854775807L || this.f13523k >= 100) {
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
        for (w0 w0Var2 = this.f13520h; w0Var2 != null; w0Var2 = w0Var2.j()) {
            x0 x0Var2 = w0Var2.f13473f;
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
            w0Var2.f13473f = x0Var.a(x0Var2.f13486c);
            if (!d(x0Var2.f13488e, x0Var.f13488e)) {
                w0Var2.A();
                long j13 = x0Var.f13488e;
                if (j13 == -9223372036854775807L) {
                    z10 = LongCompanionObject.MAX_VALUE;
                } else {
                    z10 = w0Var2.z(j13);
                }
                if (w0Var2 == this.f13521i && !w0Var2.f13473f.f13489f && (j11 == Long.MIN_VALUE || j11 >= z10)) {
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
        this.f13518f = i10;
        return H(timeline);
    }

    public boolean K(Timeline timeline, boolean z10) {
        this.f13519g = z10;
        return H(timeline);
    }

    public w0 b() {
        w0 w0Var = this.f13520h;
        if (w0Var == null) {
            return null;
        }
        if (w0Var == this.f13521i) {
            this.f13521i = w0Var.j();
        }
        this.f13520h.t();
        int i10 = this.f13523k - 1;
        this.f13523k = i10;
        if (i10 == 0) {
            this.f13522j = null;
            w0 w0Var2 = this.f13520h;
            this.f13524l = w0Var2.f13469b;
            this.f13525m = w0Var2.f13473f.f13484a.f46868d;
        }
        this.f13520h = this.f13520h.j();
        A();
        return this.f13520h;
    }

    public w0 c() {
        boolean z10;
        w0 w0Var = this.f13521i;
        if (w0Var != null && w0Var.j() != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        ne.a.g(z10);
        this.f13521i = this.f13521i.j();
        A();
        return this.f13521i;
    }

    public void f() {
        if (this.f13523k == 0) {
            return;
        }
        w0 w0Var = (w0) ne.a.i(this.f13520h);
        this.f13524l = w0Var.f13469b;
        this.f13525m = w0Var.f13473f.f13484a.f46868d;
        while (w0Var != null) {
            w0Var.t();
            w0Var = w0Var.j();
        }
        this.f13520h = null;
        this.f13522j = null;
        this.f13521i = null;
        this.f13523k = 0;
        A();
    }

    public w0 g(w1[] w1VarArr, je.q qVar, le.b bVar, o1 o1Var, x0 x0Var, je.r rVar) {
        x0 x0Var2;
        long l10;
        w0 w0Var = this.f13522j;
        if (w0Var == null) {
            l10 = 1000000000000L;
            x0Var2 = x0Var;
        } else {
            x0Var2 = x0Var;
            l10 = (w0Var.l() + this.f13522j.f13473f.f13488e) - x0Var2.f13485b;
        }
        w0 w0Var2 = new w0(w1VarArr, l10, qVar, bVar, o1Var, x0Var2, rVar);
        w0 w0Var3 = this.f13522j;
        if (w0Var3 != null) {
            w0Var3.w(w0Var2);
        } else {
            this.f13520h = w0Var2;
            this.f13521i = w0Var2;
        }
        this.f13524l = null;
        this.f13522j = w0Var2;
        this.f13523k++;
        A();
        return w0Var2;
    }

    public w0 l() {
        return this.f13522j;
    }

    public x0 q(long j10, r1 r1Var) {
        w0 w0Var = this.f13522j;
        if (w0Var == null) {
            return h(r1Var);
        }
        return j(r1Var.f12661a, w0Var, j10);
    }

    public w0 r() {
        return this.f13520h;
    }

    public w0 s() {
        return this.f13521i;
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
            qd.r$b r3 = r2.f13484a
            boolean r12 = r15.v(r3)
            boolean r13 = r15.x(r1, r3)
            boolean r14 = r15.w(r1, r3, r12)
            qd.r$b r4 = r2.f13484a
            java.lang.Object r4 = r4.f46865a
            com.google.android.exoplayer2.Timeline$b r5 = r15.f13513a
            r1.l(r4, r5)
            boolean r1 = r3.b()
            r4 = -9223372036854775807(0x8000000000000001, double:-4.9E-324)
            r6 = -1
            if (r1 != 0) goto L33
            int r1 = r3.f46869e
            if (r1 != r6) goto L2c
            goto L33
        L2c:
            com.google.android.exoplayer2.Timeline$b r7 = r15.f13513a
            long r7 = r7.i(r1)
            goto L34
        L33:
            r7 = r4
        L34:
            boolean r1 = r3.b()
            if (r1 == 0) goto L46
            com.google.android.exoplayer2.Timeline$b r1 = r15.f13513a
            int r4 = r3.f46866b
            int r5 = r3.f46867c
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
            com.google.android.exoplayer2.Timeline$b r1 = r15.f13513a
            long r4 = r1.m()
            goto L44
        L5a:
            boolean r1 = r3.b()
            if (r1 == 0) goto L6a
            com.google.android.exoplayer2.Timeline$b r1 = r15.f13513a
            int r4 = r3.f46866b
            boolean r1 = r1.u(r4)
        L68:
            r11 = r1
            goto L7a
        L6a:
            int r1 = r3.f46869e
            if (r1 == r6) goto L78
            com.google.android.exoplayer2.Timeline$b r4 = r15.f13513a
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
            long r3 = r2.f13485b
            r16 = r1
            long r0 = r2.f13486c
            r2 = r5
            r5 = r0
            r1 = r16
            r1.<init>(r2, r3, r5, r7, r9, r11, r12, r13, r14)
            return r1
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.exoplayer2.z0.t(com.google.android.exoplayer2.Timeline, com.google.android.exoplayer2.x0):com.google.android.exoplayer2.x0");
    }

    public boolean y(qd.p pVar) {
        w0 w0Var = this.f13522j;
        if (w0Var != null && w0Var.f13468a == pVar) {
            return true;
        }
        return false;
    }
}
