package net.time4j.calendar;

import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import net.time4j.a1;
import net.time4j.y0;
import st.a0;
import st.x;
import st.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public static final st.p f38301a = m.f38337d;

    /* renamed from: net.time4j.calendar.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class C0552b implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f38302d;

        private st.p b(st.q qVar, boolean z10) {
            f V = f.V(qVar.getClass(), this.f38302d.model);
            int p10 = p(qVar);
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.t(a0Var)).longValue();
            int v10 = qVar.v(this.f38302d.dayElement);
            if (z10) {
                if (((Integer) qVar.n(this.f38302d.dayElement)).intValue() < v10 + (((Long) qVar.E(V, qVar.n(V)).t(a0Var)).longValue() - longValue)) {
                    return this.f38302d.dayElement;
                }
            } else if (p10 <= 1) {
                if (((Integer) qVar.m(this.f38302d.dayElement)).intValue() > v10 - (longValue - ((Long) qVar.E(V, qVar.m(V)).t(a0Var)).longValue())) {
                    return this.f38302d.dayElement;
                }
            }
            return V;
        }

        private int e(st.q qVar) {
            return q(qVar, 1);
        }

        private int j(st.q qVar) {
            return q(qVar, -1);
        }

        private int p(st.q qVar) {
            return q(qVar, 0);
        }

        private int q(st.q qVar, int i10) {
            int i11;
            int v10 = qVar.v(this.f38302d.dayElement);
            int e10 = b.c((((Long) qVar.t(a0.UTC)).longValue() - v10) + 1).e(this.f38302d.model);
            if (e10 <= 8 - this.f38302d.model.g()) {
                i11 = 2 - e10;
            } else {
                i11 = 9 - e10;
            }
            if (i10 != -1) {
                if (i10 != 0) {
                    if (i10 == 1) {
                        v10 = ((Integer) qVar.n(this.f38302d.dayElement)).intValue();
                    } else {
                        throw new AssertionError("Unexpected: " + i10);
                    }
                }
            } else {
                v10 = 1;
            }
            return qt.c.a(v10 - i11, 7) + 1;
        }

        private st.q t(st.q qVar, int i10) {
            int p10 = p(qVar);
            if (i10 == p10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.t(a0Var)).longValue() + ((i10 - p10) * 7));
        }

        @Override // st.z
        /* renamed from: c */
        public st.p a(st.q qVar) {
            return b(qVar, true);
        }

        @Override // st.z
        /* renamed from: d */
        public st.p g(st.q qVar) {
            return b(qVar, false);
        }

        @Override // st.z
        /* renamed from: f */
        public Integer h(st.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // st.z
        /* renamed from: l */
        public Integer m(st.q qVar) {
            return Integer.valueOf(j(qVar));
        }

        @Override // st.z
        /* renamed from: o */
        public Integer y(st.q qVar) {
            return Integer.valueOf(p(qVar));
        }

        @Override // st.z
        /* renamed from: r */
        public boolean k(st.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < j(qVar) || intValue > e(qVar)) {
                return false;
            }
            return true;
        }

        @Override // st.z
        /* renamed from: u */
        public st.q s(st.q qVar, Integer num, boolean z10) {
            if (num != null && (z10 || k(qVar, num))) {
                return t(qVar, num.intValue());
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private C0552b(d dVar) {
            this.f38302d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f38303d;

        private int b(st.q qVar) {
            int j10;
            int v10 = qVar.v(this.f38303d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= v10) {
                if (f(qVar, 1) + j(qVar, 0) <= v10) {
                    return 1;
                }
                j10 = (v10 - f10) / 7;
            } else {
                j10 = ((v10 + j(qVar, -1)) - f(qVar, -1)) / 7;
            }
            return j10 + 1;
        }

        private st.p c(Object obj) {
            return new f((Class) obj, this.f38303d.model);
        }

        private int f(st.q qVar, int i10) {
            y0 r10 = r(qVar, i10);
            a1 a1Var = this.f38303d.model;
            int e10 = r10.e(a1Var);
            if (e10 <= 8 - a1Var.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int j(st.q qVar, int i10) {
            int v10 = qVar.v(this.f38303d.dayElement);
            if (i10 == -1) {
                st.p pVar = this.f38303d.dayElement;
                a0 a0Var = a0.UTC;
                return b.d(pVar, qVar.D(a0Var, ((Long) qVar.t(a0Var)).longValue() - v10));
            } else if (i10 == 0) {
                return b.d(this.f38303d.dayElement, qVar);
            } else {
                if (i10 == 1) {
                    int d10 = b.d(this.f38303d.dayElement, qVar);
                    st.p pVar2 = this.f38303d.dayElement;
                    a0 a0Var2 = a0.UTC;
                    return b.d(pVar2, qVar.D(a0Var2, ((((Long) qVar.t(a0Var2)).longValue() + d10) + 1) - v10));
                }
                throw new AssertionError("Unexpected: " + i10);
            }
        }

        private int l(st.q qVar) {
            int v10 = qVar.v(this.f38303d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= v10) {
                int f11 = f(qVar, 1) + j(qVar, 0);
                if (f11 <= v10) {
                    try {
                        int f12 = f(qVar, 1);
                        a0 a0Var = a0.UTC;
                        f11 = f(qVar.D(a0Var, ((Long) qVar.t(a0Var)).longValue() + 7), 1) + j(qVar, 1);
                        f10 = f12;
                    } catch (RuntimeException unused) {
                        f11 += 7;
                    }
                }
                return (f11 - f10) / 7;
            }
            return ((f10 + j(qVar, -1)) - f(qVar, -1)) / 7;
        }

        private y0 r(st.q qVar, int i10) {
            int v10 = qVar.v(this.f38303d.dayElement);
            if (i10 != -1) {
                if (i10 == 0) {
                    return b.c((((Long) qVar.t(a0.UTC)).longValue() - v10) + 1);
                }
                if (i10 == 1) {
                    return b.c(((((Long) qVar.t(a0.UTC)).longValue() + b.d(this.f38303d.dayElement, qVar)) + 1) - v10);
                }
                throw new AssertionError("Unexpected: " + i10);
            }
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.t(a0Var)).longValue() - v10;
            return b.c((longValue - qVar.D(a0Var, longValue).v(this.f38303d.dayElement)) + 1);
        }

        private st.q u(st.q qVar, int i10) {
            int b10 = b(qVar);
            if (i10 == b10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.t(a0Var)).longValue() + ((i10 - b10) * 7));
        }

        @Override // st.z
        /* renamed from: d */
        public st.p a(st.q qVar) {
            return c(qVar.getClass());
        }

        @Override // st.z
        /* renamed from: e */
        public st.p g(st.q qVar) {
            return c(qVar.getClass());
        }

        @Override // st.z
        /* renamed from: o */
        public Integer h(st.q qVar) {
            return Integer.valueOf(l(qVar));
        }

        @Override // st.z
        /* renamed from: p */
        public Integer m(st.q qVar) {
            return 1;
        }

        @Override // st.z
        /* renamed from: q */
        public Integer y(st.q qVar) {
            return Integer.valueOf(b(qVar));
        }

        @Override // st.z
        /* renamed from: t */
        public boolean k(st.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < 1 || intValue > l(qVar)) {
                return false;
            }
            return true;
        }

        @Override // st.z
        /* renamed from: v */
        public st.q s(st.q qVar, Integer num, boolean z10) {
            int intValue = num.intValue();
            if (!z10 && !k(qVar, num)) {
                throw new IllegalArgumentException("Invalid value: " + intValue + " (context=" + qVar + ")");
            }
            return u(qVar, intValue);
        }

        private c(d dVar) {
            this.f38303d = dVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class d extends net.time4j.calendar.service.f {
        private static final long serialVersionUID = -7471192143785466686L;
        private final boolean bounded;
        private final st.p dayElement;
        private final a1 model;

        d(String str, Class cls, int i10, int i11, char c10, a1 a1Var, st.p pVar, boolean z10) {
            super(str, cls, i10, i11, c10);
            if (a1Var != null) {
                this.model = a1Var;
                this.dayElement = pVar;
                this.bounded = z10;
                return;
            }
            throw new NullPointerException("Missing week model.");
        }

        static d K(String str, Class cls, int i10, int i11, char c10, a1 a1Var, st.p pVar, boolean z10) {
            return new d(str, cls, i10, i11, c10, a1Var, pVar, z10);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // st.e
        public z c(x xVar) {
            if (!F().equals(xVar.n())) {
                return null;
            }
            if (this.bounded) {
                return new C0552b(this);
            }
            return new c(this);
        }

        @Override // st.e, st.p
        public boolean f() {
            return true;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, st.e
        public boolean j(st.e eVar) {
            if (super.j(eVar)) {
                d dVar = (d) d.class.cast(eVar);
                if (this.model.equals(dVar.model) && this.bounded == dVar.bounded) {
                    return true;
                }
            }
            return false;
        }

        @Override // net.time4j.calendar.service.d
        protected Object readResolve() {
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements z {

        /* renamed from: d  reason: collision with root package name */
        private final f f38304d;

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

        @Override // st.z
        /* renamed from: d */
        public y0 h(st.q qVar) {
            long a10 = x.G(qVar.getClass()).m().a();
            long longValue = ((Long) qVar.t(a0.UTC)).longValue();
            if ((longValue + 7) - b.c(longValue).e(this.f38304d.model) > a10) {
                return b.c(a10);
            }
            return this.f38304d.e();
        }

        @Override // st.z
        /* renamed from: e */
        public y0 m(st.q qVar) {
            long d10 = x.G(qVar.getClass()).m().d();
            long longValue = ((Long) qVar.t(a0.UTC)).longValue();
            if ((longValue + 1) - b.c(longValue).e(this.f38304d.model) < d10) {
                return b.c(d10);
            }
            return this.f38304d.B();
        }

        @Override // st.z
        /* renamed from: f */
        public y0 y(st.q qVar) {
            return b.c(((Long) qVar.t(a0.UTC)).longValue());
        }

        @Override // st.z
        /* renamed from: j */
        public boolean k(st.q qVar, y0 y0Var) {
            if (y0Var == null) {
                return false;
            }
            try {
                s(qVar, y0Var, false);
                return true;
            } catch (ArithmeticException | IllegalArgumentException unused) {
                return false;
            }
        }

        @Override // st.z
        /* renamed from: l */
        public st.q s(st.q qVar, y0 y0Var, boolean z10) {
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.t(a0Var)).longValue();
            y0 c10 = b.c(longValue);
            if (y0Var == c10) {
                return qVar;
            }
            return qVar.D(a0Var, (longValue + y0Var.e(this.f38304d.model)) - c10.e(this.f38304d.model));
        }

        private e(f fVar) {
            this.f38304d = fVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class f extends net.time4j.calendar.service.e {
        private static final long serialVersionUID = 5613494586572932860L;
        private final a1 model;

        f(Class cls, a1 a1Var) {
            super("LOCAL_DAY_OF_WEEK", cls, y0.class, 'e');
            this.model = a1Var;
        }

        static f V(Class cls, a1 a1Var) {
            return new f(cls, a1Var);
        }

        @Override // net.time4j.calendar.service.e
        protected boolean M() {
            return true;
        }

        @Override // st.p
        /* renamed from: S */
        public y0 e() {
            return this.model.f().f(6);
        }

        @Override // st.p
        /* renamed from: T */
        public y0 B() {
            return this.model.f();
        }

        @Override // net.time4j.calendar.service.e
        /* renamed from: U */
        public int O(y0 y0Var) {
            return y0Var.e(this.model);
        }

        @Override // st.e, java.util.Comparator
        /* renamed from: b */
        public int compare(st.o oVar, st.o oVar2) {
            int e10 = ((y0) oVar.t(this)).e(this.model);
            int e11 = ((y0) oVar2.t(this)).e(this.model);
            if (e10 < e11) {
                return -1;
            }
            if (e10 == e11) {
                return 0;
            }
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // st.e
        public z c(x xVar) {
            if (!F().equals(xVar.n())) {
                return null;
            }
            return new e(this);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, st.e
        public boolean j(st.e eVar) {
            if (super.j(eVar)) {
                return this.model.equals(((f) f.class.cast(eVar)).model);
            }
            return false;
        }

        @Override // net.time4j.calendar.service.d
        protected Object readResolve() {
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static y0 c(long j10) {
        return y0.h(qt.c.d(j10 + 5, 7) + 1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int d(st.p pVar, st.q qVar) {
        return ((Integer) Integer.class.cast(qVar.n(pVar))).intValue();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class g implements st.s {

        /* renamed from: a  reason: collision with root package name */
        private final Class f38305a;

        /* renamed from: b  reason: collision with root package name */
        private final st.p f38306b;

        /* renamed from: c  reason: collision with root package name */
        private final st.p f38307c;

        /* renamed from: d  reason: collision with root package name */
        private final a1 f38308d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Class cls, st.p pVar, st.p pVar2, a1 a1Var) {
            this.f38305a = cls;
            this.f38306b = pVar;
            this.f38307c = pVar2;
            this.f38308d = a1Var;
        }

        @Override // st.s
        public Set b(Locale locale, st.d dVar) {
            a1 j10;
            if (locale.getCountry().isEmpty()) {
                j10 = this.f38308d;
            } else {
                j10 = a1.j(locale);
            }
            a1 a1Var = j10;
            HashSet hashSet = new HashSet();
            hashSet.add(f.V(this.f38305a, a1Var));
            hashSet.add(d.K("WEEK_OF_MONTH", this.f38305a, 1, 5, 'W', a1Var, this.f38306b, false));
            hashSet.add(d.K("WEEK_OF_YEAR", this.f38305a, 1, 52, 'w', a1Var, this.f38307c, false));
            hashSet.add(d.K("BOUNDED_WEEK_OF_MONTH", this.f38305a, 1, 5, (char) 0, a1Var, this.f38306b, true));
            hashSet.add(d.K("BOUNDED_WEEK_OF_YEAR", this.f38305a, 1, 52, (char) 0, a1Var, this.f38307c, true));
            return Collections.unmodifiableSet(hashSet);
        }

        @Override // st.s
        public boolean c(Class cls) {
            return this.f38305a.equals(cls);
        }

        @Override // st.s
        public boolean d(st.p pVar) {
            return false;
        }

        @Override // st.s
        public st.q a(st.q qVar, Locale locale, st.d dVar) {
            return qVar;
        }
    }
}
