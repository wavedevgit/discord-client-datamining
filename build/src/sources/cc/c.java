package cc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: c  reason: collision with root package name */
    private static final c f7045c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f7046a;

    /* renamed from: b  reason: collision with root package name */
    private final b f7047b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f7048a = 0;

        /* renamed from: b  reason: collision with root package name */
        private b f7049b = b.REASON_UNKNOWN;

        a() {
        }

        public c a() {
            return new c(this.f7048a, this.f7049b);
        }

        public a b(long j10) {
            this.f7048a = j10;
            return this;
        }

        public a c(b bVar) {
            this.f7049b = bVar;
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
        private final int f7058d;

        b(int i10) {
            this.f7058d = i10;
        }

        @Override // xi.c
        public int getNumber() {
            return this.f7058d;
        }
    }

    c(long j10, b bVar) {
        this.f7046a = j10;
        this.f7047b = bVar;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f7046a;
    }

    public b b() {
        return this.f7047b;
    }
}
