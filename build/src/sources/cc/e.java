package cc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: c  reason: collision with root package name */
    private static final e f8221c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f8222a;

    /* renamed from: b  reason: collision with root package name */
    private final long f8223b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f8224a = 0;

        /* renamed from: b  reason: collision with root package name */
        private long f8225b = 0;

        a() {
        }

        public e a() {
            return new e(this.f8224a, this.f8225b);
        }

        public a b(long j10) {
            this.f8224a = j10;
            return this;
        }

        public a c(long j10) {
            this.f8225b = j10;
            return this;
        }
    }

    e(long j10, long j11) {
        this.f8222a = j10;
        this.f8223b = j11;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f8222a;
    }

    public long b() {
        return this.f8223b;
    }
}
