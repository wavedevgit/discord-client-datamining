package dc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: c  reason: collision with root package name */
    private static final e f21553c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f21554a;

    /* renamed from: b  reason: collision with root package name */
    private final long f21555b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f21556a = 0;

        /* renamed from: b  reason: collision with root package name */
        private long f21557b = 0;

        a() {
        }

        public e a() {
            return new e(this.f21556a, this.f21557b);
        }

        public a b(long j10) {
            this.f21556a = j10;
            return this;
        }

        public a c(long j10) {
            this.f21557b = j10;
            return this;
        }
    }

    e(long j10, long j11) {
        this.f21554a = j10;
        this.f21555b = j11;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f21554a;
    }

    public long b() {
        return this.f21555b;
    }
}
