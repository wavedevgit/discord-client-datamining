package net.time4j.calendar;

import net.time4j.y0;
import st.a0;
import st.c0;
import st.v;
import st.z;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r extends net.time4j.calendar.service.f implements l {
    private static final long serialVersionUID = 4275169663905222176L;

    /* renamed from: s  reason: collision with root package name */
    private final transient st.p f38395s;

    /* renamed from: t  reason: collision with root package name */
    private final transient st.p f38396t;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a implements c0 {

        /* renamed from: d  reason: collision with root package name */
        private final r f38397d;

        a(r rVar) {
            this.f38397d = rVar;
        }

        private int e(st.q qVar) {
            int v10 = qVar.v(this.f38397d.f38395s);
            while (true) {
                int i10 = v10 + 7;
                if (i10 <= ((Integer) qVar.n(this.f38397d.f38395s)).intValue()) {
                    v10 = i10;
                } else {
                    return qt.c.a(v10 - 1, 7) + 1;
                }
            }
        }

        @Override // st.z
        /* renamed from: b */
        public st.p a(st.q qVar) {
            return null;
        }

        @Override // st.z
        /* renamed from: c */
        public st.p g(st.q qVar) {
            return null;
        }

        @Override // st.c0
        /* renamed from: d */
        public int n(st.q qVar) {
            return qt.c.a(qVar.v(this.f38397d.f38395s) - 1, 7) + 1;
        }

        @Override // st.z
        /* renamed from: f */
        public Integer h(st.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // st.z
        /* renamed from: j */
        public Integer m(st.q qVar) {
            return 1;
        }

        @Override // st.z
        /* renamed from: l */
        public Integer y(st.q qVar) {
            return Integer.valueOf(n(qVar));
        }

        public boolean o(st.q qVar, int i10) {
            if (i10 >= 1 && i10 <= e(qVar)) {
                return true;
            }
            return false;
        }

        @Override // st.z
        /* renamed from: p */
        public boolean k(st.q qVar, Integer num) {
            if (num != null && o(qVar, num.intValue())) {
                return true;
            }
            return false;
        }

        @Override // st.c0
        /* renamed from: q */
        public st.q i(st.q qVar, int i10, boolean z10) {
            if (o(qVar, i10)) {
                return qVar.F(this.f38397d.L(i10, (y0) qVar.t(this.f38397d.f38396t)));
            }
            throw new IllegalArgumentException("Invalid value: " + i10);
        }

        @Override // st.z
        /* renamed from: r */
        public st.q s(st.q qVar, Integer num, boolean z10) {
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
        private final r f38398d;

        /* renamed from: e  reason: collision with root package name */
        private final long f38399e;

        /* renamed from: i  reason: collision with root package name */
        private final y0 f38400i;

        b(r rVar, int i10, y0 y0Var) {
            if (y0Var != null) {
                this.f38398d = rVar;
                this.f38399e = i10;
                this.f38400i = y0Var;
                return;
            }
            throw new NullPointerException("Missing value.");
        }

        @Override // st.v
        /* renamed from: a */
        public st.q apply(st.q qVar) {
            int d10;
            long a10;
            y0 y0Var = (y0) qVar.t(this.f38398d.f38396t);
            int v10 = qVar.v(this.f38398d.f38395s);
            if (this.f38399e == 2147483647L) {
                int intValue = ((Integer) qVar.n(this.f38398d.f38395s)).intValue() - v10;
                int d11 = y0Var.d() + (intValue % 7);
                if (d11 > 7) {
                    d11 -= 7;
                }
                int d12 = this.f38400i.d() - d11;
                a10 = intValue + d12;
                if (d12 > 0) {
                    a10 -= 7;
                }
            } else {
                a10 = ((this.f38399e - (qt.c.a((v10 + d10) - 1, 7) + 1)) * 7) + (this.f38400i.d() - y0Var.d());
            }
            return qVar.D(a0.UTC, ((st.g) qVar).i() + a10);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements v {

        /* renamed from: d  reason: collision with root package name */
        private final boolean f38401d;

        c(boolean z10) {
            this.f38401d = z10;
        }

        @Override // st.v
        /* renamed from: a */
        public st.q apply(st.q qVar) {
            long j10;
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.t(a0Var)).longValue();
            if (this.f38401d) {
                j10 = longValue - 7;
            } else {
                j10 = longValue + 7;
            }
            return qVar.D(a0Var, j10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r(Class cls, st.p pVar, st.p pVar2) {
        super("WEEKDAY_IN_MONTH", cls, 1, ((Integer) pVar.e()).intValue() / 7, 'F', new c(true), new c(false));
        this.f38395s = pVar;
        this.f38396t = pVar2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static z K(r rVar) {
        return new a(rVar);
    }

    public v L(int i10, y0 y0Var) {
        return new b(this, i10, y0Var);
    }
}
