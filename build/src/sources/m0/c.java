package m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final m0.a f36719a;

    /* renamed from: b  reason: collision with root package name */
    private final d f36720b;

    /* renamed from: c  reason: collision with root package name */
    private final b f36721c;

    /* renamed from: d  reason: collision with root package name */
    private final int f36722d;

    c(m0.a aVar, d dVar, b bVar, int i10) {
        this.f36719a = aVar;
        this.f36720b = dVar;
        this.f36721c = bVar;
        this.f36722d = i10;
    }

    public int a() {
        return this.f36722d;
    }

    public m0.a b() {
        return this.f36719a;
    }

    public b c() {
        return this.f36721c;
    }

    public d d() {
        return this.f36720b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private m0.a f36723a;

        /* renamed from: b  reason: collision with root package name */
        private d f36724b;

        /* renamed from: c  reason: collision with root package name */
        private b f36725c;

        /* renamed from: d  reason: collision with root package name */
        private int f36726d;

        public a() {
            this.f36723a = m0.a.f36715c;
            this.f36724b = null;
            this.f36725c = null;
            this.f36726d = 0;
        }

        public static a b(c cVar) {
            return new a(cVar);
        }

        public c a() {
            return new c(this.f36723a, this.f36724b, this.f36725c, this.f36726d);
        }

        public a c(int i10) {
            this.f36726d = i10;
            return this;
        }

        public a d(m0.a aVar) {
            this.f36723a = aVar;
            return this;
        }

        public a e(b bVar) {
            this.f36725c = bVar;
            return this;
        }

        public a f(d dVar) {
            this.f36724b = dVar;
            return this;
        }

        private a(c cVar) {
            this.f36723a = m0.a.f36715c;
            this.f36724b = null;
            this.f36725c = null;
            this.f36726d = 0;
            this.f36723a = cVar.b();
            this.f36724b = cVar.d();
            this.f36725c = cVar.c();
            this.f36726d = cVar.a();
        }
    }
}
