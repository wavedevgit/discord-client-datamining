package dc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private static final f f20611c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f20612a;

    /* renamed from: b  reason: collision with root package name */
    private final long f20613b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f20614a = 0;

        /* renamed from: b  reason: collision with root package name */
        private long f20615b = 0;

        a() {
        }

        public f a() {
            return new f(this.f20614a, this.f20615b);
        }

        public a b(long j10) {
            this.f20615b = j10;
            return this;
        }

        public a c(long j10) {
            this.f20614a = j10;
            return this;
        }
    }

    f(long j10, long j11) {
        this.f20612a = j10;
        this.f20613b = j11;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f20613b;
    }

    public long b() {
        return this.f20612a;
    }
}
