package kt;
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
        private final a0 f36670d;

        /* renamed from: e  reason: collision with root package name */
        private final k f36671e;

        a(a0 a0Var, k kVar) {
            this.f36670d = a0Var;
            this.f36671e = kVar;
        }

        @Override // kt.z
        /* renamed from: b */
        public p a(q qVar) {
            return null;
        }

        @Override // kt.z
        /* renamed from: c */
        public p g(q qVar) {
            return null;
        }

        @Override // kt.z
        /* renamed from: d */
        public Long h(q qVar) {
            return Long.valueOf(this.f36670d.l(this.f36671e.a() + 730, a0.UNIX));
        }

        @Override // kt.z
        /* renamed from: e */
        public Long o(q qVar) {
            return Long.valueOf(this.f36670d.l(this.f36671e.d() + 730, a0.UNIX));
        }

        @Override // kt.z
        /* renamed from: f */
        public Long x(q qVar) {
            return Long.valueOf(this.f36670d.l(this.f36671e.c(qVar) + 730, a0.UNIX));
        }

        @Override // kt.z
        /* renamed from: j */
        public boolean l(q qVar, Long l10) {
            if (l10 == null) {
                return false;
            }
            try {
                long m10 = ht.c.m(a0.UNIX.l(l10.longValue(), this.f36670d), 730L);
                if (m10 > this.f36671e.a()) {
                    return false;
                }
                if (m10 < this.f36671e.d()) {
                    return false;
                }
                return true;
            } catch (ArithmeticException | IllegalArgumentException unused) {
                return false;
            }
        }

        @Override // kt.z
        /* renamed from: k */
        public q v(q qVar, Long l10, boolean z10) {
            if (l10 != null) {
                return (q) this.f36671e.b(ht.c.m(a0.UNIX.l(l10.longValue(), this.f36670d), 730L));
            }
            throw new IllegalArgumentException("Missing epoch day value.");
        }
    }

    a0(int i10) {
        this.offset = i10 - 2441317;
    }

    @Override // kt.p
    public boolean C() {
        return false;
    }

    @Override // java.util.Comparator
    /* renamed from: a */
    public int compare(o oVar, o oVar2) {
        return ((Long) oVar.v(this)).compareTo((Long) oVar2.v(this));
    }

    @Override // kt.p
    public char d() {
        if (this == MODIFIED_JULIAN_DATE) {
            return 'g';
        }
        return (char) 0;
    }

    @Override // kt.p
    public boolean f() {
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public z g(k kVar) {
        return new a(this, kVar);
    }

    @Override // kt.p
    public Class getType() {
        return Long.class;
    }

    @Override // kt.p
    /* renamed from: h */
    public Long e() {
        return Long.valueOf(365241779741L - this.offset);
    }

    @Override // kt.p
    /* renamed from: i */
    public Long A() {
        return Long.valueOf((-365243219892L) - this.offset);
    }

    public long l(long j10, a0 a0Var) {
        try {
            return ht.c.f(j10, a0Var.offset - this.offset);
        } catch (ArithmeticException e10) {
            throw new IllegalArgumentException(e10);
        }
    }

    @Override // kt.p
    public boolean y() {
        return true;
    }
}
