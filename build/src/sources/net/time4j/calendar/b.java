package net.time4j.calendar;

import java.util.Collections;
import java.util.HashSet;
import java.util.Locale;
import java.util.Set;
import net.time4j.a1;
import net.time4j.y0;
import rt.a0;
import rt.x;
import rt.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public static final rt.p f39161a = m.f39197d;

    /* renamed from: net.time4j.calendar.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class C0538b implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f39162d;

        private rt.p b(rt.q qVar, boolean z10) {
            f V = f.V(qVar.getClass(), this.f39162d.model);
            int l10 = l(qVar);
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.s(a0Var)).longValue();
            int q10 = qVar.q(this.f39162d.dayElement);
            if (z10) {
                if (((Integer) qVar.t(this.f39162d.dayElement)).intValue() < q10 + (((Long) qVar.E(V, qVar.t(V)).s(a0Var)).longValue() - longValue)) {
                    return this.f39162d.dayElement;
                }
            } else if (l10 <= 1) {
                if (((Integer) qVar.v(this.f39162d.dayElement)).intValue() > q10 - (longValue - ((Long) qVar.E(V, qVar.v(V)).s(a0Var)).longValue())) {
                    return this.f39162d.dayElement;
                }
            }
            return V;
        }

        private int e(rt.q qVar) {
            return p(qVar, 1);
        }

        private int h(rt.q qVar) {
            return p(qVar, -1);
        }

        private int l(rt.q qVar) {
            return p(qVar, 0);
        }

        private int p(rt.q qVar, int i10) {
            int i11;
            int q10 = qVar.q(this.f39162d.dayElement);
            int e10 = b.c((((Long) qVar.s(a0.UTC)).longValue() - q10) + 1).e(this.f39162d.model);
            if (e10 <= 8 - this.f39162d.model.g()) {
                i11 = 2 - e10;
            } else {
                i11 = 9 - e10;
            }
            if (i10 != -1) {
                if (i10 != 0) {
                    if (i10 == 1) {
                        q10 = ((Integer) qVar.t(this.f39162d.dayElement)).intValue();
                    } else {
                        throw new AssertionError("Unexpected: " + i10);
                    }
                }
            } else {
                q10 = 1;
            }
            return pt.c.a(q10 - i11, 7) + 1;
        }

        private rt.q r(rt.q qVar, int i10) {
            int l10 = l(qVar);
            if (i10 == l10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.s(a0Var)).longValue() + ((i10 - l10) * 7));
        }

        @Override // rt.z
        /* renamed from: c */
        public rt.p a(rt.q qVar) {
            return b(qVar, true);
        }

        @Override // rt.z
        /* renamed from: d */
        public rt.p g(rt.q qVar) {
            return b(qVar, false);
        }

        @Override // rt.z
        /* renamed from: f */
        public Integer k(rt.q qVar) {
            return Integer.valueOf(e(qVar));
        }

        @Override // rt.z
        /* renamed from: i */
        public Integer o(rt.q qVar) {
            return Integer.valueOf(h(qVar));
        }

        @Override // rt.z
        /* renamed from: j */
        public Integer y(rt.q qVar) {
            return Integer.valueOf(l(qVar));
        }

        @Override // rt.z
        /* renamed from: q */
        public boolean n(rt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < h(qVar) || intValue > e(qVar)) {
                return false;
            }
            return true;
        }

        @Override // rt.z
        /* renamed from: t */
        public rt.q u(rt.q qVar, Integer num, boolean z10) {
            if (num != null && (z10 || n(qVar, num))) {
                return r(qVar, num.intValue());
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private C0538b(d dVar) {
            this.f39162d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements z {

        /* renamed from: d  reason: collision with root package name */
        private final d f39163d;

        private int b(rt.q qVar) {
            int h10;
            int q10 = qVar.q(this.f39163d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= q10) {
                if (f(qVar, 1) + h(qVar, 0) <= q10) {
                    return 1;
                }
                h10 = (q10 - f10) / 7;
            } else {
                h10 = ((q10 + h(qVar, -1)) - f(qVar, -1)) / 7;
            }
            return h10 + 1;
        }

        private rt.p c(Object obj) {
            return new f((Class) obj, this.f39163d.model);
        }

        private int f(rt.q qVar, int i10) {
            y0 q10 = q(qVar, i10);
            a1 a1Var = this.f39163d.model;
            int e10 = q10.e(a1Var);
            if (e10 <= 8 - a1Var.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int h(rt.q qVar, int i10) {
            int q10 = qVar.q(this.f39163d.dayElement);
            if (i10 == -1) {
                rt.p pVar = this.f39163d.dayElement;
                a0 a0Var = a0.UTC;
                return b.d(pVar, qVar.D(a0Var, ((Long) qVar.s(a0Var)).longValue() - q10));
            } else if (i10 == 0) {
                return b.d(this.f39163d.dayElement, qVar);
            } else {
                if (i10 == 1) {
                    int d10 = b.d(this.f39163d.dayElement, qVar);
                    rt.p pVar2 = this.f39163d.dayElement;
                    a0 a0Var2 = a0.UTC;
                    return b.d(pVar2, qVar.D(a0Var2, ((((Long) qVar.s(a0Var2)).longValue() + d10) + 1) - q10));
                }
                throw new AssertionError("Unexpected: " + i10);
            }
        }

        private int i(rt.q qVar) {
            int q10 = qVar.q(this.f39163d.dayElement);
            int f10 = f(qVar, 0);
            if (f10 <= q10) {
                int f11 = f(qVar, 1) + h(qVar, 0);
                if (f11 <= q10) {
                    try {
                        int f12 = f(qVar, 1);
                        a0 a0Var = a0.UTC;
                        f11 = f(qVar.D(a0Var, ((Long) qVar.s(a0Var)).longValue() + 7), 1) + h(qVar, 1);
                        f10 = f12;
                    } catch (RuntimeException unused) {
                        f11 += 7;
                    }
                }
                return (f11 - f10) / 7;
            }
            return ((f10 + h(qVar, -1)) - f(qVar, -1)) / 7;
        }

        private y0 q(rt.q qVar, int i10) {
            int q10 = qVar.q(this.f39163d.dayElement);
            if (i10 != -1) {
                if (i10 == 0) {
                    return b.c((((Long) qVar.s(a0.UTC)).longValue() - q10) + 1);
                }
                if (i10 == 1) {
                    return b.c(((((Long) qVar.s(a0.UTC)).longValue() + b.d(this.f39163d.dayElement, qVar)) + 1) - q10);
                }
                throw new AssertionError("Unexpected: " + i10);
            }
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.s(a0Var)).longValue() - q10;
            return b.c((longValue - qVar.D(a0Var, longValue).q(this.f39163d.dayElement)) + 1);
        }

        private rt.q t(rt.q qVar, int i10) {
            int b10 = b(qVar);
            if (i10 == b10) {
                return qVar;
            }
            a0 a0Var = a0.UTC;
            return qVar.D(a0Var, ((Long) qVar.s(a0Var)).longValue() + ((i10 - b10) * 7));
        }

        @Override // rt.z
        /* renamed from: d */
        public rt.p a(rt.q qVar) {
            return c(qVar.getClass());
        }

        @Override // rt.z
        /* renamed from: e */
        public rt.p g(rt.q qVar) {
            return c(qVar.getClass());
        }

        @Override // rt.z
        /* renamed from: j */
        public Integer k(rt.q qVar) {
            return Integer.valueOf(i(qVar));
        }

        @Override // rt.z
        /* renamed from: l */
        public Integer o(rt.q qVar) {
            return 1;
        }

        @Override // rt.z
        /* renamed from: p */
        public Integer y(rt.q qVar) {
            return Integer.valueOf(b(qVar));
        }

        @Override // rt.z
        /* renamed from: r */
        public boolean n(rt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < 1 || intValue > i(qVar)) {
                return false;
            }
            return true;
        }

        @Override // rt.z
        /* renamed from: v */
        public rt.q u(rt.q qVar, Integer num, boolean z10) {
            int intValue = num.intValue();
            if (!z10 && !n(qVar, num)) {
                throw new IllegalArgumentException("Invalid value: " + intValue + " (context=" + qVar + ")");
            }
            return t(qVar, intValue);
        }

        private c(d dVar) {
            this.f39163d = dVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class d extends net.time4j.calendar.service.f {
        private static final long serialVersionUID = -7471192143785466686L;
        private final boolean bounded;
        private final rt.p dayElement;
        private final a1 model;

        d(String str, Class cls, int i10, int i11, char c10, a1 a1Var, rt.p pVar, boolean z10) {
            super(str, cls, i10, i11, c10);
            if (a1Var != null) {
                this.model = a1Var;
                this.dayElement = pVar;
                this.bounded = z10;
                return;
            }
            throw new NullPointerException("Missing week model.");
        }

        static d K(String str, Class cls, int i10, int i11, char c10, a1 a1Var, rt.p pVar, boolean z10) {
            return new d(str, cls, i10, i11, c10, a1Var, pVar, z10);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // rt.e
        public z c(x xVar) {
            if (!F().equals(xVar.p())) {
                return null;
            }
            if (this.bounded) {
                return new C0538b(this);
            }
            return new c(this);
        }

        @Override // rt.e, rt.p
        public boolean i() {
            return true;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, rt.e
        public boolean l(rt.e eVar) {
            if (super.l(eVar)) {
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
        private final f f39164d;

        @Override // rt.z
        /* renamed from: b */
        public rt.p a(rt.q qVar) {
            return null;
        }

        @Override // rt.z
        /* renamed from: c */
        public rt.p g(rt.q qVar) {
            return null;
        }

        @Override // rt.z
        /* renamed from: d */
        public y0 k(rt.q qVar) {
            long a10 = x.G(qVar.getClass()).o().a();
            long longValue = ((Long) qVar.s(a0.UTC)).longValue();
            if ((longValue + 7) - b.c(longValue).e(this.f39164d.model) > a10) {
                return b.c(a10);
            }
            return this.f39164d.e();
        }

        @Override // rt.z
        /* renamed from: e */
        public y0 o(rt.q qVar) {
            long d10 = x.G(qVar.getClass()).o().d();
            long longValue = ((Long) qVar.s(a0.UTC)).longValue();
            if ((longValue + 1) - b.c(longValue).e(this.f39164d.model) < d10) {
                return b.c(d10);
            }
            return this.f39164d.B();
        }

        @Override // rt.z
        /* renamed from: f */
        public y0 y(rt.q qVar) {
            return b.c(((Long) qVar.s(a0.UTC)).longValue());
        }

        @Override // rt.z
        /* renamed from: h */
        public boolean n(rt.q qVar, y0 y0Var) {
            if (y0Var == null) {
                return false;
            }
            try {
                u(qVar, y0Var, false);
                return true;
            } catch (ArithmeticException | IllegalArgumentException unused) {
                return false;
            }
        }

        @Override // rt.z
        /* renamed from: i */
        public rt.q u(rt.q qVar, y0 y0Var, boolean z10) {
            a0 a0Var = a0.UTC;
            long longValue = ((Long) qVar.s(a0Var)).longValue();
            y0 c10 = b.c(longValue);
            if (y0Var == c10) {
                return qVar;
            }
            return qVar.D(a0Var, (longValue + y0Var.e(this.f39164d.model)) - c10.e(this.f39164d.model));
        }

        private e(f fVar) {
            this.f39164d = fVar;
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

        @Override // rt.p
        /* renamed from: S */
        public y0 e() {
            return this.model.f().f(6);
        }

        @Override // rt.p
        /* renamed from: T */
        public y0 B() {
            return this.model.f();
        }

        @Override // net.time4j.calendar.service.e
        /* renamed from: U */
        public int O(y0 y0Var) {
            return y0Var.e(this.model);
        }

        @Override // rt.e, java.util.Comparator
        /* renamed from: b */
        public int compare(rt.o oVar, rt.o oVar2) {
            int e10 = ((y0) oVar.s(this)).e(this.model);
            int e11 = ((y0) oVar2.s(this)).e(this.model);
            if (e10 < e11) {
                return -1;
            }
            if (e10 == e11) {
                return 0;
            }
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // rt.e
        public z c(x xVar) {
            if (!F().equals(xVar.p())) {
                return null;
            }
            return new e(this);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // net.time4j.calendar.service.d, rt.e
        public boolean l(rt.e eVar) {
            if (super.l(eVar)) {
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
        return y0.h(pt.c.d(j10 + 5, 7) + 1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int d(rt.p pVar, rt.q qVar) {
        return ((Integer) Integer.class.cast(qVar.t(pVar))).intValue();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class g implements rt.s {

        /* renamed from: a  reason: collision with root package name */
        private final Class f39165a;

        /* renamed from: b  reason: collision with root package name */
        private final rt.p f39166b;

        /* renamed from: c  reason: collision with root package name */
        private final rt.p f39167c;

        /* renamed from: d  reason: collision with root package name */
        private final a1 f39168d;

        /* JADX INFO: Access modifiers changed from: package-private */
        public g(Class cls, rt.p pVar, rt.p pVar2, a1 a1Var) {
            this.f39165a = cls;
            this.f39166b = pVar;
            this.f39167c = pVar2;
            this.f39168d = a1Var;
        }

        @Override // rt.s
        public boolean a(rt.p pVar) {
            return false;
        }

        @Override // rt.s
        public boolean c(Class cls) {
            return this.f39165a.equals(cls);
        }

        @Override // rt.s
        public Set d(Locale locale, rt.d dVar) {
            a1 j10;
            if (locale.getCountry().isEmpty()) {
                j10 = this.f39168d;
            } else {
                j10 = a1.j(locale);
            }
            a1 a1Var = j10;
            HashSet hashSet = new HashSet();
            hashSet.add(f.V(this.f39165a, a1Var));
            hashSet.add(d.K("WEEK_OF_MONTH", this.f39165a, 1, 5, 'W', a1Var, this.f39166b, false));
            hashSet.add(d.K("WEEK_OF_YEAR", this.f39165a, 1, 52, 'w', a1Var, this.f39167c, false));
            hashSet.add(d.K("BOUNDED_WEEK_OF_MONTH", this.f39165a, 1, 5, (char) 0, a1Var, this.f39166b, true));
            hashSet.add(d.K("BOUNDED_WEEK_OF_YEAR", this.f39165a, 1, 52, (char) 0, a1Var, this.f39167c, true));
            return Collections.unmodifiableSet(hashSet);
        }

        @Override // rt.s
        public rt.q b(rt.q qVar, Locale locale, rt.d dVar) {
            return qVar;
        }
    }
}
