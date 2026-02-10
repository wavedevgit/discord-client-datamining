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
    private static final Map f38214w = new ConcurrentHashMap();

    /* renamed from: x  reason: collision with root package name */
    public static final a1 f38215x = new a1(y0.MONDAY, 4, y0.SATURDAY, y0.SUNDAY);

    /* renamed from: y  reason: collision with root package name */
    private static final tt.y f38216y;

    /* renamed from: d  reason: collision with root package name */
    private final transient y0 f38217d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f38218e;

    /* renamed from: i  reason: collision with root package name */
    private final transient y0 f38219i;

    /* renamed from: o  reason: collision with root package name */
    private final transient y0 f38220o;

    /* renamed from: p  reason: collision with root package name */
    private final transient net.time4j.c f38221p;

    /* renamed from: q  reason: collision with root package name */
    private final transient net.time4j.c f38222q;

    /* renamed from: r  reason: collision with root package name */
    private final transient net.time4j.c f38223r;

    /* renamed from: s  reason: collision with root package name */
    private final transient net.time4j.c f38224s;

    /* renamed from: t  reason: collision with root package name */
    private final transient c0 f38225t;

    /* renamed from: u  reason: collision with root package name */
    private final transient Set f38226u;

    /* renamed from: v  reason: collision with root package name */
    private final transient st.n f38227v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements st.n {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y0 f38228d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ y0 f38229e;

        a(y0 y0Var, y0 y0Var2) {
            this.f38228d = y0Var;
            this.f38229e = y0Var2;
        }

        @Override // st.n
        /* renamed from: a */
        public boolean test(qt.a aVar) {
            y0 h10 = y0.h(qt.b.c(aVar.f(), aVar.r(), aVar.g()));
            if (h10 != this.f38228d && h10 != this.f38229e) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements st.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f38231d;

        /* synthetic */ b(d dVar, a aVar) {
            this(dVar);
        }

        private st.p b(st.q qVar, boolean z10) {
            int i10;
            f0 f0Var = (f0) qVar.t(f0.f38445y);
            c0 i11 = this.f38231d.K().i();
            int intValue = y(qVar).intValue();
            if (z10) {
                if (this.f38231d.M()) {
                    i10 = 52;
                } else {
                    i10 = 4;
                }
                if (intValue >= i10) {
                    f0 f0Var2 = (f0) f0Var.E(i11, qVar.n(i11));
                    if (this.f38231d.M()) {
                        if (f0Var2.B0() < f0Var.B0()) {
                            return f0.H;
                        }
                    } else if (f0Var2.g() < f0Var.g()) {
                        return f0.F;
                    }
                }
            } else if (intValue <= 1) {
                f0 f0Var3 = (f0) f0Var.E(i11, qVar.m(i11));
                if (this.f38231d.M()) {
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
            if (this.f38231d.M()) {
                if (qt.b.e(f0Var.f())) {
                    return 366;
                }
                return 365;
            }
            return qt.b.d(f0Var.f(), f0Var.r());
        }

        private int f(f0 f0Var) {
            return r(f0Var, 1);
        }

        private int l(f0 f0Var) {
            return r(f0Var, -1);
        }

        private int q(f0 f0Var) {
            return r(f0Var, 0);
        }

        private int r(f0 f0Var, int i10) {
            int g10;
            int i11;
            if (this.f38231d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int e10 = a1.c((f0Var.C0() - g10) + 1).e(this.f38231d.K());
            if (e10 <= 8 - this.f38231d.K().g()) {
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
            return qt.c.a(g10 - i11, 7) + 1;
        }

        private f0 u(f0 f0Var, int i10) {
            int q10 = q(f0Var);
            if (i10 == q10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - q10) * 7));
        }

        @Override // st.z
        /* renamed from: c */
        public st.p a(st.q qVar) {
            return b(qVar, true);
        }

        @Override // st.z
        /* renamed from: d */
        public st.p g(st.q qVar) {
            return b(qVar, false);
        }

        @Override // st.z
        /* renamed from: j */
        public Integer h(st.q qVar) {
            return Integer.valueOf(f((f0) qVar.t(f0.f38445y)));
        }

        @Override // st.z
        /* renamed from: o */
        public Integer m(st.q qVar) {
            return Integer.valueOf(l((f0) qVar.t(f0.f38445y)));
        }

        @Override // st.z
        /* renamed from: p */
        public Integer y(st.q qVar) {
            return Integer.valueOf(q((f0) qVar.t(f0.f38445y)));
        }

        @Override // st.z
        /* renamed from: t */
        public boolean k(st.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            f0 f0Var = (f0) qVar.t(f0.f38445y);
            if (intValue < l(f0Var) || intValue > f(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // st.z
        /* renamed from: v */
        public st.q s(st.q qVar, Integer num, boolean z10) {
            st.p pVar = f0.f38445y;
            f0 f0Var = (f0) qVar.t(pVar);
            if (num != null && (z10 || k(qVar, num))) {
                return qVar.E(pVar, u(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private b(d dVar) {
            this.f38231d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements st.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f38232d;

        /* synthetic */ c(d dVar, a aVar) {
            this(dVar);
        }

        private int b(f0 f0Var) {
            int g10;
            if (this.f38232d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int f10 = f(f0Var, 0);
            if (f10 <= g10) {
                int i10 = ((g10 - f10) / 7) + 1;
                if ((i10 >= 53 || (!this.f38232d.M() && i10 >= 5)) && f(f0Var, 1) + j(f0Var, 0) <= g10) {
                    return 1;
                }
                return i10;
            }
            return (((g10 + j(f0Var, -1)) - f(f0Var, -1)) / 7) + 1;
        }

        private st.p c() {
            return this.f38232d.K().i();
        }

        private int f(f0 f0Var, int i10) {
            y0 r10 = r(f0Var, i10);
            a1 K = this.f38232d.K();
            int e10 = r10.e(K);
            if (e10 <= 8 - K.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int j(f0 f0Var, int i10) {
            if (this.f38232d.M()) {
                if (qt.b.e(f0Var.f() + i10)) {
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
            return qt.b.d(f10, r10);
        }

        private int l(f0 f0Var) {
            int g10;
            if (this.f38232d.M()) {
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

        private y0 r(f0 f0Var, int i10) {
            if (this.f38232d.M()) {
                return y0.h(qt.b.c(f0Var.f() + i10, 1, 1));
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
            return y0.h(qt.b.c(f10, r10, 1));
        }

        private f0 u(f0 f0Var, int i10) {
            int b10 = b(f0Var);
            if (i10 == b10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - b10) * 7));
        }

        @Override // st.z
        /* renamed from: d */
        public st.p a(st.q qVar) {
            return c();
        }

        @Override // st.z
        /* renamed from: e */
        public st.p g(st.q qVar) {
            return c();
        }

        @Override // st.z
        /* renamed from: o */
        public Integer h(st.q qVar) {
            return Integer.valueOf(l((f0) qVar.t(f0.f38445y)));
        }

        @Override // st.z
        /* renamed from: p */
        public Integer m(st.q qVar) {
            return 1;
        }

        @Override // st.z
        /* renamed from: q */
        public Integer y(st.q qVar) {
            return Integer.valueOf(b((f0) qVar.t(f0.f38445y)));
        }

        @Override // st.z
        /* renamed from: t */
        public boolean k(st.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            if (this.f38232d.M() && intValue >= 1 && intValue <= 52) {
                return true;
            }
            if (this.f38232d.M() && intValue != 53) {
                return false;
            }
            f0 f0Var = (f0) qVar.t(f0.f38445y);
            if (intValue < 1 || intValue > l(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // st.z
        /* renamed from: v */
        public st.q s(st.q qVar, Integer num, boolean z10) {
            st.p pVar = f0.f38445y;
            f0 f0Var = (f0) qVar.t(pVar);
            if (num != null && (z10 || k(qVar, num))) {
                return qVar.E(pVar, u(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private c(d dVar) {
            this.f38232d = dVar;
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

        @Override // st.p
        public boolean A() {
            return true;
        }

        @Override // st.p
        public boolean D() {
            return false;
        }

        @Override // st.p
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

        @Override // st.p
        /* renamed from: J */
        public Integer B() {
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // st.e
        public st.z c(st.x xVar) {
            if (!xVar.E(f0.f38445y)) {
                return null;
            }
            if (L()) {
                return new b(this, null);
            }
            return new c(this, null);
        }

        @Override // st.e, st.p
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

        @Override // st.e, st.p
        public boolean f() {
            return true;
        }

        @Override // st.p
        public Class getType() {
            return Integer.class;
        }

        @Override // st.e
        protected boolean j(st.e eVar) {
            return K().equals(((d) eVar).K());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // st.e
        public st.p p() {
            return f0.J;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements st.z {

        /* renamed from: d  reason: collision with root package name */
        final f f38233d;

        /* synthetic */ e(f fVar, a aVar) {
            this(fVar);
        }

        private st.p b(st.q qVar) {
            st.p pVar = g0.f38479z;
            if (qVar.s(pVar)) {
                return pVar;
            }
            return null;
        }

        @Override // st.z
        /* renamed from: c */
        public st.p a(st.q qVar) {
            return b(qVar);
        }

        @Override // st.z
        /* renamed from: d */
        public st.p g(st.q qVar) {
            return b(qVar);
        }

        @Override // st.z
        /* renamed from: e */
        public y0 h(st.q qVar) {
            f0 f0Var = (f0) qVar.t(f0.f38445y);
            if ((f0Var.i() + 7) - f0Var.A0().e(this.f38233d.K()) > f0.r0().m().a()) {
                return y0.FRIDAY;
            }
            return this.f38233d.e();
        }

        @Override // st.z
        /* renamed from: f */
        public y0 m(st.q qVar) {
            f0 f0Var = (f0) qVar.t(f0.f38445y);
            if ((f0Var.i() + 1) - f0Var.A0().e(this.f38233d.K()) < f0.r0().m().d()) {
                return y0.MONDAY;
            }
            return this.f38233d.B();
        }

        @Override // st.z
        /* renamed from: j */
        public y0 y(st.q qVar) {
            return ((f0) qVar.t(f0.f38445y)).A0();
        }

        @Override // st.z
        /* renamed from: l */
        public boolean k(st.q qVar, y0 y0Var) {
            if (y0Var == null) {
                return false;
            }
            try {
                s(qVar, y0Var, false);
                return true;
            } catch (RuntimeException unused) {
                return false;
            }
        }

        @Override // st.z
        /* renamed from: o */
        public st.q s(st.q qVar, y0 y0Var, boolean z10) {
            if (y0Var != null) {
                st.p pVar = f0.f38445y;
                f0 f0Var = (f0) qVar.t(pVar);
                long C0 = f0Var.C0();
                y0 c10 = a1.c(C0);
                if (y0Var == c10) {
                    return qVar;
                }
                return qVar.E(pVar, f0Var.S0((C0 + y0Var.e(this.f38233d.K())) - c10.e(this.f38233d.K())));
            }
            throw new IllegalArgumentException("Missing weekday.");
        }

        private e(f fVar) {
            this.f38233d = fVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class f extends net.time4j.a implements c0, tt.l, tt.t {
        private static final long serialVersionUID = 1945670789283677398L;

        f() {
            super("LOCAL_DAY_OF_WEEK");
        }

        private tt.s H(st.d dVar, tt.m mVar) {
            return tt.b.d((Locale) dVar.b(tt.a.f51004c, Locale.ROOT)).p((tt.v) dVar.b(tt.a.f51008g, tt.v.WIDE), mVar);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public a1 K() {
            return a1.this;
        }

        private Object readResolve() {
            return a1.this.i();
        }

        @Override // st.p
        public boolean A() {
            return true;
        }

        @Override // st.p
        public boolean D() {
            return false;
        }

        @Override // st.p
        /* renamed from: I */
        public y0 e() {
            return a1.this.f().f(6);
        }

        @Override // st.p
        /* renamed from: J */
        public y0 B() {
            return a1.this.f();
        }

        public int L(y0 y0Var) {
            return y0Var.e(a1.this);
        }

        @Override // tt.t
        /* renamed from: M */
        public y0 l(CharSequence charSequence, ParsePosition parsePosition, st.d dVar) {
            int index = parsePosition.getIndex();
            st.c cVar = tt.a.f51009h;
            tt.m mVar = tt.m.FORMAT;
            tt.m mVar2 = (tt.m) dVar.b(cVar, mVar);
            y0 y0Var = (y0) H(dVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
            if (y0Var == null && ((Boolean) dVar.b(tt.a.f51012k, Boolean.TRUE)).booleanValue()) {
                parsePosition.setErrorIndex(-1);
                parsePosition.setIndex(index);
                if (mVar2 == mVar) {
                    mVar = tt.m.STANDALONE;
                }
                return (y0) H(dVar, mVar).c(charSequence, parsePosition, getType(), dVar);
            }
            return y0Var;
        }

        @Override // tt.l
        /* renamed from: N */
        public int x(y0 y0Var, st.o oVar, st.d dVar) {
            return L(y0Var);
        }

        @Override // st.e, java.util.Comparator
        /* renamed from: b */
        public int compare(st.o oVar, st.o oVar2) {
            int e10 = ((y0) oVar.t(this)).e(a1.this);
            int e11 = ((y0) oVar2.t(this)).e(a1.this);
            if (e10 < e11) {
                return -1;
            }
            if (e10 == e11) {
                return 0;
            }
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // st.e
        public st.z c(st.x xVar) {
            if (!xVar.E(f0.f38445y)) {
                return null;
            }
            return new e(this, null);
        }

        @Override // st.e, st.p
        public char d() {
            return 'e';
        }

        @Override // st.p
        public Class getType() {
            return y0.class;
        }

        @Override // st.e
        protected boolean j(st.e eVar) {
            return K().equals(((f) eVar).K());
        }

        @Override // tt.t
        public void o(st.o oVar, Appendable appendable, st.d dVar) {
            appendable.append(H(dVar, (tt.m) dVar.b(tt.a.f51009h, tt.m.FORMAT)).f((Enum) oVar.t(this)));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // st.e
        public st.p p() {
            return f0.G;
        }

        @Override // tt.l
        public boolean u(st.q qVar, int i10) {
            y0[] values;
            for (y0 y0Var : y0.values()) {
                if (y0Var.e(a1.this) == i10) {
                    qVar.E(this, y0Var);
                    return true;
                }
            }
            return false;
        }
    }

    static {
        tt.y yVar;
        Iterator it = qt.d.c().g(tt.y.class).iterator();
        if (it.hasNext()) {
            yVar = (tt.y) it.next();
        } else {
            yVar = null;
        }
        f38216y = yVar;
    }

    private a1(y0 y0Var, int i10, y0 y0Var2, y0 y0Var3) {
        if (y0Var != null) {
            if (i10 >= 1 && i10 <= 7) {
                if (y0Var2 != null) {
                    if (y0Var3 != null) {
                        this.f38217d = y0Var;
                        this.f38218e = i10;
                        this.f38219i = y0Var2;
                        this.f38220o = y0Var3;
                        d dVar = new d("WEEK_OF_YEAR", 0);
                        this.f38221p = dVar;
                        d dVar2 = new d("WEEK_OF_MONTH", 1);
                        this.f38222q = dVar2;
                        d dVar3 = new d("BOUNDED_WEEK_OF_YEAR", 2);
                        this.f38223r = dVar3;
                        d dVar4 = new d("BOUNDED_WEEK_OF_MONTH", 3);
                        this.f38224s = dVar4;
                        f fVar = new f();
                        this.f38225t = fVar;
                        this.f38227v = new a(y0Var2, y0Var3);
                        HashSet hashSet = new HashSet();
                        hashSet.add(dVar);
                        hashSet.add(dVar2);
                        hashSet.add(fVar);
                        hashSet.add(dVar3);
                        hashSet.add(dVar4);
                        this.f38226u = Collections.unmodifiableSet(hashSet);
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
        return y0.h(qt.c.d(j10 + 5, 7) + 1);
    }

    public static a1 j(Locale locale) {
        int i10;
        if (locale.getCountry().isEmpty()) {
            return f38215x;
        }
        Map map = f38214w;
        a1 a1Var = (a1) map.get(locale);
        if (a1Var != null) {
            return a1Var;
        }
        tt.y yVar = f38216y;
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
            return f38215x;
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
        return this.f38224s;
    }

    public net.time4j.c b() {
        return this.f38223r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set d() {
        return this.f38226u;
    }

    public y0 e() {
        return this.f38220o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a1) {
            a1 a1Var = (a1) obj;
            if (this.f38217d == a1Var.f38217d && this.f38218e == a1Var.f38218e && this.f38219i == a1Var.f38219i && this.f38220o == a1Var.f38220o) {
                return true;
            }
        }
        return false;
    }

    public y0 f() {
        return this.f38217d;
    }

    public int g() {
        return this.f38218e;
    }

    public y0 h() {
        return this.f38219i;
    }

    public int hashCode() {
        return (this.f38217d.name().hashCode() * 17) + (this.f38218e * 37);
    }

    public c0 i() {
        return this.f38225t;
    }

    public net.time4j.c m() {
        return this.f38222q;
    }

    public net.time4j.c n() {
        return this.f38221p;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a1.class.getName());
        sb2.append("[firstDayOfWeek=");
        sb2.append(this.f38217d);
        sb2.append(",minimalDaysInFirstWeek=");
        sb2.append(this.f38218e);
        sb2.append(",startOfWeekend=");
        sb2.append(this.f38219i);
        sb2.append(",endOfWeekend=");
        sb2.append(this.f38220o);
        sb2.append(']');
        return sb2.toString();
    }
}
