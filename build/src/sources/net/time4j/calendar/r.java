package net.time4j.calendar;

import mt.a0;
import mt.c0;
import mt.v;
import mt.z;
import net.time4j.y0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r extends net.time4j.calendar.service.f implements l {
    private static final long serialVersionUID = 4275169663905222176L;

    /* renamed from: s  reason: collision with root package name */
    private final transient mt.p f40440s;

    /* renamed from: t  reason: collision with root package name */
    private final transient mt.p f40441t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements c0 {

        /* renamed from: d  reason: collision with root package name */
        private final r f40442d;

        a(r rVar) {
            this.f40442d = rVar;
        }

        private int e(mt.q qVar) {
            int j10 = qVar.j(this.f40442d.f40440s);
            while (true) {
                int i10 = j10 + 7;
                if (i10 <= ((Integer) qVar.u(this.f40442d.f40440s)).intValue()) {
                    j10 = i10;
                } else {
                    return kt.c.a(j10 - 1, 7) + 1;
                }
            }
        }

        @Override // mt.z
        /* renamed from: b */
        public mt.p a(mt.q qVar) {
            return null;
        }

        @Override // mt.z
        /* renamed from: c */
        public mt.p h(mt.q qVar) {
            return null;
        }

        @Override // mt.c0
        /* renamed from: d */
        public int w(mt.q qVar) {
            return kt.c.a(qVar.j(this.f40442d.f40440s) - 1, 7) + 1;
        }

        @Override // mt.z
        /* renamed from: f */
        public Integer l(mt.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // mt.z
        /* renamed from: g */
        public Integer r(mt.q qVar) {
            return 1;
        }

        @Override // mt.z
        /* renamed from: i */
        public Integer z(mt.q qVar) {
            return Integer.valueOf(w(qVar));
        }

        public boolean j(mt.q qVar, int i10) {
            if (i10 >= 1 && i10 <= e(qVar)) {
                return true;
            }
            return false;
        }

        @Override // mt.z
        /* renamed from: k */
        public boolean q(mt.q qVar, Integer num) {
            if (num != null && j(qVar, num.intValue())) {
                return true;
            }
            return false;
        }

        @Override // mt.c0
        /* renamed from: m */
        public mt.q o(mt.q qVar, int i10, boolean z10) {
            if (j(qVar, i10)) {
                return qVar.F(this.f40442d.L(i10, (y0) qVar.o(this.f40442d.f40441t)));
            }
            throw new IllegalArgumentException("Invalid value: " + i10);
        }

        @Override // mt.z
        /* renamed from: n */
        public mt.q x(mt.q qVar, Integer num, boolean z10) {
            if (num != null) {
                return o(qVar, num.intValue(), z10);
            }
            throw new IllegalArgumentException("Missing value.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements v {

        /* renamed from: d  reason: collision with root package name */
        private final r f40443d;

        /* renamed from: e  reason: collision with root package name */
        private final long f40444e;

        /* renamed from: i  reason: collision with root package name */
        private final y0 f40445i;

        b(r rVar, int i10, y0 y0Var) {
            if (y0Var != null) {
                this.f40443d = rVar;
                this.f40444e = i10;
                this.f40445i = y0Var;
                return;
            }
            throw new NullPointerException("Missing value.");
        }

        @Override // mt.v
        /* renamed from: a */
        public mt.q apply(mt.q qVar) {
            int d10;
            long a10;
            y0 y0Var = (y0) qVar.o(this.f40443d.f40441t);
            int j10 = qVar.j(this.f40443d.f40440s);
            if (this.f40444e == 2147483647L) {
                int intValue = ((Integer) qVar.u(this.f40443d.f40440s)).intValue() - j10;
                int d11 = y0Var.d() + (intValue % 7);
                if (d11 > 7) {
                    d11 -= 7;
                }
                int d12 = this.f40445i.d() - d11;
                a10 = intValue + d12;
                if (d12 > 0) {
                    a10 -= 7;
                }
            } else {
                a10 = ((this.f40444e - (kt.c.a((j10 + d10) - 1, 7) + 1)) * 7) + (this.f40445i.d() - y0Var.d());
            }
            return qVar.D(a0.UTC, ((mt.g) qVar).i() + a10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements v {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f40446d;

        c(boolean z10) {
            this.f40446d = z10;
        }

        @Override // mt.v
        /* renamed from: a */
        public mt.q apply(mt.q qVar) {
            long j10;
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.o(a0Var)).longValue();
            if (this.f40446d) {
                j10 = longValue - 7;
            } else {
                j10 = longValue + 7;
            }
            return qVar.D(a0Var, j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Class cls, mt.p pVar, mt.p pVar2) {
        super("WEEKDAY_IN_MONTH", cls, 1, ((Integer) pVar.f()).intValue() / 7, 'F', new c(true), new c(false));
        this.f40440s = pVar;
        this.f40441t = pVar2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z K(r rVar) {
        return new a(rVar);
    }

    public v L(int i10, y0 y0Var) {
        return new b(this, i10, y0Var);
    }
}
