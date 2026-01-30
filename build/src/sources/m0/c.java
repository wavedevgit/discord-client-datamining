package m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final m0.a f37791a;

    /* renamed from: b  reason: collision with root package name */
    private final d f37792b;

    /* renamed from: c  reason: collision with root package name */
    private final b f37793c;

    /* renamed from: d  reason: collision with root package name */
    private final int f37794d;

    c(m0.a aVar, d dVar, b bVar, int i10) {
        this.f37791a = aVar;
        this.f37792b = dVar;
        this.f37793c = bVar;
        this.f37794d = i10;
    }

    public int a() {
        return this.f37794d;
    }

    public m0.a b() {
        return this.f37791a;
    }

    public b c() {
        return this.f37793c;
    }

    public d d() {
        return this.f37792b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private m0.a f37795a;

        /* renamed from: b  reason: collision with root package name */
        private d f37796b;

        /* renamed from: c  reason: collision with root package name */
        private b f37797c;

        /* renamed from: d  reason: collision with root package name */
        private int f37798d;

        public a() {
            this.f37795a = m0.a.f37787c;
            this.f37796b = null;
            this.f37797c = null;
            this.f37798d = 0;
        }

        public static a b(c cVar) {
            return new a(cVar);
        }

        public c a() {
            return new c(this.f37795a, this.f37796b, this.f37797c, this.f37798d);
        }

        public a c(int i10) {
            this.f37798d = i10;
            return this;
        }

        public a d(m0.a aVar) {
            this.f37795a = aVar;
            return this;
        }

        public a e(b bVar) {
            this.f37797c = bVar;
            return this;
        }

        public a f(d dVar) {
            this.f37796b = dVar;
            return this;
        }

        private a(c cVar) {
            this.f37795a = m0.a.f37787c;
            this.f37796b = null;
            this.f37797c = null;
            this.f37798d = 0;
            this.f37795a = cVar.b();
            this.f37796b = cVar.d();
            this.f37797c = cVar.c();
            this.f37798d = cVar.a();
        }
    }
}
