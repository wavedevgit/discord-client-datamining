package zb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements vi.a {

    /* renamed from: a  reason: collision with root package name */
    public static final vi.a f55422a = new a();

    /* renamed from: zb.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0776a implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final C0776a f55423a = new C0776a();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55424b = ui.c.a("window").b(xi.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final ui.c f55425c = ui.c.a("logSourceMetrics").b(xi.a.b().c(2).a()).a();

        /* renamed from: d  reason: collision with root package name */
        private static final ui.c f55426d = ui.c.a("globalMetrics").b(xi.a.b().c(3).a()).a();

        /* renamed from: e  reason: collision with root package name */
        private static final ui.c f55427e = ui.c.a("appNamespace").b(xi.a.b().c(4).a()).a();

        private C0776a() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(cc.a aVar, ui.e eVar) {
            eVar.b(f55424b, aVar.d());
            eVar.b(f55425c, aVar.c());
            eVar.b(f55426d, aVar.b());
            eVar.b(f55427e, aVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final b f55428a = new b();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55429b = ui.c.a("storageMetrics").b(xi.a.b().c(1).a()).a();

        private b() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(cc.b bVar, ui.e eVar) {
            eVar.b(f55429b, bVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class c implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final c f55430a = new c();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55431b = ui.c.a("eventsDroppedCount").b(xi.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final ui.c f55432c = ui.c.a("reason").b(xi.a.b().c(3).a()).a();

        private c() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(cc.c cVar, ui.e eVar) {
            eVar.d(f55431b, cVar.a());
            eVar.b(f55432c, cVar.b());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final d f55433a = new d();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55434b = ui.c.a("logSource").b(xi.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final ui.c f55435c = ui.c.a("logEventDropped").b(xi.a.b().c(2).a()).a();

        private d() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(cc.d dVar, ui.e eVar) {
            eVar.b(f55434b, dVar.b());
            eVar.b(f55435c, dVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class e implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final e f55436a = new e();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55437b = ui.c.d("clientMetrics");

        private e() {
        }

        @Override // ui.d
        public /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
            android.support.v4.media.session.b.a(obj);
            b(null, (ui.e) obj2);
        }

        public void b(l lVar, ui.e eVar) {
            throw null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class f implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final f f55438a = new f();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55439b = ui.c.a("currentCacheSizeBytes").b(xi.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final ui.c f55440c = ui.c.a("maxCacheSizeBytes").b(xi.a.b().c(2).a()).a();

        private f() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(cc.e eVar, ui.e eVar2) {
            eVar2.d(f55439b, eVar.a());
            eVar2.d(f55440c, eVar.b());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class g implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final g f55441a = new g();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55442b = ui.c.a("startMs").b(xi.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final ui.c f55443c = ui.c.a("endMs").b(xi.a.b().c(2).a()).a();

        private g() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(cc.f fVar, ui.e eVar) {
            eVar.d(f55442b, fVar.b());
            eVar.d(f55443c, fVar.a());
        }
    }

    private a() {
    }

    @Override // vi.a
    public void a(vi.b bVar) {
        bVar.a(l.class, e.f55436a);
        bVar.a(cc.a.class, C0776a.f55423a);
        bVar.a(cc.f.class, g.f55441a);
        bVar.a(cc.d.class, d.f55433a);
        bVar.a(cc.c.class, c.f55430a);
        bVar.a(cc.b.class, b.f55428a);
        bVar.a(cc.e.class, f.f55438a);
    }
}
