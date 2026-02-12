package m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final m0.a f36095a;

    /* renamed from: b  reason: collision with root package name */
    private final d f36096b;

    /* renamed from: c  reason: collision with root package name */
    private final b f36097c;

    /* renamed from: d  reason: collision with root package name */
    private final int f36098d;

    c(m0.a aVar, d dVar, b bVar, int i10) {
        this.f36095a = aVar;
        this.f36096b = dVar;
        this.f36097c = bVar;
        this.f36098d = i10;
    }

    public int a() {
        return this.f36098d;
    }

    public m0.a b() {
        return this.f36095a;
    }

    public b c() {
        return this.f36097c;
    }

    public d d() {
        return this.f36096b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private m0.a f36099a;

        /* renamed from: b  reason: collision with root package name */
        private d f36100b;

        /* renamed from: c  reason: collision with root package name */
        private b f36101c;

        /* renamed from: d  reason: collision with root package name */
        private int f36102d;

        public a() {
            this.f36099a = m0.a.f36091c;
            this.f36100b = null;
            this.f36101c = null;
            this.f36102d = 0;
        }

        public static a b(c cVar) {
            return new a(cVar);
        }

        public c a() {
            return new c(this.f36099a, this.f36100b, this.f36101c, this.f36102d);
        }

        public a c(int i10) {
            this.f36102d = i10;
            return this;
        }

        public a d(m0.a aVar) {
            this.f36099a = aVar;
            return this;
        }

        public a e(b bVar) {
            this.f36101c = bVar;
            return this;
        }

        public a f(d dVar) {
            this.f36100b = dVar;
            return this;
        }

        private a(c cVar) {
            this.f36099a = m0.a.f36091c;
            this.f36100b = null;
            this.f36101c = null;
            this.f36102d = 0;
            this.f36099a = cVar.b();
            this.f36100b = cVar.d();
            this.f36101c = cVar.c();
            this.f36102d = cVar.a();
        }
    }
}
