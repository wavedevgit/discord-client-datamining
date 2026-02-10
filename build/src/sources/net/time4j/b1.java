package net.time4j;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b1 extends net.time4j.a {

    /* renamed from: q  reason: collision with root package name */
    private static final st.m0 f38268q = new c();

    /* renamed from: r  reason: collision with root package name */
    static final b1 f38269r = new b1("YEAR_OF_WEEKDATE");
    private static final long serialVersionUID = -6907291758376370420L;

    /* renamed from: o  reason: collision with root package name */
    private final transient o f38270o;

    /* renamed from: p  reason: collision with root package name */
    private final transient o f38271p;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b implements st.z {
        private b() {
        }

        private st.p b() {
            return a1.f38215x.n();
        }

        private static f0 o(f0 f0Var, int i10) {
            int i11;
            int N = b1.N(i10);
            int Q = b1.Q(f0Var);
            long k10 = st.a0.UNIX.k(qt.b.j(i10, 1, 1), st.a0.MODIFIED_JULIAN_DATE) + (N - 1) + ((Q - 1) * 7) + (f0Var.A0().e(a1.f38215x) - 1);
            if (Q == 53) {
                int N2 = b1.N(i10 + 1);
                if (qt.b.e(i10)) {
                    i11 = 366;
                } else {
                    i11 = 365;
                }
                if (((N2 + i11) - N) / 7 < 53) {
                    k10 -= 7;
                }
            }
            return f0Var.S0(k10 - 730);
        }

        @Override // st.z
        /* renamed from: c */
        public st.p a(st.q qVar) {
            return b();
        }

        @Override // st.z
        /* renamed from: d */
        public st.p g(st.q qVar) {
            return b();
        }

        @Override // st.z
        /* renamed from: e */
        public Integer h(st.q qVar) {
            return b1.f38269r.e();
        }

        @Override // st.z
        /* renamed from: f */
        public Integer m(st.q qVar) {
            return b1.f38269r.B();
        }

        @Override // st.z
        /* renamed from: j */
        public Integer y(st.q qVar) {
            f0 f0Var = (f0) qVar.t(f0.f38445y);
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

        @Override // st.z
        /* renamed from: l */
        public boolean k(st.q qVar, Integer num) {
            int intValue;
            if (num == null || (intValue = num.intValue()) < -999999999 || intValue > 999999999) {
                return false;
            }
            return true;
        }

        @Override // st.z
        /* renamed from: p */
        public st.q s(st.q qVar, Integer num, boolean z10) {
            if (num != null) {
                st.p pVar = f0.f38445y;
                return qVar.E(pVar, o((f0) qVar.t(pVar), num.intValue()));
            }
            throw new IllegalArgumentException("Missing element value.");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class c implements st.m0 {
        private c() {
        }

        @Override // st.m0
        /* renamed from: c */
        public st.q b(st.q qVar, long j10) {
            if (j10 == 0) {
                return qVar;
            }
            int g10 = qt.c.g(qt.c.f(((Integer) qVar.t(b1.f38269r)).intValue(), j10));
            st.p pVar = f0.f38445y;
            f0 f0Var = (f0) qVar.t(pVar);
            int E0 = f0Var.E0();
            y0 A0 = f0Var.A0();
            if (E0 == 53) {
                E0 = ((Integer) f0.J0(g10, 26, A0).n(a1.f38215x.n())).intValue();
            }
            return qVar.E(pVar, f0.J0(g10, E0, A0));
        }

        @Override // st.m0
        /* renamed from: d */
        public long a(st.q qVar, st.q qVar2) {
            st.p pVar = f0.f38445y;
            f0 f0Var = (f0) qVar.t(pVar);
            f0 f0Var2 = (f0) qVar2.t(pVar);
            b1 b1Var = b1.f38269r;
            long intValue = ((Integer) f0Var2.t(b1Var)).intValue() - ((Integer) f0Var.t(b1Var)).intValue();
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
                        st.p pVar2 = g0.f38479z;
                        if (qVar.s(pVar2) && qVar2.s(pVar2)) {
                            g0 g0Var = (g0) qVar.t(pVar2);
                            g0 g0Var2 = (g0) qVar2.t(pVar2);
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
        private final long f38272i;

        /* renamed from: o  reason: collision with root package name */
        private final st.v f38273o;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        class a implements st.v {
            a() {
            }

            @Override // st.v
            /* renamed from: a */
            public i0 apply(i0 i0Var) {
                return (i0) b1.R().b(i0Var, d.this.f38272i);
            }
        }

        @Override // st.v
        /* renamed from: c */
        public f0 apply(f0 f0Var) {
            return (f0) b1.R().b(f0Var, this.f38272i);
        }

        private d(long j10) {
            super(b1.f38269r, 8);
            this.f38272i = j10;
            this.f38273o = new a();
        }
    }

    private b1(String str) {
        super(str);
        this.f38270o = new d(-1L);
        this.f38271p = new d(1L);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static st.z K(Class cls) {
        return new b();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static int N(int i10) {
        y0 h10 = y0.h(qt.b.c(i10, 1, 1));
        a1 a1Var = a1.f38215x;
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
        if (qt.b.e(f0Var.f() + i10)) {
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
    public static st.m0 R() {
        return f38268q;
    }

    private Object readResolve() {
        return f38269r;
    }

    @Override // st.p
    public boolean A() {
        return true;
    }

    @Override // st.p
    public boolean D() {
        return false;
    }

    @Override // st.e
    protected boolean E() {
        return true;
    }

    @Override // st.p
    /* renamed from: L */
    public Integer e() {
        return f0.f38438r;
    }

    @Override // st.p
    /* renamed from: M */
    public Integer B() {
        return f0.f38437q;
    }

    @Override // st.e, st.p
    public char d() {
        return 'Y';
    }

    @Override // st.p
    public Class getType() {
        return Integer.class;
    }
}
