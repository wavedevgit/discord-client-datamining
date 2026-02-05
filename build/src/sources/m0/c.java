package m0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final m0.a f37230a;

    /* renamed from: b  reason: collision with root package name */
    private final d f37231b;

    /* renamed from: c  reason: collision with root package name */
    private final b f37232c;

    /* renamed from: d  reason: collision with root package name */
    private final int f37233d;

    c(m0.a aVar, d dVar, b bVar, int i10) {
        this.f37230a = aVar;
        this.f37231b = dVar;
        this.f37232c = bVar;
        this.f37233d = i10;
    }

    public int a() {
        return this.f37233d;
    }

    public m0.a b() {
        return this.f37230a;
    }

    public b c() {
        return this.f37232c;
    }

    public d d() {
        return this.f37231b;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private m0.a f37234a;

        /* renamed from: b  reason: collision with root package name */
        private d f37235b;

        /* renamed from: c  reason: collision with root package name */
        private b f37236c;

        /* renamed from: d  reason: collision with root package name */
        private int f37237d;

        public a() {
            this.f37234a = m0.a.f37226c;
            this.f37235b = null;
            this.f37236c = null;
            this.f37237d = 0;
        }

        public static a b(c cVar) {
            return new a(cVar);
        }

        public c a() {
            return new c(this.f37234a, this.f37235b, this.f37236c, this.f37237d);
        }

        public a c(int i10) {
            this.f37237d = i10;
            return this;
        }

        public a d(m0.a aVar) {
            this.f37234a = aVar;
            return this;
        }

        public a e(b bVar) {
            this.f37236c = bVar;
            return this;
        }

        public a f(d dVar) {
            this.f37235b = dVar;
            return this;
        }

        private a(c cVar) {
            this.f37234a = m0.a.f37226c;
            this.f37235b = null;
            this.f37236c = null;
            this.f37237d = 0;
            this.f37234a = cVar.b();
            this.f37235b = cVar.d();
            this.f37236c = cVar.c();
            this.f37237d = cVar.a();
        }
    }
}
