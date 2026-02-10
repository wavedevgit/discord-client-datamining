package dc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private static final f f21558c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f21559a;

    /* renamed from: b  reason: collision with root package name */
    private final long f21560b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f21561a = 0;

        /* renamed from: b  reason: collision with root package name */
        private long f21562b = 0;

        a() {
        }

        public f a() {
            return new f(this.f21561a, this.f21562b);
        }

        public a b(long j10) {
            this.f21562b = j10;
            return this;
        }

        public a c(long j10) {
            this.f21561a = j10;
            return this;
        }
    }

    f(long j10, long j11) {
        this.f21559a = j10;
        this.f21560b = j11;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f21560b;
    }

    public long b() {
        return this.f21559a;
    }
}
