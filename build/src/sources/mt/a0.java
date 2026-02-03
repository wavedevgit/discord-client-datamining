package mt;
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
        private final a0 f39397d;

        /* renamed from: e  reason: collision with root package name */
        private final k f39398e;

        a(a0 a0Var, k kVar) {
            this.f39397d = a0Var;
            this.f39398e = kVar;
        }

        @Override // mt.z
        /* renamed from: b */
        public p a(q qVar) {
            return null;
        }

        @Override // mt.z
        /* renamed from: c */
        public p h(q qVar) {
            return null;
        }

        @Override // mt.z
        /* renamed from: d */
        public Long l(q qVar) {
            return Long.valueOf(this.f39397d.q(this.f39398e.a() + 730, a0.UNIX));
        }

        @Override // mt.z
        /* renamed from: e */
        public Long r(q qVar) {
            return Long.valueOf(this.f39397d.q(this.f39398e.d() + 730, a0.UNIX));
        }

        @Override // mt.z
        /* renamed from: f */
        public Long z(q qVar) {
            return Long.valueOf(this.f39397d.q(this.f39398e.c(qVar) + 730, a0.UNIX));
        }

        @Override // mt.z
        /* renamed from: g */
        public boolean q(q qVar, Long l10) {
            if (l10 == null) {
                return false;
            }
            try {
                long m10 = kt.c.m(a0.UNIX.q(l10.longValue(), this.f39397d), 730L);
                if (m10 > this.f39398e.a()) {
                    return false;
                }
                if (m10 < this.f39398e.d()) {
                    return false;
                }
                return true;
            } catch (ArithmeticException | IllegalArgumentException unused) {
                return false;
            }
        }

        @Override // mt.z
        /* renamed from: i */
        public q x(q qVar, Long l10, boolean z10) {
            if (l10 != null) {
                return (q) this.f39398e.b(kt.c.m(a0.UNIX.q(l10.longValue(), this.f39397d), 730L));
            }
            throw new IllegalArgumentException("Missing epoch day value.");
        }
    }

    a0(int i10) {
        this.offset = i10 - 2441317;
    }

    @Override // mt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(o oVar, o oVar2) {
        return ((Long) oVar.o(this)).compareTo((Long) oVar2.o(this));
    }

    @Override // mt.p
    public char d() {
        if (this == MODIFIED_JULIAN_DATE) {
            return 'g';
        }
        return (char) 0;
    }

    @Override // mt.p
    public Class getType() {
        return Long.class;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z h(k kVar) {
        return new a(this, kVar);
    }

    @Override // mt.p
    public boolean k() {
        return false;
    }

    @Override // mt.p
    /* renamed from: l */
    public Long f() {
        return Long.valueOf(365241779741L - this.offset);
    }

    @Override // mt.p
    /* renamed from: o */
    public Long A() {
        return Long.valueOf((-365243219892L) - this.offset);
    }

    public long q(long j10, a0 a0Var) {
        try {
            return kt.c.f(j10, a0Var.offset - this.offset);
        } catch (ArithmeticException e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    @Override // mt.p
    public boolean y() {
        return true;
    }
}
