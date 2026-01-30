package net.time4j.calendar;

import jt.a0;
import jt.c0;
import jt.v;
import jt.z;
import net.time4j.y0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r extends net.time4j.calendar.service.f implements l {
    private static final long serialVersionUID = 4275169663905222176L;

    /* renamed from: s  reason: collision with root package name */
    private final transient jt.p f40538s;

    /* renamed from: t  reason: collision with root package name */
    private final transient jt.p f40539t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements c0 {

        /* renamed from: d  reason: collision with root package name */
        private final r f40540d;

        a(r rVar) {
            this.f40540d = rVar;
        }

        private int e(jt.q qVar) {
            int q10 = qVar.q(this.f40540d.f40538s);
            while (true) {
                int i10 = q10 + 7;
                if (i10 <= ((Integer) qVar.i(this.f40540d.f40538s)).intValue()) {
                    q10 = i10;
                } else {
                    return gt.c.a(q10 - 1, 7) + 1;
                }
            }
        }

        @Override // jt.z
        /* renamed from: b */
        public jt.p a(jt.q qVar) {
            return null;
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p h(jt.q qVar) {
            return null;
        }

        @Override // jt.c0
        /* renamed from: d */
        public int v(jt.q qVar) {
            return gt.c.a(qVar.q(this.f40540d.f40538s) - 1, 7) + 1;
        }

        @Override // jt.z
        /* renamed from: f */
        public Integer j(jt.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // jt.z
        /* renamed from: g */
        public Integer p(jt.q qVar) {
            return 1;
        }

        @Override // jt.z
        /* renamed from: i */
        public Integer x(jt.q qVar) {
            return Integer.valueOf(v(qVar));
        }

        public boolean m(jt.q qVar, int i10) {
            if (i10 >= 1 && i10 <= e(qVar)) {
                return true;
            }
            return false;
        }

        @Override // jt.z
        /* renamed from: n */
        public boolean l(jt.q qVar, Integer num) {
            if (num != null && m(qVar, num.intValue())) {
                return true;
            }
            return false;
        }

        @Override // jt.c0
        /* renamed from: o */
        public jt.q k(jt.q qVar, int i10, boolean z10) {
            if (m(qVar, i10)) {
                return qVar.F(this.f40540d.L(i10, (y0) qVar.p(this.f40540d.f40539t)));
            }
            throw new IllegalArgumentException("Invalid value: " + i10);
        }

        @Override // jt.z
        /* renamed from: q */
        public jt.q w(jt.q qVar, Integer num, boolean z10) {
            if (num != null) {
                return k(qVar, num.intValue(), z10);
            }
            throw new IllegalArgumentException("Missing value.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements v {

        /* renamed from: d  reason: collision with root package name */
        private final r f40541d;

        /* renamed from: e  reason: collision with root package name */
        private final long f40542e;

        /* renamed from: i  reason: collision with root package name */
        private final y0 f40543i;

        b(r rVar, int i10, y0 y0Var) {
            if (y0Var != null) {
                this.f40541d = rVar;
                this.f40542e = i10;
                this.f40543i = y0Var;
                return;
            }
            throw new NullPointerException("Missing value.");
        }

        @Override // jt.v
        /* renamed from: a */
        public jt.q apply(jt.q qVar) {
            int d10;
            long a10;
            y0 y0Var = (y0) qVar.p(this.f40541d.f40539t);
            int q10 = qVar.q(this.f40541d.f40538s);
            if (this.f40542e == 2147483647L) {
                int intValue = ((Integer) qVar.i(this.f40541d.f40538s)).intValue() - q10;
                int d11 = y0Var.d() + (intValue % 7);
                if (d11 > 7) {
                    d11 -= 7;
                }
                int d12 = this.f40543i.d() - d11;
                a10 = intValue + d12;
                if (d12 > 0) {
                    a10 -= 7;
                }
            } else {
                a10 = ((this.f40542e - (gt.c.a((q10 + d10) - 1, 7) + 1)) * 7) + (this.f40543i.d() - y0Var.d());
            }
            return qVar.D(a0.UTC, ((jt.g) qVar).j() + a10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements v {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f40544d;

        c(boolean z10) {
            this.f40544d = z10;
        }

        @Override // jt.v
        /* renamed from: a */
        public jt.q apply(jt.q qVar) {
            long j10;
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.p(a0Var)).longValue();
            if (this.f40544d) {
                j10 = longValue - 7;
            } else {
                j10 = longValue + 7;
            }
            return qVar.D(a0Var, j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Class cls, jt.p pVar, jt.p pVar2) {
        super("WEEKDAY_IN_MONTH", cls, 1, ((Integer) pVar.e()).intValue() / 7, 'F', new c(true), new c(false));
        this.f40538s = pVar;
        this.f40539t = pVar2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z K(r rVar) {
        return new a(rVar);
    }

    public v L(int i10, y0 y0Var) {
        return new b(this, i10, y0Var);
    }
}
