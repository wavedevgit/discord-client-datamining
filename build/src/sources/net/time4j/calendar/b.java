package net.time4j.calendar;

import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import mt.a0;
import mt.x;
import mt.z;
import net.time4j.a1;
import net.time4j.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public static final mt.p f40346a = m.f40382d;

    /* renamed from: net.time4j.calendar.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class C0522b implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40347d;

        private mt.p b(mt.q qVar, boolean z10) {
            f V = f.V(qVar.getClass(), this.f40347d.model);
            int k10 = k(qVar);
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.o(a0Var)).longValue();
            int j10 = qVar.j(this.f40347d.dayElement);
            if (z10) {
                if (((Integer) qVar.u(this.f40347d.dayElement)).intValue() < j10 + (((Long) qVar.E(V, qVar.u(V)).o(a0Var)).longValue() - longValue)) {
                    return this.f40347d.dayElement;
                }
            } else if (k10 <= 1) {
                if (((Integer) qVar.v(this.f40347d.dayElement)).intValue() > j10 - (longValue - ((Long) qVar.E(V, qVar.v(V)).o(a0Var)).longValue())) {
                    return this.f40347d.dayElement;
                }
            }
            return V;
        }

        private int e(mt.q qVar) {
            return m(qVar, 1);
        }

        private int g(mt.q qVar) {
            return m(qVar, -1);
        }

        private int k(mt.q qVar) {
            return m(qVar, 0);
        }

        private int m(mt.q qVar, int i10) {
            int i11;
            int j10 = qVar.j(this.f40347d.dayElement);
            int e10 = b.c((((Long) qVar.o(a0.UTC)).longValue() - j10) + 1).e(this.f40347d.model);
            if (e10 <= 8 - this.f40347d.model.g()) {
                i11 = 2 - e10;
            } else {
                i11 = 9 - e10;
            }
            if (i10 != -1) {
                if (i10 != 0) {
                    if (i10 == 1) {
                        j10 = ((Integer) qVar.u(this.f40347d.dayElement)).intValue();
                    } else {
                        throw new AssertionError("Unexpected: " + i10);
                    }
                }
            } else {
                j10 = 1;
            }
            return kt.c.a(j10 - i11, 7) + 1;
        }

        private mt.q p(mt.q qVar, int i10) {
            int k10 = k(qVar);
            if (i10 == k10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.o(a0Var)).longValue() + ((i10 - k10) * 7));
        }

        @Override // mt.z
        /* renamed from: c */
        public mt.p a(mt.q qVar) {
            return b(qVar, true);
        }

        @Override // mt.z
        /* renamed from: d */
        public mt.p h(mt.q qVar) {
            return b(qVar, false);
        }

        @Override // mt.z
        /* renamed from: f */
        public Integer l(mt.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // mt.z
        /* renamed from: i */
        public Integer r(mt.q qVar) {
            return Integer.valueOf(g(qVar));
        }

        @Override // mt.z
        /* renamed from: j */
        public Integer z(mt.q qVar) {
            return Integer.valueOf(k(qVar));
        }

        @Override // mt.z
        /* renamed from: n */
        public boolean q(mt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < g(qVar) || intValue > e(qVar)) {
                return false;
            }
            return true;
        }

        @Override // mt.z
        /* renamed from: s */
        public mt.q x(mt.q qVar, Integer num, boolean z10) {
            if (num != null && (z10 || q(qVar, num))) {
                return p(qVar, num.intValue());
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private C0522b(d dVar) {
            this.f40347d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40348d;

        private int b(mt.q qVar) {
            int g10;
            int j10 = qVar.j(this.f40348d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= j10) {
                if (f(qVar, 1) + g(qVar, 0) <= j10) {
                    return 1;
                }
                g10 = (j10 - f10) / 7;
            } else {
                g10 = ((j10 + g(qVar, -1)) - f(qVar, -1)) / 7;
            }
            return g10 + 1;
        }

        private mt.p c(Object obj) {
            return new f((Class) obj, this.f40348d.model);
        }

        private int f(mt.q qVar, int i10) {
            y0 n10 = n(qVar, i10);
            a1 a1Var = this.f40348d.model;
            int e10 = n10.e(a1Var);
            if (e10 <= 8 - a1Var.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int g(mt.q qVar, int i10) {
            int j10 = qVar.j(this.f40348d.dayElement);
            if (i10 == -1) {
                mt.p pVar = this.f40348d.dayElement;
                a0 a0Var = a0.UTC;
                return b.d(pVar, qVar.D(a0Var, ((Long) qVar.o(a0Var)).longValue() - j10));
            } else if (i10 == 0) {
                return b.d(this.f40348d.dayElement, qVar);
            } else {
                if (i10 == 1) {
                    int d10 = b.d(this.f40348d.dayElement, qVar);
                    mt.p pVar2 = this.f40348d.dayElement;
                    a0 a0Var2 = a0.UTC;
                    return b.d(pVar2, qVar.D(a0Var2, ((((Long) qVar.o(a0Var2)).longValue() + d10) + 1) - j10));
                }
                throw new AssertionError("Unexpected: " + i10);
            }
        }

        private int i(mt.q qVar) {
            int j10 = qVar.j(this.f40348d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= j10) {
                int f11 = f(qVar, 1) + g(qVar, 0);
                if (f11 <= j10) {
                    try {
                        int f12 = f(qVar, 1);
                        a0 a0Var = a0.UTC;
                        f11 = f(qVar.D(a0Var, ((Long) qVar.o(a0Var)).longValue() + 7), 1) + g(qVar, 1);
                        f10 = f12;
                    } catch (RuntimeException unused) {
                        f11 += 7;
                    }
                }
                return (f11 - f10) / 7;
            }
            return ((f10 + g(qVar, -1)) - f(qVar, -1)) / 7;
        }

        private y0 n(mt.q qVar, int i10) {
            int j10 = qVar.j(this.f40348d.dayElement);
            if (i10 != -1) {
                if (i10 == 0) {
                    return b.c((((Long) qVar.o(a0.UTC)).longValue() - j10) + 1);
                }
                if (i10 == 1) {
                    return b.c(((((Long) qVar.o(a0.UTC)).longValue() + b.d(this.f40348d.dayElement, qVar)) + 1) - j10);
                }
                throw new AssertionError("Unexpected: " + i10);
            }
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.o(a0Var)).longValue() - j10;
            return b.c((longValue - qVar.D(a0Var, longValue).j(this.f40348d.dayElement)) + 1);
        }

        private mt.q s(mt.q qVar, int i10) {
            int b10 = b(qVar);
            if (i10 == b10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.o(a0Var)).longValue() + ((i10 - b10) * 7));
        }

        @Override // mt.z
        /* renamed from: d */
        public mt.p a(mt.q qVar) {
            return c(qVar.getClass());
        }

        @Override // mt.z
        /* renamed from: e */
        public mt.p h(mt.q qVar) {
            return c(qVar.getClass());
        }

        @Override // mt.z
        /* renamed from: j */
        public Integer l(mt.q qVar) {
            return Integer.valueOf(i(qVar));
        }

        @Override // mt.z
        /* renamed from: k */
        public Integer r(mt.q qVar) {
            return 1;
        }

        @Override // mt.z
        /* renamed from: m */
        public Integer z(mt.q qVar) {
            return Integer.valueOf(b(qVar));
        }

        @Override // mt.z
        /* renamed from: p */
        public boolean q(mt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < 1 || intValue > i(qVar)) {
                return false;
            }
            return true;
        }

        @Override // mt.z
        /* renamed from: t */
        public mt.q x(mt.q qVar, Integer num, boolean z10) {
            int intValue = num.intValue();
            if (!z10 && !q(qVar, num)) {
                throw new IllegalArgumentException("Invalid value: " + intValue + " (context=" + qVar + ")");
            }
            return s(qVar, intValue);
        }

        private c(d dVar) {
            this.f40348d = dVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class d extends net.time4j.calendar.service.f {
        private static final long serialVersionUID = -7471192143785466686L;
        private final boolean bounded;
        private final mt.p dayElement;
        private final a1 model;

        d(String str, Class cls, int i10, int i11, char c10, a1 a1Var, mt.p pVar, boolean z10) {
            super(str, cls, i10, i11, c10);
            if (a1Var != null) {
                this.model = a1Var;
                this.dayElement = pVar;
                this.bounded = z10;
                return;
            }
            throw new NullPointerException("Missing week model.");
        }

        static d K(String str, Class cls, int i10, int i11, char c10, a1 a1Var, mt.p pVar, boolean z10) {
            return new d(str, cls, i10, i11, c10, a1Var, pVar, z10);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // mt.e
        public z c(x xVar) {
            if (!F().equals(xVar.r())) {
                return null;
            }
            if (this.bounded) {
                return new C0522b(this);
            }
            return new c(this);
        }

        @Override // mt.e, mt.p
        public boolean k() {
            return true;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, mt.e
        public boolean m(mt.e eVar) {
            if (super.m(eVar)) {
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
        private final f f40349d;

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

        @Override // mt.z
        /* renamed from: d */
        public y0 l(mt.q qVar) {
            long a10 = x.G(qVar.getClass()).q().a();
            long longValue = ((Long) qVar.o(a0.UTC)).longValue();
            if ((longValue + 7) - b.c(longValue).e(this.f40349d.model) > a10) {
                return b.c(a10);
            }
            return this.f40349d.f();
        }

        @Override // mt.z
        /* renamed from: e */
        public y0 r(mt.q qVar) {
            long d10 = x.G(qVar.getClass()).q().d();
            long longValue = ((Long) qVar.o(a0.UTC)).longValue();
            if ((longValue + 1) - b.c(longValue).e(this.f40349d.model) < d10) {
                return b.c(d10);
            }
            return this.f40349d.A();
        }

        @Override // mt.z
        /* renamed from: f */
        public y0 z(mt.q qVar) {
            return b.c(((Long) qVar.o(a0.UTC)).longValue());
        }

        @Override // mt.z
        /* renamed from: g */
        public boolean q(mt.q qVar, y0 y0Var) {
            if (y0Var == null) {
                return false;
            }
            try {
                x(qVar, y0Var, false);
                return true;
            } catch (ArithmeticException | IllegalArgumentException unused) {
                return false;
            }
        }

        @Override // mt.z
        /* renamed from: i */
        public mt.q x(mt.q qVar, y0 y0Var, boolean z10) {
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.o(a0Var)).longValue();
            y0 c10 = b.c(longValue);
            if (y0Var == c10) {
                return qVar;
            }
            return qVar.D(a0Var, (longValue + y0Var.e(this.f40349d.model)) - c10.e(this.f40349d.model));
        }

        private e(f fVar) {
            this.f40349d = fVar;
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

        @Override // mt.p
        /* renamed from: S */
        public y0 f() {
            return this.model.f().f(6);
        }

        @Override // mt.p
        /* renamed from: T */
        public y0 A() {
            return this.model.f();
        }

        @Override // net.time4j.calendar.service.e
        /* renamed from: U */
        public int O(y0 y0Var) {
            return y0Var.e(this.model);
        }

        @Override // mt.e, java.util.Comparator
        /* renamed from: b */
        public int compare(mt.o oVar, mt.o oVar2) {
            int e10 = ((y0) oVar.o(this)).e(this.model);
            int e11 = ((y0) oVar2.o(this)).e(this.model);
            if (e10 < e11) {
                return -1;
            }
            if (e10 == e11) {
                return 0;
            }
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // mt.e
        public z c(x xVar) {
            if (!F().equals(xVar.r())) {
                return null;
            }
            return new e(this);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, mt.e
        public boolean m(mt.e eVar) {
            if (super.m(eVar)) {
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
        return y0.h(kt.c.d(j10 + 5, 7) + 1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int d(mt.p pVar, mt.q qVar) {
        return ((Integer) Integer.class.cast(qVar.u(pVar))).intValue();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class g implements mt.s {

        /* renamed from: a  reason: collision with root package name */
        private final Class f40350a;

        /* renamed from: b  reason: collision with root package name */
        private final mt.p f40351b;

        /* renamed from: c  reason: collision with root package name */
        private final mt.p f40352c;

        /* renamed from: d  reason: collision with root package name */
        private final a1 f40353d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Class cls, mt.p pVar, mt.p pVar2, a1 a1Var) {
            this.f40350a = cls;
            this.f40351b = pVar;
            this.f40352c = pVar2;
            this.f40353d = a1Var;
        }

        @Override // mt.s
        public boolean a(mt.p pVar) {
            return false;
        }

        @Override // mt.s
        public Set b(Locale locale, mt.d dVar) {
            a1 j10;
            if (locale.getCountry().isEmpty()) {
                j10 = this.f40353d;
            } else {
                j10 = a1.j(locale);
            }
            a1 a1Var = j10;
            HashSet hashSet = new HashSet();
            hashSet.add(f.V(this.f40350a, a1Var));
            hashSet.add(d.K("WEEK_OF_MONTH", this.f40350a, 1, 5, 'W', a1Var, this.f40351b, false));
            hashSet.add(d.K("WEEK_OF_YEAR", this.f40350a, 1, 52, 'w', a1Var, this.f40352c, false));
            hashSet.add(d.K("BOUNDED_WEEK_OF_MONTH", this.f40350a, 1, 5, (char) 0, a1Var, this.f40351b, true));
            hashSet.add(d.K("BOUNDED_WEEK_OF_YEAR", this.f40350a, 1, 52, (char) 0, a1Var, this.f40352c, true));
            return Collections.unmodifiableSet(hashSet);
        }

        @Override // mt.s
        public boolean d(Class cls) {
            return this.f40350a.equals(cls);
        }

        @Override // mt.s
        public mt.q c(mt.q qVar, Locale locale, mt.d dVar) {
            return qVar;
        }
    }
}
