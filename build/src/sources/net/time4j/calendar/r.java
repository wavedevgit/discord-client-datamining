package net.time4j.calendar;

import bu.a0;
import bu.c0;
import bu.v;
import bu.z;
import net.time4j.y0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r extends net.time4j.calendar.service.f implements l {
    private static final long serialVersionUID = 4275169663905222176L;

    /* renamed from: s  reason: collision with root package name */
    private final transient bu.p f37399s;

    /* renamed from: t  reason: collision with root package name */
    private final transient bu.p f37400t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements c0 {

        /* renamed from: d  reason: collision with root package name */
        private final r f37401d;

        a(r rVar) {
            this.f37401d = rVar;
        }

        private int e(bu.q qVar) {
            int m10 = qVar.m(this.f37401d.f37399s);
            while (true) {
                int i10 = m10 + 7;
                if (i10 <= ((Integer) qVar.v(this.f37401d.f37399s)).intValue()) {
                    m10 = i10;
                } else {
                    return zt.c.a(m10 - 1, 7) + 1;
                }
            }
        }

        @Override // bu.z
        /* renamed from: b */
        public bu.p a(bu.q qVar) {
            return null;
        }

        @Override // bu.z
        /* renamed from: c */
        public bu.p h(bu.q qVar) {
            return null;
        }

        @Override // bu.c0
        /* renamed from: d */
        public int u(bu.q qVar) {
            return zt.c.a(qVar.m(this.f37401d.f37399s) - 1, 7) + 1;
        }

        @Override // bu.z
        /* renamed from: f */
        public Integer m(bu.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // bu.z
        /* renamed from: g */
        public Integer q(bu.q qVar) {
            return 1;
        }

        @Override // bu.z
        /* renamed from: i */
        public Integer y(bu.q qVar) {
            return Integer.valueOf(u(qVar));
        }

        public boolean j(bu.q qVar, int i10) {
            if (i10 >= 1 && i10 <= e(qVar)) {
                return true;
            }
            return false;
        }

        @Override // bu.z
        /* renamed from: k */
        public boolean o(bu.q qVar, Integer num) {
            if (num != null && j(qVar, num.intValue())) {
                return true;
            }
            return false;
        }

        @Override // bu.c0
        /* renamed from: l */
        public bu.q n(bu.q qVar, int i10, boolean z10) {
            if (j(qVar, i10)) {
                return qVar.F(this.f37401d.L(i10, (y0) qVar.k(this.f37401d.f37400t)));
            }
            throw new IllegalArgumentException("Invalid value: " + i10);
        }

        @Override // bu.z
        /* renamed from: p */
        public bu.q x(bu.q qVar, Integer num, boolean z10) {
            if (num != null) {
                return n(qVar, num.intValue(), z10);
            }
            throw new IllegalArgumentException("Missing value.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements v {

        /* renamed from: d  reason: collision with root package name */
        private final r f37402d;

        /* renamed from: e  reason: collision with root package name */
        private final long f37403e;

        /* renamed from: i  reason: collision with root package name */
        private final y0 f37404i;

        b(r rVar, int i10, y0 y0Var) {
            if (y0Var != null) {
                this.f37402d = rVar;
                this.f37403e = i10;
                this.f37404i = y0Var;
                return;
            }
            throw new NullPointerException("Missing value.");
        }

        @Override // bu.v
        /* renamed from: a */
        public bu.q apply(bu.q qVar) {
            int d10;
            long a10;
            y0 y0Var = (y0) qVar.k(this.f37402d.f37400t);
            int m10 = qVar.m(this.f37402d.f37399s);
            if (this.f37403e == 2147483647L) {
                int intValue = ((Integer) qVar.v(this.f37402d.f37399s)).intValue() - m10;
                int d11 = y0Var.d() + (intValue % 7);
                if (d11 > 7) {
                    d11 -= 7;
                }
                int d12 = this.f37404i.d() - d11;
                a10 = intValue + d12;
                if (d12 > 0) {
                    a10 -= 7;
                }
            } else {
                a10 = ((this.f37403e - (zt.c.a((m10 + d10) - 1, 7) + 1)) * 7) + (this.f37404i.d() - y0Var.d());
            }
            return qVar.D(a0.UTC, ((bu.g) qVar).i() + a10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements v {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f37405d;

        c(boolean z10) {
            this.f37405d = z10;
        }

        @Override // bu.v
        /* renamed from: a */
        public bu.q apply(bu.q qVar) {
            long j10;
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.k(a0Var)).longValue();
            if (this.f37405d) {
                j10 = longValue - 7;
            } else {
                j10 = longValue + 7;
            }
            return qVar.D(a0Var, j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Class cls, bu.p pVar, bu.p pVar2) {
        super("WEEKDAY_IN_MONTH", cls, 1, ((Integer) pVar.f()).intValue() / 7, 'F', new c(true), new c(false));
        this.f37399s = pVar;
        this.f37400t = pVar2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z K(r rVar) {
        return new a(rVar);
    }

    public v L(int i10, y0 y0Var) {
        return new b(this, i10, y0Var);
    }
}
