package net.time4j.calendar;

import kt.a0;
import kt.c0;
import kt.v;
import kt.z;
import net.time4j.y0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r extends net.time4j.calendar.service.f implements l {
    private static final long serialVersionUID = 4275169663905222176L;

    /* renamed from: s  reason: collision with root package name */
    private final transient kt.p f40401s;

    /* renamed from: t  reason: collision with root package name */
    private final transient kt.p f40402t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements c0 {

        /* renamed from: d  reason: collision with root package name */
        private final r f40403d;

        a(r rVar) {
            this.f40403d = rVar;
        }

        private int e(kt.q qVar) {
            int t10 = qVar.t(this.f40403d.f40401s);
            while (true) {
                int i10 = t10 + 7;
                if (i10 <= ((Integer) qVar.p(this.f40403d.f40401s)).intValue()) {
                    t10 = i10;
                } else {
                    return ht.c.a(t10 - 1, 7) + 1;
                }
            }
        }

        @Override // kt.z
        /* renamed from: b */
        public kt.p a(kt.q qVar) {
            return null;
        }

        @Override // kt.z
        /* renamed from: c */
        public kt.p g(kt.q qVar) {
            return null;
        }

        @Override // kt.c0
        /* renamed from: d */
        public int t(kt.q qVar) {
            return ht.c.a(qVar.t(this.f40403d.f40401s) - 1, 7) + 1;
        }

        @Override // kt.z
        /* renamed from: f */
        public Integer h(kt.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // kt.z
        /* renamed from: j */
        public Integer o(kt.q qVar) {
            return 1;
        }

        @Override // kt.z
        /* renamed from: k */
        public Integer x(kt.q qVar) {
            return Integer.valueOf(t(qVar));
        }

        public boolean m(kt.q qVar, int i10) {
            if (i10 >= 1 && i10 <= e(qVar)) {
                return true;
            }
            return false;
        }

        @Override // kt.z
        /* renamed from: n */
        public boolean l(kt.q qVar, Integer num) {
            if (num != null && m(qVar, num.intValue())) {
                return true;
            }
            return false;
        }

        @Override // kt.c0
        /* renamed from: p */
        public kt.q i(kt.q qVar, int i10, boolean z10) {
            if (m(qVar, i10)) {
                return qVar.F(this.f40403d.L(i10, (y0) qVar.v(this.f40403d.f40402t)));
            }
            throw new IllegalArgumentException("Invalid value: " + i10);
        }

        @Override // kt.z
        /* renamed from: q */
        public kt.q v(kt.q qVar, Integer num, boolean z10) {
            if (num != null) {
                return i(qVar, num.intValue(), z10);
            }
            throw new IllegalArgumentException("Missing value.");
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements v {

        /* renamed from: d  reason: collision with root package name */
        private final r f40404d;

        /* renamed from: e  reason: collision with root package name */
        private final long f40405e;

        /* renamed from: i  reason: collision with root package name */
        private final y0 f40406i;

        b(r rVar, int i10, y0 y0Var) {
            if (y0Var != null) {
                this.f40404d = rVar;
                this.f40405e = i10;
                this.f40406i = y0Var;
                return;
            }
            throw new NullPointerException("Missing value.");
        }

        @Override // kt.v
        /* renamed from: a */
        public kt.q apply(kt.q qVar) {
            int d10;
            long a10;
            y0 y0Var = (y0) qVar.v(this.f40404d.f40402t);
            int t10 = qVar.t(this.f40404d.f40401s);
            if (this.f40405e == 2147483647L) {
                int intValue = ((Integer) qVar.p(this.f40404d.f40401s)).intValue() - t10;
                int d11 = y0Var.d() + (intValue % 7);
                if (d11 > 7) {
                    d11 -= 7;
                }
                int d12 = this.f40406i.d() - d11;
                a10 = intValue + d12;
                if (d12 > 0) {
                    a10 -= 7;
                }
            } else {
                a10 = ((this.f40405e - (ht.c.a((t10 + d10) - 1, 7) + 1)) * 7) + (this.f40406i.d() - y0Var.d());
            }
            return qVar.D(a0.UTC, ((kt.g) qVar).i() + a10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements v {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f40407d;

        c(boolean z10) {
            this.f40407d = z10;
        }

        @Override // kt.v
        /* renamed from: a */
        public kt.q apply(kt.q qVar) {
            long j10;
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.v(a0Var)).longValue();
            if (this.f40407d) {
                j10 = longValue - 7;
            } else {
                j10 = longValue + 7;
            }
            return qVar.D(a0Var, j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Class cls, kt.p pVar, kt.p pVar2) {
        super("WEEKDAY_IN_MONTH", cls, 1, ((Integer) pVar.e()).intValue() / 7, 'F', new c(true), new c(false));
        this.f40401s = pVar;
        this.f40402t = pVar2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z K(r rVar) {
        return new a(rVar);
    }

    public v L(int i10, y0 y0Var) {
        return new b(this, i10, y0Var);
    }
}
