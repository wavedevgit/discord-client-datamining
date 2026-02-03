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
    private static final Map f40259w = new ConcurrentHashMap();

    /* renamed from: x  reason: collision with root package name */
    public static final a1 f40260x = new a1(y0.MONDAY, 4, y0.SATURDAY, y0.SUNDAY);

    /* renamed from: y  reason: collision with root package name */
    private static final nt.y f40261y;

    /* renamed from: d  reason: collision with root package name */
    private final transient y0 f40262d;

    /* renamed from: e  reason: collision with root package name */
    private final transient int f40263e;

    /* renamed from: i  reason: collision with root package name */
    private final transient y0 f40264i;

    /* renamed from: o  reason: collision with root package name */
    private final transient y0 f40265o;

    /* renamed from: p  reason: collision with root package name */
    private final transient net.time4j.c f40266p;

    /* renamed from: q  reason: collision with root package name */
    private final transient net.time4j.c f40267q;

    /* renamed from: r  reason: collision with root package name */
    private final transient net.time4j.c f40268r;

    /* renamed from: s  reason: collision with root package name */
    private final transient net.time4j.c f40269s;

    /* renamed from: t  reason: collision with root package name */
    private final transient c0 f40270t;

    /* renamed from: u  reason: collision with root package name */
    private final transient Set f40271u;

    /* renamed from: v  reason: collision with root package name */
    private final transient mt.n f40272v;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    class a implements mt.n {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ y0 f40273d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ y0 f40274e;

        a(y0 y0Var, y0 y0Var2) {
            this.f40273d = y0Var;
            this.f40274e = y0Var2;
        }

        @Override // mt.n
        /* renamed from: a */
        public boolean test(kt.a aVar) {
            y0 h10 = y0.h(kt.b.c(aVar.f(), aVar.s(), aVar.g()));
            if (h10 != this.f40273d && h10 != this.f40274e) {
                return false;
            }
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class b implements mt.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40276d;

        /* synthetic */ b(d dVar, a aVar) {
            this(dVar);
        }

        private mt.p b(mt.q qVar, boolean z10) {
            int i10;
            f0 f0Var = (f0) qVar.o(f0.f40490y);
            c0 i11 = this.f40276d.K().i();
            int intValue = z(qVar).intValue();
            if (z10) {
                if (this.f40276d.M()) {
                    i10 = 52;
                } else {
                    i10 = 4;
                }
                if (intValue >= i10) {
                    f0 f0Var2 = (f0) f0Var.E(i11, qVar.u(i11));
                    if (this.f40276d.M()) {
                        if (f0Var2.B0() < f0Var.B0()) {
                            return f0.H;
                        }
                    } else if (f0Var2.g() < f0Var.g()) {
                        return f0.F;
                    }
                }
            } else if (intValue <= 1) {
                f0 f0Var3 = (f0) f0Var.E(i11, qVar.v(i11));
                if (this.f40276d.M()) {
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
            if (this.f40276d.M()) {
                if (kt.b.e(f0Var.f())) {
                    return 366;
                }
                return 365;
            }
            return kt.b.d(f0Var.f(), f0Var.s());
        }

        private int f(f0 f0Var) {
            return n(f0Var, 1);
        }

        private int i(f0 f0Var) {
            return n(f0Var, -1);
        }

        private int m(f0 f0Var) {
            return n(f0Var, 0);
        }

        private int n(f0 f0Var, int i10) {
            int g10;
            int i11;
            if (this.f40276d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int e10 = a1.c((f0Var.C0() - g10) + 1).e(this.f40276d.K());
            if (e10 <= 8 - this.f40276d.K().g()) {
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
            return kt.c.a(g10 - i11, 7) + 1;
        }

        private f0 s(f0 f0Var, int i10) {
            int m10 = m(f0Var);
            if (i10 == m10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - m10) * 7));
        }

        @Override // mt.z
        /* renamed from: c */
        public mt.p a(mt.q qVar) {
            return b(qVar, true);
        }

        @Override // mt.z
        /* renamed from: d */
        public mt.p h(mt.q qVar) {
            return b(qVar, false);
        }

        @Override // mt.z
        /* renamed from: g */
        public Integer l(mt.q qVar) {
            return Integer.valueOf(f((f0) qVar.o(f0.f40490y)));
        }

        @Override // mt.z
        /* renamed from: j */
        public Integer r(mt.q qVar) {
            return Integer.valueOf(i((f0) qVar.o(f0.f40490y)));
        }

        @Override // mt.z
        /* renamed from: k */
        public Integer z(mt.q qVar) {
            return Integer.valueOf(m((f0) qVar.o(f0.f40490y)));
        }

        @Override // mt.z
        /* renamed from: p */
        public boolean q(mt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            f0 f0Var = (f0) qVar.o(f0.f40490y);
            if (intValue < i(f0Var) || intValue > f(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // mt.z
        /* renamed from: t */
        public mt.q x(mt.q qVar, Integer num, boolean z10) {
            mt.p pVar = f0.f40490y;
            f0 f0Var = (f0) qVar.o(pVar);
            if (num != null && (z10 || q(qVar, num))) {
                return qVar.E(pVar, s(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private b(d dVar) {
            this.f40276d = dVar;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements mt.z {

        /* renamed from: d  reason: collision with root package name */
        private final d f40277d;

        /* synthetic */ c(d dVar, a aVar) {
            this(dVar);
        }

        private int b(f0 f0Var) {
            int g10;
            if (this.f40277d.M()) {
                g10 = f0Var.B0();
            } else {
                g10 = f0Var.g();
            }
            int f10 = f(f0Var, 0);
            if (f10 <= g10) {
                int i10 = ((g10 - f10) / 7) + 1;
                if ((i10 >= 53 || (!this.f40277d.M() && i10 >= 5)) && f(f0Var, 1) + g(f0Var, 0) <= g10) {
                    return 1;
                }
                return i10;
            }
            return (((g10 + g(f0Var, -1)) - f(f0Var, -1)) / 7) + 1;
        }

        private mt.p c() {
            return this.f40277d.K().i();
        }

        private int f(f0 f0Var, int i10) {
            y0 n10 = n(f0Var, i10);
            a1 K = this.f40277d.K();
            int e10 = n10.e(K);
            if (e10 <= 8 - K.g()) {
                return 2 - e10;
            }
            return 9 - e10;
        }

        private int g(f0 f0Var, int i10) {
            if (this.f40277d.M()) {
                if (kt.b.e(f0Var.f() + i10)) {
                    return 366;
                }
                return 365;
            }
            int f10 = f0Var.f();
            int s10 = f0Var.s() + i10;
            if (s10 == 0) {
                f10--;
                s10 = 12;
            } else if (s10 == 13) {
                f10++;
                s10 = 1;
            }
            return kt.b.d(f10, s10);
        }

        private int i(f0 f0Var) {
            int g10;
            if (this.f40277d.M()) {
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

        private y0 n(f0 f0Var, int i10) {
            if (this.f40277d.M()) {
                return y0.h(kt.b.c(f0Var.f() + i10, 1, 1));
            }
            int f10 = f0Var.f();
            int s10 = f0Var.s() + i10;
            if (s10 == 0) {
                f10--;
                s10 = 12;
            } else if (s10 == 13) {
                f10++;
                s10 = 1;
            } else if (s10 == 14) {
                f10++;
                s10 = 2;
            }
            return y0.h(kt.b.c(f10, s10, 1));
        }

        private f0 s(f0 f0Var, int i10) {
            int b10 = b(f0Var);
            if (i10 == b10) {
                return f0Var;
            }
            return f0Var.S0(f0Var.C0() + ((i10 - b10) * 7));
        }

        @Override // mt.z
        /* renamed from: d */
        public mt.p a(mt.q qVar) {
            return c();
        }

        @Override // mt.z
        /* renamed from: e */
        public mt.p h(mt.q qVar) {
            return c();
        }

        @Override // mt.z
        /* renamed from: j */
        public Integer l(mt.q qVar) {
            return Integer.valueOf(i((f0) qVar.o(f0.f40490y)));
        }

        @Override // mt.z
        /* renamed from: k */
        public Integer r(mt.q qVar) {
            return 1;
        }

        @Override // mt.z
        /* renamed from: m */
        public Integer z(mt.q qVar) {
            return Integer.valueOf(b((f0) qVar.o(f0.f40490y)));
        }

        @Override // mt.z
        /* renamed from: p */
        public boolean q(mt.q qVar, Integer num) {
            if (num == null) {
                return false;
            }
            int intValue = num.intValue();
            if (this.f40277d.M() && intValue >= 1 && intValue <= 52) {
                return true;
            }
            if (this.f40277d.M() && intValue != 53) {
                return false;
            }
            f0 f0Var = (f0) qVar.o(f0.f40490y);
            if (intValue < 1 || intValue > i(f0Var)) {
                return false;
            }
            return true;
        }

        @Override // mt.z
        /* renamed from: t */
        public mt.q x(mt.q qVar, Integer num, boolean z10) {
            mt.p pVar = f0.f40490y;
            f0 f0Var = (f0) qVar.o(pVar);
            if (num != null && (z10 || q(qVar, num))) {
                return qVar.E(pVar, s(f0Var, num.intValue()));
            }
            throw new IllegalArgumentException("Invalid value: " + num + " (context=" + qVar + ")");
        }

        private c(d dVar) {
            this.f40277d = dVar;
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

        @Override // mt.p
        public boolean C() {
            return false;
        }

        @Override // mt.p
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

        @Override // mt.p
        /* renamed from: J */
        public Integer A() {
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // mt.e
        public mt.z c(mt.x xVar) {
            if (!xVar.E(f0.f40490y)) {
                return null;
            }
            if (L()) {
                return new b(this, null);
            }
            return new c(this, null);
        }

        @Override // mt.e, mt.p
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

        @Override // mt.p
        public Class getType() {
            return Integer.class;
        }

        @Override // mt.e, mt.p
        public boolean k() {
            return true;
        }

        @Override // mt.e
        protected boolean m(mt.e eVar) {
            return K().equals(((d) eVar).K());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // mt.e
        public mt.p n() {
            return f0.J;
        }

        @Override // mt.p
        public boolean y() {
            return true;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class e implements mt.z {

        /* renamed from: d  reason: collision with root package name */
        final f f40278d;

        /* synthetic */ e(f fVar, a aVar) {
            this(fVar);
        }

        private mt.p b(mt.q qVar) {
            mt.p pVar = g0.f40524z;
            if (qVar.q(pVar)) {
                return pVar;
            }
            return null;
        }

        @Override // mt.z
        /* renamed from: c */
        public mt.p a(mt.q qVar) {
            return b(qVar);
        }

        @Override // mt.z
        /* renamed from: d */
        public mt.p h(mt.q qVar) {
            return b(qVar);
        }

        @Override // mt.z
        /* renamed from: e */
        public y0 l(mt.q qVar) {
            f0 f0Var = (f0) qVar.o(f0.f40490y);
            if ((f0Var.i() + 7) - f0Var.A0().e(this.f40278d.K()) > f0.r0().q().a()) {
                return y0.FRIDAY;
            }
            return this.f40278d.f();
        }

        @Override // mt.z
        /* renamed from: f */
        public y0 r(mt.q qVar) {
            f0 f0Var = (f0) qVar.o(f0.f40490y);
            if ((f0Var.i() + 1) - f0Var.A0().e(this.f40278d.K()) < f0.r0().q().d()) {
                return y0.MONDAY;
            }
            return this.f40278d.A();
        }

        @Override // mt.z
        /* renamed from: g */
        public y0 z(mt.q qVar) {
            return ((f0) qVar.o(f0.f40490y)).A0();
        }

        @Override // mt.z
        /* renamed from: i */
        public boolean q(mt.q qVar, y0 y0Var) {
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

        @Override // mt.z
        /* renamed from: j */
        public mt.q x(mt.q qVar, y0 y0Var, boolean z10) {
            if (y0Var != null) {
                mt.p pVar = f0.f40490y;
                f0 f0Var = (f0) qVar.o(pVar);
                long C0 = f0Var.C0();
                y0 c10 = a1.c(C0);
                if (y0Var == c10) {
                    return qVar;
                }
                return qVar.E(pVar, f0Var.S0((C0 + y0Var.e(this.f40278d.K())) - c10.e(this.f40278d.K())));
            }
            throw new IllegalArgumentException("Missing weekday.");
        }

        private e(f fVar) {
            this.f40278d = fVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public class f extends net.time4j.a implements c0, nt.l, nt.t {
        private static final long serialVersionUID = 1945670789283677398L;

        f() {
            super("LOCAL_DAY_OF_WEEK");
        }

        private nt.s H(mt.d dVar, nt.m mVar) {
            return nt.b.d((Locale) dVar.b(nt.a.f42028c, Locale.ROOT)).p((nt.v) dVar.b(nt.a.f42032g, nt.v.WIDE), mVar);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public a1 K() {
            return a1.this;
        }

        private Object readResolve() {
            return a1.this.i();
        }

        @Override // mt.p
        public boolean C() {
            return false;
        }

        @Override // mt.p
        /* renamed from: I */
        public y0 f() {
            return a1.this.f().f(6);
        }

        @Override // mt.p
        /* renamed from: J */
        public y0 A() {
            return a1.this.f();
        }

        public int L(y0 y0Var) {
            return y0Var.e(a1.this);
        }

        @Override // nt.t
        /* renamed from: M */
        public y0 j(CharSequence charSequence, ParsePosition parsePosition, mt.d dVar) {
            int index = parsePosition.getIndex();
            mt.c cVar = nt.a.f42033h;
            nt.m mVar = nt.m.FORMAT;
            nt.m mVar2 = (nt.m) dVar.b(cVar, mVar);
            y0 y0Var = (y0) H(dVar, mVar2).c(charSequence, parsePosition, getType(), dVar);
            if (y0Var == null && ((Boolean) dVar.b(nt.a.f42036k, Boolean.TRUE)).booleanValue()) {
                parsePosition.setErrorIndex(-1);
                parsePosition.setIndex(index);
                if (mVar2 == mVar) {
                    mVar = nt.m.STANDALONE;
                }
                return (y0) H(dVar, mVar).c(charSequence, parsePosition, getType(), dVar);
            }
            return y0Var;
        }

        @Override // nt.l
        /* renamed from: N */
        public int e(y0 y0Var, mt.o oVar, mt.d dVar) {
            return L(y0Var);
        }

        @Override // mt.e, java.util.Comparator
        /* renamed from: b */
        public int compare(mt.o oVar, mt.o oVar2) {
            int e10 = ((y0) oVar.o(this)).e(a1.this);
            int e11 = ((y0) oVar2.o(this)).e(a1.this);
            if (e10 < e11) {
                return -1;
            }
            if (e10 == e11) {
                return 0;
            }
            return 1;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // mt.e
        public mt.z c(mt.x xVar) {
            if (!xVar.E(f0.f40490y)) {
                return null;
            }
            return new e(this, null);
        }

        @Override // mt.e, mt.p
        public char d() {
            return 'e';
        }

        @Override // mt.p
        public Class getType() {
            return y0.class;
        }

        @Override // mt.e
        protected boolean m(mt.e eVar) {
            return K().equals(((f) eVar).K());
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // mt.e
        public mt.p n() {
            return f0.G;
        }

        @Override // nt.l
        public boolean p(mt.q qVar, int i10) {
            y0[] values;
            for (y0 y0Var : y0.values()) {
                if (y0Var.e(a1.this) == i10) {
                    qVar.E(this, y0Var);
                    return true;
                }
            }
            return false;
        }

        @Override // nt.t
        public void s(mt.o oVar, Appendable appendable, mt.d dVar) {
            appendable.append(H(dVar, (nt.m) dVar.b(nt.a.f42033h, nt.m.FORMAT)).f((Enum) oVar.o(this)));
        }

        @Override // mt.p
        public boolean y() {
            return true;
        }
    }

    static {
        nt.y yVar;
        Iterator it = kt.d.c().g(nt.y.class).iterator();
        if (it.hasNext()) {
            yVar = (nt.y) it.next();
        } else {
            yVar = null;
        }
        f40261y = yVar;
    }

    private a1(y0 y0Var, int i10, y0 y0Var2, y0 y0Var3) {
        if (y0Var != null) {
            if (i10 >= 1 && i10 <= 7) {
                if (y0Var2 != null) {
                    if (y0Var3 != null) {
                        this.f40262d = y0Var;
                        this.f40263e = i10;
                        this.f40264i = y0Var2;
                        this.f40265o = y0Var3;
                        d dVar = new d("WEEK_OF_YEAR", 0);
                        this.f40266p = dVar;
                        d dVar2 = new d("WEEK_OF_MONTH", 1);
                        this.f40267q = dVar2;
                        d dVar3 = new d("BOUNDED_WEEK_OF_YEAR", 2);
                        this.f40268r = dVar3;
                        d dVar4 = new d("BOUNDED_WEEK_OF_MONTH", 3);
                        this.f40269s = dVar4;
                        f fVar = new f();
                        this.f40270t = fVar;
                        this.f40272v = new a(y0Var2, y0Var3);
                        HashSet hashSet = new HashSet();
                        hashSet.add(dVar);
                        hashSet.add(dVar2);
                        hashSet.add(fVar);
                        hashSet.add(dVar3);
                        hashSet.add(dVar4);
                        this.f40271u = Collections.unmodifiableSet(hashSet);
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
        return y0.h(kt.c.d(j10 + 5, 7) + 1);
    }

    public static a1 j(Locale locale) {
        int i10;
        if (locale.getCountry().isEmpty()) {
            return f40260x;
        }
        Map map = f40259w;
        a1 a1Var = (a1) map.get(locale);
        if (a1Var != null) {
            return a1Var;
        }
        nt.y yVar = f40261y;
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
            return f40260x;
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
        return this.f40269s;
    }

    public net.time4j.c b() {
        return this.f40268r;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Set d() {
        return this.f40271u;
    }

    public y0 e() {
        return this.f40265o;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a1) {
            a1 a1Var = (a1) obj;
            if (this.f40262d == a1Var.f40262d && this.f40263e == a1Var.f40263e && this.f40264i == a1Var.f40264i && this.f40265o == a1Var.f40265o) {
                return true;
            }
        }
        return false;
    }

    public y0 f() {
        return this.f40262d;
    }

    public int g() {
        return this.f40263e;
    }

    public y0 h() {
        return this.f40264i;
    }

    public int hashCode() {
        return (this.f40262d.name().hashCode() * 17) + (this.f40263e * 37);
    }

    public c0 i() {
        return this.f40270t;
    }

    public net.time4j.c m() {
        return this.f40267q;
    }

    public net.time4j.c n() {
        return this.f40266p;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder(64);
        sb2.append(a1.class.getName());
        sb2.append("[firstDayOfWeek=");
        sb2.append(this.f40262d);
        sb2.append(",minimalDaysInFirstWeek=");
        sb2.append(this.f40263e);
        sb2.append(",startOfWeekend=");
        sb2.append(this.f40264i);
        sb2.append(",endOfWeekend=");
        sb2.append(this.f40265o);
        sb2.append(']');
        return sb2.toString();
    }
}
