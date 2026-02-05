package net.time4j.calendar;

import net.time4j.y0;
import pt.a0;
import pt.c0;
import pt.v;
import pt.z;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r extends net.time4j.calendar.service.f implements l {
    private static final long serialVersionUID = 4275169663905222176L;

    /* renamed from: s  reason: collision with root package name */
    private final transient pt.p f39900s;

    /* renamed from: t  reason: collision with root package name */
    private final transient pt.p f39901t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements c0 {

        /* renamed from: d  reason: collision with root package name */
        private final r f39902d;

        a(r rVar) {
            this.f39902d = rVar;
        }

        private int e(pt.q qVar) {
            int r10 = qVar.r(this.f39902d.f39900s);
            while (true) {
                int i10 = r10 + 7;
                if (i10 <= ((Integer) qVar.n(this.f39902d.f39900s)).intValue()) {
                    r10 = i10;
                } else {
                    return nt.c.a(r10 - 1, 7) + 1;
                }
            }
        }

        @Override // pt.z
        /* renamed from: b */
        public pt.p a(pt.q qVar) {
            return null;
        }

        @Override // pt.z
        /* renamed from: c */
        public pt.p h(pt.q qVar) {
            return null;
        }

        @Override // pt.c0
        /* renamed from: d */
        public int w(pt.q qVar) {
            return nt.c.a(qVar.r(this.f39902d.f39900s) - 1, 7) + 1;
        }

        @Override // pt.z
        /* renamed from: f */
        public Integer k(pt.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // pt.z
        /* renamed from: g */
        public Integer r(pt.q qVar) {
            return 1;
        }

        @Override // pt.z
        /* renamed from: i */
        public Integer y(pt.q qVar) {
            return Integer.valueOf(w(qVar));
        }

        public boolean j(pt.q qVar, int i10) {
            if (i10 >= 1 && i10 <= e(qVar)) {
                return true;
            }
            return false;
        }

        @Override // pt.z
        /* renamed from: l */
        public boolean p(pt.q qVar, Integer num) {
            if (num != null && j(qVar, num.intValue())) {
                return true;
            }
            return false;
        }

        @Override // pt.c0
        /* renamed from: n */
        public pt.q m(pt.q qVar, int i10, boolean z10) {
            if (j(qVar, i10)) {
                return qVar.F(this.f39902d.L(i10, (y0) qVar.v(this.f39902d.f39901t)));
            }
            throw new IllegalArgumentException("Invalid value: " + i10);
        }

        @Override // pt.z
        /* renamed from: o */
        public pt.q x(pt.q qVar, Integer num, boolean z10) {
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
        private final r f39903d;

        /* renamed from: e  reason: collision with root package name */
        private final long f39904e;

        /* renamed from: i  reason: collision with root package name */
        private final y0 f39905i;

        b(r rVar, int i10, y0 y0Var) {
            if (y0Var != null) {
                this.f39903d = rVar;
                this.f39904e = i10;
                this.f39905i = y0Var;
                return;
            }
            throw new NullPointerException("Missing value.");
        }

        @Override // pt.v
        /* renamed from: a */
        public pt.q apply(pt.q qVar) {
            int d10;
            long a10;
            y0 y0Var = (y0) qVar.v(this.f39903d.f39901t);
            int r10 = qVar.r(this.f39903d.f39900s);
            if (this.f39904e == 2147483647L) {
                int intValue = ((Integer) qVar.n(this.f39903d.f39900s)).intValue() - r10;
                int d11 = y0Var.d() + (intValue % 7);
                if (d11 > 7) {
                    d11 -= 7;
                }
                int d12 = this.f39905i.d() - d11;
                a10 = intValue + d12;
                if (d12 > 0) {
                    a10 -= 7;
                }
            } else {
                a10 = ((this.f39904e - (nt.c.a((r10 + d10) - 1, 7) + 1)) * 7) + (this.f39905i.d() - y0Var.d());
            }
            return qVar.D(a0.UTC, ((pt.g) qVar).i() + a10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements v {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f39906d;

        c(boolean z10) {
            this.f39906d = z10;
        }

        @Override // pt.v
        /* renamed from: a */
        public pt.q apply(pt.q qVar) {
            long j10;
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.v(a0Var)).longValue();
            if (this.f39906d) {
                j10 = longValue - 7;
            } else {
                j10 = longValue + 7;
            }
            return qVar.D(a0Var, j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Class cls, pt.p pVar, pt.p pVar2) {
        super("WEEKDAY_IN_MONTH", cls, 1, ((Integer) pVar.e()).intValue() / 7, 'F', new c(true), new c(false));
        this.f39900s = pVar;
        this.f39901t = pVar2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z K(r rVar) {
        return new a(rVar);
    }

    public v L(int i10, y0 y0Var) {
        return new b(this, i10, y0Var);
    }
}
