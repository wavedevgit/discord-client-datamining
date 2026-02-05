package cc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: c  reason: collision with root package name */
    private static final f f7487c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f7488a;

    /* renamed from: b  reason: collision with root package name */
    private final long f7489b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f7490a = 0;

        /* renamed from: b  reason: collision with root package name */
        private long f7491b = 0;

        a() {
        }

        public f a() {
            return new f(this.f7490a, this.f7491b);
        }

        public a b(long j10) {
            this.f7491b = j10;
            return this;
        }

        public a c(long j10) {
            this.f7490a = j10;
            return this;
        }
    }

    f(long j10, long j11) {
        this.f7488a = j10;
        this.f7489b = j11;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f7489b;
    }

    public long b() {
        return this.f7488a;
    }
}
