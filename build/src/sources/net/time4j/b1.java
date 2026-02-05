package net.time4j;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b1 extends net.time4j.a {

    /* renamed from: q  reason: collision with root package name */
    private static final pt.m0 f39773q = new c();

    /* renamed from: r  reason: collision with root package name */
    static final b1 f39774r = new b1("YEAR_OF_WEEKDATE");
    private static final long serialVersionUID = -6907291758376370420L;

    /* renamed from: o  reason: collision with root package name */
    private final transient o f39775o;

    /* renamed from: p  reason: collision with root package name */
    private final transient o f39776p;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements pt.z {
        private b() {
        }

        private pt.p b() {
            return a1.f39720x.n();
        }

        private static f0 j(f0 f0Var, int i10) {
            int i11;
            int N = b1.N(i10);
            int Q = b1.Q(f0Var);
            long p10 = pt.a0.UNIX.p(nt.b.j(i10, 1, 1), pt.a0.MODIFIED_JULIAN_DATE) + (N - 1) + ((Q - 1) * 7) + (f0Var.A0().e(a1.f39720x) - 1);
            if (Q == 53) {
                int N2 = b1.N(i10 + 1);
                if (nt.b.e(i10)) {
                    i11 = 366;
                } else {
                    i11 = 365;
                }
                if (((N2 + i11) - N) / 7 < 53) {
                    p10 -= 7;
                }
            }
            return f0Var.S0(p10 - 730);
        }

        @Override // pt.z
        /* renamed from: c */
        public pt.p a(pt.q qVar) {
            return b();
        }

        @Override // pt.z
        /* renamed from: d */
        public pt.p h(pt.q qVar) {
            return b();
        }

        @Override // pt.z
        /* renamed from: e */
        public Integer k(pt.q qVar) {
            return b1.f39774r.e();
        }

        @Override // pt.z
        /* renamed from: f */
        public Integer r(pt.q qVar) {
            return b1.f39774r.A();
        }

        @Override // pt.z
        /* renamed from: g */
        public Integer y(pt.q qVar) {
            f0 f0Var = (f0) qVar.v(f0.f39950y);
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

        @Override // pt.z
        /* renamed from: i */
        public boolean p(pt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < -999999999 || intValue > 999999999) {
                return false;
            }
            return true;
        }

        @Override // pt.z
        /* renamed from: l */
        public pt.q x(pt.q qVar, Integer num, boolean z10) {
            if (num != null) {
                pt.p pVar = f0.f39950y;
                return qVar.E(pVar, j((f0) qVar.v(pVar), num.intValue()));
            }
            throw new IllegalArgumentException("Missing element value.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements pt.m0 {
        private c() {
        }

        @Override // pt.m0
        /* renamed from: c */
        public pt.q b(pt.q qVar, long j10) {
            if (j10 == 0) {
                return qVar;
            }
            int g10 = nt.c.g(nt.c.f(((Integer) qVar.v(b1.f39774r)).intValue(), j10));
            pt.p pVar = f0.f39950y;
            f0 f0Var = (f0) qVar.v(pVar);
            int E0 = f0Var.E0();
            y0 A0 = f0Var.A0();
            if (E0 == 53) {
                E0 = ((Integer) f0.J0(g10, 26, A0).n(a1.f39720x.n())).intValue();
            }
            return qVar.E(pVar, f0.J0(g10, E0, A0));
        }

        @Override // pt.m0
        /* renamed from: d */
        public long a(pt.q qVar, pt.q qVar2) {
            pt.p pVar = f0.f39950y;
            f0 f0Var = (f0) qVar.v(pVar);
            f0 f0Var2 = (f0) qVar2.v(pVar);
            b1 b1Var = b1.f39774r;
            long intValue = ((Integer) f0Var2.v(b1Var)).intValue() - ((Integer) f0Var.v(b1Var)).intValue();
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
                        pt.p pVar2 = g0.f39984z;
                        if (qVar.m(pVar2) && qVar2.m(pVar2)) {
                            g0 g0Var = (g0) qVar.v(pVar2);
                            g0 g0Var2 = (g0) qVar2.v(pVar2);
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
        private final long f39777i;

        /* renamed from: o  reason: collision with root package name */
        private final pt.v f39778o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a implements pt.v {
            a() {
            }

            @Override // pt.v
            /* renamed from: a */
            public i0 apply(i0 i0Var) {
                return (i0) b1.R().b(i0Var, d.this.f39777i);
            }
        }

        @Override // pt.v
        /* renamed from: c */
        public f0 apply(f0 f0Var) {
            return (f0) b1.R().b(f0Var, this.f39777i);
        }

        private d(long j10) {
            super(b1.f39774r, 8);
            this.f39777i = j10;
            this.f39778o = new a();
        }
    }

    private b1(String str) {
        super(str);
        this.f39775o = new d(-1L);
        this.f39776p = new d(1L);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static pt.z K(Class cls) {
        return new b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int N(int i10) {
        y0 h10 = y0.h(nt.b.c(i10, 1, 1));
        a1 a1Var = a1.f39720x;
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
        if (nt.b.e(f0Var.f() + i10)) {
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
    public static pt.m0 R() {
        return f39773q;
    }

    private Object readResolve() {
        return f39774r;
    }

    @Override // pt.p
    public boolean B() {
        return false;
    }

    @Override // pt.e
    protected boolean E() {
        return true;
    }

    @Override // pt.p
    /* renamed from: L */
    public Integer e() {
        return f0.f39943r;
    }

    @Override // pt.p
    /* renamed from: M */
    public Integer A() {
        return f0.f39942q;
    }

    @Override // pt.e, pt.p
    public char d() {
        return 'Y';
    }

    @Override // pt.p
    public Class getType() {
        return Integer.class;
    }

    @Override // pt.p
    public boolean z() {
        return true;
    }
}
