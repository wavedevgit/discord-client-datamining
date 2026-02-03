package net.time4j;
/* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
/* JADX WARN: Unknown enum class pattern. Please report as an issue! */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class f implements u {

    /* renamed from: d  reason: collision with root package name */
    public static final f f40466d;

    /* renamed from: e  reason: collision with root package name */
    public static final f f40467e;

    /* renamed from: i  reason: collision with root package name */
    public static final f f40468i;

    /* renamed from: o  reason: collision with root package name */
    public static final f f40469o;

    /* renamed from: p  reason: collision with root package name */
    public static final f f40470p;

    /* renamed from: q  reason: collision with root package name */
    public static final f f40471q;

    /* renamed from: r  reason: collision with root package name */
    public static final f f40472r;

    /* renamed from: s  reason: collision with root package name */
    public static final f f40473s;

    /* renamed from: t  reason: collision with root package name */
    private static final /* synthetic */ f[] f40474t;

    /* renamed from: co  reason: collision with root package name */
    private final u f40475co;
    private final u eof;
    private final u joda;
    private final u kld;
    private final u nvd;

    /* renamed from: ui  reason: collision with root package name */
    private final u f40476ui;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    enum a extends f {
        a(String str, int i10) {
            super(str, i10, null);
        }

        @Override // net.time4j.w
        public char d() {
            return 'I';
        }

        @Override // mt.w
        public double getLength() {
            return 3.1556952E10d;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static /* synthetic */ class i {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f40477a;

        static {
            int[] iArr = new int[f.values().length];
            f40477a = iArr;
            try {
                iArr[f.f40472r.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f40477a[f.f40473s.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f40477a[f.f40466d.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f40477a[f.f40467e.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f40477a[f.f40468i.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f40477a[f.f40469o.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f40477a[f.f40470p.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f40477a[f.f40471q.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class j implements mt.m0 {

        /* renamed from: a  reason: collision with root package name */
        private final f f40478a;

        /* renamed from: b  reason: collision with root package name */
        private final int f40479b;

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
            int i10 = this.f40479b;
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
            f fVar = f.f40471q;
            int i12 = (D0 > 0L ? 1 : (D0 == 0L ? 0 : -1));
            if (i12 > 0 && f0.s0(fVar, f0Var, D0, i10).P(f0Var2)) {
                return D0 - 1;
            }
            if (i12 < 0 && f0.s0(fVar, f0Var, D0, this.f40479b).Q(f0Var2)) {
                return D0 + 1;
            }
            return D0;
        }

        @Override // mt.m0
        /* renamed from: c */
        public mt.q b(mt.q qVar, long j10) {
            mt.p pVar = f0.f40490y;
            return qVar.E(pVar, f0.s0(this.f40478a, (f0) qVar.o(pVar), j10, this.f40479b));
        }

        @Override // mt.m0
        /* renamed from: d */
        public long a(mt.q qVar, mt.q qVar2) {
            long e10;
            mt.p pVar = f0.f40490y;
            f0 f0Var = (f0) qVar.o(pVar);
            f0 f0Var2 = (f0) qVar2.o(pVar);
            switch (i.f40477a[this.f40478a.ordinal()]) {
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
                    throw new UnsupportedOperationException(this.f40478a.name());
            }
            int i10 = (e10 > 0L ? 1 : (e10 == 0L ? 0 : -1));
            if (i10 != 0) {
                mt.p pVar2 = g0.f40524z;
                if (qVar.q(pVar2) && qVar2.q(pVar2)) {
                    f fVar = this.f40478a;
                    if (fVar == f.f40473s || ((f0) f0Var.K(e10, fVar)).M(f0Var2) == 0) {
                        g0 g0Var = (g0) qVar.o(pVar2);
                        g0 g0Var2 = (g0) qVar2.o(pVar2);
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
            this.f40478a = fVar;
            this.f40479b = i10;
        }
    }

    static {
        a aVar = new a("MILLENNIA", 0);
        f40466d = aVar;
        f fVar = new f("CENTURIES", 1) { // from class: net.time4j.f.b
            @Override // net.time4j.w
            public char d() {
                return 'C';
            }

            @Override // mt.w
            public double getLength() {
                return 3.1556952E9d;
            }
        };
        f40467e = fVar;
        f fVar2 = new f("DECADES", 2) { // from class: net.time4j.f.c
            @Override // net.time4j.w
            public char d() {
                return 'E';
            }

            @Override // mt.w
            public double getLength() {
                return 3.1556952E8d;
            }
        };
        f40468i = fVar2;
        f fVar3 = new f("YEARS", 3) { // from class: net.time4j.f.d
            @Override // net.time4j.w
            public char d() {
                return 'Y';
            }

            @Override // mt.w
            public double getLength() {
                return 3.1556952E7d;
            }
        };
        f40469o = fVar3;
        f fVar4 = new f("QUARTERS", 4) { // from class: net.time4j.f.e
            @Override // net.time4j.w
            public char d() {
                return 'Q';
            }

            @Override // mt.w
            public double getLength() {
                return 7889238.0d;
            }
        };
        f40470p = fVar4;
        f fVar5 = new f("MONTHS", 5) { // from class: net.time4j.f.f
            @Override // net.time4j.w
            public char d() {
                return 'M';
            }

            @Override // mt.w
            public double getLength() {
                return 2629746.0d;
            }
        };
        f40471q = fVar5;
        f fVar6 = new f("WEEKS", 6) { // from class: net.time4j.f.g
            @Override // net.time4j.w
            public char d() {
                return 'W';
            }

            @Override // mt.w
            public double getLength() {
                return 604800.0d;
            }
        };
        f40472r = fVar6;
        f fVar7 = new f("DAYS", 7) { // from class: net.time4j.f.h
            @Override // net.time4j.w
            public char d() {
                return 'D';
            }

            @Override // mt.w
            public double getLength() {
                return 86400.0d;
            }
        };
        f40473s = fVar7;
        f40474t = new f[]{aVar, fVar, fVar2, fVar3, fVar4, fVar5, fVar6, fVar7};
    }

    private f(String str, int i10) {
        this.eof = new e0(this, 2);
        this.kld = new e0(this, 5);
        this.f40476ui = new e0(this, 4);
        this.nvd = new e0(this, 1);
        this.f40475co = new e0(this, 3);
        this.joda = new e0(this, 6);
    }

    public static u f() {
        return x0.f40836d;
    }

    public static f valueOf(String str) {
        return (f) Enum.valueOf(f.class, str);
    }

    public static f[] values() {
        return (f[]) f40474t.clone();
    }

    @Override // mt.w
    public boolean a() {
        return true;
    }

    public long e(mt.k0 k0Var, mt.k0 k0Var2) {
        return k0Var.L(k0Var2, this);
    }

    /* synthetic */ f(String str, int i10, a aVar) {
        this(str, i10);
    }
}
