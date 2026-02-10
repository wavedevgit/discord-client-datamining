package m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final m0.a f36094a;

    /* renamed from: b  reason: collision with root package name */
    private final d f36095b;

    /* renamed from: c  reason: collision with root package name */
    private final b f36096c;

    /* renamed from: d  reason: collision with root package name */
    private final int f36097d;

    c(m0.a aVar, d dVar, b bVar, int i10) {
        this.f36094a = aVar;
        this.f36095b = dVar;
        this.f36096c = bVar;
        this.f36097d = i10;
    }

    public int a() {
        return this.f36097d;
    }

    public m0.a b() {
        return this.f36094a;
    }

    public b c() {
        return this.f36096c;
    }

    public d d() {
        return this.f36095b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private m0.a f36098a;

        /* renamed from: b  reason: collision with root package name */
        private d f36099b;

        /* renamed from: c  reason: collision with root package name */
        private b f36100c;

        /* renamed from: d  reason: collision with root package name */
        private int f36101d;

        public a() {
            this.f36098a = m0.a.f36090c;
            this.f36099b = null;
            this.f36100c = null;
            this.f36101d = 0;
        }

        public static a b(c cVar) {
            return new a(cVar);
        }

        public c a() {
            return new c(this.f36098a, this.f36099b, this.f36100c, this.f36101d);
        }

        public a c(int i10) {
            this.f36101d = i10;
            return this;
        }

        public a d(m0.a aVar) {
            this.f36098a = aVar;
            return this;
        }

        public a e(b bVar) {
            this.f36100c = bVar;
            return this;
        }

        public a f(d dVar) {
            this.f36099b = dVar;
            return this;
        }

        private a(c cVar) {
            this.f36098a = m0.a.f36090c;
            this.f36099b = null;
            this.f36100c = null;
            this.f36101d = 0;
            this.f36098a = cVar.b();
            this.f36099b = cVar.d();
            this.f36100c = cVar.c();
            this.f36101d = cVar.a();
        }
    }
}
