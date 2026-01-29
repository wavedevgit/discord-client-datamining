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
    private static final Map f40341w = new ConcurrentHashMap();

    /* renamed from: x  reason: collision with root package name */
    public static final a1 f40342x = new a1(y0.MONDAY, 4, y0.SATURDAY, y0.SUNDAY);

    /* renamed from: y  reason: collision with root package name */
    private static final kt.y f40343y;

    /* renamed from: d  reason: collision with root package name */
    private final transient y0 f40344d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f40345e;

    /* renamed from: i  reason: collision with root package name */
    private final transient y0 f40346i;

    /* renamed from: o  reason: collision with root package name */
    private final transient y0 f40347o;

    /* renamed from: p  reason: collision with root package name */
    private final transient net.time4j.c f40348p;

    /* renamed from: q  reason: collision with root package name */
    private final transient net.time4j.c f40349q;

    /* renamed from: r  reason: collision with root package name */
    private final transient net.time4j.c f40350r;

    /* renamed from: s  reason: collision with root package name */
    private final transient net.time4j.c f40351s;

    /* renamed from: t  reason: collision with root package name */
    private final transient c0 f40352t;

    /* renamed from: u  reason: collision with root package name */
    private final transient Set f40353u;

    /* renamed from: v  reason: collision with root package name */
    private final transient jt.n f40354v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements jt.n {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y0 f40355d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ y0 f40356e;

        a(y0 y0Var, y0 y0Var2) {
            this.f40355d = y0Var;
            this.f40356e = y0Var2;
        }

        @Override // jt.n
        /* renamed from: a */
        public boolean test(gt.a aVar) {
            y0 h10 = y0.h(gt.b.c(aVar.f(), aVar.u(), aVar.g()));
            if (h10 != this.f40355d && h10 != this.f40356e) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements jt.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40358d;

        /* synthetic */ b(d dVar, a aVar) {
            this(dVar);
        }

        private jt.p b(jt.q qVar, boolean z10) {
            int i10;
            f0 f0Var = (f0) qVar.p(f0.f40572y);
            c0 i11 = this.f40358d.K().i();
            int intValue = x(qVar).intValue();
            if (z10) {
                if (this.f40358d.M()) {
                    i10 = 52;
                } else {
                    i10 = 4;
                }
                if (intValue >= i10) {
                    f0 f0Var2 = (f0) f0Var.E(i11, qVar.i(i11));
                    if (this.f40358d.M()) {
                        if (f0Var2.B0() < f0Var.B0()) {
                            return f0.H;
                        }
                    } else if (f0Var2.g() < f0Var.g()) {
                        return f0.F;
                    }
                }
            } else if (intValue <= 1) {
                f0 f0Var3 = (f0) f0Var.E(i11, qVar.t(i11));
                if (this.f40358d.M()) {
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
            if (this.f40358d.M()) {
                if (gt.b.e(f0Var.f())) {
                    return 366;
                }
                return 365;
            }
            return gt.b.d(f0Var.f(), f0Var.u());
        }

        private int f(f0 f0Var) {
            return q(f0Var, 1);
        }

        private int i(f0 f0Var) {
            return q(f0Var, -1);
        }

        private int o(f0 f0Var) {
            return q(f0Var, 0);
        }

        private int q(f0 f0Var, int i10) {
            int g10;
            int i11;
            if (this.f40358d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int e10 = a1.c((f0Var.C0() - g10) + 1).e(this.f40358d.K());
            if (e10 <= 8 - this.f40358d.K().g()) {
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
            return gt.c.a(g10 - i11, 7) + 1;
        }

        private f0 s(f0 f0Var, int i10) {
            int o10 = o(f0Var);
            if (i10 == o10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - o10) * 7));
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
        /* renamed from: g */
        public Integer j(jt.q qVar) {
            return Integer.valueOf(f((f0) qVar.p(f0.f40572y)));
        }

        @Override // jt.z
        /* renamed from: m */
        public Integer p(jt.q qVar) {
            return Integer.valueOf(i((f0) qVar.p(f0.f40572y)));
        }

        @Override // jt.z
        /* renamed from: n */
        public Integer x(jt.q qVar) {
            return Integer.valueOf(o((f0) qVar.p(f0.f40572y)));
        }

        @Override // jt.z
        /* renamed from: r */
        public boolean l(jt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            f0 f0Var = (f0) qVar.p(f0.f40572y);
            if (intValue < i(f0Var) || intValue > f(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // jt.z
        /* renamed from: t */
        public jt.q w(jt.q qVar, Integer num, boolean z10) {
            jt.p pVar = f0.f40572y;
            f0 f0Var = (f0) qVar.p(pVar);
            if (num != null && (z10 || l(qVar, num))) {
                return qVar.E(pVar, s(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private b(d dVar) {
            this.f40358d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements jt.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40359d;

        /* synthetic */ c(d dVar, a aVar) {
            this(dVar);
        }

        private int b(f0 f0Var) {
            int g10;
            if (this.f40359d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int f10 = f(f0Var, 0);
            if (f10 <= g10) {
                int i10 = ((g10 - f10) / 7) + 1;
                if ((i10 >= 53 || (!this.f40359d.M() && i10 >= 5)) && f(f0Var, 1) + g(f0Var, 0) <= g10) {
                    return 1;
                }
                return i10;
            }
            return (((g10 + g(f0Var, -1)) - f(f0Var, -1)) / 7) + 1;
        }

        private jt.p c() {
            return this.f40359d.K().i();
        }

        private int f(f0 f0Var, int i10) {
            y0 q10 = q(f0Var, i10);
            a1 K = this.f40359d.K();
            int e10 = q10.e(K);
            if (e10 <= 8 - K.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int g(f0 f0Var, int i10) {
            if (this.f40359d.M()) {
                if (gt.b.e(f0Var.f() + i10)) {
                    return 366;
                }
                return 365;
            }
            int f10 = f0Var.f();
            int u10 = f0Var.u() + i10;
            if (u10 == 0) {
                f10--;
                u10 = 12;
            } else if (u10 == 13) {
                f10++;
                u10 = 1;
            }
            return gt.b.d(f10, u10);
        }

        private int i(f0 f0Var) {
            int g10;
            if (this.f40359d.M()) {
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

        private y0 q(f0 f0Var, int i10) {
            if (this.f40359d.M()) {
                return y0.h(gt.b.c(f0Var.f() + i10, 1, 1));
            }
            int f10 = f0Var.f();
            int u10 = f0Var.u() + i10;
            if (u10 == 0) {
                f10--;
                u10 = 12;
            } else if (u10 == 13) {
                f10++;
                u10 = 1;
            } else if (u10 == 14) {
                f10++;
                u10 = 2;
            }
            return y0.h(gt.b.c(f10, u10, 1));
        }

        private f0 s(f0 f0Var, int i10) {
            int b10 = b(f0Var);
            if (i10 == b10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - b10) * 7));
        }

        @Override // jt.z
        /* renamed from: d */
        public jt.p a(jt.q qVar) {
            return c();
        }

        @Override // jt.z
        /* renamed from: e */
        public jt.p h(jt.q qVar) {
            return c();
        }

        @Override // jt.z
        /* renamed from: m */
        public Integer j(jt.q qVar) {
            return Integer.valueOf(i((f0) qVar.p(f0.f40572y)));
        }

        @Override // jt.z
        /* renamed from: n */
        public Integer p(jt.q qVar) {
            return 1;
        }

        @Override // jt.z
        /* renamed from: o */
        public Integer x(jt.q qVar) {
            return Integer.valueOf(b((f0) qVar.p(f0.f40572y)));
        }

        @Override // jt.z
        /* renamed from: r */
        public boolean l(jt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            if (this.f40359d.M() && intValue >= 1 && intValue <= 52) {
                return true;
            }
            if (this.f40359d.M() && intValue != 53) {
                return false;
            }
            f0 f0Var = (f0) qVar.p(f0.f40572y);
            if (intValue < 1 || intValue > i(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // jt.z
        /* renamed from: t */
        public jt.q w(jt.q qVar, Integer num, boolean z10) {
            jt.p pVar = f0.f40572y;
            f0 f0Var = (f0) qVar.p(pVar);
            if (num != null && (z10 || l(qVar, num))) {
                return qVar.E(pVar, s(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private c(d dVar) {
            this.f40359d = dVar;
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

        @Override // jt.p
        public boolean C() {
            return false;
        }

        @Override // jt.p
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

        @Override // jt.p
        /* renamed from: J */
        public Integer A() {
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // jt.e
        public jt.z c(jt.x xVar) {
            if (!xVar.E(f0.f40572y)) {
                return null;
            }
            if (L()) {
                return new b(this, null);
            }
            return new c(this, null);
        }

        @Override // jt.e, jt.p
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

        @Override // jt.p
        public Class getType() {
            return Integer.class;
        }

        @Override // jt.e, jt.p
        public boolean i() {
            return true;
        }

        @Override // jt.e
        protected boolean m(jt.e eVar) {
            return K().equals(((d) eVar).K());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // jt.e
        public jt.p n() {
            return f0.J;
        }

        @Override // jt.p
        public boolean y() {
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements jt.z {

        /* renamed from: d  reason: collision with root package name */
        final f f40360d;

        /* synthetic */ e(f fVar, a aVar) {
            this(fVar);
        }

        private jt.p b(jt.q qVar) {
            jt.p pVar = g0.f40606z;
            if (qVar.o(pVar)) {
                return pVar;
            }
            return null;
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p a(jt.q qVar) {
            return b(qVar);
        }

        @Override // jt.z
        /* renamed from: d */
        public jt.p h(jt.q qVar) {
            return b(qVar);
        }

        @Override // jt.z
        /* renamed from: e */
        public y0 j(jt.q qVar) {
            f0 f0Var = (f0) qVar.p(f0.f40572y);
            if ((f0Var.j() + 7) - f0Var.A0().e(this.f40360d.K()) > f0.r0().n().a()) {
                return y0.FRIDAY;
            }
            return this.f40360d.e();
        }

        @Override // jt.z
        /* renamed from: f */
        public y0 p(jt.q qVar) {
            f0 f0Var = (f0) qVar.p(f0.f40572y);
            if ((f0Var.j() + 1) - f0Var.A0().e(this.f40360d.K()) < f0.r0().n().d()) {
                return y0.MONDAY;
            }
            return this.f40360d.A();
        }

        @Override // jt.z
        /* renamed from: g */
        public y0 x(jt.q qVar) {
            return ((f0) qVar.p(f0.f40572y)).A0();
        }

        @Override // jt.z
        /* renamed from: i */
        public boolean l(jt.q qVar, y0 y0Var) {
            if (y0Var == null) {
                return false;
            }
            try {
                w(qVar, y0Var, false);
                return true;
            } catch (RuntimeException unused) {
                return false;
            }
        }

        @Override // jt.z
        /* renamed from: m */
        public jt.q w(jt.q qVar, y0 y0Var, boolean z10) {
            if (y0Var != null) {
                jt.p pVar = f0.f40572y;
                f0 f0Var = (f0) qVar.p(pVar);
                long C0 = f0Var.C0();
                y0 c10 = a1.c(C0);
                if (y0Var == c10) {
                    return qVar;
                }
                return qVar.E(pVar, f0Var.S0((C0 + y0Var.e(this.f40360d.K())) - c10.e(this.f40360d.K())));
            }
            throw new IllegalArgumentException("Missing weekday.");
        }

        private e(f fVar) {
            this.f40360d = fVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class f extends net.time4j.a implements c0, kt.l, kt.t {
        private static final long serialVersionUID = 1945670789283677398L;

        f() {
            super("LOCAL_DAY_OF_WEEK");
        }

        private kt.s H(jt.d dVar, kt.m mVar) {
            return kt.b.d((Locale) dVar.b(kt.a.f36530c, Locale.ROOT)).p((kt.v) dVar.b(kt.a.f36534g, kt.v.WIDE), mVar);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public a1 K() {
            return a1.this;
        }

        private Object readResolve() {
            return a1.this.i();
        }

        @Override // jt.p
        public boolean C() {
            return false;
        }

        @Override // jt.p
        /* renamed from: I */
        public y0 e() {
            return a1.this.f().f(6);
        }

        @Override // jt.p
        /* renamed from: J */
        public y0 A() {
            return a1.this.f();
        }

        public int L(y0 y0Var) {
            return y0Var.e(a1.this);
        }

        @Override // kt.t
        /* renamed from: M */
        public y0 z(CharSequence charSequence, ParsePosition parsePosition, jt.d dVar) {
            int index = parsePosition.getIndex();
            jt.c cVar = kt.a.f36535h;
            kt.m mVar = kt.m.FORMAT;
            kt.m mVar2 = (kt.m) dVar.b(cVar, mVar);
            y0 y0Var = (y0) H(dVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
            if (y0Var == null && ((Boolean) dVar.b(kt.a.f36538k, Boolean.TRUE)).booleanValue()) {
                parsePosition.setErrorIndex(-1);
                parsePosition.setIndex(index);
                if (mVar2 == mVar) {
                    mVar = kt.m.STANDALONE;
                }
                return (y0) H(dVar, mVar).c(charSequence, parsePosition, getType(), dVar);
            }
            return y0Var;
        }

        @Override // kt.l
        /* renamed from: N */
        public int q(y0 y0Var, jt.o oVar, jt.d dVar) {
            return L(y0Var);
        }

        @Override // jt.e, java.util.Comparator
        /* renamed from: b */
        public int compare(jt.o oVar, jt.o oVar2) {
            int e10 = ((y0) oVar.p(this)).e(a1.this);
            int e11 = ((y0) oVar2.p(this)).e(a1.this);
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
        public jt.z c(jt.x xVar) {
            if (!xVar.E(f0.f40572y)) {
                return null;
            }
            return new e(this, null);
        }

        @Override // jt.e, jt.p
        public char d() {
            return 'e';
        }

        @Override // jt.p
        public Class getType() {
            return y0.class;
        }

        @Override // jt.e
        protected boolean m(jt.e eVar) {
            return K().equals(((f) eVar).K());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // jt.e
        public jt.p n() {
            return f0.G;
        }

        @Override // kt.l
        public boolean s(jt.q qVar, int i10) {
            y0[] values;
            for (y0 y0Var : y0.values()) {
                if (y0Var.e(a1.this) == i10) {
                    qVar.E(this, y0Var);
                    return true;
                }
            }
            return false;
        }

        @Override // kt.t
        public void u(jt.o oVar, Appendable appendable, jt.d dVar) {
            appendable.append(H(dVar, (kt.m) dVar.b(kt.a.f36535h, kt.m.FORMAT)).f((Enum) oVar.p(this)));
        }

        @Override // jt.p
        public boolean y() {
            return true;
        }
    }

    static {
        kt.y yVar;
        Iterator it = gt.d.c().g(kt.y.class).iterator();
        if (it.hasNext()) {
            yVar = (kt.y) it.next();
        } else {
            yVar = null;
        }
        f40343y = yVar;
    }

    private a1(y0 y0Var, int i10, y0 y0Var2, y0 y0Var3) {
        if (y0Var != null) {
            if (i10 >= 1 && i10 <= 7) {
                if (y0Var2 != null) {
                    if (y0Var3 != null) {
                        this.f40344d = y0Var;
                        this.f40345e = i10;
                        this.f40346i = y0Var2;
                        this.f40347o = y0Var3;
                        d dVar = new d("WEEK_OF_YEAR", 0);
                        this.f40348p = dVar;
                        d dVar2 = new d("WEEK_OF_MONTH", 1);
                        this.f40349q = dVar2;
                        d dVar3 = new d("BOUNDED_WEEK_OF_YEAR", 2);
                        this.f40350r = dVar3;
                        d dVar4 = new d("BOUNDED_WEEK_OF_MONTH", 3);
                        this.f40351s = dVar4;
                        f fVar = new f();
                        this.f40352t = fVar;
                        this.f40354v = new a(y0Var2, y0Var3);
                        HashSet hashSet = new HashSet();
                        hashSet.add(dVar);
                        hashSet.add(dVar2);
                        hashSet.add(fVar);
                        hashSet.add(dVar3);
                        hashSet.add(dVar4);
                        this.f40353u = Collections.unmodifiableSet(hashSet);
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
        return y0.h(gt.c.d(j10 + 5, 7) + 1);
    }

    public static a1 j(Locale locale) {
        int i10;
        if (locale.getCountry().isEmpty()) {
            return f40342x;
        }
        Map map = f40341w;
        a1 a1Var = (a1) map.get(locale);
        if (a1Var != null) {
            return a1Var;
        }
        kt.y yVar = f40343y;
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
            return f40342x;
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
        return this.f40351s;
    }

    public net.time4j.c b() {
        return this.f40350r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set d() {
        return this.f40353u;
    }

    public y0 e() {
        return this.f40347o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a1) {
            a1 a1Var = (a1) obj;
            if (this.f40344d == a1Var.f40344d && this.f40345e == a1Var.f40345e && this.f40346i == a1Var.f40346i && this.f40347o == a1Var.f40347o) {
                return true;
            }
        }
        return false;
    }

    public y0 f() {
        return this.f40344d;
    }

    public int g() {
        return this.f40345e;
    }

    public y0 h() {
        return this.f40346i;
    }

    public int hashCode() {
        return (this.f40344d.name().hashCode() * 17) + (this.f40345e * 37);
    }

    public c0 i() {
        return this.f40352t;
    }

    public net.time4j.c m() {
        return this.f40349q;
    }

    public net.time4j.c n() {
        return this.f40348p;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a1.class.getName());
        sb2.append("[firstDayOfWeek=");
        sb2.append(this.f40344d);
        sb2.append(",minimalDaysInFirstWeek=");
        sb2.append(this.f40345e);
        sb2.append(",startOfWeekend=");
        sb2.append(this.f40346i);
        sb2.append(",endOfWeekend=");
        sb2.append(this.f40347o);
        sb2.append(']');
        return sb2.toString();
    }
}
