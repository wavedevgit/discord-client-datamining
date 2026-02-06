package net.time4j.calendar;

import net.time4j.y0;
import rt.a0;
import rt.c0;
import rt.v;
import rt.z;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r extends net.time4j.calendar.service.f implements l {
    private static final long serialVersionUID = 4275169663905222176L;

    /* renamed from: s  reason: collision with root package name */
    private final transient rt.p f39255s;

    /* renamed from: t  reason: collision with root package name */
    private final transient rt.p f39256t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements c0 {

        /* renamed from: d  reason: collision with root package name */
        private final r f39257d;

        a(r rVar) {
            this.f39257d = rVar;
        }

        private int e(rt.q qVar) {
            int q10 = qVar.q(this.f39257d.f39255s);
            while (true) {
                int i10 = q10 + 7;
                if (i10 <= ((Integer) qVar.t(this.f39257d.f39255s)).intValue()) {
                    q10 = i10;
                } else {
                    return pt.c.a(q10 - 1, 7) + 1;
                }
            }
        }

        @Override // rt.z
        /* renamed from: b */
        public rt.p a(rt.q qVar) {
            return null;
        }

        @Override // rt.z
        /* renamed from: c */
        public rt.p g(rt.q qVar) {
            return null;
        }

        @Override // rt.c0
        /* renamed from: d */
        public int s(rt.q qVar) {
            return pt.c.a(qVar.q(this.f39257d.f39255s) - 1, 7) + 1;
        }

        @Override // rt.z
        /* renamed from: f */
        public Integer k(rt.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // rt.z
        /* renamed from: h */
        public Integer o(rt.q qVar) {
            return 1;
        }

        @Override // rt.z
        /* renamed from: i */
        public Integer y(rt.q qVar) {
            return Integer.valueOf(s(qVar));
        }

        public boolean j(rt.q qVar, int i10) {
            if (i10 >= 1 && i10 <= e(qVar)) {
                return true;
            }
            return false;
        }

        @Override // rt.z
        /* renamed from: l */
        public boolean n(rt.q qVar, Integer num) {
            if (num != null && j(qVar, num.intValue())) {
                return true;
            }
            return false;
        }

        @Override // rt.c0
        /* renamed from: p */
        public rt.q m(rt.q qVar, int i10, boolean z10) {
            if (j(qVar, i10)) {
                return qVar.F(this.f39257d.L(i10, (y0) qVar.s(this.f39257d.f39256t)));
            }
            throw new IllegalArgumentException("Invalid value: " + i10);
        }

        @Override // rt.z
        /* renamed from: q */
        public rt.q u(rt.q qVar, Integer num, boolean z10) {
            if (num != null) {
                return m(qVar, num.intValue(), z10);
            }
            throw new IllegalArgumentException("Missing value.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements v {

        /* renamed from: d  reason: collision with root package name */
        private final r f39258d;

        /* renamed from: e  reason: collision with root package name */
        private final long f39259e;

        /* renamed from: i  reason: collision with root package name */
        private final y0 f39260i;

        b(r rVar, int i10, y0 y0Var) {
            if (y0Var != null) {
                this.f39258d = rVar;
                this.f39259e = i10;
                this.f39260i = y0Var;
                return;
            }
            throw new NullPointerException("Missing value.");
        }

        @Override // rt.v
        /* renamed from: a */
        public rt.q apply(rt.q qVar) {
            int d10;
            long a10;
            y0 y0Var = (y0) qVar.s(this.f39258d.f39256t);
            int q10 = qVar.q(this.f39258d.f39255s);
            if (this.f39259e == 2147483647L) {
                int intValue = ((Integer) qVar.t(this.f39258d.f39255s)).intValue() - q10;
                int d11 = y0Var.d() + (intValue % 7);
                if (d11 > 7) {
                    d11 -= 7;
                }
                int d12 = this.f39260i.d() - d11;
                a10 = intValue + d12;
                if (d12 > 0) {
                    a10 -= 7;
                }
            } else {
                a10 = ((this.f39259e - (pt.c.a((q10 + d10) - 1, 7) + 1)) * 7) + (this.f39260i.d() - y0Var.d());
            }
            return qVar.D(a0.UTC, ((rt.g) qVar).i() + a10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements v {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f39261d;

        c(boolean z10) {
            this.f39261d = z10;
        }

        @Override // rt.v
        /* renamed from: a */
        public rt.q apply(rt.q qVar) {
            long j10;
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.s(a0Var)).longValue();
            if (this.f39261d) {
                j10 = longValue - 7;
            } else {
                j10 = longValue + 7;
            }
            return qVar.D(a0Var, j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Class cls, rt.p pVar, rt.p pVar2) {
        super("WEEKDAY_IN_MONTH", cls, 1, ((Integer) pVar.e()).intValue() / 7, 'F', new c(true), new c(false));
        this.f39255s = pVar;
        this.f39256t = pVar2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z K(r rVar) {
        return new a(rVar);
    }

    public v L(int i10, y0 y0Var) {
        return new b(this, i10, y0Var);
    }
}
