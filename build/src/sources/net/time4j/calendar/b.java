package net.time4j.calendar;

import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import jt.a0;
import jt.x;
import jt.z;
import net.time4j.a1;
import net.time4j.y0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public static final jt.p f40428a = m.f40464d;

    /* renamed from: net.time4j.calendar.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class C0516b implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40429d;

        private jt.p b(jt.q qVar, boolean z10) {
            f V = f.V(qVar.getClass(), this.f40429d.model);
            int n10 = n(qVar);
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.p(a0Var)).longValue();
            int q10 = qVar.q(this.f40429d.dayElement);
            if (z10) {
                if (((Integer) qVar.i(this.f40429d.dayElement)).intValue() < q10 + (((Long) qVar.E(V, qVar.i(V)).p(a0Var)).longValue() - longValue)) {
                    return this.f40429d.dayElement;
                }
            } else if (n10 <= 1) {
                if (((Integer) qVar.t(this.f40429d.dayElement)).intValue() > q10 - (longValue - ((Long) qVar.E(V, qVar.t(V)).p(a0Var)).longValue())) {
                    return this.f40429d.dayElement;
                }
            }
            return V;
        }

        private int e(jt.q qVar) {
            return o(qVar, 1);
        }

        private int g(jt.q qVar) {
            return o(qVar, -1);
        }

        private int n(jt.q qVar) {
            return o(qVar, 0);
        }

        private int o(jt.q qVar, int i10) {
            int i11;
            int q10 = qVar.q(this.f40429d.dayElement);
            int e10 = b.c((((Long) qVar.p(a0.UTC)).longValue() - q10) + 1).e(this.f40429d.model);
            if (e10 <= 8 - this.f40429d.model.g()) {
                i11 = 2 - e10;
            } else {
                i11 = 9 - e10;
            }
            if (i10 != -1) {
                if (i10 != 0) {
                    if (i10 == 1) {
                        q10 = ((Integer) qVar.i(this.f40429d.dayElement)).intValue();
                    } else {
                        throw new AssertionError("Unexpected: " + i10);
                    }
                }
            } else {
                q10 = 1;
            }
            return gt.c.a(q10 - i11, 7) + 1;
        }

        private jt.q r(jt.q qVar, int i10) {
            int n10 = n(qVar);
            if (i10 == n10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.p(a0Var)).longValue() + ((i10 - n10) * 7));
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p a(jt.q qVar) {
            return b(qVar, true);
        }

        @Override // jt.z
        /* renamed from: d */
        public jt.p h(jt.q qVar) {
            return b(qVar, false);
        }

        @Override // jt.z
        /* renamed from: f */
        public Integer j(jt.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // jt.z
        /* renamed from: i */
        public Integer p(jt.q qVar) {
            return Integer.valueOf(g(qVar));
        }

        @Override // jt.z
        /* renamed from: m */
        public Integer x(jt.q qVar) {
            return Integer.valueOf(n(qVar));
        }

        @Override // jt.z
        /* renamed from: q */
        public boolean l(jt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < g(qVar) || intValue > e(qVar)) {
                return false;
            }
            return true;
        }

        @Override // jt.z
        /* renamed from: s */
        public jt.q w(jt.q qVar, Integer num, boolean z10) {
            if (num != null && (z10 || l(qVar, num))) {
                return r(qVar, num.intValue());
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private C0516b(d dVar) {
            this.f40429d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40430d;

        private int b(jt.q qVar) {
            int g10;
            int q10 = qVar.q(this.f40430d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= q10) {
                if (f(qVar, 1) + g(qVar, 0) <= q10) {
                    return 1;
                }
                g10 = (q10 - f10) / 7;
            } else {
                g10 = ((q10 + g(qVar, -1)) - f(qVar, -1)) / 7;
            }
            return g10 + 1;
        }

        private jt.p c(Object obj) {
            return new f((Class) obj, this.f40430d.model);
        }

        private int f(jt.q qVar, int i10) {
            y0 q10 = q(qVar, i10);
            a1 a1Var = this.f40430d.model;
            int e10 = q10.e(a1Var);
            if (e10 <= 8 - a1Var.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int g(jt.q qVar, int i10) {
            int q10 = qVar.q(this.f40430d.dayElement);
            if (i10 == -1) {
                jt.p pVar = this.f40430d.dayElement;
                a0 a0Var = a0.UTC;
                return b.d(pVar, qVar.D(a0Var, ((Long) qVar.p(a0Var)).longValue() - q10));
            } else if (i10 == 0) {
                return b.d(this.f40430d.dayElement, qVar);
            } else {
                if (i10 == 1) {
                    int d10 = b.d(this.f40430d.dayElement, qVar);
                    jt.p pVar2 = this.f40430d.dayElement;
                    a0 a0Var2 = a0.UTC;
                    return b.d(pVar2, qVar.D(a0Var2, ((((Long) qVar.p(a0Var2)).longValue() + d10) + 1) - q10));
                }
                throw new AssertionError("Unexpected: " + i10);
            }
        }

        private int i(jt.q qVar) {
            int q10 = qVar.q(this.f40430d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= q10) {
                int f11 = f(qVar, 1) + g(qVar, 0);
                if (f11 <= q10) {
                    try {
                        int f12 = f(qVar, 1);
                        a0 a0Var = a0.UTC;
                        f11 = f(qVar.D(a0Var, ((Long) qVar.p(a0Var)).longValue() + 7), 1) + g(qVar, 1);
                        f10 = f12;
                    } catch (RuntimeException unused) {
                        f11 += 7;
                    }
                }
                return (f11 - f10) / 7;
            }
            return ((f10 + g(qVar, -1)) - f(qVar, -1)) / 7;
        }

        private y0 q(jt.q qVar, int i10) {
            int q10 = qVar.q(this.f40430d.dayElement);
            if (i10 != -1) {
                if (i10 == 0) {
                    return b.c((((Long) qVar.p(a0.UTC)).longValue() - q10) + 1);
                }
                if (i10 == 1) {
                    return b.c(((((Long) qVar.p(a0.UTC)).longValue() + b.d(this.f40430d.dayElement, qVar)) + 1) - q10);
                }
                throw new AssertionError("Unexpected: " + i10);
            }
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.p(a0Var)).longValue() - q10;
            return b.c((longValue - qVar.D(a0Var, longValue).q(this.f40430d.dayElement)) + 1);
        }

        private jt.q s(jt.q qVar, int i10) {
            int b10 = b(qVar);
            if (i10 == b10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.p(a0Var)).longValue() + ((i10 - b10) * 7));
        }

        @Override // jt.z
        /* renamed from: d */
        public jt.p a(jt.q qVar) {
            return c(qVar.getClass());
        }

        @Override // jt.z
        /* renamed from: e */
        public jt.p h(jt.q qVar) {
            return c(qVar.getClass());
        }

        @Override // jt.z
        /* renamed from: m */
        public Integer j(jt.q qVar) {
            return Integer.valueOf(i(qVar));
        }

        @Override // jt.z
        /* renamed from: n */
        public Integer p(jt.q qVar) {
            return 1;
        }

        @Override // jt.z
        /* renamed from: o */
        public Integer x(jt.q qVar) {
            return Integer.valueOf(b(qVar));
        }

        @Override // jt.z
        /* renamed from: r */
        public boolean l(jt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < 1 || intValue > i(qVar)) {
                return false;
            }
            return true;
        }

        @Override // jt.z
        /* renamed from: t */
        public jt.q w(jt.q qVar, Integer num, boolean z10) {
            int intValue = num.intValue();
            if (!z10 && !l(qVar, num)) {
                throw new IllegalArgumentException("Invalid value: " + intValue + " (context=" + qVar + ")");
            }
            return s(qVar, intValue);
        }

        private c(d dVar) {
            this.f40430d = dVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class d extends net.time4j.calendar.service.f {
        private static final long serialVersionUID = -7471192143785466686L;
        private final boolean bounded;
        private final jt.p dayElement;
        private final a1 model;

        d(String str, Class cls, int i10, int i11, char c10, a1 a1Var, jt.p pVar, boolean z10) {
            super(str, cls, i10, i11, c10);
            if (a1Var != null) {
                this.model = a1Var;
                this.dayElement = pVar;
                this.bounded = z10;
                return;
            }
            throw new NullPointerException("Missing week model.");
        }

        static d K(String str, Class cls, int i10, int i11, char c10, a1 a1Var, jt.p pVar, boolean z10) {
            return new d(str, cls, i10, i11, c10, a1Var, pVar, z10);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // jt.e
        public z c(x xVar) {
            if (!F().equals(xVar.p())) {
                return null;
            }
            if (this.bounded) {
                return new C0516b(this);
            }
            return new c(this);
        }

        @Override // jt.e, jt.p
        public boolean i() {
            return true;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, jt.e
        public boolean m(jt.e eVar) {
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
        private final f f40431d;

        @Override // jt.z
        /* renamed from: b */
        public jt.p a(jt.q qVar) {
            return null;
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p h(jt.q qVar) {
            return null;
        }

        @Override // jt.z
        /* renamed from: d */
        public y0 j(jt.q qVar) {
            long a10 = x.G(qVar.getClass()).n().a();
            long longValue = ((Long) qVar.p(a0.UTC)).longValue();
            if ((longValue + 7) - b.c(longValue).e(this.f40431d.model) > a10) {
                return b.c(a10);
            }
            return this.f40431d.e();
        }

        @Override // jt.z
        /* renamed from: e */
        public y0 p(jt.q qVar) {
            long d10 = x.G(qVar.getClass()).n().d();
            long longValue = ((Long) qVar.p(a0.UTC)).longValue();
            if ((longValue + 1) - b.c(longValue).e(this.f40431d.model) < d10) {
                return b.c(d10);
            }
            return this.f40431d.A();
        }

        @Override // jt.z
        /* renamed from: f */
        public y0 x(jt.q qVar) {
            return b.c(((Long) qVar.p(a0.UTC)).longValue());
        }

        @Override // jt.z
        /* renamed from: g */
        public boolean l(jt.q qVar, y0 y0Var) {
            if (y0Var == null) {
                return false;
            }
            try {
                w(qVar, y0Var, false);
                return true;
            } catch (ArithmeticException | IllegalArgumentException unused) {
                return false;
            }
        }

        @Override // jt.z
        /* renamed from: i */
        public jt.q w(jt.q qVar, y0 y0Var, boolean z10) {
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.p(a0Var)).longValue();
            y0 c10 = b.c(longValue);
            if (y0Var == c10) {
                return qVar;
            }
            return qVar.D(a0Var, (longValue + y0Var.e(this.f40431d.model)) - c10.e(this.f40431d.model));
        }

        private e(f fVar) {
            this.f40431d = fVar;
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

        @Override // jt.p
        /* renamed from: S */
        public y0 e() {
            return this.model.f().f(6);
        }

        @Override // jt.p
        /* renamed from: T */
        public y0 A() {
            return this.model.f();
        }

        @Override // net.time4j.calendar.service.e
        /* renamed from: U */
        public int O(y0 y0Var) {
            return y0Var.e(this.model);
        }

        @Override // jt.e, java.util.Comparator
        /* renamed from: b */
        public int compare(jt.o oVar, jt.o oVar2) {
            int e10 = ((y0) oVar.p(this)).e(this.model);
            int e11 = ((y0) oVar2.p(this)).e(this.model);
            if (e10 < e11) {
                return -1;
            }
            if (e10 == e11) {
                return 0;
            }
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // jt.e
        public z c(x xVar) {
            if (!F().equals(xVar.p())) {
                return null;
            }
            return new e(this);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, jt.e
        public boolean m(jt.e eVar) {
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
        return y0.h(gt.c.d(j10 + 5, 7) + 1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int d(jt.p pVar, jt.q qVar) {
        return ((Integer) Integer.class.cast(qVar.i(pVar))).intValue();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class g implements jt.s {

        /* renamed from: a  reason: collision with root package name */
        private final Class f40432a;

        /* renamed from: b  reason: collision with root package name */
        private final jt.p f40433b;

        /* renamed from: c  reason: collision with root package name */
        private final jt.p f40434c;

        /* renamed from: d  reason: collision with root package name */
        private final a1 f40435d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Class cls, jt.p pVar, jt.p pVar2, a1 a1Var) {
            this.f40432a = cls;
            this.f40433b = pVar;
            this.f40434c = pVar2;
            this.f40435d = a1Var;
        }

        @Override // jt.s
        public boolean a(jt.p pVar) {
            return false;
        }

        @Override // jt.s
        public boolean b(Class cls) {
            return this.f40432a.equals(cls);
        }

        @Override // jt.s
        public Set c(Locale locale, jt.d dVar) {
            a1 j10;
            if (locale.getCountry().isEmpty()) {
                j10 = this.f40435d;
            } else {
                j10 = a1.j(locale);
            }
            a1 a1Var = j10;
            HashSet hashSet = new HashSet();
            hashSet.add(f.V(this.f40432a, a1Var));
            hashSet.add(d.K("WEEK_OF_MONTH", this.f40432a, 1, 5, 'W', a1Var, this.f40433b, false));
            hashSet.add(d.K("WEEK_OF_YEAR", this.f40432a, 1, 52, 'w', a1Var, this.f40434c, false));
            hashSet.add(d.K("BOUNDED_WEEK_OF_MONTH", this.f40432a, 1, 5, (char) 0, a1Var, this.f40433b, true));
            hashSet.add(d.K("BOUNDED_WEEK_OF_YEAR", this.f40432a, 1, 52, (char) 0, a1Var, this.f40434c, true));
            return Collections.unmodifiableSet(hashSet);
        }

        @Override // jt.s
        public jt.q d(jt.q qVar, Locale locale, jt.d dVar) {
            return qVar;
        }
    }
}
