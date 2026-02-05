package net.time4j.calendar;

import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import net.time4j.a1;
import net.time4j.y0;
import pt.a0;
import pt.x;
import pt.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public static final pt.p f39806a = m.f39842d;

    /* renamed from: net.time4j.calendar.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class C0524b implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f39807d;

        private pt.p b(pt.q qVar, boolean z10) {
            f V = f.V(qVar.getClass(), this.f39807d.model);
            int l10 = l(qVar);
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.v(a0Var)).longValue();
            int r10 = qVar.r(this.f39807d.dayElement);
            if (z10) {
                if (((Integer) qVar.n(this.f39807d.dayElement)).intValue() < r10 + (((Long) qVar.E(V, qVar.n(V)).v(a0Var)).longValue() - longValue)) {
                    return this.f39807d.dayElement;
                }
            } else if (l10 <= 1) {
                if (((Integer) qVar.s(this.f39807d.dayElement)).intValue() > r10 - (longValue - ((Long) qVar.E(V, qVar.s(V)).v(a0Var)).longValue())) {
                    return this.f39807d.dayElement;
                }
            }
            return V;
        }

        private int e(pt.q qVar) {
            return n(qVar, 1);
        }

        private int g(pt.q qVar) {
            return n(qVar, -1);
        }

        private int l(pt.q qVar) {
            return n(qVar, 0);
        }

        private int n(pt.q qVar, int i10) {
            int i11;
            int r10 = qVar.r(this.f39807d.dayElement);
            int e10 = b.c((((Long) qVar.v(a0.UTC)).longValue() - r10) + 1).e(this.f39807d.model);
            if (e10 <= 8 - this.f39807d.model.g()) {
                i11 = 2 - e10;
            } else {
                i11 = 9 - e10;
            }
            if (i10 != -1) {
                if (i10 != 0) {
                    if (i10 == 1) {
                        r10 = ((Integer) qVar.n(this.f39807d.dayElement)).intValue();
                    } else {
                        throw new AssertionError("Unexpected: " + i10);
                    }
                }
            } else {
                r10 = 1;
            }
            return nt.c.a(r10 - i11, 7) + 1;
        }

        private pt.q q(pt.q qVar, int i10) {
            int l10 = l(qVar);
            if (i10 == l10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.v(a0Var)).longValue() + ((i10 - l10) * 7));
        }

        @Override // pt.z
        /* renamed from: c */
        public pt.p a(pt.q qVar) {
            return b(qVar, true);
        }

        @Override // pt.z
        /* renamed from: d */
        public pt.p h(pt.q qVar) {
            return b(qVar, false);
        }

        @Override // pt.z
        /* renamed from: f */
        public Integer k(pt.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // pt.z
        /* renamed from: i */
        public Integer r(pt.q qVar) {
            return Integer.valueOf(g(qVar));
        }

        @Override // pt.z
        /* renamed from: j */
        public Integer y(pt.q qVar) {
            return Integer.valueOf(l(qVar));
        }

        @Override // pt.z
        /* renamed from: o */
        public boolean p(pt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < g(qVar) || intValue > e(qVar)) {
                return false;
            }
            return true;
        }

        @Override // pt.z
        /* renamed from: s */
        public pt.q x(pt.q qVar, Integer num, boolean z10) {
            if (num != null && (z10 || p(qVar, num))) {
                return q(qVar, num.intValue());
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private C0524b(d dVar) {
            this.f39807d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f39808d;

        private int b(pt.q qVar) {
            int g10;
            int r10 = qVar.r(this.f39808d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= r10) {
                if (f(qVar, 1) + g(qVar, 0) <= r10) {
                    return 1;
                }
                g10 = (r10 - f10) / 7;
            } else {
                g10 = ((r10 + g(qVar, -1)) - f(qVar, -1)) / 7;
            }
            return g10 + 1;
        }

        private pt.p c(Object obj) {
            return new f((Class) obj, this.f39808d.model);
        }

        private int f(pt.q qVar, int i10) {
            y0 o10 = o(qVar, i10);
            a1 a1Var = this.f39808d.model;
            int e10 = o10.e(a1Var);
            if (e10 <= 8 - a1Var.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int g(pt.q qVar, int i10) {
            int r10 = qVar.r(this.f39808d.dayElement);
            if (i10 == -1) {
                pt.p pVar = this.f39808d.dayElement;
                a0 a0Var = a0.UTC;
                return b.d(pVar, qVar.D(a0Var, ((Long) qVar.v(a0Var)).longValue() - r10));
            } else if (i10 == 0) {
                return b.d(this.f39808d.dayElement, qVar);
            } else {
                if (i10 == 1) {
                    int d10 = b.d(this.f39808d.dayElement, qVar);
                    pt.p pVar2 = this.f39808d.dayElement;
                    a0 a0Var2 = a0.UTC;
                    return b.d(pVar2, qVar.D(a0Var2, ((((Long) qVar.v(a0Var2)).longValue() + d10) + 1) - r10));
                }
                throw new AssertionError("Unexpected: " + i10);
            }
        }

        private int i(pt.q qVar) {
            int r10 = qVar.r(this.f39808d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= r10) {
                int f11 = f(qVar, 1) + g(qVar, 0);
                if (f11 <= r10) {
                    try {
                        int f12 = f(qVar, 1);
                        a0 a0Var = a0.UTC;
                        f11 = f(qVar.D(a0Var, ((Long) qVar.v(a0Var)).longValue() + 7), 1) + g(qVar, 1);
                        f10 = f12;
                    } catch (RuntimeException unused) {
                        f11 += 7;
                    }
                }
                return (f11 - f10) / 7;
            }
            return ((f10 + g(qVar, -1)) - f(qVar, -1)) / 7;
        }

        private y0 o(pt.q qVar, int i10) {
            int r10 = qVar.r(this.f39808d.dayElement);
            if (i10 != -1) {
                if (i10 == 0) {
                    return b.c((((Long) qVar.v(a0.UTC)).longValue() - r10) + 1);
                }
                if (i10 == 1) {
                    return b.c(((((Long) qVar.v(a0.UTC)).longValue() + b.d(this.f39808d.dayElement, qVar)) + 1) - r10);
                }
                throw new AssertionError("Unexpected: " + i10);
            }
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.v(a0Var)).longValue() - r10;
            return b.c((longValue - qVar.D(a0Var, longValue).r(this.f39808d.dayElement)) + 1);
        }

        private pt.q s(pt.q qVar, int i10) {
            int b10 = b(qVar);
            if (i10 == b10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.v(a0Var)).longValue() + ((i10 - b10) * 7));
        }

        @Override // pt.z
        /* renamed from: d */
        public pt.p a(pt.q qVar) {
            return c(qVar.getClass());
        }

        @Override // pt.z
        /* renamed from: e */
        public pt.p h(pt.q qVar) {
            return c(qVar.getClass());
        }

        @Override // pt.z
        /* renamed from: j */
        public Integer k(pt.q qVar) {
            return Integer.valueOf(i(qVar));
        }

        @Override // pt.z
        /* renamed from: l */
        public Integer r(pt.q qVar) {
            return 1;
        }

        @Override // pt.z
        /* renamed from: n */
        public Integer y(pt.q qVar) {
            return Integer.valueOf(b(qVar));
        }

        @Override // pt.z
        /* renamed from: q */
        public boolean p(pt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < 1 || intValue > i(qVar)) {
                return false;
            }
            return true;
        }

        @Override // pt.z
        /* renamed from: t */
        public pt.q x(pt.q qVar, Integer num, boolean z10) {
            int intValue = num.intValue();
            if (!z10 && !p(qVar, num)) {
                throw new IllegalArgumentException("Invalid value: " + intValue + " (context=" + qVar + ")");
            }
            return s(qVar, intValue);
        }

        private c(d dVar) {
            this.f39808d = dVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class d extends net.time4j.calendar.service.f {
        private static final long serialVersionUID = -7471192143785466686L;
        private final boolean bounded;
        private final pt.p dayElement;
        private final a1 model;

        d(String str, Class cls, int i10, int i11, char c10, a1 a1Var, pt.p pVar, boolean z10) {
            super(str, cls, i10, i11, c10);
            if (a1Var != null) {
                this.model = a1Var;
                this.dayElement = pVar;
                this.bounded = z10;
                return;
            }
            throw new NullPointerException("Missing week model.");
        }

        static d K(String str, Class cls, int i10, int i11, char c10, a1 a1Var, pt.p pVar, boolean z10) {
            return new d(str, cls, i10, i11, c10, a1Var, pVar, z10);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // pt.e
        public z c(x xVar) {
            if (!F().equals(xVar.r())) {
                return null;
            }
            if (this.bounded) {
                return new C0524b(this);
            }
            return new c(this);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, pt.e
        public boolean j(pt.e eVar) {
            if (super.j(eVar)) {
                d dVar = (d) d.class.cast(eVar);
                if (this.model.equals(dVar.model) && this.bounded == dVar.bounded) {
                    return true;
                }
            }
            return false;
        }

        @Override // pt.e, pt.p
        public boolean l() {
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
        private final f f39809d;

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

        @Override // pt.z
        /* renamed from: d */
        public y0 k(pt.q qVar) {
            long a10 = x.G(qVar.getClass()).p().a();
            long longValue = ((Long) qVar.v(a0.UTC)).longValue();
            if ((longValue + 7) - b.c(longValue).e(this.f39809d.model) > a10) {
                return b.c(a10);
            }
            return this.f39809d.e();
        }

        @Override // pt.z
        /* renamed from: e */
        public y0 r(pt.q qVar) {
            long d10 = x.G(qVar.getClass()).p().d();
            long longValue = ((Long) qVar.v(a0.UTC)).longValue();
            if ((longValue + 1) - b.c(longValue).e(this.f39809d.model) < d10) {
                return b.c(d10);
            }
            return this.f39809d.A();
        }

        @Override // pt.z
        /* renamed from: f */
        public y0 y(pt.q qVar) {
            return b.c(((Long) qVar.v(a0.UTC)).longValue());
        }

        @Override // pt.z
        /* renamed from: g */
        public boolean p(pt.q qVar, y0 y0Var) {
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

        @Override // pt.z
        /* renamed from: i */
        public pt.q x(pt.q qVar, y0 y0Var, boolean z10) {
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.v(a0Var)).longValue();
            y0 c10 = b.c(longValue);
            if (y0Var == c10) {
                return qVar;
            }
            return qVar.D(a0Var, (longValue + y0Var.e(this.f39809d.model)) - c10.e(this.f39809d.model));
        }

        private e(f fVar) {
            this.f39809d = fVar;
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

        @Override // pt.p
        /* renamed from: S */
        public y0 e() {
            return this.model.f().f(6);
        }

        @Override // pt.p
        /* renamed from: T */
        public y0 A() {
            return this.model.f();
        }

        @Override // net.time4j.calendar.service.e
        /* renamed from: U */
        public int O(y0 y0Var) {
            return y0Var.e(this.model);
        }

        @Override // pt.e, java.util.Comparator
        /* renamed from: b */
        public int compare(pt.o oVar, pt.o oVar2) {
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
        @Override // pt.e
        public z c(x xVar) {
            if (!F().equals(xVar.r())) {
                return null;
            }
            return new e(this);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, pt.e
        public boolean j(pt.e eVar) {
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
        return y0.h(nt.c.d(j10 + 5, 7) + 1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int d(pt.p pVar, pt.q qVar) {
        return ((Integer) Integer.class.cast(qVar.n(pVar))).intValue();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class g implements pt.s {

        /* renamed from: a  reason: collision with root package name */
        private final Class f39810a;

        /* renamed from: b  reason: collision with root package name */
        private final pt.p f39811b;

        /* renamed from: c  reason: collision with root package name */
        private final pt.p f39812c;

        /* renamed from: d  reason: collision with root package name */
        private final a1 f39813d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Class cls, pt.p pVar, pt.p pVar2, a1 a1Var) {
            this.f39810a = cls;
            this.f39811b = pVar;
            this.f39812c = pVar2;
            this.f39813d = a1Var;
        }

        @Override // pt.s
        public Set a(Locale locale, pt.d dVar) {
            a1 j10;
            if (locale.getCountry().isEmpty()) {
                j10 = this.f39813d;
            } else {
                j10 = a1.j(locale);
            }
            a1 a1Var = j10;
            HashSet hashSet = new HashSet();
            hashSet.add(f.V(this.f39810a, a1Var));
            hashSet.add(d.K("WEEK_OF_MONTH", this.f39810a, 1, 5, 'W', a1Var, this.f39811b, false));
            hashSet.add(d.K("WEEK_OF_YEAR", this.f39810a, 1, 52, 'w', a1Var, this.f39812c, false));
            hashSet.add(d.K("BOUNDED_WEEK_OF_MONTH", this.f39810a, 1, 5, (char) 0, a1Var, this.f39811b, true));
            hashSet.add(d.K("BOUNDED_WEEK_OF_YEAR", this.f39810a, 1, 52, (char) 0, a1Var, this.f39812c, true));
            return Collections.unmodifiableSet(hashSet);
        }

        @Override // pt.s
        public boolean b(pt.p pVar) {
            return false;
        }

        @Override // pt.s
        public boolean c(Class cls) {
            return this.f39810a.equals(cls);
        }

        @Override // pt.s
        public pt.q d(pt.q qVar, Locale locale, pt.d dVar) {
            return qVar;
        }
    }
}
