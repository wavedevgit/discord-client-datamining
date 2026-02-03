package net.time4j;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b1 extends net.time4j.a {

    /* renamed from: q  reason: collision with root package name */
    private static final mt.m0 f40313q = new c();

    /* renamed from: r  reason: collision with root package name */
    static final b1 f40314r = new b1("YEAR_OF_WEEKDATE");
    private static final long serialVersionUID = -6907291758376370420L;

    /* renamed from: o  reason: collision with root package name */
    private final transient o f40315o;

    /* renamed from: p  reason: collision with root package name */
    private final transient o f40316p;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements mt.z {
        private b() {
        }

        private mt.p b() {
            return a1.f40260x.n();
        }

        private static f0 j(f0 f0Var, int i10) {
            int i11;
            int N = b1.N(i10);
            int Q = b1.Q(f0Var);
            long q10 = mt.a0.UNIX.q(kt.b.j(i10, 1, 1), mt.a0.MODIFIED_JULIAN_DATE) + (N - 1) + ((Q - 1) * 7) + (f0Var.A0().e(a1.f40260x) - 1);
            if (Q == 53) {
                int N2 = b1.N(i10 + 1);
                if (kt.b.e(i10)) {
                    i11 = 366;
                } else {
                    i11 = 365;
                }
                if (((N2 + i11) - N) / 7 < 53) {
                    q10 -= 7;
                }
            }
            return f0Var.S0(q10 - 730);
        }

        @Override // mt.z
        /* renamed from: c */
        public mt.p a(mt.q qVar) {
            return b();
        }

        @Override // mt.z
        /* renamed from: d */
        public mt.p h(mt.q qVar) {
            return b();
        }

        @Override // mt.z
        /* renamed from: e */
        public Integer l(mt.q qVar) {
            return b1.f40314r.f();
        }

        @Override // mt.z
        /* renamed from: f */
        public Integer r(mt.q qVar) {
            return b1.f40314r.A();
        }

        @Override // mt.z
        /* renamed from: g */
        public Integer z(mt.q qVar) {
            f0 f0Var = (f0) qVar.o(f0.f40490y);
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

        @Override // mt.z
        /* renamed from: i */
        public boolean q(mt.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < -999999999 || intValue > 999999999) {
                return false;
            }
            return true;
        }

        @Override // mt.z
        /* renamed from: k */
        public mt.q x(mt.q qVar, Integer num, boolean z10) {
            if (num != null) {
                mt.p pVar = f0.f40490y;
                return qVar.E(pVar, j((f0) qVar.o(pVar), num.intValue()));
            }
            throw new IllegalArgumentException("Missing element value.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements mt.m0 {
        private c() {
        }

        @Override // mt.m0
        /* renamed from: c */
        public mt.q b(mt.q qVar, long j10) {
            if (j10 == 0) {
                return qVar;
            }
            int g10 = kt.c.g(kt.c.f(((Integer) qVar.o(b1.f40314r)).intValue(), j10));
            mt.p pVar = f0.f40490y;
            f0 f0Var = (f0) qVar.o(pVar);
            int E0 = f0Var.E0();
            y0 A0 = f0Var.A0();
            if (E0 == 53) {
                E0 = ((Integer) f0.J0(g10, 26, A0).u(a1.f40260x.n())).intValue();
            }
            return qVar.E(pVar, f0.J0(g10, E0, A0));
        }

        @Override // mt.m0
        /* renamed from: d */
        public long a(mt.q qVar, mt.q qVar2) {
            mt.p pVar = f0.f40490y;
            f0 f0Var = (f0) qVar.o(pVar);
            f0 f0Var2 = (f0) qVar2.o(pVar);
            b1 b1Var = b1.f40314r;
            long intValue = ((Integer) f0Var2.o(b1Var)).intValue() - ((Integer) f0Var.o(b1Var)).intValue();
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
                        mt.p pVar2 = g0.f40524z;
                        if (qVar.q(pVar2) && qVar2.q(pVar2)) {
                            g0 g0Var = (g0) qVar.o(pVar2);
                            g0 g0Var2 = (g0) qVar2.o(pVar2);
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
        private final long f40317i;

        /* renamed from: o  reason: collision with root package name */
        private final mt.v f40318o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a implements mt.v {
            a() {
            }

            @Override // mt.v
            /* renamed from: a */
            public i0 apply(i0 i0Var) {
                return (i0) b1.R().b(i0Var, d.this.f40317i);
            }
        }

        @Override // mt.v
        /* renamed from: c */
        public f0 apply(f0 f0Var) {
            return (f0) b1.R().b(f0Var, this.f40317i);
        }

        private d(long j10) {
            super(b1.f40314r, 8);
            this.f40317i = j10;
            this.f40318o = new a();
        }
    }

    private b1(String str) {
        super(str);
        this.f40315o = new d(-1L);
        this.f40316p = new d(1L);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static mt.z K(Class cls) {
        return new b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int N(int i10) {
        y0 h10 = y0.h(kt.b.c(i10, 1, 1));
        a1 a1Var = a1.f40260x;
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
        if (kt.b.e(f0Var.f() + i10)) {
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
    public static mt.m0 R() {
        return f40313q;
    }

    private Object readResolve() {
        return f40314r;
    }

    @Override // mt.p
    public boolean C() {
        return false;
    }

    @Override // mt.e
    protected boolean E() {
        return true;
    }

    @Override // mt.p
    /* renamed from: L */
    public Integer f() {
        return f0.f40483r;
    }

    @Override // mt.p
    /* renamed from: M */
    public Integer A() {
        return f0.f40482q;
    }

    @Override // mt.e, mt.p
    public char d() {
        return 'Y';
    }

    @Override // mt.p
    public Class getType() {
        return Integer.class;
    }

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
