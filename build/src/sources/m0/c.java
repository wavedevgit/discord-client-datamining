package m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final m0.a f37568a;

    /* renamed from: b  reason: collision with root package name */
    private final d f37569b;

    /* renamed from: c  reason: collision with root package name */
    private final b f37570c;

    /* renamed from: d  reason: collision with root package name */
    private final int f37571d;

    c(m0.a aVar, d dVar, b bVar, int i10) {
        this.f37568a = aVar;
        this.f37569b = dVar;
        this.f37570c = bVar;
        this.f37571d = i10;
    }

    public int a() {
        return this.f37571d;
    }

    public m0.a b() {
        return this.f37568a;
    }

    public b c() {
        return this.f37570c;
    }

    public d d() {
        return this.f37569b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private m0.a f37572a;

        /* renamed from: b  reason: collision with root package name */
        private d f37573b;

        /* renamed from: c  reason: collision with root package name */
        private b f37574c;

        /* renamed from: d  reason: collision with root package name */
        private int f37575d;

        public a() {
            this.f37572a = m0.a.f37564c;
            this.f37573b = null;
            this.f37574c = null;
            this.f37575d = 0;
        }

        public static a b(c cVar) {
            return new a(cVar);
        }

        public c a() {
            return new c(this.f37572a, this.f37573b, this.f37574c, this.f37575d);
        }

        public a c(int i10) {
            this.f37575d = i10;
            return this;
        }

        public a d(m0.a aVar) {
            this.f37572a = aVar;
            return this;
        }

        public a e(b bVar) {
            this.f37574c = bVar;
            return this;
        }

        public a f(d dVar) {
            this.f37573b = dVar;
            return this;
        }

        private a(c cVar) {
            this.f37572a = m0.a.f37564c;
            this.f37573b = null;
            this.f37574c = null;
            this.f37575d = 0;
            this.f37572a = cVar.b();
            this.f37573b = cVar.d();
            this.f37574c = cVar.c();
            this.f37575d = cVar.a();
        }
    }
}
