package cc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: c  reason: collision with root package name */
    private static final c f8058c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f8059a;

    /* renamed from: b  reason: collision with root package name */
    private final b f8060b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f8061a = 0;

        /* renamed from: b  reason: collision with root package name */
        private b f8062b = b.REASON_UNKNOWN;

        a() {
        }

        public c a() {
            return new c(this.f8061a, this.f8062b);
        }

        public a b(long j10) {
            this.f8061a = j10;
            return this;
        }

        public a c(b bVar) {
            this.f8062b = bVar;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum b implements xi.c {
        REASON_UNKNOWN(0),
        MESSAGE_TOO_OLD(1),
        CACHE_FULL(2),
        PAYLOAD_TOO_BIG(3),
        MAX_RETRIES_REACHED(4),
        INVALID_PAYLOD(5),
        SERVER_ERROR(6);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f8071d;

        b(int i10) {
            this.f8071d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f8071d;
        }
    }

    c(long j10, b bVar) {
        this.f8059a = j10;
        this.f8060b = bVar;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f8059a;
    }

    public b b() {
        return this.f8060b;
    }
}
