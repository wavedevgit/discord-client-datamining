package net.time4j.calendar;

import bu.a0;
import bu.x;
import bu.z;
import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import net.time4j.a1;
import net.time4j.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public static final bu.p f37305a = m.f37341d;

    /* renamed from: net.time4j.calendar.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class C0529b implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f37306d;

        private bu.p b(bu.q qVar, boolean z10) {
            f V = f.V(qVar.getClass(), this.f37306d.model);
            int k10 = k(qVar);
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.k(a0Var)).longValue();
            int m10 = qVar.m(this.f37306d.dayElement);
            if (z10) {
                if (((Integer) qVar.v(this.f37306d.dayElement)).intValue() < m10 + (((Long) qVar.E(V, qVar.v(V)).k(a0Var)).longValue() - longValue)) {
                    return this.f37306d.dayElement;
                }
            } else if (k10 <= 1) {
                if (((Integer) qVar.t(this.f37306d.dayElement)).intValue() > m10 - (longValue - ((Long) qVar.E(V, qVar.t(V)).k(a0Var)).longValue())) {
                    return this.f37306d.dayElement;
                }
            }
            return V;
        }

        private int e(bu.q qVar) {
            return l(qVar, 1);
        }

        private int g(bu.q qVar) {
            return l(qVar, -1);
        }

        private int k(bu.q qVar) {
            return l(qVar, 0);
        }

        private int l(bu.q qVar, int i10) {
            int i11;
            int m10 = qVar.m(this.f37306d.dayElement);
            int e10 = b.c((((Long) qVar.k(a0.UTC)).longValue() - m10) + 1).e(this.f37306d.model);
            if (e10 <= 8 - this.f37306d.model.g()) {
                i11 = 2 - e10;
            } else {
                i11 = 9 - e10;
            }
            if (i10 != -1) {
                if (i10 != 0) {
                    if (i10 == 1) {
                        m10 = ((Integer) qVar.v(this.f37306d.dayElement)).intValue();
                    } else {
                        throw new AssertionError("Unexpected: " + i10);
                    }
                }
            } else {
                m10 = 1;
            }
            return zt.c.a(m10 - i11, 7) + 1;
        }

        private bu.q r(bu.q qVar, int i10) {
            int k10 = k(qVar);
            if (i10 == k10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.k(a0Var)).longValue() + ((i10 - k10) * 7));
        }

        @Override // bu.z
        /* renamed from: c */
        public bu.p a(bu.q qVar) {
            return b(qVar, true);
        }

        @Override // bu.z
        /* renamed from: d */
        public bu.p h(bu.q qVar) {
            return b(qVar, false);
        }

        @Override // bu.z
        /* renamed from: f */
        public Integer m(bu.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // bu.z
        /* renamed from: i */
        public Integer q(bu.q qVar) {
            return Integer.valueOf(g(qVar));
        }

        @Override // bu.z
        /* renamed from: j */
        public Integer y(bu.q qVar) {
            return Integer.valueOf(k(qVar));
        }

        @Override // bu.z
        /* renamed from: p */
        public boolean o(bu.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < g(qVar) || intValue > e(qVar)) {
                return false;
            }
            return true;
        }

        @Override // bu.z
        /* renamed from: s */
        public bu.q x(bu.q qVar, Integer num, boolean z10) {
            if (num != null && (z10 || o(qVar, num))) {
                return r(qVar, num.intValue());
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private C0529b(d dVar) {
            this.f37306d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f37307d;

        private int b(bu.q qVar) {
            int g10;
            int m10 = qVar.m(this.f37307d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= m10) {
                if (f(qVar, 1) + g(qVar, 0) <= m10) {
                    return 1;
                }
                g10 = (m10 - f10) / 7;
            } else {
                g10 = ((m10 + g(qVar, -1)) - f(qVar, -1)) / 7;
            }
            return g10 + 1;
        }

        private bu.p c(Object obj) {
            return new f((Class) obj, this.f37307d.model);
        }

        private int f(bu.q qVar, int i10) {
            y0 p10 = p(qVar, i10);
            a1 a1Var = this.f37307d.model;
            int e10 = p10.e(a1Var);
            if (e10 <= 8 - a1Var.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int g(bu.q qVar, int i10) {
            int m10 = qVar.m(this.f37307d.dayElement);
            if (i10 == -1) {
                bu.p pVar = this.f37307d.dayElement;
                a0 a0Var = a0.UTC;
                return b.d(pVar, qVar.D(a0Var, ((Long) qVar.k(a0Var)).longValue() - m10));
            } else if (i10 == 0) {
                return b.d(this.f37307d.dayElement, qVar);
            } else {
                if (i10 == 1) {
                    int d10 = b.d(this.f37307d.dayElement, qVar);
                    bu.p pVar2 = this.f37307d.dayElement;
                    a0 a0Var2 = a0.UTC;
                    return b.d(pVar2, qVar.D(a0Var2, ((((Long) qVar.k(a0Var2)).longValue() + d10) + 1) - m10));
                }
                throw new AssertionError("Unexpected: " + i10);
            }
        }

        private int i(bu.q qVar) {
            int m10 = qVar.m(this.f37307d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= m10) {
                int f11 = f(qVar, 1) + g(qVar, 0);
                if (f11 <= m10) {
                    try {
                        int f12 = f(qVar, 1);
                        a0 a0Var = a0.UTC;
                        f11 = f(qVar.D(a0Var, ((Long) qVar.k(a0Var)).longValue() + 7), 1) + g(qVar, 1);
                        f10 = f12;
                    } catch (RuntimeException unused) {
                        f11 += 7;
                    }
                }
                return (f11 - f10) / 7;
            }
            return ((f10 + g(qVar, -1)) - f(qVar, -1)) / 7;
        }

        private y0 p(bu.q qVar, int i10) {
            int m10 = qVar.m(this.f37307d.dayElement);
            if (i10 != -1) {
                if (i10 == 0) {
                    return b.c((((Long) qVar.k(a0.UTC)).longValue() - m10) + 1);
                }
                if (i10 == 1) {
                    return b.c(((((Long) qVar.k(a0.UTC)).longValue() + b.d(this.f37307d.dayElement, qVar)) + 1) - m10);
                }
                throw new AssertionError("Unexpected: " + i10);
            }
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.k(a0Var)).longValue() - m10;
            return b.c((longValue - qVar.D(a0Var, longValue).m(this.f37307d.dayElement)) + 1);
        }

        private bu.q s(bu.q qVar, int i10) {
            int b10 = b(qVar);
            if (i10 == b10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.k(a0Var)).longValue() + ((i10 - b10) * 7));
        }

        @Override // bu.z
        /* renamed from: d */
        public bu.p a(bu.q qVar) {
            return c(qVar.getClass());
        }

        @Override // bu.z
        /* renamed from: e */
        public bu.p h(bu.q qVar) {
            return c(qVar.getClass());
        }

        @Override // bu.z
        /* renamed from: j */
        public Integer m(bu.q qVar) {
            return Integer.valueOf(i(qVar));
        }

        @Override // bu.z
        /* renamed from: k */
        public Integer q(bu.q qVar) {
            return 1;
        }

        @Override // bu.z
        /* renamed from: l */
        public Integer y(bu.q qVar) {
            return Integer.valueOf(b(qVar));
        }

        @Override // bu.z
        /* renamed from: r */
        public boolean o(bu.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < 1 || intValue > i(qVar)) {
                return false;
            }
            return true;
        }

        @Override // bu.z
        /* renamed from: t */
        public bu.q x(bu.q qVar, Integer num, boolean z10) {
            int intValue = num.intValue();
            if (!z10 && !o(qVar, num)) {
                throw new IllegalArgumentException("Invalid value: " + intValue + " (context=" + qVar + ")");
            }
            return s(qVar, intValue);
        }

        private c(d dVar) {
            this.f37307d = dVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class d extends net.time4j.calendar.service.f {
        private static final long serialVersionUID = -7471192143785466686L;
        private final boolean bounded;
        private final bu.p dayElement;
        private final a1 model;

        d(String str, Class cls, int i10, int i11, char c10, a1 a1Var, bu.p pVar, boolean z10) {
            super(str, cls, i10, i11, c10);
            if (a1Var != null) {
                this.model = a1Var;
                this.dayElement = pVar;
                this.bounded = z10;
                return;
            }
            throw new NullPointerException("Missing week model.");
        }

        static d K(String str, Class cls, int i10, int i11, char c10, a1 a1Var, bu.p pVar, boolean z10) {
            return new d(str, cls, i10, i11, c10, a1Var, pVar, z10);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // bu.e
        public z c(x xVar) {
            if (!F().equals(xVar.q())) {
                return null;
            }
            if (this.bounded) {
                return new C0529b(this);
            }
            return new c(this);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, bu.e
        public boolean j(bu.e eVar) {
            if (super.j(eVar)) {
                d dVar = (d) d.class.cast(eVar);
                if (this.model.equals(dVar.model) && this.bounded == dVar.bounded) {
                    return true;
                }
            }
            return false;
        }

        @Override // bu.e, bu.p
        public boolean k() {
            return true;
        }

        @Override // net.time4j.calendar.service.d
        protected Object readResolve() {
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements z {

        /* renamed from: d  reason: collision with root package name */
        private final f f37308d;

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

        @Override // bu.z
        /* renamed from: d */
        public y0 m(bu.q qVar) {
            long a10 = x.G(qVar.getClass()).p().a();
            long longValue = ((Long) qVar.k(a0.UTC)).longValue();
            if ((longValue + 7) - b.c(longValue).e(this.f37308d.model) > a10) {
                return b.c(a10);
            }
            return this.f37308d.f();
        }

        @Override // bu.z
        /* renamed from: e */
        public y0 q(bu.q qVar) {
            long d10 = x.G(qVar.getClass()).p().d();
            long longValue = ((Long) qVar.k(a0.UTC)).longValue();
            if ((longValue + 1) - b.c(longValue).e(this.f37308d.model) < d10) {
                return b.c(d10);
            }
            return this.f37308d.B();
        }

        @Override // bu.z
        /* renamed from: f */
        public y0 y(bu.q qVar) {
            return b.c(((Long) qVar.k(a0.UTC)).longValue());
        }

        @Override // bu.z
        /* renamed from: g */
        public boolean o(bu.q qVar, y0 y0Var) {
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

        @Override // bu.z
        /* renamed from: i */
        public bu.q x(bu.q qVar, y0 y0Var, boolean z10) {
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.k(a0Var)).longValue();
            y0 c10 = b.c(longValue);
            if (y0Var == c10) {
                return qVar;
            }
            return qVar.D(a0Var, (longValue + y0Var.e(this.f37308d.model)) - c10.e(this.f37308d.model));
        }

        private e(f fVar) {
            this.f37308d = fVar;
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

        @Override // bu.p
        /* renamed from: S */
        public y0 f() {
            return this.model.f().f(6);
        }

        @Override // bu.p
        /* renamed from: T */
        public y0 B() {
            return this.model.f();
        }

        @Override // net.time4j.calendar.service.e
        /* renamed from: U */
        public int O(y0 y0Var) {
            return y0Var.e(this.model);
        }

        @Override // bu.e, java.util.Comparator
        /* renamed from: b */
        public int compare(bu.o oVar, bu.o oVar2) {
            int e10 = ((y0) oVar.k(this)).e(this.model);
            int e11 = ((y0) oVar2.k(this)).e(this.model);
            if (e10 < e11) {
                return -1;
            }
            if (e10 == e11) {
                return 0;
            }
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // bu.e
        public z c(x xVar) {
            if (!F().equals(xVar.q())) {
                return null;
            }
            return new e(this);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, bu.e
        public boolean j(bu.e eVar) {
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
        return y0.h(zt.c.d(j10 + 5, 7) + 1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int d(bu.p pVar, bu.q qVar) {
        return ((Integer) Integer.class.cast(qVar.v(pVar))).intValue();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class g implements bu.s {

        /* renamed from: a  reason: collision with root package name */
        private final Class f37309a;

        /* renamed from: b  reason: collision with root package name */
        private final bu.p f37310b;

        /* renamed from: c  reason: collision with root package name */
        private final bu.p f37311c;

        /* renamed from: d  reason: collision with root package name */
        private final a1 f37312d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Class cls, bu.p pVar, bu.p pVar2, a1 a1Var) {
            this.f37309a = cls;
            this.f37310b = pVar;
            this.f37311c = pVar2;
            this.f37312d = a1Var;
        }

        @Override // bu.s
        public Set a(Locale locale, bu.d dVar) {
            a1 j10;
            if (locale.getCountry().isEmpty()) {
                j10 = this.f37312d;
            } else {
                j10 = a1.j(locale);
            }
            a1 a1Var = j10;
            HashSet hashSet = new HashSet();
            hashSet.add(f.V(this.f37309a, a1Var));
            hashSet.add(d.K("WEEK_OF_MONTH", this.f37309a, 1, 5, 'W', a1Var, this.f37310b, false));
            hashSet.add(d.K("WEEK_OF_YEAR", this.f37309a, 1, 52, 'w', a1Var, this.f37311c, false));
            hashSet.add(d.K("BOUNDED_WEEK_OF_MONTH", this.f37309a, 1, 5, (char) 0, a1Var, this.f37310b, true));
            hashSet.add(d.K("BOUNDED_WEEK_OF_YEAR", this.f37309a, 1, 52, (char) 0, a1Var, this.f37311c, true));
            return Collections.unmodifiableSet(hashSet);
        }

        @Override // bu.s
        public boolean b(bu.p pVar) {
            return false;
        }

        @Override // bu.s
        public boolean d(Class cls) {
            return this.f37309a.equals(cls);
        }

        @Override // bu.s
        public bu.q c(bu.q qVar, Locale locale, bu.d dVar) {
            return qVar;
        }
    }
}
