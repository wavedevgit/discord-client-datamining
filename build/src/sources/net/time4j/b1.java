package net.time4j;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b1 extends net.time4j.a {

    /* renamed from: q  reason: collision with root package name */
    private static final bu.m0 f37272q = new c();

    /* renamed from: r  reason: collision with root package name */
    static final b1 f37273r = new b1("YEAR_OF_WEEKDATE");
    private static final long serialVersionUID = -6907291758376370420L;

    /* renamed from: o  reason: collision with root package name */
    private final transient o f37274o;

    /* renamed from: p  reason: collision with root package name */
    private final transient o f37275p;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements bu.z {
        private b() {
        }

        private bu.p b() {
            return a1.f37219x.n();
        }

        private static f0 j(f0 f0Var, int i10) {
            int i11;
            int N = b1.N(i10);
            int Q = b1.Q(f0Var);
            long o10 = bu.a0.UNIX.o(zt.b.j(i10, 1, 1), bu.a0.MODIFIED_JULIAN_DATE) + (N - 1) + ((Q - 1) * 7) + (f0Var.A0().e(a1.f37219x) - 1);
            if (Q == 53) {
                int N2 = b1.N(i10 + 1);
                if (zt.b.e(i10)) {
                    i11 = 366;
                } else {
                    i11 = 365;
                }
                if (((N2 + i11) - N) / 7 < 53) {
                    o10 -= 7;
                }
            }
            return f0Var.S0(o10 - 730);
        }

        @Override // bu.z
        /* renamed from: c */
        public bu.p a(bu.q qVar) {
            return b();
        }

        @Override // bu.z
        /* renamed from: d */
        public bu.p h(bu.q qVar) {
            return b();
        }

        @Override // bu.z
        /* renamed from: e */
        public Integer m(bu.q qVar) {
            return b1.f37273r.f();
        }

        @Override // bu.z
        /* renamed from: f */
        public Integer q(bu.q qVar) {
            return b1.f37273r.B();
        }

        @Override // bu.z
        /* renamed from: g */
        public Integer y(bu.q qVar) {
            f0 f0Var = (f0) qVar.k(f0.f37449y);
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

        @Override // bu.z
        /* renamed from: i */
        public boolean o(bu.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < -999999999 || intValue > 999999999) {
                return false;
            }
            return true;
        }

        @Override // bu.z
        /* renamed from: k */
        public bu.q x(bu.q qVar, Integer num, boolean z10) {
            if (num != null) {
                bu.p pVar = f0.f37449y;
                return qVar.E(pVar, j((f0) qVar.k(pVar), num.intValue()));
            }
            throw new IllegalArgumentException("Missing element value.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements bu.m0 {
        private c() {
        }

        @Override // bu.m0
        /* renamed from: c */
        public bu.q b(bu.q qVar, long j10) {
            if (j10 == 0) {
                return qVar;
            }
            int g10 = zt.c.g(zt.c.f(((Integer) qVar.k(b1.f37273r)).intValue(), j10));
            bu.p pVar = f0.f37449y;
            f0 f0Var = (f0) qVar.k(pVar);
            int E0 = f0Var.E0();
            y0 A0 = f0Var.A0();
            if (E0 == 53) {
                E0 = ((Integer) f0.J0(g10, 26, A0).v(a1.f37219x.n())).intValue();
            }
            return qVar.E(pVar, f0.J0(g10, E0, A0));
        }

        @Override // bu.m0
        /* renamed from: d */
        public long a(bu.q qVar, bu.q qVar2) {
            bu.p pVar = f0.f37449y;
            f0 f0Var = (f0) qVar.k(pVar);
            f0 f0Var2 = (f0) qVar2.k(pVar);
            b1 b1Var = b1.f37273r;
            long intValue = ((Integer) f0Var2.k(b1Var)).intValue() - ((Integer) f0Var.k(b1Var)).intValue();
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
                        bu.p pVar2 = g0.f37483z;
                        if (qVar.n(pVar2) && qVar2.n(pVar2)) {
                            g0 g0Var = (g0) qVar.k(pVar2);
                            g0 g0Var2 = (g0) qVar2.k(pVar2);
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
        private final long f37276i;

        /* renamed from: o  reason: collision with root package name */
        private final bu.v f37277o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a implements bu.v {
            a() {
            }

            @Override // bu.v
            /* renamed from: a */
            public i0 apply(i0 i0Var) {
                return (i0) b1.R().b(i0Var, d.this.f37276i);
            }
        }

        @Override // bu.v
        /* renamed from: c */
        public f0 apply(f0 f0Var) {
            return (f0) b1.R().b(f0Var, this.f37276i);
        }

        private d(long j10) {
            super(b1.f37273r, 8);
            this.f37276i = j10;
            this.f37277o = new a();
        }
    }

    private b1(String str) {
        super(str);
        this.f37274o = new d(-1L);
        this.f37275p = new d(1L);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static bu.z K(Class cls) {
        return new b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int N(int i10) {
        y0 h10 = y0.h(zt.b.c(i10, 1, 1));
        a1 a1Var = a1.f37219x;
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
        if (zt.b.e(f0Var.f() + i10)) {
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
    public static bu.m0 R() {
        return f37272q;
    }

    private Object readResolve() {
        return f37273r;
    }

    @Override // bu.p
    public boolean A() {
        return true;
    }

    @Override // bu.p
    public boolean C() {
        return false;
    }

    @Override // bu.e
    protected boolean E() {
        return true;
    }

    @Override // bu.p
    /* renamed from: L */
    public Integer f() {
        return f0.f37442r;
    }

    @Override // bu.p
    /* renamed from: M */
    public Integer B() {
        return f0.f37441q;
    }

    @Override // bu.e, bu.p
    public char d() {
        return 'Y';
    }

    @Override // bu.p
    public Class getType() {
        return Integer.class;
    }
}
