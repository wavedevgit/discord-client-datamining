package net.time4j.calendar;

import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import kt.a0;
import kt.x;
import kt.z;
import net.time4j.a1;
import net.time4j.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public static final kt.p f40307a = m.f40343d;

    /* renamed from: net.time4j.calendar.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class C0525b implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40308d;

        private kt.p b(kt.q qVar, boolean z10) {
            f V = f.V(qVar.getClass(), this.f40308d.model);
            int n10 = n(qVar);
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.v(a0Var)).longValue();
            int t10 = qVar.t(this.f40308d.dayElement);
            if (z10) {
                if (((Integer) qVar.p(this.f40308d.dayElement)).intValue() < t10 + (((Long) qVar.E(V, qVar.p(V)).v(a0Var)).longValue() - longValue)) {
                    return this.f40308d.dayElement;
                }
            } else if (n10 <= 1) {
                if (((Integer) qVar.k(this.f40308d.dayElement)).intValue() > t10 - (longValue - ((Long) qVar.E(V, qVar.k(V)).v(a0Var)).longValue())) {
                    return this.f40308d.dayElement;
                }
            }
            return V;
        }

        private int e(kt.q qVar) {
            return p(qVar, 1);
        }

        private int j(kt.q qVar) {
            return p(qVar, -1);
        }

        private int n(kt.q qVar) {
            return p(qVar, 0);
        }

        private int p(kt.q qVar, int i10) {
            int i11;
            int t10 = qVar.t(this.f40308d.dayElement);
            int e10 = b.c((((Long) qVar.v(a0.UTC)).longValue() - t10) + 1).e(this.f40308d.model);
            if (e10 <= 8 - this.f40308d.model.g()) {
                i11 = 2 - e10;
            } else {
                i11 = 9 - e10;
            }
            if (i10 != -1) {
                if (i10 != 0) {
                    if (i10 == 1) {
                        t10 = ((Integer) qVar.p(this.f40308d.dayElement)).intValue();
                    } else {
                        throw new AssertionError("Unexpected: " + i10);
                    }
                }
            } else {
                t10 = 1;
            }
            return ht.c.a(t10 - i11, 7) + 1;
        }

        private kt.q r(kt.q qVar, int i10) {
            int n10 = n(qVar);
            if (i10 == n10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.v(a0Var)).longValue() + ((i10 - n10) * 7));
        }

        @Override // kt.z
        /* renamed from: c */
        public kt.p a(kt.q qVar) {
            return b(qVar, true);
        }

        @Override // kt.z
        /* renamed from: d */
        public kt.p g(kt.q qVar) {
            return b(qVar, false);
        }

        @Override // kt.z
        /* renamed from: f */
        public Integer h(kt.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // kt.z
        /* renamed from: k */
        public Integer o(kt.q qVar) {
            return Integer.valueOf(j(qVar));
        }

        @Override // kt.z
        /* renamed from: m */
        public Integer x(kt.q qVar) {
            return Integer.valueOf(n(qVar));
        }

        @Override // kt.z
        /* renamed from: q */
        public boolean l(kt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < j(qVar) || intValue > e(qVar)) {
                return false;
            }
            return true;
        }

        @Override // kt.z
        /* renamed from: s */
        public kt.q v(kt.q qVar, Integer num, boolean z10) {
            if (num != null && (z10 || l(qVar, num))) {
                return r(qVar, num.intValue());
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private C0525b(d dVar) {
            this.f40308d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40309d;

        private int b(kt.q qVar) {
            int j10;
            int t10 = qVar.t(this.f40309d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= t10) {
                if (f(qVar, 1) + j(qVar, 0) <= t10) {
                    return 1;
                }
                j10 = (t10 - f10) / 7;
            } else {
                j10 = ((t10 + j(qVar, -1)) - f(qVar, -1)) / 7;
            }
            return j10 + 1;
        }

        private kt.p c(Object obj) {
            return new f((Class) obj, this.f40309d.model);
        }

        private int f(kt.q qVar, int i10) {
            y0 q10 = q(qVar, i10);
            a1 a1Var = this.f40309d.model;
            int e10 = q10.e(a1Var);
            if (e10 <= 8 - a1Var.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int j(kt.q qVar, int i10) {
            int t10 = qVar.t(this.f40309d.dayElement);
            if (i10 == -1) {
                kt.p pVar = this.f40309d.dayElement;
                a0 a0Var = a0.UTC;
                return b.d(pVar, qVar.D(a0Var, ((Long) qVar.v(a0Var)).longValue() - t10));
            } else if (i10 == 0) {
                return b.d(this.f40309d.dayElement, qVar);
            } else {
                if (i10 == 1) {
                    int d10 = b.d(this.f40309d.dayElement, qVar);
                    kt.p pVar2 = this.f40309d.dayElement;
                    a0 a0Var2 = a0.UTC;
                    return b.d(pVar2, qVar.D(a0Var2, ((((Long) qVar.v(a0Var2)).longValue() + d10) + 1) - t10));
                }
                throw new AssertionError("Unexpected: " + i10);
            }
        }

        private int k(kt.q qVar) {
            int t10 = qVar.t(this.f40309d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= t10) {
                int f11 = f(qVar, 1) + j(qVar, 0);
                if (f11 <= t10) {
                    try {
                        int f12 = f(qVar, 1);
                        a0 a0Var = a0.UTC;
                        f11 = f(qVar.D(a0Var, ((Long) qVar.v(a0Var)).longValue() + 7), 1) + j(qVar, 1);
                        f10 = f12;
                    } catch (RuntimeException unused) {
                        f11 += 7;
                    }
                }
                return (f11 - f10) / 7;
            }
            return ((f10 + j(qVar, -1)) - f(qVar, -1)) / 7;
        }

        private y0 q(kt.q qVar, int i10) {
            int t10 = qVar.t(this.f40309d.dayElement);
            if (i10 != -1) {
                if (i10 == 0) {
                    return b.c((((Long) qVar.v(a0.UTC)).longValue() - t10) + 1);
                }
                if (i10 == 1) {
                    return b.c(((((Long) qVar.v(a0.UTC)).longValue() + b.d(this.f40309d.dayElement, qVar)) + 1) - t10);
                }
                throw new AssertionError("Unexpected: " + i10);
            }
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.v(a0Var)).longValue() - t10;
            return b.c((longValue - qVar.D(a0Var, longValue).t(this.f40309d.dayElement)) + 1);
        }

        private kt.q s(kt.q qVar, int i10) {
            int b10 = b(qVar);
            if (i10 == b10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.v(a0Var)).longValue() + ((i10 - b10) * 7));
        }

        @Override // kt.z
        /* renamed from: d */
        public kt.p a(kt.q qVar) {
            return c(qVar.getClass());
        }

        @Override // kt.z
        /* renamed from: e */
        public kt.p g(kt.q qVar) {
            return c(qVar.getClass());
        }

        @Override // kt.z
        /* renamed from: m */
        public Integer h(kt.q qVar) {
            return Integer.valueOf(k(qVar));
        }

        @Override // kt.z
        /* renamed from: n */
        public Integer o(kt.q qVar) {
            return 1;
        }

        @Override // kt.z
        /* renamed from: p */
        public Integer x(kt.q qVar) {
            return Integer.valueOf(b(qVar));
        }

        @Override // kt.z
        /* renamed from: r */
        public boolean l(kt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < 1 || intValue > k(qVar)) {
                return false;
            }
            return true;
        }

        @Override // kt.z
        /* renamed from: u */
        public kt.q v(kt.q qVar, Integer num, boolean z10) {
            int intValue = num.intValue();
            if (!z10 && !l(qVar, num)) {
                throw new IllegalArgumentException("Invalid value: " + intValue + " (context=" + qVar + ")");
            }
            return s(qVar, intValue);
        }

        private c(d dVar) {
            this.f40309d = dVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class d extends net.time4j.calendar.service.f {
        private static final long serialVersionUID = -7471192143785466686L;
        private final boolean bounded;
        private final kt.p dayElement;
        private final a1 model;

        d(String str, Class cls, int i10, int i11, char c10, a1 a1Var, kt.p pVar, boolean z10) {
            super(str, cls, i10, i11, c10);
            if (a1Var != null) {
                this.model = a1Var;
                this.dayElement = pVar;
                this.bounded = z10;
                return;
            }
            throw new NullPointerException("Missing week model.");
        }

        static d K(String str, Class cls, int i10, int i11, char c10, a1 a1Var, kt.p pVar, boolean z10) {
            return new d(str, cls, i10, i11, c10, a1Var, pVar, z10);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kt.e
        public z c(x xVar) {
            if (!F().equals(xVar.o())) {
                return null;
            }
            if (this.bounded) {
                return new C0525b(this);
            }
            return new c(this);
        }

        @Override // kt.e, kt.p
        public boolean f() {
            return true;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, kt.e
        public boolean j(kt.e eVar) {
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
        private final f f40310d;

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

        @Override // kt.z
        /* renamed from: d */
        public y0 h(kt.q qVar) {
            long a10 = x.G(qVar.getClass()).n().a();
            long longValue = ((Long) qVar.v(a0.UTC)).longValue();
            if ((longValue + 7) - b.c(longValue).e(this.f40310d.model) > a10) {
                return b.c(a10);
            }
            return this.f40310d.e();
        }

        @Override // kt.z
        /* renamed from: e */
        public y0 o(kt.q qVar) {
            long d10 = x.G(qVar.getClass()).n().d();
            long longValue = ((Long) qVar.v(a0.UTC)).longValue();
            if ((longValue + 1) - b.c(longValue).e(this.f40310d.model) < d10) {
                return b.c(d10);
            }
            return this.f40310d.A();
        }

        @Override // kt.z
        /* renamed from: f */
        public y0 x(kt.q qVar) {
            return b.c(((Long) qVar.v(a0.UTC)).longValue());
        }

        @Override // kt.z
        /* renamed from: j */
        public boolean l(kt.q qVar, y0 y0Var) {
            if (y0Var == null) {
                return false;
            }
            try {
                v(qVar, y0Var, false);
                return true;
            } catch (ArithmeticException | IllegalArgumentException unused) {
                return false;
            }
        }

        @Override // kt.z
        /* renamed from: k */
        public kt.q v(kt.q qVar, y0 y0Var, boolean z10) {
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.v(a0Var)).longValue();
            y0 c10 = b.c(longValue);
            if (y0Var == c10) {
                return qVar;
            }
            return qVar.D(a0Var, (longValue + y0Var.e(this.f40310d.model)) - c10.e(this.f40310d.model));
        }

        private e(f fVar) {
            this.f40310d = fVar;
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

        @Override // kt.p
        /* renamed from: S */
        public y0 e() {
            return this.model.f().f(6);
        }

        @Override // kt.p
        /* renamed from: T */
        public y0 A() {
            return this.model.f();
        }

        @Override // net.time4j.calendar.service.e
        /* renamed from: U */
        public int O(y0 y0Var) {
            return y0Var.e(this.model);
        }

        @Override // kt.e, java.util.Comparator
        /* renamed from: b */
        public int compare(kt.o oVar, kt.o oVar2) {
            int e10 = ((y0) oVar.v(this)).e(this.model);
            int e11 = ((y0) oVar2.v(this)).e(this.model);
            if (e10 < e11) {
                return -1;
            }
            if (e10 == e11) {
                return 0;
            }
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kt.e
        public z c(x xVar) {
            if (!F().equals(xVar.o())) {
                return null;
            }
            return new e(this);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, kt.e
        public boolean j(kt.e eVar) {
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
        return y0.h(ht.c.d(j10 + 5, 7) + 1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int d(kt.p pVar, kt.q qVar) {
        return ((Integer) Integer.class.cast(qVar.p(pVar))).intValue();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class g implements kt.s {

        /* renamed from: a  reason: collision with root package name */
        private final Class f40311a;

        /* renamed from: b  reason: collision with root package name */
        private final kt.p f40312b;

        /* renamed from: c  reason: collision with root package name */
        private final kt.p f40313c;

        /* renamed from: d  reason: collision with root package name */
        private final a1 f40314d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Class cls, kt.p pVar, kt.p pVar2, a1 a1Var) {
            this.f40311a = cls;
            this.f40312b = pVar;
            this.f40313c = pVar2;
            this.f40314d = a1Var;
        }

        @Override // kt.s
        public boolean b(kt.p pVar) {
            return false;
        }

        @Override // kt.s
        public Set c(Locale locale, kt.d dVar) {
            a1 j10;
            if (locale.getCountry().isEmpty()) {
                j10 = this.f40314d;
            } else {
                j10 = a1.j(locale);
            }
            a1 a1Var = j10;
            HashSet hashSet = new HashSet();
            hashSet.add(f.V(this.f40311a, a1Var));
            hashSet.add(d.K("WEEK_OF_MONTH", this.f40311a, 1, 5, 'W', a1Var, this.f40312b, false));
            hashSet.add(d.K("WEEK_OF_YEAR", this.f40311a, 1, 52, 'w', a1Var, this.f40313c, false));
            hashSet.add(d.K("BOUNDED_WEEK_OF_MONTH", this.f40311a, 1, 5, (char) 0, a1Var, this.f40312b, true));
            hashSet.add(d.K("BOUNDED_WEEK_OF_YEAR", this.f40311a, 1, 52, (char) 0, a1Var, this.f40313c, true));
            return Collections.unmodifiableSet(hashSet);
        }

        @Override // kt.s
        public boolean d(Class cls) {
            return this.f40311a.equals(cls);
        }

        @Override // kt.s
        public kt.q a(kt.q qVar, Locale locale, kt.d dVar) {
            return qVar;
        }
    }
}
