package net.time4j;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f implements u {

    /* renamed from: d  reason: collision with root package name */
    public static final f f39329d;

    /* renamed from: e  reason: collision with root package name */
    public static final f f39330e;

    /* renamed from: i  reason: collision with root package name */
    public static final f f39331i;

    /* renamed from: o  reason: collision with root package name */
    public static final f f39332o;

    /* renamed from: p  reason: collision with root package name */
    public static final f f39333p;

    /* renamed from: q  reason: collision with root package name */
    public static final f f39334q;

    /* renamed from: r  reason: collision with root package name */
    public static final f f39335r;

    /* renamed from: s  reason: collision with root package name */
    public static final f f39336s;

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ f[] f39337t;

    /* renamed from: co  reason: collision with root package name */
    private final u f39338co;
    private final u eof;
    private final u joda;
    private final u kld;
    private final u nvd;

    /* renamed from: ui  reason: collision with root package name */
    private final u f39339ui;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    enum a extends f {
        a(String str, int i10) {
            super(str, i10, null);
        }

        @Override // net.time4j.w
        public char d() {
            return 'I';
        }

        @Override // rt.w
        public double getLength() {
            return 3.1556952E10d;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class i {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f39340a;

        static {
            int[] iArr = new int[f.values().length];
            f39340a = iArr;
            try {
                iArr[f.f39335r.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f39340a[f.f39336s.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f39340a[f.f39329d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f39340a[f.f39330e.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f39340a[f.f39331i.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f39340a[f.f39332o.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f39340a[f.f39333p.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f39340a[f.f39334q.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class j implements rt.m0 {

        /* renamed from: a  reason: collision with root package name */
        private final f f39341a;

        /* renamed from: b  reason: collision with root package name */
        private final int f39342b;

        /* JADX INFO: Access modifiers changed from: package-private */
        public j(f fVar) {
            this(fVar, 0);
        }

        private static long e(f0 f0Var, f0 f0Var2) {
            if (f0Var.f() == f0Var2.f()) {
                return f0Var2.B0() - f0Var.B0();
            }
            return f0Var2.C0() - f0Var.C0();
        }

        private long f(f0 f0Var, f0 f0Var2) {
            long D0 = f0Var2.D0() - f0Var.D0();
            int i10 = this.f39342b;
            if (i10 != 5 && i10 != 2 && i10 != 6) {
                int i11 = (D0 > 0L ? 1 : (D0 == 0L ? 0 : -1));
                if (i11 > 0 && f0Var2.g() < f0Var.g()) {
                    return D0 - 1;
                }
                if (i11 < 0 && f0Var2.g() > f0Var.g()) {
                    return D0 + 1;
                }
                return D0;
            }
            f fVar = f.f39334q;
            int i12 = (D0 > 0L ? 1 : (D0 == 0L ? 0 : -1));
            if (i12 > 0 && f0.s0(fVar, f0Var, D0, i10).P(f0Var2)) {
                return D0 - 1;
            }
            if (i12 < 0 && f0.s0(fVar, f0Var, D0, this.f39342b).Q(f0Var2)) {
                return D0 + 1;
            }
            return D0;
        }

        @Override // rt.m0
        /* renamed from: c */
        public rt.q b(rt.q qVar, long j10) {
            rt.p pVar = f0.f39353y;
            return qVar.E(pVar, f0.s0(this.f39341a, (f0) qVar.s(pVar), j10, this.f39342b));
        }

        @Override // rt.m0
        /* renamed from: d */
        public long a(rt.q qVar, rt.q qVar2) {
            long e10;
            rt.p pVar = f0.f39353y;
            f0 f0Var = (f0) qVar.s(pVar);
            f0 f0Var2 = (f0) qVar2.s(pVar);
            switch (i.f39340a[this.f39341a.ordinal()]) {
                case 1:
                    e10 = e(f0Var, f0Var2) / 7;
                    break;
                case 2:
                    e10 = e(f0Var, f0Var2);
                    break;
                case 3:
                    e10 = f(f0Var, f0Var2) / 12000;
                    break;
                case 4:
                    e10 = f(f0Var, f0Var2) / 1200;
                    break;
                case 5:
                    e10 = f(f0Var, f0Var2) / 120;
                    break;
                case 6:
                    e10 = f(f0Var, f0Var2) / 12;
                    break;
                case 7:
                    e10 = f(f0Var, f0Var2) / 3;
                    break;
                case 8:
                    e10 = f(f0Var, f0Var2);
                    break;
                default:
                    throw new UnsupportedOperationException(this.f39341a.name());
            }
            int i10 = (e10 > 0L ? 1 : (e10 == 0L ? 0 : -1));
            if (i10 != 0) {
                rt.p pVar2 = g0.f39387z;
                if (qVar.n(pVar2) && qVar2.n(pVar2)) {
                    f fVar = this.f39341a;
                    if (fVar == f.f39336s || ((f0) f0Var.K(e10, fVar)).M(f0Var2) == 0) {
                        g0 g0Var = (g0) qVar.s(pVar2);
                        g0 g0Var2 = (g0) qVar2.s(pVar2);
                        if (i10 > 0 && g0Var.x0(g0Var2)) {
                            return e10 - 1;
                        }
                        if (i10 < 0 && g0Var.y0(g0Var2)) {
                            return e10 + 1;
                        }
                        return e10;
                    }
                    return e10;
                }
                return e10;
            }
            return e10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public j(f fVar, int i10) {
            this.f39341a = fVar;
            this.f39342b = i10;
        }
    }

    static {
        a aVar = new a("MILLENNIA", 0);
        f39329d = aVar;
        f fVar = new f("CENTURIES", 1) { // from class: net.time4j.f.b
            @Override // net.time4j.w
            public char d() {
                return 'C';
            }

            @Override // rt.w
            public double getLength() {
                return 3.1556952E9d;
            }
        };
        f39330e = fVar;
        f fVar2 = new f("DECADES", 2) { // from class: net.time4j.f.c
            @Override // net.time4j.w
            public char d() {
                return 'E';
            }

            @Override // rt.w
            public double getLength() {
                return 3.1556952E8d;
            }
        };
        f39331i = fVar2;
        f fVar3 = new f("YEARS", 3) { // from class: net.time4j.f.d
            @Override // net.time4j.w
            public char d() {
                return 'Y';
            }

            @Override // rt.w
            public double getLength() {
                return 3.1556952E7d;
            }
        };
        f39332o = fVar3;
        f fVar4 = new f("QUARTERS", 4) { // from class: net.time4j.f.e
            @Override // net.time4j.w
            public char d() {
                return 'Q';
            }

            @Override // rt.w
            public double getLength() {
                return 7889238.0d;
            }
        };
        f39333p = fVar4;
        f fVar5 = new f("MONTHS", 5) { // from class: net.time4j.f.f
            @Override // net.time4j.w
            public char d() {
                return 'M';
            }

            @Override // rt.w
            public double getLength() {
                return 2629746.0d;
            }
        };
        f39334q = fVar5;
        f fVar6 = new f("WEEKS", 6) { // from class: net.time4j.f.g
            @Override // net.time4j.w
            public char d() {
                return 'W';
            }

            @Override // rt.w
            public double getLength() {
                return 604800.0d;
            }
        };
        f39335r = fVar6;
        f fVar7 = new f("DAYS", 7) { // from class: net.time4j.f.h
            @Override // net.time4j.w
            public char d() {
                return 'D';
            }

            @Override // rt.w
            public double getLength() {
                return 86400.0d;
            }
        };
        f39336s = fVar7;
        f39337t = new f[]{aVar, fVar, fVar2, fVar3, fVar4, fVar5, fVar6, fVar7};
    }

    private f(String str, int i10) {
        this.eof = new e0(this, 2);
        this.kld = new e0(this, 5);
        this.f39339ui = new e0(this, 4);
        this.nvd = new e0(this, 1);
        this.f39338co = new e0(this, 3);
        this.joda = new e0(this, 6);
    }

    public static u f() {
        return x0.f39699d;
    }

    public static f valueOf(String str) {
        return (f) Enum.valueOf(f.class, str);
    }

    public static f[] values() {
        return (f[]) f39337t.clone();
    }

    @Override // rt.w
    public boolean a() {
        return true;
    }

    public long e(rt.k0 k0Var, rt.k0 k0Var2) {
        return k0Var.L(k0Var2, this);
    }

    /* synthetic */ f(String str, int i10, a aVar) {
        this(str, i10);
    }
}
