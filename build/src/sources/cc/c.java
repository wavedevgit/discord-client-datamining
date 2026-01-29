package cc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: c  reason: collision with root package name */
    private static final c f8202c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f8203a;

    /* renamed from: b  reason: collision with root package name */
    private final b f8204b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f8205a = 0;

        /* renamed from: b  reason: collision with root package name */
        private b f8206b = b.REASON_UNKNOWN;

        a() {
        }

        public c a() {
            return new c(this.f8205a, this.f8206b);
        }

        public a b(long j10) {
            this.f8205a = j10;
            return this;
        }

        public a c(b bVar) {
            this.f8206b = bVar;
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
        private final int f8215d;

        b(int i10) {
            this.f8215d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f8215d;
        }
    }

    c(long j10, b bVar) {
        this.f8203a = j10;
        this.f8204b = bVar;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f8203a;
    }

    public b b() {
        return this.f8204b;
    }
}
