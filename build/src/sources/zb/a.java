package zb;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements vi.a {

    /* renamed from: a  reason: collision with root package name */
    public static final vi.a f55570a = new a();

    /* renamed from: zb.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0787a implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final C0787a f55571a = new C0787a();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55572b = ui.c.a("window").b(xi.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final ui.c f55573c = ui.c.a("logSourceMetrics").b(xi.a.b().c(2).a()).a();

        /* renamed from: d  reason: collision with root package name */
        private static final ui.c f55574d = ui.c.a("globalMetrics").b(xi.a.b().c(3).a()).a();

        /* renamed from: e  reason: collision with root package name */
        private static final ui.c f55575e = ui.c.a("appNamespace").b(xi.a.b().c(4).a()).a();

        private C0787a() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(cc.a aVar, ui.e eVar) {
            eVar.b(f55572b, aVar.d());
            eVar.b(f55573c, aVar.c());
            eVar.b(f55574d, aVar.b());
            eVar.b(f55575e, aVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final b f55576a = new b();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55577b = ui.c.a("storageMetrics").b(xi.a.b().c(1).a()).a();

        private b() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(cc.b bVar, ui.e eVar) {
            eVar.b(f55577b, bVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class c implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final c f55578a = new c();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55579b = ui.c.a("eventsDroppedCount").b(xi.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final ui.c f55580c = ui.c.a("reason").b(xi.a.b().c(3).a()).a();

        private c() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(cc.c cVar, ui.e eVar) {
            eVar.d(f55579b, cVar.a());
            eVar.b(f55580c, cVar.b());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final d f55581a = new d();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55582b = ui.c.a("logSource").b(xi.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final ui.c f55583c = ui.c.a("logEventDropped").b(xi.a.b().c(2).a()).a();

        private d() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(cc.d dVar, ui.e eVar) {
            eVar.b(f55582b, dVar.b());
            eVar.b(f55583c, dVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class e implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final e f55584a = new e();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55585b = ui.c.d("clientMetrics");

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
        static final f f55586a = new f();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55587b = ui.c.a("currentCacheSizeBytes").b(xi.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final ui.c f55588c = ui.c.a("maxCacheSizeBytes").b(xi.a.b().c(2).a()).a();

        private f() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(cc.e eVar, ui.e eVar2) {
            eVar2.d(f55587b, eVar.a());
            eVar2.d(f55588c, eVar.b());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class g implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final g f55589a = new g();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f55590b = ui.c.a("startMs").b(xi.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final ui.c f55591c = ui.c.a("endMs").b(xi.a.b().c(2).a()).a();

        private g() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(cc.f fVar, ui.e eVar) {
            eVar.d(f55590b, fVar.b());
            eVar.d(f55591c, fVar.a());
        }
    }

    private a() {
    }

    @Override // vi.a
    public void a(vi.b bVar) {
        bVar.a(l.class, e.f55584a);
        bVar.a(cc.a.class, C0787a.f55571a);
        bVar.a(cc.f.class, g.f55589a);
        bVar.a(cc.d.class, d.f55581a);
        bVar.a(cc.c.class, c.f55578a);
        bVar.a(cc.b.class, b.f55576a);
        bVar.a(cc.e.class, f.f55586a);
    }
}
