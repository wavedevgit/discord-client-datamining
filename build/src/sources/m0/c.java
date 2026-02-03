package m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final m0.a f37771a;

    /* renamed from: b  reason: collision with root package name */
    private final d f37772b;

    /* renamed from: c  reason: collision with root package name */
    private final b f37773c;

    /* renamed from: d  reason: collision with root package name */
    private final int f37774d;

    c(m0.a aVar, d dVar, b bVar, int i10) {
        this.f37771a = aVar;
        this.f37772b = dVar;
        this.f37773c = bVar;
        this.f37774d = i10;
    }

    public int a() {
        return this.f37774d;
    }

    public m0.a b() {
        return this.f37771a;
    }

    public b c() {
        return this.f37773c;
    }

    public d d() {
        return this.f37772b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private m0.a f37775a;

        /* renamed from: b  reason: collision with root package name */
        private d f37776b;

        /* renamed from: c  reason: collision with root package name */
        private b f37777c;

        /* renamed from: d  reason: collision with root package name */
        private int f37778d;

        public a() {
            this.f37775a = m0.a.f37767c;
            this.f37776b = null;
            this.f37777c = null;
            this.f37778d = 0;
        }

        public static a b(c cVar) {
            return new a(cVar);
        }

        public c a() {
            return new c(this.f37775a, this.f37776b, this.f37777c, this.f37778d);
        }

        public a c(int i10) {
            this.f37778d = i10;
            return this;
        }

        public a d(m0.a aVar) {
            this.f37775a = aVar;
            return this;
        }

        public a e(b bVar) {
            this.f37777c = bVar;
            return this;
        }

        public a f(d dVar) {
            this.f37776b = dVar;
            return this;
        }

        private a(c cVar) {
            this.f37775a = m0.a.f37767c;
            this.f37776b = null;
            this.f37777c = null;
            this.f37778d = 0;
            this.f37775a = cVar.b();
            this.f37776b = cVar.d();
            this.f37777c = cVar.c();
            this.f37778d = cVar.a();
        }
    }
}
