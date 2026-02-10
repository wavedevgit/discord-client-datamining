package bu;
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
        private final a0 f7797d;

        /* renamed from: e  reason: collision with root package name */
        private final k f7798e;

        a(a0 a0Var, k kVar) {
            this.f7797d = a0Var;
            this.f7798e = kVar;
        }

        @Override // bu.z
        /* renamed from: b */
        public p a(q qVar) {
            return null;
        }

        @Override // bu.z
        /* renamed from: c */
        public p h(q qVar) {
            return null;
        }

        @Override // bu.z
        /* renamed from: d */
        public Long m(q qVar) {
            return Long.valueOf(this.f7797d.o(this.f7798e.a() + 730, a0.UNIX));
        }

        @Override // bu.z
        /* renamed from: e */
        public Long q(q qVar) {
            return Long.valueOf(this.f7797d.o(this.f7798e.d() + 730, a0.UNIX));
        }

        @Override // bu.z
        /* renamed from: f */
        public Long y(q qVar) {
            return Long.valueOf(this.f7797d.o(this.f7798e.c(qVar) + 730, a0.UNIX));
        }

        @Override // bu.z
        /* renamed from: g */
        public boolean o(q qVar, Long l10) {
            if (l10 == null) {
                return false;
            }
            try {
                long m10 = zt.c.m(a0.UNIX.o(l10.longValue(), this.f7797d), 730L);
                if (m10 > this.f7798e.a()) {
                    return false;
                }
                if (m10 < this.f7798e.d()) {
                    return false;
                }
                return true;
            } catch (ArithmeticException | IllegalArgumentException unused) {
                return false;
            }
        }

        @Override // bu.z
        /* renamed from: i */
        public q x(q qVar, Long l10, boolean z10) {
            if (l10 != null) {
                return (q) this.f7798e.b(zt.c.m(a0.UNIX.o(l10.longValue(), this.f7797d), 730L));
            }
            throw new IllegalArgumentException("Missing epoch day value.");
        }
    }

    a0(int i10) {
        this.offset = i10 - 2441317;
    }

    @Override // bu.p
    public boolean A() {
        return true;
    }

    @Override // bu.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(o oVar, o oVar2) {
        return ((Long) oVar.k(this)).compareTo((Long) oVar2.k(this));
    }

    @Override // bu.p
    public char d() {
        if (this == MODIFIED_JULIAN_DATE) {
            return 'g';
        }
        return (char) 0;
    }

    @Override // bu.p
    public Class getType() {
        return Long.class;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z h(k kVar) {
        return new a(this, kVar);
    }

    @Override // bu.p
    public boolean k() {
        return false;
    }

    @Override // bu.p
    /* renamed from: m */
    public Long f() {
        return Long.valueOf(365241779741L - this.offset);
    }

    @Override // bu.p
    /* renamed from: n */
    public Long B() {
        return Long.valueOf((-365243219892L) - this.offset);
    }

    public long o(long j10, a0 a0Var) {
        try {
            return zt.c.f(j10, a0Var.offset - this.offset);
        } catch (ArithmeticException e10) {
            throw new IllegalArgumentException(e10);
        }
    }
}
