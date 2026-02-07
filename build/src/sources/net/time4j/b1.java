package net.time4j;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b1 extends net.time4j.a {

    /* renamed from: q  reason: collision with root package name */
    private static final rt.m0 f39176q = new c();

    /* renamed from: r  reason: collision with root package name */
    static final b1 f39177r = new b1("YEAR_OF_WEEKDATE");
    private static final long serialVersionUID = -6907291758376370420L;

    /* renamed from: o  reason: collision with root package name */
    private final transient o f39178o;

    /* renamed from: p  reason: collision with root package name */
    private final transient o f39179p;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements rt.z {
        private b() {
        }

        private rt.p b() {
            return a1.f39123x.n();
        }

        private static f0 j(f0 f0Var, int i10) {
            int i11;
            int N = b1.N(i10);
            int Q = b1.Q(f0Var);
            long n10 = rt.a0.UNIX.n(pt.b.j(i10, 1, 1), rt.a0.MODIFIED_JULIAN_DATE) + (N - 1) + ((Q - 1) * 7) + (f0Var.A0().e(a1.f39123x) - 1);
            if (Q == 53) {
                int N2 = b1.N(i10 + 1);
                if (pt.b.e(i10)) {
                    i11 = 366;
                } else {
                    i11 = 365;
                }
                if (((N2 + i11) - N) / 7 < 53) {
                    n10 -= 7;
                }
            }
            return f0Var.S0(n10 - 730);
        }

        @Override // rt.z
        /* renamed from: c */
        public rt.p a(rt.q qVar) {
            return b();
        }

        @Override // rt.z
        /* renamed from: d */
        public rt.p g(rt.q qVar) {
            return b();
        }

        @Override // rt.z
        /* renamed from: e */
        public Integer k(rt.q qVar) {
            return b1.f39177r.e();
        }

        @Override // rt.z
        /* renamed from: f */
        public Integer o(rt.q qVar) {
            return b1.f39177r.B();
        }

        @Override // rt.z
        /* renamed from: h */
        public Integer y(rt.q qVar) {
            f0 f0Var = (f0) qVar.s(f0.f39353y);
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

        @Override // rt.z
        /* renamed from: i */
        public boolean n(rt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < -999999999 || intValue > 999999999) {
                return false;
            }
            return true;
        }

        @Override // rt.z
        /* renamed from: l */
        public rt.q u(rt.q qVar, Integer num, boolean z10) {
            if (num != null) {
                rt.p pVar = f0.f39353y;
                return qVar.E(pVar, j((f0) qVar.s(pVar), num.intValue()));
            }
            throw new IllegalArgumentException("Missing element value.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements rt.m0 {
        private c() {
        }

        @Override // rt.m0
        /* renamed from: c */
        public rt.q b(rt.q qVar, long j10) {
            if (j10 == 0) {
                return qVar;
            }
            int g10 = pt.c.g(pt.c.f(((Integer) qVar.s(b1.f39177r)).intValue(), j10));
            rt.p pVar = f0.f39353y;
            f0 f0Var = (f0) qVar.s(pVar);
            int E0 = f0Var.E0();
            y0 A0 = f0Var.A0();
            if (E0 == 53) {
                E0 = ((Integer) f0.J0(g10, 26, A0).t(a1.f39123x.n())).intValue();
            }
            return qVar.E(pVar, f0.J0(g10, E0, A0));
        }

        @Override // rt.m0
        /* renamed from: d */
        public long a(rt.q qVar, rt.q qVar2) {
            rt.p pVar = f0.f39353y;
            f0 f0Var = (f0) qVar.s(pVar);
            f0 f0Var2 = (f0) qVar2.s(pVar);
            b1 b1Var = b1.f39177r;
            long intValue = ((Integer) f0Var2.s(b1Var)).intValue() - ((Integer) f0Var.s(b1Var)).intValue();
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
                        rt.p pVar2 = g0.f39387z;
                        if (qVar.n(pVar2) && qVar2.n(pVar2)) {
                            g0 g0Var = (g0) qVar.s(pVar2);
                            g0 g0Var2 = (g0) qVar2.s(pVar2);
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
        private final long f39180i;

        /* renamed from: o  reason: collision with root package name */
        private final rt.v f39181o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a implements rt.v {
            a() {
            }

            @Override // rt.v
            /* renamed from: a */
            public i0 apply(i0 i0Var) {
                return (i0) b1.R().b(i0Var, d.this.f39180i);
            }
        }

        @Override // rt.v
        /* renamed from: c */
        public f0 apply(f0 f0Var) {
            return (f0) b1.R().b(f0Var, this.f39180i);
        }

        private d(long j10) {
            super(b1.f39177r, 8);
            this.f39180i = j10;
            this.f39181o = new a();
        }
    }

    private b1(String str) {
        super(str);
        this.f39178o = new d(-1L);
        this.f39179p = new d(1L);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static rt.z K(Class cls) {
        return new b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int N(int i10) {
        y0 h10 = y0.h(pt.b.c(i10, 1, 1));
        a1 a1Var = a1.f39123x;
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
        if (pt.b.e(f0Var.f() + i10)) {
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
    public static rt.m0 R() {
        return f39176q;
    }

    private Object readResolve() {
        return f39177r;
    }

    @Override // rt.p
    public boolean A() {
        return true;
    }

    @Override // rt.p
    public boolean D() {
        return false;
    }

    @Override // rt.e
    protected boolean E() {
        return true;
    }

    @Override // rt.p
    /* renamed from: L */
    public Integer e() {
        return f0.f39346r;
    }

    @Override // rt.p
    /* renamed from: M */
    public Integer B() {
        return f0.f39345q;
    }

    @Override // rt.e, rt.p
    public char d() {
        return 'Y';
    }

    @Override // rt.p
    public Class getType() {
        return Integer.class;
    }
}
