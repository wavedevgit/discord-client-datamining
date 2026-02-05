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
    private static final Map f39719w = new ConcurrentHashMap();

    /* renamed from: x  reason: collision with root package name */
    public static final a1 f39720x = new a1(y0.MONDAY, 4, y0.SATURDAY, y0.SUNDAY);

    /* renamed from: y  reason: collision with root package name */
    private static final qt.y f39721y;

    /* renamed from: d  reason: collision with root package name */
    private final transient y0 f39722d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f39723e;

    /* renamed from: i  reason: collision with root package name */
    private final transient y0 f39724i;

    /* renamed from: o  reason: collision with root package name */
    private final transient y0 f39725o;

    /* renamed from: p  reason: collision with root package name */
    private final transient net.time4j.c f39726p;

    /* renamed from: q  reason: collision with root package name */
    private final transient net.time4j.c f39727q;

    /* renamed from: r  reason: collision with root package name */
    private final transient net.time4j.c f39728r;

    /* renamed from: s  reason: collision with root package name */
    private final transient net.time4j.c f39729s;

    /* renamed from: t  reason: collision with root package name */
    private final transient c0 f39730t;

    /* renamed from: u  reason: collision with root package name */
    private final transient Set f39731u;

    /* renamed from: v  reason: collision with root package name */
    private final transient pt.n f39732v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements pt.n {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y0 f39733d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ y0 f39734e;

        a(y0 y0Var, y0 y0Var2) {
            this.f39733d = y0Var;
            this.f39734e = y0Var2;
        }

        @Override // pt.n
        /* renamed from: a */
        public boolean test(nt.a aVar) {
            y0 h10 = y0.h(nt.b.c(aVar.f(), aVar.t(), aVar.g()));
            if (h10 != this.f39733d && h10 != this.f39734e) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements pt.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f39736d;

        /* synthetic */ b(d dVar, a aVar) {
            this(dVar);
        }

        private pt.p b(pt.q qVar, boolean z10) {
            int i10;
            f0 f0Var = (f0) qVar.v(f0.f39950y);
            c0 i11 = this.f39736d.K().i();
            int intValue = y(qVar).intValue();
            if (z10) {
                if (this.f39736d.M()) {
                    i10 = 52;
                } else {
                    i10 = 4;
                }
                if (intValue >= i10) {
                    f0 f0Var2 = (f0) f0Var.E(i11, qVar.n(i11));
                    if (this.f39736d.M()) {
                        if (f0Var2.B0() < f0Var.B0()) {
                            return f0.H;
                        }
                    } else if (f0Var2.g() < f0Var.g()) {
                        return f0.F;
                    }
                }
            } else if (intValue <= 1) {
                f0 f0Var3 = (f0) f0Var.E(i11, qVar.s(i11));
                if (this.f39736d.M()) {
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
            if (this.f39736d.M()) {
                if (nt.b.e(f0Var.f())) {
                    return 366;
                }
                return 365;
            }
            return nt.b.d(f0Var.f(), f0Var.t());
        }

        private int f(f0 f0Var) {
            return o(f0Var, 1);
        }

        private int i(f0 f0Var) {
            return o(f0Var, -1);
        }

        private int n(f0 f0Var) {
            return o(f0Var, 0);
        }

        private int o(f0 f0Var, int i10) {
            int g10;
            int i11;
            if (this.f39736d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int e10 = a1.c((f0Var.C0() - g10) + 1).e(this.f39736d.K());
            if (e10 <= 8 - this.f39736d.K().g()) {
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
            return nt.c.a(g10 - i11, 7) + 1;
        }

        private f0 s(f0 f0Var, int i10) {
            int n10 = n(f0Var);
            if (i10 == n10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - n10) * 7));
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
        /* renamed from: g */
        public Integer k(pt.q qVar) {
            return Integer.valueOf(f((f0) qVar.v(f0.f39950y)));
        }

        @Override // pt.z
        /* renamed from: j */
        public Integer r(pt.q qVar) {
            return Integer.valueOf(i((f0) qVar.v(f0.f39950y)));
        }

        @Override // pt.z
        /* renamed from: l */
        public Integer y(pt.q qVar) {
            return Integer.valueOf(n((f0) qVar.v(f0.f39950y)));
        }

        @Override // pt.z
        /* renamed from: q */
        public boolean p(pt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            f0 f0Var = (f0) qVar.v(f0.f39950y);
            if (intValue < i(f0Var) || intValue > f(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // pt.z
        /* renamed from: t */
        public pt.q x(pt.q qVar, Integer num, boolean z10) {
            pt.p pVar = f0.f39950y;
            f0 f0Var = (f0) qVar.v(pVar);
            if (num != null && (z10 || p(qVar, num))) {
                return qVar.E(pVar, s(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private b(d dVar) {
            this.f39736d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements pt.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f39737d;

        /* synthetic */ c(d dVar, a aVar) {
            this(dVar);
        }

        private int b(f0 f0Var) {
            int g10;
            if (this.f39737d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int f10 = f(f0Var, 0);
            if (f10 <= g10) {
                int i10 = ((g10 - f10) / 7) + 1;
                if ((i10 >= 53 || (!this.f39737d.M() && i10 >= 5)) && f(f0Var, 1) + g(f0Var, 0) <= g10) {
                    return 1;
                }
                return i10;
            }
            return (((g10 + g(f0Var, -1)) - f(f0Var, -1)) / 7) + 1;
        }

        private pt.p c() {
            return this.f39737d.K().i();
        }

        private int f(f0 f0Var, int i10) {
            y0 o10 = o(f0Var, i10);
            a1 K = this.f39737d.K();
            int e10 = o10.e(K);
            if (e10 <= 8 - K.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int g(f0 f0Var, int i10) {
            if (this.f39737d.M()) {
                if (nt.b.e(f0Var.f() + i10)) {
                    return 366;
                }
                return 365;
            }
            int f10 = f0Var.f();
            int t10 = f0Var.t() + i10;
            if (t10 == 0) {
                f10--;
                t10 = 12;
            } else if (t10 == 13) {
                f10++;
                t10 = 1;
            }
            return nt.b.d(f10, t10);
        }

        private int i(f0 f0Var) {
            int g10;
            if (this.f39737d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int f10 = f(f0Var, 0);
            if (f10 <= g10) {
                int f11 = f(f0Var, 1) + g(f0Var, 0);
                if (f11 <= g10) {
                    try {
                        int f12 = f(f0Var, 1);
                        f11 = f(f0Var, 2) + g(f0Var, 1);
                        f10 = f12;
                    } catch (RuntimeException unused) {
                        f11 += 7;
                    }
                }
                return (f11 - f10) / 7;
            }
            return ((f10 + g(f0Var, -1)) - f(f0Var, -1)) / 7;
        }

        private y0 o(f0 f0Var, int i10) {
            if (this.f39737d.M()) {
                return y0.h(nt.b.c(f0Var.f() + i10, 1, 1));
            }
            int f10 = f0Var.f();
            int t10 = f0Var.t() + i10;
            if (t10 == 0) {
                f10--;
                t10 = 12;
            } else if (t10 == 13) {
                f10++;
                t10 = 1;
            } else if (t10 == 14) {
                f10++;
                t10 = 2;
            }
            return y0.h(nt.b.c(f10, t10, 1));
        }

        private f0 s(f0 f0Var, int i10) {
            int b10 = b(f0Var);
            if (i10 == b10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - b10) * 7));
        }

        @Override // pt.z
        /* renamed from: d */
        public pt.p a(pt.q qVar) {
            return c();
        }

        @Override // pt.z
        /* renamed from: e */
        public pt.p h(pt.q qVar) {
            return c();
        }

        @Override // pt.z
        /* renamed from: j */
        public Integer k(pt.q qVar) {
            return Integer.valueOf(i((f0) qVar.v(f0.f39950y)));
        }

        @Override // pt.z
        /* renamed from: l */
        public Integer r(pt.q qVar) {
            return 1;
        }

        @Override // pt.z
        /* renamed from: n */
        public Integer y(pt.q qVar) {
            return Integer.valueOf(b((f0) qVar.v(f0.f39950y)));
        }

        @Override // pt.z
        /* renamed from: q */
        public boolean p(pt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            if (this.f39737d.M() && intValue >= 1 && intValue <= 52) {
                return true;
            }
            if (this.f39737d.M() && intValue != 53) {
                return false;
            }
            f0 f0Var = (f0) qVar.v(f0.f39950y);
            if (intValue < 1 || intValue > i(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // pt.z
        /* renamed from: t */
        public pt.q x(pt.q qVar, Integer num, boolean z10) {
            pt.p pVar = f0.f39950y;
            f0 f0Var = (f0) qVar.v(pVar);
            if (num != null && (z10 || p(qVar, num))) {
                return qVar.E(pVar, s(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private c(d dVar) {
            this.f39737d = dVar;
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

        @Override // pt.p
        public boolean B() {
            return false;
        }

        @Override // pt.p
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

        @Override // pt.p
        /* renamed from: J */
        public Integer A() {
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // pt.e
        public pt.z c(pt.x xVar) {
            if (!xVar.E(f0.f39950y)) {
                return null;
            }
            if (L()) {
                return new b(this, null);
            }
            return new c(this, null);
        }

        @Override // pt.e, pt.p
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

        @Override // pt.p
        public Class getType() {
            return Integer.class;
        }

        @Override // pt.e
        protected boolean j(pt.e eVar) {
            return K().equals(((d) eVar).K());
        }

        @Override // pt.e, pt.p
        public boolean l() {
            return true;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // pt.e
        public pt.p o() {
            return f0.J;
        }

        @Override // pt.p
        public boolean z() {
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements pt.z {

        /* renamed from: d  reason: collision with root package name */
        final f f39738d;

        /* synthetic */ e(f fVar, a aVar) {
            this(fVar);
        }

        private pt.p b(pt.q qVar) {
            pt.p pVar = g0.f39984z;
            if (qVar.m(pVar)) {
                return pVar;
            }
            return null;
        }

        @Override // pt.z
        /* renamed from: c */
        public pt.p a(pt.q qVar) {
            return b(qVar);
        }

        @Override // pt.z
        /* renamed from: d */
        public pt.p h(pt.q qVar) {
            return b(qVar);
        }

        @Override // pt.z
        /* renamed from: e */
        public y0 k(pt.q qVar) {
            f0 f0Var = (f0) qVar.v(f0.f39950y);
            if ((f0Var.i() + 7) - f0Var.A0().e(this.f39738d.K()) > f0.r0().p().a()) {
                return y0.FRIDAY;
            }
            return this.f39738d.e();
        }

        @Override // pt.z
        /* renamed from: f */
        public y0 r(pt.q qVar) {
            f0 f0Var = (f0) qVar.v(f0.f39950y);
            if ((f0Var.i() + 1) - f0Var.A0().e(this.f39738d.K()) < f0.r0().p().d()) {
                return y0.MONDAY;
            }
            return this.f39738d.A();
        }

        @Override // pt.z
        /* renamed from: g */
        public y0 y(pt.q qVar) {
            return ((f0) qVar.v(f0.f39950y)).A0();
        }

        @Override // pt.z
        /* renamed from: i */
        public boolean p(pt.q qVar, y0 y0Var) {
            if (y0Var == null) {
                return false;
            }
            try {
                x(qVar, y0Var, false);
                return true;
            } catch (RuntimeException unused) {
                return false;
            }
        }

        @Override // pt.z
        /* renamed from: j */
        public pt.q x(pt.q qVar, y0 y0Var, boolean z10) {
            if (y0Var != null) {
                pt.p pVar = f0.f39950y;
                f0 f0Var = (f0) qVar.v(pVar);
                long C0 = f0Var.C0();
                y0 c10 = a1.c(C0);
                if (y0Var == c10) {
                    return qVar;
                }
                return qVar.E(pVar, f0Var.S0((C0 + y0Var.e(this.f39738d.K())) - c10.e(this.f39738d.K())));
            }
            throw new IllegalArgumentException("Missing weekday.");
        }

        private e(f fVar) {
            this.f39738d = fVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class f extends net.time4j.a implements c0, qt.l, qt.t {
        private static final long serialVersionUID = 1945670789283677398L;

        f() {
            super("LOCAL_DAY_OF_WEEK");
        }

        private qt.s H(pt.d dVar, qt.m mVar) {
            return qt.b.d((Locale) dVar.a(qt.a.f48088c, Locale.ROOT)).p((qt.v) dVar.a(qt.a.f48092g, qt.v.WIDE), mVar);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public a1 K() {
            return a1.this;
        }

        private Object readResolve() {
            return a1.this.i();
        }

        @Override // pt.p
        public boolean B() {
            return false;
        }

        @Override // pt.p
        /* renamed from: I */
        public y0 e() {
            return a1.this.f().f(6);
        }

        @Override // pt.p
        /* renamed from: J */
        public y0 A() {
            return a1.this.f();
        }

        public int L(y0 y0Var) {
            return y0Var.e(a1.this);
        }

        @Override // qt.t
        /* renamed from: M */
        public y0 t(CharSequence charSequence, ParsePosition parsePosition, pt.d dVar) {
            int index = parsePosition.getIndex();
            pt.c cVar = qt.a.f48093h;
            qt.m mVar = qt.m.FORMAT;
            qt.m mVar2 = (qt.m) dVar.a(cVar, mVar);
            y0 y0Var = (y0) H(dVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
            if (y0Var == null && ((Boolean) dVar.a(qt.a.f48096k, Boolean.TRUE)).booleanValue()) {
                parsePosition.setErrorIndex(-1);
                parsePosition.setIndex(index);
                if (mVar2 == mVar) {
                    mVar = qt.m.STANDALONE;
                }
                return (y0) H(dVar, mVar).c(charSequence, parsePosition, getType(), dVar);
            }
            return y0Var;
        }

        @Override // qt.l
        /* renamed from: N */
        public int g(y0 y0Var, pt.o oVar, pt.d dVar) {
            return L(y0Var);
        }

        @Override // pt.e, java.util.Comparator
        /* renamed from: b */
        public int compare(pt.o oVar, pt.o oVar2) {
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
        @Override // pt.e
        public pt.z c(pt.x xVar) {
            if (!xVar.E(f0.f39950y)) {
                return null;
            }
            return new e(this, null);
        }

        @Override // pt.e, pt.p
        public char d() {
            return 'e';
        }

        @Override // pt.p
        public Class getType() {
            return y0.class;
        }

        @Override // pt.e
        protected boolean j(pt.e eVar) {
            return K().equals(((f) eVar).K());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // pt.e
        public pt.p o() {
            return f0.G;
        }

        @Override // qt.l
        public boolean q(pt.q qVar, int i10) {
            y0[] values;
            for (y0 y0Var : y0.values()) {
                if (y0Var.e(a1.this) == i10) {
                    qVar.E(this, y0Var);
                    return true;
                }
            }
            return false;
        }

        @Override // qt.t
        public void s(pt.o oVar, Appendable appendable, pt.d dVar) {
            appendable.append(H(dVar, (qt.m) dVar.a(qt.a.f48093h, qt.m.FORMAT)).f((Enum) oVar.v(this)));
        }

        @Override // pt.p
        public boolean z() {
            return true;
        }
    }

    static {
        qt.y yVar;
        Iterator it = nt.d.c().g(qt.y.class).iterator();
        if (it.hasNext()) {
            yVar = (qt.y) it.next();
        } else {
            yVar = null;
        }
        f39721y = yVar;
    }

    private a1(y0 y0Var, int i10, y0 y0Var2, y0 y0Var3) {
        if (y0Var != null) {
            if (i10 >= 1 && i10 <= 7) {
                if (y0Var2 != null) {
                    if (y0Var3 != null) {
                        this.f39722d = y0Var;
                        this.f39723e = i10;
                        this.f39724i = y0Var2;
                        this.f39725o = y0Var3;
                        d dVar = new d("WEEK_OF_YEAR", 0);
                        this.f39726p = dVar;
                        d dVar2 = new d("WEEK_OF_MONTH", 1);
                        this.f39727q = dVar2;
                        d dVar3 = new d("BOUNDED_WEEK_OF_YEAR", 2);
                        this.f39728r = dVar3;
                        d dVar4 = new d("BOUNDED_WEEK_OF_MONTH", 3);
                        this.f39729s = dVar4;
                        f fVar = new f();
                        this.f39730t = fVar;
                        this.f39732v = new a(y0Var2, y0Var3);
                        HashSet hashSet = new HashSet();
                        hashSet.add(dVar);
                        hashSet.add(dVar2);
                        hashSet.add(fVar);
                        hashSet.add(dVar3);
                        hashSet.add(dVar4);
                        this.f39731u = Collections.unmodifiableSet(hashSet);
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
        return y0.h(nt.c.d(j10 + 5, 7) + 1);
    }

    public static a1 j(Locale locale) {
        int i10;
        if (locale.getCountry().isEmpty()) {
            return f39720x;
        }
        Map map = f39719w;
        a1 a1Var = (a1) map.get(locale);
        if (a1Var != null) {
            return a1Var;
        }
        qt.y yVar = f39721y;
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
            return f39720x;
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
        return this.f39729s;
    }

    public net.time4j.c b() {
        return this.f39728r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set d() {
        return this.f39731u;
    }

    public y0 e() {
        return this.f39725o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a1) {
            a1 a1Var = (a1) obj;
            if (this.f39722d == a1Var.f39722d && this.f39723e == a1Var.f39723e && this.f39724i == a1Var.f39724i && this.f39725o == a1Var.f39725o) {
                return true;
            }
        }
        return false;
    }

    public y0 f() {
        return this.f39722d;
    }

    public int g() {
        return this.f39723e;
    }

    public y0 h() {
        return this.f39724i;
    }

    public int hashCode() {
        return (this.f39722d.name().hashCode() * 17) + (this.f39723e * 37);
    }

    public c0 i() {
        return this.f39730t;
    }

    public net.time4j.c m() {
        return this.f39727q;
    }

    public net.time4j.c n() {
        return this.f39726p;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a1.class.getName());
        sb2.append("[firstDayOfWeek=");
        sb2.append(this.f39722d);
        sb2.append(",minimalDaysInFirstWeek=");
        sb2.append(this.f39723e);
        sb2.append(",startOfWeekend=");
        sb2.append(this.f39724i);
        sb2.append(",endOfWeekend=");
        sb2.append(this.f39725o);
        sb2.append(']');
        return sb2.toString();
    }
}
