package rt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public enum a0 implements p {
    UTC(2441317),
    UNIX(2440587),
    MODIFIED_JULIAN_DATE(2400000),
    EXCEL(2415019),
    ANSI(2305812),
    RATA_DIE(1721424),
    JULIAN_DAY_NUMBER(-1),
    LILIAN_DAY_NUMBER(2299159);
    
    private final int offset;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a implements z {

        /* renamed from: d  reason: collision with root package name */
        private final a0 f49495d;

        /* renamed from: e  reason: collision with root package name */
        private final k f49496e;

        a(a0 a0Var, k kVar) {
            this.f49495d = a0Var;
            this.f49496e = kVar;
        }

        @Override // rt.z
        /* renamed from: b */
        public p a(q qVar) {
            return null;
        }

        @Override // rt.z
        /* renamed from: c */
        public p g(q qVar) {
            return null;
        }

        @Override // rt.z
        /* renamed from: d */
        public Long k(q qVar) {
            return Long.valueOf(this.f49495d.n(this.f49496e.a() + 730, a0.UNIX));
        }

        @Override // rt.z
        /* renamed from: e */
        public Long o(q qVar) {
            return Long.valueOf(this.f49495d.n(this.f49496e.d() + 730, a0.UNIX));
        }

        @Override // rt.z
        /* renamed from: f */
        public Long y(q qVar) {
            return Long.valueOf(this.f49495d.n(this.f49496e.c(qVar) + 730, a0.UNIX));
        }

        @Override // rt.z
        /* renamed from: h */
        public boolean n(q qVar, Long l10) {
            if (l10 == null) {
                return false;
            }
            try {
                long m10 = pt.c.m(a0.UNIX.n(l10.longValue(), this.f49495d), 730L);
                if (m10 > this.f49496e.a()) {
                    return false;
                }
                if (m10 < this.f49496e.d()) {
                    return false;
                }
                return true;
            } catch (ArithmeticException | IllegalArgumentException unused) {
                return false;
            }
        }

        @Override // rt.z
        /* renamed from: i */
        public q u(q qVar, Long l10, boolean z10) {
            if (l10 != null) {
                return (q) this.f49496e.b(pt.c.m(a0.UNIX.n(l10.longValue(), this.f49495d), 730L));
            }
            throw new IllegalArgumentException("Missing epoch day value.");
        }
    }

    a0(int i10) {
        this.offset = i10 - 2441317;
    }

    @Override // rt.p
    public boolean A() {
        return true;
    }

    @Override // rt.p
    public boolean D() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(o oVar, o oVar2) {
        return ((Long) oVar.s(this)).compareTo((Long) oVar2.s(this));
    }

    @Override // rt.p
    public char d() {
        if (this == MODIFIED_JULIAN_DATE) {
            return 'g';
        }
        return (char) 0;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z g(k kVar) {
        return new a(this, kVar);
    }

    @Override // rt.p
    public Class getType() {
        return Long.class;
    }

    @Override // rt.p
    public boolean i() {
        return false;
    }

    @Override // rt.p
    /* renamed from: k */
    public Long e() {
        return Long.valueOf(365241779741L - this.offset);
    }

    @Override // rt.p
    /* renamed from: m */
    public Long B() {
        return Long.valueOf((-365243219892L) - this.offset);
    }

    public long n(long j10, a0 a0Var) {
        try {
            return pt.c.f(j10, a0Var.offset - this.offset);
        } catch (ArithmeticException e10) {
            throw new IllegalArgumentException(e10);
        }
    }
}
