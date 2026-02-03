package cc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: c  reason: collision with root package name */
    private static final e f8077c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f8078a;

    /* renamed from: b  reason: collision with root package name */
    private final long f8079b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f8080a = 0;

        /* renamed from: b  reason: collision with root package name */
        private long f8081b = 0;

        a() {
        }

        public e a() {
            return new e(this.f8080a, this.f8081b);
        }

        public a b(long j10) {
            this.f8080a = j10;
            return this;
        }

        public a c(long j10) {
            this.f8081b = j10;
            return this;
        }
    }

    e(long j10, long j11) {
        this.f8078a = j10;
        this.f8079b = j11;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f8078a;
    }

    public long b() {
        return this.f8079b;
    }
}
