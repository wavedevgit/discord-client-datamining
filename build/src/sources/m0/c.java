package m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final m0.a f36663a;

    /* renamed from: b  reason: collision with root package name */
    private final d f36664b;

    /* renamed from: c  reason: collision with root package name */
    private final b f36665c;

    /* renamed from: d  reason: collision with root package name */
    private final int f36666d;

    c(m0.a aVar, d dVar, b bVar, int i10) {
        this.f36663a = aVar;
        this.f36664b = dVar;
        this.f36665c = bVar;
        this.f36666d = i10;
    }

    public int a() {
        return this.f36666d;
    }

    public m0.a b() {
        return this.f36663a;
    }

    public b c() {
        return this.f36665c;
    }

    public d d() {
        return this.f36664b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private m0.a f36667a;

        /* renamed from: b  reason: collision with root package name */
        private d f36668b;

        /* renamed from: c  reason: collision with root package name */
        private b f36669c;

        /* renamed from: d  reason: collision with root package name */
        private int f36670d;

        public a() {
            this.f36667a = m0.a.f36659c;
            this.f36668b = null;
            this.f36669c = null;
            this.f36670d = 0;
        }

        public static a b(c cVar) {
            return new a(cVar);
        }

        public c a() {
            return new c(this.f36667a, this.f36668b, this.f36669c, this.f36670d);
        }

        public a c(int i10) {
            this.f36670d = i10;
            return this;
        }

        public a d(m0.a aVar) {
            this.f36667a = aVar;
            return this;
        }

        public a e(b bVar) {
            this.f36669c = bVar;
            return this;
        }

        public a f(d dVar) {
            this.f36668b = dVar;
            return this;
        }

        private a(c cVar) {
            this.f36667a = m0.a.f36659c;
            this.f36668b = null;
            this.f36669c = null;
            this.f36670d = 0;
            this.f36667a = cVar.b();
            this.f36668b = cVar.d();
            this.f36669c = cVar.c();
            this.f36670d = cVar.a();
        }
    }
}
