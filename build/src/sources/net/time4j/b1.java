package net.time4j;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b1 extends net.time4j.a {

    /* renamed from: q  reason: collision with root package name */
    private static final jt.m0 f40395q = new c();

    /* renamed from: r  reason: collision with root package name */
    static final b1 f40396r = new b1("YEAR_OF_WEEKDATE");
    private static final long serialVersionUID = -6907291758376370420L;

    /* renamed from: o  reason: collision with root package name */
    private final transient o f40397o;

    /* renamed from: p  reason: collision with root package name */
    private final transient o f40398p;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements jt.z {
        private b() {
        }

        private jt.p b() {
            return a1.f40342x.n();
        }

        private static f0 m(f0 f0Var, int i10) {
            int i11;
            int N = b1.N(i10);
            int Q = b1.Q(f0Var);
            long l10 = jt.a0.UNIX.l(gt.b.j(i10, 1, 1), jt.a0.MODIFIED_JULIAN_DATE) + (N - 1) + ((Q - 1) * 7) + (f0Var.A0().e(a1.f40342x) - 1);
            if (Q == 53) {
                int N2 = b1.N(i10 + 1);
                if (gt.b.e(i10)) {
                    i11 = 366;
                } else {
                    i11 = 365;
                }
                if (((N2 + i11) - N) / 7 < 53) {
                    l10 -= 7;
                }
            }
            return f0Var.S0(l10 - 730);
        }

        @Override // jt.z
        /* renamed from: c */
        public jt.p a(jt.q qVar) {
            return b();
        }

        @Override // jt.z
        /* renamed from: d */
        public jt.p h(jt.q qVar) {
            return b();
        }

        @Override // jt.z
        /* renamed from: e */
        public Integer j(jt.q qVar) {
            return b1.f40396r.e();
        }

        @Override // jt.z
        /* renamed from: f */
        public Integer p(jt.q qVar) {
            return b1.f40396r.A();
        }

        @Override // jt.z
        /* renamed from: g */
        public Integer x(jt.q qVar) {
            f0 f0Var = (f0) qVar.p(f0.f40572y);
            int f10 = f0Var.f();
            int B0 = f0Var.B0();
            int O = b1.O(f0Var, 0);
            if (O <= B0) {
                if (((B0 - O) / 7) + 1 >= 53 && b1.O(f0Var, 1) + b1.P(f0Var, 0) <= B0) {
                    f10++;
                }
            } else {
                f10--;
            }
            return Integer.valueOf(f10);
        }

        @Override // jt.z
        /* renamed from: i */
        public boolean l(jt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < -999999999 || intValue > 999999999) {
                return false;
            }
            return true;
        }

        @Override // jt.z
        /* renamed from: n */
        public jt.q w(jt.q qVar, Integer num, boolean z10) {
            if (num != null) {
                jt.p pVar = f0.f40572y;
                return qVar.E(pVar, m((f0) qVar.p(pVar), num.intValue()));
            }
            throw new IllegalArgumentException("Missing element value.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements jt.m0 {
        private c() {
        }

        @Override // jt.m0
        /* renamed from: c */
        public jt.q b(jt.q qVar, long j10) {
            if (j10 == 0) {
                return qVar;
            }
            int g10 = gt.c.g(gt.c.f(((Integer) qVar.p(b1.f40396r)).intValue(), j10));
            jt.p pVar = f0.f40572y;
            f0 f0Var = (f0) qVar.p(pVar);
            int E0 = f0Var.E0();
            y0 A0 = f0Var.A0();
            if (E0 == 53) {
                E0 = ((Integer) f0.J0(g10, 26, A0).i(a1.f40342x.n())).intValue();
            }
            return qVar.E(pVar, f0.J0(g10, E0, A0));
        }

        @Override // jt.m0
        /* renamed from: d */
        public long a(jt.q qVar, jt.q qVar2) {
            jt.p pVar = f0.f40572y;
            f0 f0Var = (f0) qVar.p(pVar);
            f0 f0Var2 = (f0) qVar2.p(pVar);
            b1 b1Var = b1.f40396r;
            long intValue = ((Integer) f0Var2.p(b1Var)).intValue() - ((Integer) f0Var.p(b1Var)).intValue();
            int i10 = (intValue > 0L ? 1 : (intValue == 0L ? 0 : -1));
            if (i10 != 0) {
                int Q = b1.Q(f0Var);
                int Q2 = b1.Q(f0Var2);
                if (i10 > 0 && Q > Q2) {
                    intValue--;
                } else if (i10 < 0 && Q < Q2) {
                    intValue++;
                }
                int i11 = (intValue > 0L ? 1 : (intValue == 0L ? 0 : -1));
                if (i11 != 0 && Q == Q2) {
                    int d10 = f0Var.A0().d();
                    int d11 = f0Var2.A0().d();
                    if (i11 > 0 && d10 > d11) {
                        intValue--;
                    } else if (i11 < 0 && d10 < d11) {
                        intValue++;
                    }
                    int i12 = (intValue > 0L ? 1 : (intValue == 0L ? 0 : -1));
                    if (i12 != 0 && d10 == d11) {
                        jt.p pVar2 = g0.f40606z;
                        if (qVar.o(pVar2) && qVar2.o(pVar2)) {
                            g0 g0Var = (g0) qVar.p(pVar2);
                            g0 g0Var2 = (g0) qVar2.p(pVar2);
                            if (i12 > 0 && g0Var.x0(g0Var2)) {
                                return intValue - 1;
                            }
                            if (i12 < 0 && g0Var.y0(g0Var2)) {
                                return intValue + 1;
                            }
                            return intValue;
                        }
                        return intValue;
                    }
                    return intValue;
                }
                return intValue;
            }
            return intValue;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class d extends o {

        /* renamed from: i  reason: collision with root package name */
        private final long f40399i;

        /* renamed from: o  reason: collision with root package name */
        private final jt.v f40400o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a implements jt.v {
            a() {
            }

            @Override // jt.v
            /* renamed from: a */
            public i0 apply(i0 i0Var) {
                return (i0) b1.R().b(i0Var, d.this.f40399i);
            }
        }

        @Override // jt.v
        /* renamed from: c */
        public f0 apply(f0 f0Var) {
            return (f0) b1.R().b(f0Var, this.f40399i);
        }

        private d(long j10) {
            super(b1.f40396r, 8);
            this.f40399i = j10;
            this.f40400o = new a();
        }
    }

    private b1(String str) {
        super(str);
        this.f40397o = new d(-1L);
        this.f40398p = new d(1L);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static jt.z K(Class cls) {
        return new b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int N(int i10) {
        y0 h10 = y0.h(gt.b.c(i10, 1, 1));
        a1 a1Var = a1.f40342x;
        int e10 = h10.e(a1Var);
        if (e10 <= 8 - a1Var.g()) {
            return 2 - e10;
        }
        return 9 - e10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int O(f0 f0Var, int i10) {
        return N(f0Var.f() + i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int P(f0 f0Var, int i10) {
        if (gt.b.e(f0Var.f() + i10)) {
            return 366;
        }
        return 365;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int Q(f0 f0Var) {
        int B0 = f0Var.B0();
        int O = O(f0Var, 0);
        if (O <= B0) {
            int i10 = ((B0 - O) / 7) + 1;
            if (i10 >= 53 && O(f0Var, 1) + P(f0Var, 0) <= B0) {
                return 1;
            }
            return i10;
        }
        return (((B0 + P(f0Var, -1)) - O(f0Var, -1)) / 7) + 1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static jt.m0 R() {
        return f40395q;
    }

    private Object readResolve() {
        return f40396r;
    }

    @Override // jt.p
    public boolean C() {
        return false;
    }

    @Override // jt.e
    protected boolean E() {
        return true;
    }

    @Override // jt.p
    /* renamed from: L */
    public Integer e() {
        return f0.f40565r;
    }

    @Override // jt.p
    /* renamed from: M */
    public Integer A() {
        return f0.f40564q;
    }

    @Override // jt.e, jt.p
    public char d() {
        return 'Y';
    }

    @Override // jt.p
    public Class getType() {
        return Integer.class;
    }

    @Override // jt.p
    public boolean y() {
        return true;
    }
}
