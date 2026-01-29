package m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final m0.a f37775a;

    /* renamed from: b  reason: collision with root package name */
    private final d f37776b;

    /* renamed from: c  reason: collision with root package name */
    private final b f37777c;

    /* renamed from: d  reason: collision with root package name */
    private final int f37778d;

    c(m0.a aVar, d dVar, b bVar, int i10) {
        this.f37775a = aVar;
        this.f37776b = dVar;
        this.f37777c = bVar;
        this.f37778d = i10;
    }

    public int a() {
        return this.f37778d;
    }

    public m0.a b() {
        return this.f37775a;
    }

    public b c() {
        return this.f37777c;
    }

    public d d() {
        return this.f37776b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private m0.a f37779a;

        /* renamed from: b  reason: collision with root package name */
        private d f37780b;

        /* renamed from: c  reason: collision with root package name */
        private b f37781c;

        /* renamed from: d  reason: collision with root package name */
        private int f37782d;

        public a() {
            this.f37779a = m0.a.f37771c;
            this.f37780b = null;
            this.f37781c = null;
            this.f37782d = 0;
        }

        public static a b(c cVar) {
            return new a(cVar);
        }

        public c a() {
            return new c(this.f37779a, this.f37780b, this.f37781c, this.f37782d);
        }

        public a c(int i10) {
            this.f37782d = i10;
            return this;
        }

        public a d(m0.a aVar) {
            this.f37779a = aVar;
            return this;
        }

        public a e(b bVar) {
            this.f37781c = bVar;
            return this;
        }

        public a f(d dVar) {
            this.f37780b = dVar;
            return this;
        }

        private a(c cVar) {
            this.f37779a = m0.a.f37771c;
            this.f37780b = null;
            this.f37781c = null;
            this.f37782d = 0;
            this.f37779a = cVar.b();
            this.f37780b = cVar.d();
            this.f37781c = cVar.c();
            this.f37782d = cVar.a();
        }
    }
}
