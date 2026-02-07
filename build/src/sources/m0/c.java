package m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final m0.a f36860a;

    /* renamed from: b  reason: collision with root package name */
    private final d f36861b;

    /* renamed from: c  reason: collision with root package name */
    private final b f36862c;

    /* renamed from: d  reason: collision with root package name */
    private final int f36863d;

    c(m0.a aVar, d dVar, b bVar, int i10) {
        this.f36860a = aVar;
        this.f36861b = dVar;
        this.f36862c = bVar;
        this.f36863d = i10;
    }

    public int a() {
        return this.f36863d;
    }

    public m0.a b() {
        return this.f36860a;
    }

    public b c() {
        return this.f36862c;
    }

    public d d() {
        return this.f36861b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private m0.a f36864a;

        /* renamed from: b  reason: collision with root package name */
        private d f36865b;

        /* renamed from: c  reason: collision with root package name */
        private b f36866c;

        /* renamed from: d  reason: collision with root package name */
        private int f36867d;

        public a() {
            this.f36864a = m0.a.f36856c;
            this.f36865b = null;
            this.f36866c = null;
            this.f36867d = 0;
        }

        public static a b(c cVar) {
            return new a(cVar);
        }

        public c a() {
            return new c(this.f36864a, this.f36865b, this.f36866c, this.f36867d);
        }

        public a c(int i10) {
            this.f36867d = i10;
            return this;
        }

        public a d(m0.a aVar) {
            this.f36864a = aVar;
            return this;
        }

        public a e(b bVar) {
            this.f36866c = bVar;
            return this;
        }

        public a f(d dVar) {
            this.f36865b = dVar;
            return this;
        }

        private a(c cVar) {
            this.f36864a = m0.a.f36856c;
            this.f36865b = null;
            this.f36866c = null;
            this.f36867d = 0;
            this.f36864a = cVar.b();
            this.f36865b = cVar.d();
            this.f36866c = cVar.c();
            this.f36867d = cVar.a();
        }
    }
}
