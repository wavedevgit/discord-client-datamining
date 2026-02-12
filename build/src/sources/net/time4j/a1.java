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
    private static final Map f37219w = new ConcurrentHashMap();

    /* renamed from: x  reason: collision with root package name */
    public static final a1 f37220x = new a1(y0.MONDAY, 4, y0.SATURDAY, y0.SUNDAY);

    /* renamed from: y  reason: collision with root package name */
    private static final cu.y f37221y;

    /* renamed from: d  reason: collision with root package name */
    private final transient y0 f37222d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f37223e;

    /* renamed from: i  reason: collision with root package name */
    private final transient y0 f37224i;

    /* renamed from: o  reason: collision with root package name */
    private final transient y0 f37225o;

    /* renamed from: p  reason: collision with root package name */
    private final transient net.time4j.c f37226p;

    /* renamed from: q  reason: collision with root package name */
    private final transient net.time4j.c f37227q;

    /* renamed from: r  reason: collision with root package name */
    private final transient net.time4j.c f37228r;

    /* renamed from: s  reason: collision with root package name */
    private final transient net.time4j.c f37229s;

    /* renamed from: t  reason: collision with root package name */
    private final transient c0 f37230t;

    /* renamed from: u  reason: collision with root package name */
    private final transient Set f37231u;

    /* renamed from: v  reason: collision with root package name */
    private final transient bu.n f37232v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements bu.n {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y0 f37233d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ y0 f37234e;

        a(y0 y0Var, y0 y0Var2) {
            this.f37233d = y0Var;
            this.f37234e = y0Var2;
        }

        @Override // bu.n
        /* renamed from: a */
        public boolean test(zt.a aVar) {
            y0 h10 = y0.h(zt.b.c(aVar.f(), aVar.q(), aVar.g()));
            if (h10 != this.f37233d && h10 != this.f37234e) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements bu.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f37236d;

        /* synthetic */ b(d dVar, a aVar) {
            this(dVar);
        }

        private bu.p b(bu.q qVar, boolean z10) {
            int i10;
            f0 f0Var = (f0) qVar.k(f0.f37450y);
            c0 i11 = this.f37236d.K().i();
            int intValue = y(qVar).intValue();
            if (z10) {
                if (this.f37236d.M()) {
                    i10 = 52;
                } else {
                    i10 = 4;
                }
                if (intValue >= i10) {
                    f0 f0Var2 = (f0) f0Var.E(i11, qVar.v(i11));
                    if (this.f37236d.M()) {
                        if (f0Var2.B0() < f0Var.B0()) {
                            return f0.H;
                        }
                    } else if (f0Var2.g() < f0Var.g()) {
                        return f0.F;
                    }
                }
            } else if (intValue <= 1) {
                f0 f0Var3 = (f0) f0Var.E(i11, qVar.t(i11));
                if (this.f37236d.M()) {
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
            if (this.f37236d.M()) {
                if (zt.b.e(f0Var.f())) {
                    return 366;
                }
                return 365;
            }
            return zt.b.d(f0Var.f(), f0Var.q());
        }

        private int f(f0 f0Var) {
            return p(f0Var, 1);
        }

        private int i(f0 f0Var) {
            return p(f0Var, -1);
        }

        private int l(f0 f0Var) {
            return p(f0Var, 0);
        }

        private int p(f0 f0Var, int i10) {
            int g10;
            int i11;
            if (this.f37236d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int e10 = a1.c((f0Var.C0() - g10) + 1).e(this.f37236d.K());
            if (e10 <= 8 - this.f37236d.K().g()) {
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
            return zt.c.a(g10 - i11, 7) + 1;
        }

        private f0 s(f0 f0Var, int i10) {
            int l10 = l(f0Var);
            if (i10 == l10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - l10) * 7));
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
        /* renamed from: g */
        public Integer m(bu.q qVar) {
            return Integer.valueOf(f((f0) qVar.k(f0.f37450y)));
        }

        @Override // bu.z
        /* renamed from: j */
        public Integer q(bu.q qVar) {
            return Integer.valueOf(i((f0) qVar.k(f0.f37450y)));
        }

        @Override // bu.z
        /* renamed from: k */
        public Integer y(bu.q qVar) {
            return Integer.valueOf(l((f0) qVar.k(f0.f37450y)));
        }

        @Override // bu.z
        /* renamed from: r */
        public boolean o(bu.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            f0 f0Var = (f0) qVar.k(f0.f37450y);
            if (intValue < i(f0Var) || intValue > f(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // bu.z
        /* renamed from: t */
        public bu.q x(bu.q qVar, Integer num, boolean z10) {
            bu.p pVar = f0.f37450y;
            f0 f0Var = (f0) qVar.k(pVar);
            if (num != null && (z10 || o(qVar, num))) {
                return qVar.E(pVar, s(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private b(d dVar) {
            this.f37236d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements bu.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f37237d;

        /* synthetic */ c(d dVar, a aVar) {
            this(dVar);
        }

        private int b(f0 f0Var) {
            int g10;
            if (this.f37237d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int f10 = f(f0Var, 0);
            if (f10 <= g10) {
                int i10 = ((g10 - f10) / 7) + 1;
                if ((i10 >= 53 || (!this.f37237d.M() && i10 >= 5)) && f(f0Var, 1) + g(f0Var, 0) <= g10) {
                    return 1;
                }
                return i10;
            }
            return (((g10 + g(f0Var, -1)) - f(f0Var, -1)) / 7) + 1;
        }

        private bu.p c() {
            return this.f37237d.K().i();
        }

        private int f(f0 f0Var, int i10) {
            y0 p10 = p(f0Var, i10);
            a1 K = this.f37237d.K();
            int e10 = p10.e(K);
            if (e10 <= 8 - K.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int g(f0 f0Var, int i10) {
            if (this.f37237d.M()) {
                if (zt.b.e(f0Var.f() + i10)) {
                    return 366;
                }
                return 365;
            }
            int f10 = f0Var.f();
            int q10 = f0Var.q() + i10;
            if (q10 == 0) {
                f10--;
                q10 = 12;
            } else if (q10 == 13) {
                f10++;
                q10 = 1;
            }
            return zt.b.d(f10, q10);
        }

        private int i(f0 f0Var) {
            int g10;
            if (this.f37237d.M()) {
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

        private y0 p(f0 f0Var, int i10) {
            if (this.f37237d.M()) {
                return y0.h(zt.b.c(f0Var.f() + i10, 1, 1));
            }
            int f10 = f0Var.f();
            int q10 = f0Var.q() + i10;
            if (q10 == 0) {
                f10--;
                q10 = 12;
            } else if (q10 == 13) {
                f10++;
                q10 = 1;
            } else if (q10 == 14) {
                f10++;
                q10 = 2;
            }
            return y0.h(zt.b.c(f10, q10, 1));
        }

        private f0 s(f0 f0Var, int i10) {
            int b10 = b(f0Var);
            if (i10 == b10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - b10) * 7));
        }

        @Override // bu.z
        /* renamed from: d */
        public bu.p a(bu.q qVar) {
            return c();
        }

        @Override // bu.z
        /* renamed from: e */
        public bu.p h(bu.q qVar) {
            return c();
        }

        @Override // bu.z
        /* renamed from: j */
        public Integer m(bu.q qVar) {
            return Integer.valueOf(i((f0) qVar.k(f0.f37450y)));
        }

        @Override // bu.z
        /* renamed from: k */
        public Integer q(bu.q qVar) {
            return 1;
        }

        @Override // bu.z
        /* renamed from: l */
        public Integer y(bu.q qVar) {
            return Integer.valueOf(b((f0) qVar.k(f0.f37450y)));
        }

        @Override // bu.z
        /* renamed from: r */
        public boolean o(bu.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            if (this.f37237d.M() && intValue >= 1 && intValue <= 52) {
                return true;
            }
            if (this.f37237d.M() && intValue != 53) {
                return false;
            }
            f0 f0Var = (f0) qVar.k(f0.f37450y);
            if (intValue < 1 || intValue > i(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // bu.z
        /* renamed from: t */
        public bu.q x(bu.q qVar, Integer num, boolean z10) {
            bu.p pVar = f0.f37450y;
            f0 f0Var = (f0) qVar.k(pVar);
            if (num != null && (z10 || o(qVar, num))) {
                return qVar.E(pVar, s(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private c(d dVar) {
            this.f37237d = dVar;
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

        @Override // bu.p
        public boolean A() {
            return true;
        }

        @Override // bu.p
        public boolean C() {
            return false;
        }

        @Override // bu.p
        /* renamed from: I */
        public Integer f() {
            int i10;
            if (M()) {
                i10 = 52;
            } else {
                i10 = 5;
            }
            return Integer.valueOf(i10);
        }

        @Override // bu.p
        /* renamed from: J */
        public Integer B() {
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // bu.e
        public bu.z c(bu.x xVar) {
            if (!xVar.E(f0.f37450y)) {
                return null;
            }
            if (L()) {
                return new b(this, null);
            }
            return new c(this, null);
        }

        @Override // bu.e, bu.p
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

        @Override // bu.p
        public Class getType() {
            return Integer.class;
        }

        @Override // bu.e
        protected boolean j(bu.e eVar) {
            return K().equals(((d) eVar).K());
        }

        @Override // bu.e, bu.p
        public boolean k() {
            return true;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // bu.e
        public bu.p p() {
            return f0.J;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements bu.z {

        /* renamed from: d  reason: collision with root package name */
        final f f37238d;

        /* synthetic */ e(f fVar, a aVar) {
            this(fVar);
        }

        private bu.p b(bu.q qVar) {
            bu.p pVar = g0.f37484z;
            if (qVar.n(pVar)) {
                return pVar;
            }
            return null;
        }

        @Override // bu.z
        /* renamed from: c */
        public bu.p a(bu.q qVar) {
            return b(qVar);
        }

        @Override // bu.z
        /* renamed from: d */
        public bu.p h(bu.q qVar) {
            return b(qVar);
        }

        @Override // bu.z
        /* renamed from: e */
        public y0 m(bu.q qVar) {
            f0 f0Var = (f0) qVar.k(f0.f37450y);
            if ((f0Var.i() + 7) - f0Var.A0().e(this.f37238d.K()) > f0.r0().p().a()) {
                return y0.FRIDAY;
            }
            return this.f37238d.f();
        }

        @Override // bu.z
        /* renamed from: f */
        public y0 q(bu.q qVar) {
            f0 f0Var = (f0) qVar.k(f0.f37450y);
            if ((f0Var.i() + 1) - f0Var.A0().e(this.f37238d.K()) < f0.r0().p().d()) {
                return y0.MONDAY;
            }
            return this.f37238d.B();
        }

        @Override // bu.z
        /* renamed from: g */
        public y0 y(bu.q qVar) {
            return ((f0) qVar.k(f0.f37450y)).A0();
        }

        @Override // bu.z
        /* renamed from: i */
        public boolean o(bu.q qVar, y0 y0Var) {
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

        @Override // bu.z
        /* renamed from: j */
        public bu.q x(bu.q qVar, y0 y0Var, boolean z10) {
            if (y0Var != null) {
                bu.p pVar = f0.f37450y;
                f0 f0Var = (f0) qVar.k(pVar);
                long C0 = f0Var.C0();
                y0 c10 = a1.c(C0);
                if (y0Var == c10) {
                    return qVar;
                }
                return qVar.E(pVar, f0Var.S0((C0 + y0Var.e(this.f37238d.K())) - c10.e(this.f37238d.K())));
            }
            throw new IllegalArgumentException("Missing weekday.");
        }

        private e(f fVar) {
            this.f37238d = fVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class f extends net.time4j.a implements c0, cu.l, cu.t {
        private static final long serialVersionUID = 1945670789283677398L;

        f() {
            super("LOCAL_DAY_OF_WEEK");
        }

        private cu.s H(bu.d dVar, cu.m mVar) {
            return cu.b.d((Locale) dVar.b(cu.a.f21111c, Locale.ROOT)).p((cu.v) dVar.b(cu.a.f21115g, cu.v.WIDE), mVar);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public a1 K() {
            return a1.this;
        }

        private Object readResolve() {
            return a1.this.i();
        }

        @Override // bu.p
        public boolean A() {
            return true;
        }

        @Override // bu.p
        public boolean C() {
            return false;
        }

        @Override // bu.p
        /* renamed from: I */
        public y0 f() {
            return a1.this.f().f(6);
        }

        @Override // bu.p
        /* renamed from: J */
        public y0 B() {
            return a1.this.f();
        }

        public int L(y0 y0Var) {
            return y0Var.e(a1.this);
        }

        @Override // cu.t
        /* renamed from: M */
        public y0 l(CharSequence charSequence, ParsePosition parsePosition, bu.d dVar) {
            int index = parsePosition.getIndex();
            bu.c cVar = cu.a.f21116h;
            cu.m mVar = cu.m.FORMAT;
            cu.m mVar2 = (cu.m) dVar.b(cVar, mVar);
            y0 y0Var = (y0) H(dVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
            if (y0Var == null && ((Boolean) dVar.b(cu.a.f21119k, Boolean.TRUE)).booleanValue()) {
                parsePosition.setErrorIndex(-1);
                parsePosition.setIndex(index);
                if (mVar2 == mVar) {
                    mVar = cu.m.STANDALONE;
                }
                return (y0) H(dVar, mVar).c(charSequence, parsePosition, getType(), dVar);
            }
            return y0Var;
        }

        @Override // cu.l
        /* renamed from: N */
        public int e(y0 y0Var, bu.o oVar, bu.d dVar) {
            return L(y0Var);
        }

        @Override // bu.e, java.util.Comparator
        /* renamed from: b */
        public int compare(bu.o oVar, bu.o oVar2) {
            int e10 = ((y0) oVar.k(this)).e(a1.this);
            int e11 = ((y0) oVar2.k(this)).e(a1.this);
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
        public bu.z c(bu.x xVar) {
            if (!xVar.E(f0.f37450y)) {
                return null;
            }
            return new e(this, null);
        }

        @Override // bu.e, bu.p
        public char d() {
            return 'e';
        }

        @Override // bu.p
        public Class getType() {
            return y0.class;
        }

        @Override // cu.l
        public boolean i(bu.q qVar, int i10) {
            y0[] values;
            for (y0 y0Var : y0.values()) {
                if (y0Var.e(a1.this) == i10) {
                    qVar.E(this, y0Var);
                    return true;
                }
            }
            return false;
        }

        @Override // bu.e
        protected boolean j(bu.e eVar) {
            return K().equals(((f) eVar).K());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // bu.e
        public bu.p p() {
            return f0.G;
        }

        @Override // cu.t
        public void w(bu.o oVar, Appendable appendable, bu.d dVar) {
            appendable.append(H(dVar, (cu.m) dVar.b(cu.a.f21116h, cu.m.FORMAT)).f((Enum) oVar.k(this)));
        }
    }

    static {
        cu.y yVar;
        Iterator it = zt.d.c().g(cu.y.class).iterator();
        if (it.hasNext()) {
            yVar = (cu.y) it.next();
        } else {
            yVar = null;
        }
        f37221y = yVar;
    }

    private a1(y0 y0Var, int i10, y0 y0Var2, y0 y0Var3) {
        if (y0Var != null) {
            if (i10 >= 1 && i10 <= 7) {
                if (y0Var2 != null) {
                    if (y0Var3 != null) {
                        this.f37222d = y0Var;
                        this.f37223e = i10;
                        this.f37224i = y0Var2;
                        this.f37225o = y0Var3;
                        d dVar = new d("WEEK_OF_YEAR", 0);
                        this.f37226p = dVar;
                        d dVar2 = new d("WEEK_OF_MONTH", 1);
                        this.f37227q = dVar2;
                        d dVar3 = new d("BOUNDED_WEEK_OF_YEAR", 2);
                        this.f37228r = dVar3;
                        d dVar4 = new d("BOUNDED_WEEK_OF_MONTH", 3);
                        this.f37229s = dVar4;
                        f fVar = new f();
                        this.f37230t = fVar;
                        this.f37232v = new a(y0Var2, y0Var3);
                        HashSet hashSet = new HashSet();
                        hashSet.add(dVar);
                        hashSet.add(dVar2);
                        hashSet.add(fVar);
                        hashSet.add(dVar3);
                        hashSet.add(dVar4);
                        this.f37231u = Collections.unmodifiableSet(hashSet);
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
        return y0.h(zt.c.d(j10 + 5, 7) + 1);
    }

    public static a1 j(Locale locale) {
        int i10;
        if (locale.getCountry().isEmpty()) {
            return f37220x;
        }
        Map map = f37219w;
        a1 a1Var = (a1) map.get(locale);
        if (a1Var != null) {
            return a1Var;
        }
        cu.y yVar = f37221y;
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
            return f37220x;
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
        return this.f37229s;
    }

    public net.time4j.c b() {
        return this.f37228r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set d() {
        return this.f37231u;
    }

    public y0 e() {
        return this.f37225o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a1) {
            a1 a1Var = (a1) obj;
            if (this.f37222d == a1Var.f37222d && this.f37223e == a1Var.f37223e && this.f37224i == a1Var.f37224i && this.f37225o == a1Var.f37225o) {
                return true;
            }
        }
        return false;
    }

    public y0 f() {
        return this.f37222d;
    }

    public int g() {
        return this.f37223e;
    }

    public y0 h() {
        return this.f37224i;
    }

    public int hashCode() {
        return (this.f37222d.name().hashCode() * 17) + (this.f37223e * 37);
    }

    public c0 i() {
        return this.f37230t;
    }

    public net.time4j.c m() {
        return this.f37227q;
    }

    public net.time4j.c n() {
        return this.f37226p;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a1.class.getName());
        sb2.append("[firstDayOfWeek=");
        sb2.append(this.f37222d);
        sb2.append(",minimalDaysInFirstWeek=");
        sb2.append(this.f37223e);
        sb2.append(",startOfWeekend=");
        sb2.append(this.f37224i);
        sb2.append(",endOfWeekend=");
        sb2.append(this.f37225o);
        sb2.append(']');
        return sb2.toString();
    }
}
