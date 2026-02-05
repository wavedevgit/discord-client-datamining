package zb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements yi.a {

    /* renamed from: a  reason: collision with root package name */
    public static final yi.a f55294a = new a();

    /* renamed from: zb.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0779a implements xi.d {

        /* renamed from: a  reason: collision with root package name */
        static final C0779a f55295a = new C0779a();

        /* renamed from: b  reason: collision with root package name */
        private static final xi.c f55296b = xi.c.a("window").b(aj.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final xi.c f55297c = xi.c.a("logSourceMetrics").b(aj.a.b().c(2).a()).a();

        /* renamed from: d  reason: collision with root package name */
        private static final xi.c f55298d = xi.c.a("globalMetrics").b(aj.a.b().c(3).a()).a();

        /* renamed from: e  reason: collision with root package name */
        private static final xi.c f55299e = xi.c.a("appNamespace").b(aj.a.b().c(4).a()).a();

        private C0779a() {
        }

        @Override // xi.d
        /* renamed from: b */
        public void a(cc.a aVar, xi.e eVar) {
            eVar.d(f55296b, aVar.d());
            eVar.d(f55297c, aVar.c());
            eVar.d(f55298d, aVar.b());
            eVar.d(f55299e, aVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b implements xi.d {

        /* renamed from: a  reason: collision with root package name */
        static final b f55300a = new b();

        /* renamed from: b  reason: collision with root package name */
        private static final xi.c f55301b = xi.c.a("storageMetrics").b(aj.a.b().c(1).a()).a();

        private b() {
        }

        @Override // xi.d
        /* renamed from: b */
        public void a(cc.b bVar, xi.e eVar) {
            eVar.d(f55301b, bVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class c implements xi.d {

        /* renamed from: a  reason: collision with root package name */
        static final c f55302a = new c();

        /* renamed from: b  reason: collision with root package name */
        private static final xi.c f55303b = xi.c.a("eventsDroppedCount").b(aj.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final xi.c f55304c = xi.c.a("reason").b(aj.a.b().c(3).a()).a();

        private c() {
        }

        @Override // xi.d
        /* renamed from: b */
        public void a(cc.c cVar, xi.e eVar) {
            eVar.c(f55303b, cVar.a());
            eVar.d(f55304c, cVar.b());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d implements xi.d {

        /* renamed from: a  reason: collision with root package name */
        static final d f55305a = new d();

        /* renamed from: b  reason: collision with root package name */
        private static final xi.c f55306b = xi.c.a("logSource").b(aj.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final xi.c f55307c = xi.c.a("logEventDropped").b(aj.a.b().c(2).a()).a();

        private d() {
        }

        @Override // xi.d
        /* renamed from: b */
        public void a(cc.d dVar, xi.e eVar) {
            eVar.d(f55306b, dVar.b());
            eVar.d(f55307c, dVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class e implements xi.d {

        /* renamed from: a  reason: collision with root package name */
        static final e f55308a = new e();

        /* renamed from: b  reason: collision with root package name */
        private static final xi.c f55309b = xi.c.d("clientMetrics");

        private e() {
        }

        @Override // xi.d
        public /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
            android.support.v4.media.session.b.a(obj);
            b(null, (xi.e) obj2);
        }

        public void b(l lVar, xi.e eVar) {
            throw null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class f implements xi.d {

        /* renamed from: a  reason: collision with root package name */
        static final f f55310a = new f();

        /* renamed from: b  reason: collision with root package name */
        private static final xi.c f55311b = xi.c.a("currentCacheSizeBytes").b(aj.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final xi.c f55312c = xi.c.a("maxCacheSizeBytes").b(aj.a.b().c(2).a()).a();

        private f() {
        }

        @Override // xi.d
        /* renamed from: b */
        public void a(cc.e eVar, xi.e eVar2) {
            eVar2.c(f55311b, eVar.a());
            eVar2.c(f55312c, eVar.b());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class g implements xi.d {

        /* renamed from: a  reason: collision with root package name */
        static final g f55313a = new g();

        /* renamed from: b  reason: collision with root package name */
        private static final xi.c f55314b = xi.c.a("startMs").b(aj.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final xi.c f55315c = xi.c.a("endMs").b(aj.a.b().c(2).a()).a();

        private g() {
        }

        @Override // xi.d
        /* renamed from: b */
        public void a(cc.f fVar, xi.e eVar) {
            eVar.c(f55314b, fVar.b());
            eVar.c(f55315c, fVar.a());
        }
    }

    private a() {
    }

    @Override // yi.a
    public void a(yi.b bVar) {
        bVar.a(l.class, e.f55308a);
        bVar.a(cc.a.class, C0779a.f55295a);
        bVar.a(cc.f.class, g.f55313a);
        bVar.a(cc.d.class, d.f55305a);
        bVar.a(cc.c.class, c.f55302a);
        bVar.a(cc.b.class, b.f55300a);
        bVar.a(cc.e.class, f.f55310a);
    }
}
