package dc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: c  reason: collision with root package name */
    private static final e f21554c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f21555a;

    /* renamed from: b  reason: collision with root package name */
    private final long f21556b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f21557a = 0;

        /* renamed from: b  reason: collision with root package name */
        private long f21558b = 0;

        a() {
        }

        public e a() {
            return new e(this.f21557a, this.f21558b);
        }

        public a b(long j10) {
            this.f21557a = j10;
            return this;
        }

        public a c(long j10) {
            this.f21558b = j10;
            return this;
        }
    }

    e(long j10, long j11) {
        this.f21555a = j10;
        this.f21556b = j11;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f21555a;
    }

    public long b() {
        return this.f21556b;
    }
}
