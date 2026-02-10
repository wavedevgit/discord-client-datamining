package dc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: c  reason: collision with root package name */
    private static final e f20606c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f20607a;

    /* renamed from: b  reason: collision with root package name */
    private final long f20608b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f20609a = 0;

        /* renamed from: b  reason: collision with root package name */
        private long f20610b = 0;

        a() {
        }

        public e a() {
            return new e(this.f20609a, this.f20610b);
        }

        public a b(long j10) {
            this.f20609a = j10;
            return this;
        }

        public a c(long j10) {
            this.f20610b = j10;
            return this;
        }
    }

    e(long j10, long j11) {
        this.f20607a = j10;
        this.f20608b = j11;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f20607a;
    }

    public long b() {
        return this.f20608b;
    }
}
