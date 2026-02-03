package net.time4j;

import java.io.InvalidObjectException;
import java.io.ObjectInputStream;
import java.io.Serializable;
import java.text.ParsePosition;
import java.util.Collections;
import java.util.GregorianCalendar;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Locale;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a1 implements Serializable {
    private static final long serialVersionUID = 7794495882610436763L;

    /* renamed from: w  reason: collision with root package name */
    private static final Map f40220w = new ConcurrentHashMap();

    /* renamed from: x  reason: collision with root package name */
    public static final a1 f40221x = new a1(y0.MONDAY, 4, y0.SATURDAY, y0.SUNDAY);

    /* renamed from: y  reason: collision with root package name */
    private static final lt.y f40222y;

    /* renamed from: d  reason: collision with root package name */
    private final transient y0 f40223d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f40224e;

    /* renamed from: i  reason: collision with root package name */
    private final transient y0 f40225i;

    /* renamed from: o  reason: collision with root package name */
    private final transient y0 f40226o;

    /* renamed from: p  reason: collision with root package name */
    private final transient net.time4j.c f40227p;

    /* renamed from: q  reason: collision with root package name */
    private final transient net.time4j.c f40228q;

    /* renamed from: r  reason: collision with root package name */
    private final transient net.time4j.c f40229r;

    /* renamed from: s  reason: collision with root package name */
    private final transient net.time4j.c f40230s;

    /* renamed from: t  reason: collision with root package name */
    private final transient c0 f40231t;

    /* renamed from: u  reason: collision with root package name */
    private final transient Set f40232u;

    /* renamed from: v  reason: collision with root package name */
    private final transient kt.n f40233v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements kt.n {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y0 f40234d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ y0 f40235e;

        a(y0 y0Var, y0 y0Var2) {
            this.f40234d = y0Var;
            this.f40235e = y0Var2;
        }

        @Override // kt.n
        /* renamed from: a */
        public boolean test(ht.a aVar) {
            y0 h10 = y0.h(ht.b.c(aVar.f(), aVar.r(), aVar.g()));
            if (h10 != this.f40234d && h10 != this.f40235e) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements kt.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40237d;

        /* synthetic */ b(d dVar, a aVar) {
            this(dVar);
        }

        private kt.p b(kt.q qVar, boolean z10) {
            int i10;
            f0 f0Var = (f0) qVar.v(f0.f40451y);
            c0 i11 = this.f40237d.K().i();
            int intValue = x(qVar).intValue();
            if (z10) {
                if (this.f40237d.M()) {
                    i10 = 52;
                } else {
                    i10 = 4;
                }
                if (intValue >= i10) {
                    f0 f0Var2 = (f0) f0Var.E(i11, qVar.p(i11));
                    if (this.f40237d.M()) {
                        if (f0Var2.B0() < f0Var.B0()) {
                            return f0.H;
                        }
                    } else if (f0Var2.g() < f0Var.g()) {
                        return f0.F;
                    }
                }
            } else if (intValue <= 1) {
                f0 f0Var3 = (f0) f0Var.E(i11, qVar.k(i11));
                if (this.f40237d.M()) {
                    if (f0Var3.B0() > f0Var.B0()) {
                        return f0.H;
                    }
                } else if (f0Var3.g() > f0Var.g()) {
                    return f0.F;
                }
            }
            return i11;
        }

        private int e(f0 f0Var) {
            if (this.f40237d.M()) {
                if (ht.b.e(f0Var.f())) {
                    return 366;
                }
                return 365;
            }
            return ht.b.d(f0Var.f(), f0Var.r());
        }

        private int f(f0 f0Var) {
            return q(f0Var, 1);
        }

        private int k(f0 f0Var) {
            return q(f0Var, -1);
        }

        private int p(f0 f0Var) {
            return q(f0Var, 0);
        }

        private int q(f0 f0Var, int i10) {
            int g10;
            int i11;
            if (this.f40237d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int e10 = a1.c((f0Var.C0() - g10) + 1).e(this.f40237d.K());
            if (e10 <= 8 - this.f40237d.K().g()) {
                i11 = 2 - e10;
            } else {
                i11 = 9 - e10;
            }
            if (i10 != -1) {
                if (i10 != 0) {
                    if (i10 == 1) {
                        g10 = e(f0Var);
                    } else {
                        throw new AssertionError("Unexpected: " + i10);
                    }
                }
            } else {
                g10 = 1;
            }
            return ht.c.a(g10 - i11, 7) + 1;
        }

        private f0 s(f0 f0Var, int i10) {
            int p10 = p(f0Var);
            if (i10 == p10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - p10) * 7));
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
        /* renamed from: j */
        public Integer h(kt.q qVar) {
            return Integer.valueOf(f((f0) qVar.v(f0.f40451y)));
        }

        @Override // kt.z
        /* renamed from: m */
        public Integer o(kt.q qVar) {
            return Integer.valueOf(k((f0) qVar.v(f0.f40451y)));
        }

        @Override // kt.z
        /* renamed from: n */
        public Integer x(kt.q qVar) {
            return Integer.valueOf(p((f0) qVar.v(f0.f40451y)));
        }

        @Override // kt.z
        /* renamed from: r */
        public boolean l(kt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            f0 f0Var = (f0) qVar.v(f0.f40451y);
            if (intValue < k(f0Var) || intValue > f(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // kt.z
        /* renamed from: u */
        public kt.q v(kt.q qVar, Integer num, boolean z10) {
            kt.p pVar = f0.f40451y;
            f0 f0Var = (f0) qVar.v(pVar);
            if (num != null && (z10 || l(qVar, num))) {
                return qVar.E(pVar, s(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private b(d dVar) {
            this.f40237d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements kt.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40238d;

        /* synthetic */ c(d dVar, a aVar) {
            this(dVar);
        }

        private int b(f0 f0Var) {
            int g10;
            if (this.f40238d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int f10 = f(f0Var, 0);
            if (f10 <= g10) {
                int i10 = ((g10 - f10) / 7) + 1;
                if ((i10 >= 53 || (!this.f40238d.M() && i10 >= 5)) && f(f0Var, 1) + j(f0Var, 0) <= g10) {
                    return 1;
                }
                return i10;
            }
            return (((g10 + j(f0Var, -1)) - f(f0Var, -1)) / 7) + 1;
        }

        private kt.p c() {
            return this.f40238d.K().i();
        }

        private int f(f0 f0Var, int i10) {
            y0 q10 = q(f0Var, i10);
            a1 K = this.f40238d.K();
            int e10 = q10.e(K);
            if (e10 <= 8 - K.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int j(f0 f0Var, int i10) {
            if (this.f40238d.M()) {
                if (ht.b.e(f0Var.f() + i10)) {
                    return 366;
                }
                return 365;
            }
            int f10 = f0Var.f();
            int r10 = f0Var.r() + i10;
            if (r10 == 0) {
                f10--;
                r10 = 12;
            } else if (r10 == 13) {
                f10++;
                r10 = 1;
            }
            return ht.b.d(f10, r10);
        }

        private int k(f0 f0Var) {
            int g10;
            if (this.f40238d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int f10 = f(f0Var, 0);
            if (f10 <= g10) {
                int f11 = f(f0Var, 1) + j(f0Var, 0);
                if (f11 <= g10) {
                    try {
                        int f12 = f(f0Var, 1);
                        f11 = f(f0Var, 2) + j(f0Var, 1);
                        f10 = f12;
                    } catch (RuntimeException unused) {
                        f11 += 7;
                    }
                }
                return (f11 - f10) / 7;
            }
            return ((f10 + j(f0Var, -1)) - f(f0Var, -1)) / 7;
        }

        private y0 q(f0 f0Var, int i10) {
            if (this.f40238d.M()) {
                return y0.h(ht.b.c(f0Var.f() + i10, 1, 1));
            }
            int f10 = f0Var.f();
            int r10 = f0Var.r() + i10;
            if (r10 == 0) {
                f10--;
                r10 = 12;
            } else if (r10 == 13) {
                f10++;
                r10 = 1;
            } else if (r10 == 14) {
                f10++;
                r10 = 2;
            }
            return y0.h(ht.b.c(f10, r10, 1));
        }

        private f0 s(f0 f0Var, int i10) {
            int b10 = b(f0Var);
            if (i10 == b10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - b10) * 7));
        }

        @Override // kt.z
        /* renamed from: d */
        public kt.p a(kt.q qVar) {
            return c();
        }

        @Override // kt.z
        /* renamed from: e */
        public kt.p g(kt.q qVar) {
            return c();
        }

        @Override // kt.z
        /* renamed from: m */
        public Integer h(kt.q qVar) {
            return Integer.valueOf(k((f0) qVar.v(f0.f40451y)));
        }

        @Override // kt.z
        /* renamed from: n */
        public Integer o(kt.q qVar) {
            return 1;
        }

        @Override // kt.z
        /* renamed from: p */
        public Integer x(kt.q qVar) {
            return Integer.valueOf(b((f0) qVar.v(f0.f40451y)));
        }

        @Override // kt.z
        /* renamed from: r */
        public boolean l(kt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            if (this.f40238d.M() && intValue >= 1 && intValue <= 52) {
                return true;
            }
            if (this.f40238d.M() && intValue != 53) {
                return false;
            }
            f0 f0Var = (f0) qVar.v(f0.f40451y);
            if (intValue < 1 || intValue > k(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // kt.z
        /* renamed from: u */
        public kt.q v(kt.q qVar, Integer num, boolean z10) {
            kt.p pVar = f0.f40451y;
            f0 f0Var = (f0) qVar.v(pVar);
            if (num != null && (z10 || l(qVar, num))) {
                return qVar.E(pVar, s(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private c(d dVar) {
            this.f40238d = dVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class d extends net.time4j.a {
        private static final long serialVersionUID = -5936254509996557266L;
        private final int category;

        d(String str, int i10) {
            super(str);
            this.category = i10;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public a1 K() {
            return a1.this;
        }

        private boolean L() {
            if (this.category >= 2) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public boolean M() {
            if (this.category % 2 == 0) {
                return true;
            }
            return false;
        }

        private Object readResolve() {
            a1 K = K();
            int i10 = this.category;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 != 2) {
                        if (i10 == 3) {
                            return K.a();
                        }
                        throw new InvalidObjectException("Unknown category: " + this.category);
                    }
                    return K.b();
                }
                return K.m();
            }
            return K.n();
        }

        @Override // kt.p
        public boolean C() {
            return false;
        }

        @Override // kt.p
        /* renamed from: I */
        public Integer e() {
            int i10;
            if (M()) {
                i10 = 52;
            } else {
                i10 = 5;
            }
            return Integer.valueOf(i10);
        }

        @Override // kt.p
        /* renamed from: J */
        public Integer A() {
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kt.e
        public kt.z c(kt.x xVar) {
            if (!xVar.E(f0.f40451y)) {
                return null;
            }
            if (L()) {
                return new b(this, null);
            }
            return new c(this, null);
        }

        @Override // kt.e, kt.p
        public char d() {
            int i10 = this.category;
            if (i10 != 0) {
                if (i10 != 1) {
                    return super.d();
                }
                return 'W';
            }
            return 'w';
        }

        @Override // kt.e, kt.p
        public boolean f() {
            return true;
        }

        @Override // kt.p
        public Class getType() {
            return Integer.class;
        }

        @Override // kt.e
        protected boolean j(kt.e eVar) {
            return K().equals(((d) eVar).K());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kt.e
        public kt.p n() {
            return f0.J;
        }

        @Override // kt.p
        public boolean y() {
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements kt.z {

        /* renamed from: d  reason: collision with root package name */
        final f f40239d;

        /* synthetic */ e(f fVar, a aVar) {
            this(fVar);
        }

        private kt.p b(kt.q qVar) {
            kt.p pVar = g0.f40485z;
            if (qVar.s(pVar)) {
                return pVar;
            }
            return null;
        }

        @Override // kt.z
        /* renamed from: c */
        public kt.p a(kt.q qVar) {
            return b(qVar);
        }

        @Override // kt.z
        /* renamed from: d */
        public kt.p g(kt.q qVar) {
            return b(qVar);
        }

        @Override // kt.z
        /* renamed from: e */
        public y0 h(kt.q qVar) {
            f0 f0Var = (f0) qVar.v(f0.f40451y);
            if ((f0Var.i() + 7) - f0Var.A0().e(this.f40239d.K()) > f0.r0().n().a()) {
                return y0.FRIDAY;
            }
            return this.f40239d.e();
        }

        @Override // kt.z
        /* renamed from: f */
        public y0 o(kt.q qVar) {
            f0 f0Var = (f0) qVar.v(f0.f40451y);
            if ((f0Var.i() + 1) - f0Var.A0().e(this.f40239d.K()) < f0.r0().n().d()) {
                return y0.MONDAY;
            }
            return this.f40239d.A();
        }

        @Override // kt.z
        /* renamed from: j */
        public y0 x(kt.q qVar) {
            return ((f0) qVar.v(f0.f40451y)).A0();
        }

        @Override // kt.z
        /* renamed from: k */
        public boolean l(kt.q qVar, y0 y0Var) {
            if (y0Var == null) {
                return false;
            }
            try {
                v(qVar, y0Var, false);
                return true;
            } catch (RuntimeException unused) {
                return false;
            }
        }

        @Override // kt.z
        /* renamed from: m */
        public kt.q v(kt.q qVar, y0 y0Var, boolean z10) {
            if (y0Var != null) {
                kt.p pVar = f0.f40451y;
                f0 f0Var = (f0) qVar.v(pVar);
                long C0 = f0Var.C0();
                y0 c10 = a1.c(C0);
                if (y0Var == c10) {
                    return qVar;
                }
                return qVar.E(pVar, f0Var.S0((C0 + y0Var.e(this.f40239d.K())) - c10.e(this.f40239d.K())));
            }
            throw new IllegalArgumentException("Missing weekday.");
        }

        private e(f fVar) {
            this.f40239d = fVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class f extends net.time4j.a implements c0, lt.l, lt.t {
        private static final long serialVersionUID = 1945670789283677398L;

        f() {
            super("LOCAL_DAY_OF_WEEK");
        }

        private lt.s H(kt.d dVar, lt.m mVar) {
            return lt.b.d((Locale) dVar.a(lt.a.f37628c, Locale.ROOT)).p((lt.v) dVar.a(lt.a.f37632g, lt.v.WIDE), mVar);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public a1 K() {
            return a1.this;
        }

        private Object readResolve() {
            return a1.this.i();
        }

        @Override // kt.p
        public boolean C() {
            return false;
        }

        @Override // kt.p
        /* renamed from: I */
        public y0 e() {
            return a1.this.f().f(6);
        }

        @Override // kt.p
        /* renamed from: J */
        public y0 A() {
            return a1.this.f();
        }

        public int L(y0 y0Var) {
            return y0Var.e(a1.this);
        }

        @Override // lt.t
        /* renamed from: M */
        public y0 k(CharSequence charSequence, ParsePosition parsePosition, kt.d dVar) {
            int index = parsePosition.getIndex();
            kt.c cVar = lt.a.f37633h;
            lt.m mVar = lt.m.FORMAT;
            lt.m mVar2 = (lt.m) dVar.a(cVar, mVar);
            y0 y0Var = (y0) H(dVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
            if (y0Var == null && ((Boolean) dVar.a(lt.a.f37636k, Boolean.TRUE)).booleanValue()) {
                parsePosition.setErrorIndex(-1);
                parsePosition.setIndex(index);
                if (mVar2 == mVar) {
                    mVar = lt.m.STANDALONE;
                }
                return (y0) H(dVar, mVar).c(charSequence, parsePosition, getType(), dVar);
            }
            return y0Var;
        }

        @Override // lt.l
        /* renamed from: N */
        public int u(y0 y0Var, kt.o oVar, kt.d dVar) {
            return L(y0Var);
        }

        @Override // kt.e, java.util.Comparator
        /* renamed from: b */
        public int compare(kt.o oVar, kt.o oVar2) {
            int e10 = ((y0) oVar.v(this)).e(a1.this);
            int e11 = ((y0) oVar2.v(this)).e(a1.this);
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
        public kt.z c(kt.x xVar) {
            if (!xVar.E(f0.f40451y)) {
                return null;
            }
            return new e(this, null);
        }

        @Override // kt.e, kt.p
        public char d() {
            return 'e';
        }

        @Override // kt.p
        public Class getType() {
            return y0.class;
        }

        @Override // kt.e
        protected boolean j(kt.e eVar) {
            return K().equals(((f) eVar).K());
        }

        @Override // lt.l
        public boolean m(kt.q qVar, int i10) {
            y0[] values;
            for (y0 y0Var : y0.values()) {
                if (y0Var.e(a1.this) == i10) {
                    qVar.E(this, y0Var);
                    return true;
                }
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // kt.e
        public kt.p n() {
            return f0.G;
        }

        @Override // lt.t
        public void s(kt.o oVar, Appendable appendable, kt.d dVar) {
            appendable.append(H(dVar, (lt.m) dVar.a(lt.a.f37633h, lt.m.FORMAT)).f((Enum) oVar.v(this)));
        }

        @Override // kt.p
        public boolean y() {
            return true;
        }
    }

    static {
        lt.y yVar;
        Iterator it = ht.d.c().g(lt.y.class).iterator();
        if (it.hasNext()) {
            yVar = (lt.y) it.next();
        } else {
            yVar = null;
        }
        f40222y = yVar;
    }

    private a1(y0 y0Var, int i10, y0 y0Var2, y0 y0Var3) {
        if (y0Var != null) {
            if (i10 >= 1 && i10 <= 7) {
                if (y0Var2 != null) {
                    if (y0Var3 != null) {
                        this.f40223d = y0Var;
                        this.f40224e = i10;
                        this.f40225i = y0Var2;
                        this.f40226o = y0Var3;
                        d dVar = new d("WEEK_OF_YEAR", 0);
                        this.f40227p = dVar;
                        d dVar2 = new d("WEEK_OF_MONTH", 1);
                        this.f40228q = dVar2;
                        d dVar3 = new d("BOUNDED_WEEK_OF_YEAR", 2);
                        this.f40229r = dVar3;
                        d dVar4 = new d("BOUNDED_WEEK_OF_MONTH", 3);
                        this.f40230s = dVar4;
                        f fVar = new f();
                        this.f40231t = fVar;
                        this.f40233v = new a(y0Var2, y0Var3);
                        HashSet hashSet = new HashSet();
                        hashSet.add(dVar);
                        hashSet.add(dVar2);
                        hashSet.add(fVar);
                        hashSet.add(dVar3);
                        hashSet.add(dVar4);
                        this.f40232u = Collections.unmodifiableSet(hashSet);
                        return;
                    }
                    throw new NullPointerException("Missing end of weekend.");
                }
                throw new NullPointerException("Missing start of weekend.");
            }
            throw new IllegalArgumentException("Minimal days in first week out of range: " + i10);
        }
        throw new NullPointerException("Missing first day of week.");
    }

    static y0 c(long j10) {
        return y0.h(ht.c.d(j10 + 5, 7) + 1);
    }

    public static a1 j(Locale locale) {
        int i10;
        if (locale.getCountry().isEmpty()) {
            return f40221x;
        }
        Map map = f40220w;
        a1 a1Var = (a1) map.get(locale);
        if (a1Var != null) {
            return a1Var;
        }
        lt.y yVar = f40222y;
        if (yVar == null) {
            GregorianCalendar gregorianCalendar = new GregorianCalendar(locale);
            int firstDayOfWeek = gregorianCalendar.getFirstDayOfWeek();
            if (firstDayOfWeek == 1) {
                i10 = 7;
            } else {
                i10 = firstDayOfWeek - 1;
            }
            return k(y0.h(i10), gregorianCalendar.getMinimalDaysInFirstWeek());
        }
        a1 a1Var2 = new a1(y0.h(yVar.d(locale)), yVar.b(locale), y0.h(yVar.c(locale)), y0.h(yVar.a(locale)));
        if (map.size() > 150) {
            map.clear();
        }
        map.put(locale, a1Var2);
        return a1Var2;
    }

    public static a1 k(y0 y0Var, int i10) {
        return l(y0Var, i10, y0.SATURDAY, y0.SUNDAY);
    }

    public static a1 l(y0 y0Var, int i10, y0 y0Var2, y0 y0Var3) {
        if (y0Var == y0.MONDAY && i10 == 4 && y0Var2 == y0.SATURDAY && y0Var3 == y0.SUNDAY) {
            return f40221x;
        }
        return new a1(y0Var, i10, y0Var2, y0Var3);
    }

    private void readObject(ObjectInputStream objectInputStream) {
        throw new InvalidObjectException("Serialization proxy required.");
    }

    private Object writeReplace() {
        return new SPX(this, 3);
    }

    public net.time4j.c a() {
        return this.f40230s;
    }

    public net.time4j.c b() {
        return this.f40229r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set d() {
        return this.f40232u;
    }

    public y0 e() {
        return this.f40226o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a1) {
            a1 a1Var = (a1) obj;
            if (this.f40223d == a1Var.f40223d && this.f40224e == a1Var.f40224e && this.f40225i == a1Var.f40225i && this.f40226o == a1Var.f40226o) {
                return true;
            }
        }
        return false;
    }

    public y0 f() {
        return this.f40223d;
    }

    public int g() {
        return this.f40224e;
    }

    public y0 h() {
        return this.f40225i;
    }

    public int hashCode() {
        return (this.f40223d.name().hashCode() * 17) + (this.f40224e * 37);
    }

    public c0 i() {
        return this.f40231t;
    }

    public net.time4j.c m() {
        return this.f40228q;
    }

    public net.time4j.c n() {
        return this.f40227p;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a1.class.getName());
        sb2.append("[firstDayOfWeek=");
        sb2.append(this.f40223d);
        sb2.append(",minimalDaysInFirstWeek=");
        sb2.append(this.f40224e);
        sb2.append(",startOfWeekend=");
        sb2.append(this.f40225i);
        sb2.append(",endOfWeekend=");
        sb2.append(this.f40226o);
        sb2.append(']');
        return sb2.toString();
    }
}
