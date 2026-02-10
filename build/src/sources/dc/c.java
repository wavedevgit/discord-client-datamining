package dc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: c  reason: collision with root package name */
    private static final c f21534c = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final long f21535a;

    /* renamed from: b  reason: collision with root package name */
    private final b f21536b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private long f21537a = 0;

        /* renamed from: b  reason: collision with root package name */
        private b f21538b = b.REASON_UNKNOWN;

        a() {
        }

        public c a() {
            return new c(this.f21537a, this.f21538b);
        }

        public a b(long j10) {
            this.f21537a = j10;
            return this;
        }

        public a c(b bVar) {
            this.f21538b = bVar;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum b implements ej.c {
        REASON_UNKNOWN(0),
        MESSAGE_TOO_OLD(1),
        CACHE_FULL(2),
        PAYLOAD_TOO_BIG(3),
        MAX_RETRIES_REACHED(4),
        INVALID_PAYLOD(5),
        SERVER_ERROR(6);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f21547d;

        b(int i10) {
            this.f21547d = i10;
        }

        @Override // ej.c
        public int getNumber() {
            return this.f21547d;
        }
    }

    c(long j10, b bVar) {
        this.f21535a = j10;
        this.f21536b = bVar;
    }

    public static a c() {
        return new a();
    }

    public long a() {
        return this.f21535a;
    }

    public b b() {
        return this.f21536b;
    }
}
