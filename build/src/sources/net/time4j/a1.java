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
    private static final Map f39122w = new ConcurrentHashMap();

    /* renamed from: x  reason: collision with root package name */
    public static final a1 f39123x = new a1(y0.MONDAY, 4, y0.SATURDAY, y0.SUNDAY);

    /* renamed from: y  reason: collision with root package name */
    private static final st.y f39124y;

    /* renamed from: d  reason: collision with root package name */
    private final transient y0 f39125d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f39126e;

    /* renamed from: i  reason: collision with root package name */
    private final transient y0 f39127i;

    /* renamed from: o  reason: collision with root package name */
    private final transient y0 f39128o;

    /* renamed from: p  reason: collision with root package name */
    private final transient net.time4j.c f39129p;

    /* renamed from: q  reason: collision with root package name */
    private final transient net.time4j.c f39130q;

    /* renamed from: r  reason: collision with root package name */
    private final transient net.time4j.c f39131r;

    /* renamed from: s  reason: collision with root package name */
    private final transient net.time4j.c f39132s;

    /* renamed from: t  reason: collision with root package name */
    private final transient c0 f39133t;

    /* renamed from: u  reason: collision with root package name */
    private final transient Set f39134u;

    /* renamed from: v  reason: collision with root package name */
    private final transient rt.n f39135v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements rt.n {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y0 f39136d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ y0 f39137e;

        a(y0 y0Var, y0 y0Var2) {
            this.f39136d = y0Var;
            this.f39137e = y0Var2;
        }

        @Override // rt.n
        /* renamed from: a */
        public boolean test(pt.a aVar) {
            y0 h10 = y0.h(pt.b.c(aVar.f(), aVar.r(), aVar.g()));
            if (h10 != this.f39136d && h10 != this.f39137e) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements rt.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f39139d;

        /* synthetic */ b(d dVar, a aVar) {
            this(dVar);
        }

        private rt.p b(rt.q qVar, boolean z10) {
            int i10;
            f0 f0Var = (f0) qVar.s(f0.f39353y);
            c0 i11 = this.f39139d.K().i();
            int intValue = y(qVar).intValue();
            if (z10) {
                if (this.f39139d.M()) {
                    i10 = 52;
                } else {
                    i10 = 4;
                }
                if (intValue >= i10) {
                    f0 f0Var2 = (f0) f0Var.E(i11, qVar.t(i11));
                    if (this.f39139d.M()) {
                        if (f0Var2.B0() < f0Var.B0()) {
                            return f0.H;
                        }
                    } else if (f0Var2.g() < f0Var.g()) {
                        return f0.F;
                    }
                }
            } else if (intValue <= 1) {
                f0 f0Var3 = (f0) f0Var.E(i11, qVar.v(i11));
                if (this.f39139d.M()) {
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
            if (this.f39139d.M()) {
                if (pt.b.e(f0Var.f())) {
                    return 366;
                }
                return 365;
            }
            return pt.b.d(f0Var.f(), f0Var.r());
        }

        private int f(f0 f0Var) {
            return q(f0Var, 1);
        }

        private int i(f0 f0Var) {
            return q(f0Var, -1);
        }

        private int p(f0 f0Var) {
            return q(f0Var, 0);
        }

        private int q(f0 f0Var, int i10) {
            int g10;
            int i11;
            if (this.f39139d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int e10 = a1.c((f0Var.C0() - g10) + 1).e(this.f39139d.K());
            if (e10 <= 8 - this.f39139d.K().g()) {
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
            return pt.c.a(g10 - i11, 7) + 1;
        }

        private f0 t(f0 f0Var, int i10) {
            int p10 = p(f0Var);
            if (i10 == p10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - p10) * 7));
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
        /* renamed from: h */
        public Integer k(rt.q qVar) {
            return Integer.valueOf(f((f0) qVar.s(f0.f39353y)));
        }

        @Override // rt.z
        /* renamed from: j */
        public Integer o(rt.q qVar) {
            return Integer.valueOf(i((f0) qVar.s(f0.f39353y)));
        }

        @Override // rt.z
        /* renamed from: l */
        public Integer y(rt.q qVar) {
            return Integer.valueOf(p((f0) qVar.s(f0.f39353y)));
        }

        @Override // rt.z
        /* renamed from: r */
        public boolean n(rt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            f0 f0Var = (f0) qVar.s(f0.f39353y);
            if (intValue < i(f0Var) || intValue > f(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // rt.z
        /* renamed from: v */
        public rt.q u(rt.q qVar, Integer num, boolean z10) {
            rt.p pVar = f0.f39353y;
            f0 f0Var = (f0) qVar.s(pVar);
            if (num != null && (z10 || n(qVar, num))) {
                return qVar.E(pVar, t(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private b(d dVar) {
            this.f39139d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements rt.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f39140d;

        /* synthetic */ c(d dVar, a aVar) {
            this(dVar);
        }

        private int b(f0 f0Var) {
            int g10;
            if (this.f39140d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int f10 = f(f0Var, 0);
            if (f10 <= g10) {
                int i10 = ((g10 - f10) / 7) + 1;
                if ((i10 >= 53 || (!this.f39140d.M() && i10 >= 5)) && f(f0Var, 1) + h(f0Var, 0) <= g10) {
                    return 1;
                }
                return i10;
            }
            return (((g10 + h(f0Var, -1)) - f(f0Var, -1)) / 7) + 1;
        }

        private rt.p c() {
            return this.f39140d.K().i();
        }

        private int f(f0 f0Var, int i10) {
            y0 q10 = q(f0Var, i10);
            a1 K = this.f39140d.K();
            int e10 = q10.e(K);
            if (e10 <= 8 - K.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int h(f0 f0Var, int i10) {
            if (this.f39140d.M()) {
                if (pt.b.e(f0Var.f() + i10)) {
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
            return pt.b.d(f10, r10);
        }

        private int i(f0 f0Var) {
            int g10;
            if (this.f39140d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int f10 = f(f0Var, 0);
            if (f10 <= g10) {
                int f11 = f(f0Var, 1) + h(f0Var, 0);
                if (f11 <= g10) {
                    try {
                        int f12 = f(f0Var, 1);
                        f11 = f(f0Var, 2) + h(f0Var, 1);
                        f10 = f12;
                    } catch (RuntimeException unused) {
                        f11 += 7;
                    }
                }
                return (f11 - f10) / 7;
            }
            return ((f10 + h(f0Var, -1)) - f(f0Var, -1)) / 7;
        }

        private y0 q(f0 f0Var, int i10) {
            if (this.f39140d.M()) {
                return y0.h(pt.b.c(f0Var.f() + i10, 1, 1));
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
            return y0.h(pt.b.c(f10, r10, 1));
        }

        private f0 t(f0 f0Var, int i10) {
            int b10 = b(f0Var);
            if (i10 == b10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - b10) * 7));
        }

        @Override // rt.z
        /* renamed from: d */
        public rt.p a(rt.q qVar) {
            return c();
        }

        @Override // rt.z
        /* renamed from: e */
        public rt.p g(rt.q qVar) {
            return c();
        }

        @Override // rt.z
        /* renamed from: j */
        public Integer k(rt.q qVar) {
            return Integer.valueOf(i((f0) qVar.s(f0.f39353y)));
        }

        @Override // rt.z
        /* renamed from: l */
        public Integer o(rt.q qVar) {
            return 1;
        }

        @Override // rt.z
        /* renamed from: p */
        public Integer y(rt.q qVar) {
            return Integer.valueOf(b((f0) qVar.s(f0.f39353y)));
        }

        @Override // rt.z
        /* renamed from: r */
        public boolean n(rt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            if (this.f39140d.M() && intValue >= 1 && intValue <= 52) {
                return true;
            }
            if (this.f39140d.M() && intValue != 53) {
                return false;
            }
            f0 f0Var = (f0) qVar.s(f0.f39353y);
            if (intValue < 1 || intValue > i(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // rt.z
        /* renamed from: v */
        public rt.q u(rt.q qVar, Integer num, boolean z10) {
            rt.p pVar = f0.f39353y;
            f0 f0Var = (f0) qVar.s(pVar);
            if (num != null && (z10 || n(qVar, num))) {
                return qVar.E(pVar, t(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private c(d dVar) {
            this.f39140d = dVar;
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

        @Override // rt.p
        public boolean A() {
            return true;
        }

        @Override // rt.p
        public boolean D() {
            return false;
        }

        @Override // rt.p
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

        @Override // rt.p
        /* renamed from: J */
        public Integer B() {
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // rt.e
        public rt.z c(rt.x xVar) {
            if (!xVar.E(f0.f39353y)) {
                return null;
            }
            if (L()) {
                return new b(this, null);
            }
            return new c(this, null);
        }

        @Override // rt.e, rt.p
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

        @Override // rt.p
        public Class getType() {
            return Integer.class;
        }

        @Override // rt.e, rt.p
        public boolean i() {
            return true;
        }

        @Override // rt.e
        protected boolean l(rt.e eVar) {
            return K().equals(((d) eVar).K());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // rt.e
        public rt.p p() {
            return f0.J;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements rt.z {

        /* renamed from: d  reason: collision with root package name */
        final f f39141d;

        /* synthetic */ e(f fVar, a aVar) {
            this(fVar);
        }

        private rt.p b(rt.q qVar) {
            rt.p pVar = g0.f39387z;
            if (qVar.n(pVar)) {
                return pVar;
            }
            return null;
        }

        @Override // rt.z
        /* renamed from: c */
        public rt.p a(rt.q qVar) {
            return b(qVar);
        }

        @Override // rt.z
        /* renamed from: d */
        public rt.p g(rt.q qVar) {
            return b(qVar);
        }

        @Override // rt.z
        /* renamed from: e */
        public y0 k(rt.q qVar) {
            f0 f0Var = (f0) qVar.s(f0.f39353y);
            if ((f0Var.i() + 7) - f0Var.A0().e(this.f39141d.K()) > f0.r0().o().a()) {
                return y0.FRIDAY;
            }
            return this.f39141d.e();
        }

        @Override // rt.z
        /* renamed from: f */
        public y0 o(rt.q qVar) {
            f0 f0Var = (f0) qVar.s(f0.f39353y);
            if ((f0Var.i() + 1) - f0Var.A0().e(this.f39141d.K()) < f0.r0().o().d()) {
                return y0.MONDAY;
            }
            return this.f39141d.B();
        }

        @Override // rt.z
        /* renamed from: h */
        public y0 y(rt.q qVar) {
            return ((f0) qVar.s(f0.f39353y)).A0();
        }

        @Override // rt.z
        /* renamed from: i */
        public boolean n(rt.q qVar, y0 y0Var) {
            if (y0Var == null) {
                return false;
            }
            try {
                u(qVar, y0Var, false);
                return true;
            } catch (RuntimeException unused) {
                return false;
            }
        }

        @Override // rt.z
        /* renamed from: j */
        public rt.q u(rt.q qVar, y0 y0Var, boolean z10) {
            if (y0Var != null) {
                rt.p pVar = f0.f39353y;
                f0 f0Var = (f0) qVar.s(pVar);
                long C0 = f0Var.C0();
                y0 c10 = a1.c(C0);
                if (y0Var == c10) {
                    return qVar;
                }
                return qVar.E(pVar, f0Var.S0((C0 + y0Var.e(this.f39141d.K())) - c10.e(this.f39141d.K())));
            }
            throw new IllegalArgumentException("Missing weekday.");
        }

        private e(f fVar) {
            this.f39141d = fVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class f extends net.time4j.a implements c0, st.l, st.t {
        private static final long serialVersionUID = 1945670789283677398L;

        f() {
            super("LOCAL_DAY_OF_WEEK");
        }

        private st.s H(rt.d dVar, st.m mVar) {
            return st.b.d((Locale) dVar.b(st.a.f50160c, Locale.ROOT)).p((st.v) dVar.b(st.a.f50164g, st.v.WIDE), mVar);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public a1 K() {
            return a1.this;
        }

        private Object readResolve() {
            return a1.this.i();
        }

        @Override // rt.p
        public boolean A() {
            return true;
        }

        @Override // rt.p
        public boolean D() {
            return false;
        }

        @Override // rt.p
        /* renamed from: I */
        public y0 e() {
            return a1.this.f().f(6);
        }

        @Override // rt.p
        /* renamed from: J */
        public y0 B() {
            return a1.this.f();
        }

        public int L(y0 y0Var) {
            return y0Var.e(a1.this);
        }

        @Override // st.t
        /* renamed from: M */
        public y0 r(CharSequence charSequence, ParsePosition parsePosition, rt.d dVar) {
            int index = parsePosition.getIndex();
            rt.c cVar = st.a.f50165h;
            st.m mVar = st.m.FORMAT;
            st.m mVar2 = (st.m) dVar.b(cVar, mVar);
            y0 y0Var = (y0) H(dVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
            if (y0Var == null && ((Boolean) dVar.b(st.a.f50168k, Boolean.TRUE)).booleanValue()) {
                parsePosition.setErrorIndex(-1);
                parsePosition.setIndex(index);
                if (mVar2 == mVar) {
                    mVar = st.m.STANDALONE;
                }
                return (y0) H(dVar, mVar).c(charSequence, parsePosition, getType(), dVar);
            }
            return y0Var;
        }

        @Override // st.l
        /* renamed from: N */
        public int j(y0 y0Var, rt.o oVar, rt.d dVar) {
            return L(y0Var);
        }

        @Override // rt.e, java.util.Comparator
        /* renamed from: b */
        public int compare(rt.o oVar, rt.o oVar2) {
            int e10 = ((y0) oVar.s(this)).e(a1.this);
            int e11 = ((y0) oVar2.s(this)).e(a1.this);
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
        public rt.z c(rt.x xVar) {
            if (!xVar.E(f0.f39353y)) {
                return null;
            }
            return new e(this, null);
        }

        @Override // rt.e, rt.p
        public char d() {
            return 'e';
        }

        @Override // st.l
        public boolean f(rt.q qVar, int i10) {
            y0[] values;
            for (y0 y0Var : y0.values()) {
                if (y0Var.e(a1.this) == i10) {
                    qVar.E(this, y0Var);
                    return true;
                }
            }
            return false;
        }

        @Override // rt.p
        public Class getType() {
            return y0.class;
        }

        @Override // rt.e
        protected boolean l(rt.e eVar) {
            return K().equals(((f) eVar).K());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // rt.e
        public rt.p p() {
            return f0.G;
        }

        @Override // st.t
        public void v(rt.o oVar, Appendable appendable, rt.d dVar) {
            appendable.append(H(dVar, (st.m) dVar.b(st.a.f50165h, st.m.FORMAT)).f((Enum) oVar.s(this)));
        }
    }

    static {
        st.y yVar;
        Iterator it = pt.d.c().g(st.y.class).iterator();
        if (it.hasNext()) {
            yVar = (st.y) it.next();
        } else {
            yVar = null;
        }
        f39124y = yVar;
    }

    private a1(y0 y0Var, int i10, y0 y0Var2, y0 y0Var3) {
        if (y0Var != null) {
            if (i10 >= 1 && i10 <= 7) {
                if (y0Var2 != null) {
                    if (y0Var3 != null) {
                        this.f39125d = y0Var;
                        this.f39126e = i10;
                        this.f39127i = y0Var2;
                        this.f39128o = y0Var3;
                        d dVar = new d("WEEK_OF_YEAR", 0);
                        this.f39129p = dVar;
                        d dVar2 = new d("WEEK_OF_MONTH", 1);
                        this.f39130q = dVar2;
                        d dVar3 = new d("BOUNDED_WEEK_OF_YEAR", 2);
                        this.f39131r = dVar3;
                        d dVar4 = new d("BOUNDED_WEEK_OF_MONTH", 3);
                        this.f39132s = dVar4;
                        f fVar = new f();
                        this.f39133t = fVar;
                        this.f39135v = new a(y0Var2, y0Var3);
                        HashSet hashSet = new HashSet();
                        hashSet.add(dVar);
                        hashSet.add(dVar2);
                        hashSet.add(fVar);
                        hashSet.add(dVar3);
                        hashSet.add(dVar4);
                        this.f39134u = Collections.unmodifiableSet(hashSet);
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
        return y0.h(pt.c.d(j10 + 5, 7) + 1);
    }

    public static a1 j(Locale locale) {
        int i10;
        if (locale.getCountry().isEmpty()) {
            return f39123x;
        }
        Map map = f39122w;
        a1 a1Var = (a1) map.get(locale);
        if (a1Var != null) {
            return a1Var;
        }
        st.y yVar = f39124y;
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
            return f39123x;
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
        return this.f39132s;
    }

    public net.time4j.c b() {
        return this.f39131r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set d() {
        return this.f39134u;
    }

    public y0 e() {
        return this.f39128o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a1) {
            a1 a1Var = (a1) obj;
            if (this.f39125d == a1Var.f39125d && this.f39126e == a1Var.f39126e && this.f39127i == a1Var.f39127i && this.f39128o == a1Var.f39128o) {
                return true;
            }
        }
        return false;
    }

    public y0 f() {
        return this.f39125d;
    }

    public int g() {
        return this.f39126e;
    }

    public y0 h() {
        return this.f39127i;
    }

    public int hashCode() {
        return (this.f39125d.name().hashCode() * 17) + (this.f39126e * 37);
    }

    public c0 i() {
        return this.f39133t;
    }

    public net.time4j.c m() {
        return this.f39130q;
    }

    public net.time4j.c n() {
        return this.f39129p;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a1.class.getName());
        sb2.append("[firstDayOfWeek=");
        sb2.append(this.f39125d);
        sb2.append(",minimalDaysInFirstWeek=");
        sb2.append(this.f39126e);
        sb2.append(",startOfWeekend=");
        sb2.append(this.f39127i);
        sb2.append(",endOfWeekend=");
        sb2.append(this.f39128o);
        sb2.append(']');
        return sb2.toString();
    }
}
