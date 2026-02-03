package cc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private static final f f7069c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f7070a;

    /* renamed from: b  reason: collision with root package name */
    private final long f7071b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f7072a = 0;

        /* renamed from: b  reason: collision with root package name */
        private long f7073b = 0;

        a() {
        }

        public f a() {
            return new f(this.f7072a, this.f7073b);
        }

        public a b(long j10) {
            this.f7073b = j10;
            return this;
        }

        public a c(long j10) {
            this.f7072a = j10;
            return this;
        }
    }

    f(long j10, long j11) {
        this.f7070a = j10;
        this.f7071b = j11;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f7071b;
    }

    public long b() {
        return this.f7070a;
    }
}
