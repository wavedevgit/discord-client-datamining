package cc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e {

    /* renamed from: c  reason: collision with root package name */
    private static final e f7482c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f7483a;

    /* renamed from: b  reason: collision with root package name */
    private final long f7484b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f7485a = 0;

        /* renamed from: b  reason: collision with root package name */
        private long f7486b = 0;

        a() {
        }

        public e a() {
            return new e(this.f7485a, this.f7486b);
        }

        public a b(long j10) {
            this.f7485a = j10;
            return this;
        }

        public a c(long j10) {
            this.f7486b = j10;
            return this;
        }
    }

    e(long j10, long j11) {
        this.f7483a = j10;
        this.f7484b = j11;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f7483a;
    }

    public long b() {
        return this.f7484b;
    }
}
