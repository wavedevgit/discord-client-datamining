package cc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: c  reason: collision with root package name */
    private static final e f7327c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f7328a;

    /* renamed from: b  reason: collision with root package name */
    private final long f7329b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f7330a = 0;

        /* renamed from: b  reason: collision with root package name */
        private long f7331b = 0;

        a() {
        }

        public e a() {
            return new e(this.f7330a, this.f7331b);
        }

        public a b(long j10) {
            this.f7330a = j10;
            return this;
        }

        public a c(long j10) {
            this.f7331b = j10;
            return this;
        }
    }

    e(long j10, long j11) {
        this.f7328a = j10;
        this.f7329b = j11;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f7328a;
    }

    public long b() {
        return this.f7329b;
    }
}
