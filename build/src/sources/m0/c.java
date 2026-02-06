package m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final m0.a f36812a;

    /* renamed from: b  reason: collision with root package name */
    private final d f36813b;

    /* renamed from: c  reason: collision with root package name */
    private final b f36814c;

    /* renamed from: d  reason: collision with root package name */
    private final int f36815d;

    c(m0.a aVar, d dVar, b bVar, int i10) {
        this.f36812a = aVar;
        this.f36813b = dVar;
        this.f36814c = bVar;
        this.f36815d = i10;
    }

    public int a() {
        return this.f36815d;
    }

    public m0.a b() {
        return this.f36812a;
    }

    public b c() {
        return this.f36814c;
    }

    public d d() {
        return this.f36813b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private m0.a f36816a;

        /* renamed from: b  reason: collision with root package name */
        private d f36817b;

        /* renamed from: c  reason: collision with root package name */
        private b f36818c;

        /* renamed from: d  reason: collision with root package name */
        private int f36819d;

        public a() {
            this.f36816a = m0.a.f36808c;
            this.f36817b = null;
            this.f36818c = null;
            this.f36819d = 0;
        }

        public static a b(c cVar) {
            return new a(cVar);
        }

        public c a() {
            return new c(this.f36816a, this.f36817b, this.f36818c, this.f36819d);
        }

        public a c(int i10) {
            this.f36819d = i10;
            return this;
        }

        public a d(m0.a aVar) {
            this.f36816a = aVar;
            return this;
        }

        public a e(b bVar) {
            this.f36818c = bVar;
            return this;
        }

        public a f(d dVar) {
            this.f36817b = dVar;
            return this;
        }

        private a(c cVar) {
            this.f36816a = m0.a.f36808c;
            this.f36817b = null;
            this.f36818c = null;
            this.f36819d = 0;
            this.f36816a = cVar.b();
            this.f36817b = cVar.d();
            this.f36818c = cVar.c();
            this.f36819d = cVar.a();
        }
    }
}
