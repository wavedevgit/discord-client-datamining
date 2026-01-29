package cc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private static final f f8226c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f8227a;

    /* renamed from: b  reason: collision with root package name */
    private final long f8228b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f8229a = 0;

        /* renamed from: b  reason: collision with root package name */
        private long f8230b = 0;

        a() {
        }

        public f a() {
            return new f(this.f8229a, this.f8230b);
        }

        public a b(long j10) {
            this.f8230b = j10;
            return this;
        }

        public a c(long j10) {
            this.f8229a = j10;
            return this;
        }
    }

    f(long j10, long j11) {
        this.f8227a = j10;
        this.f8228b = j11;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f8228b;
    }

    public long b() {
        return this.f8227a;
    }
}
