package cc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: c  reason: collision with root package name */
    private static final e f7064c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f7065a;

    /* renamed from: b  reason: collision with root package name */
    private final long f7066b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f7067a = 0;

        /* renamed from: b  reason: collision with root package name */
        private long f7068b = 0;

        a() {
        }

        public e a() {
            return new e(this.f7067a, this.f7068b);
        }

        public a b(long j10) {
            this.f7067a = j10;
            return this;
        }

        public a c(long j10) {
            this.f7068b = j10;
            return this;
        }
    }

    e(long j10, long j11) {
        this.f7065a = j10;
        this.f7066b = j11;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f7065a;
    }

    public long b() {
        return this.f7066b;
    }
}
