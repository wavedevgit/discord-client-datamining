package ac;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements aj.a {

    /* renamed from: a  reason: collision with root package name */
    public static final aj.a f541a = new a();

    /* renamed from: ac.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0006a implements zi.d {

        /* renamed from: a  reason: collision with root package name */
        static final C0006a f542a = new C0006a();

        /* renamed from: b  reason: collision with root package name */
        private static final zi.c f543b = zi.c.a("window").b(cj.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final zi.c f544c = zi.c.a("logSourceMetrics").b(cj.a.b().c(2).a()).a();

        /* renamed from: d  reason: collision with root package name */
        private static final zi.c f545d = zi.c.a("globalMetrics").b(cj.a.b().c(3).a()).a();

        /* renamed from: e  reason: collision with root package name */
        private static final zi.c f546e = zi.c.a("appNamespace").b(cj.a.b().c(4).a()).a();

        private C0006a() {
        }

        @Override // zi.d
        /* renamed from: b */
        public void a(dc.a aVar, zi.e eVar) {
            eVar.d(f543b, aVar.d());
            eVar.d(f544c, aVar.c());
            eVar.d(f545d, aVar.b());
            eVar.d(f546e, aVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b implements zi.d {

        /* renamed from: a  reason: collision with root package name */
        static final b f547a = new b();

        /* renamed from: b  reason: collision with root package name */
        private static final zi.c f548b = zi.c.a("storageMetrics").b(cj.a.b().c(1).a()).a();

        private b() {
        }

        @Override // zi.d
        /* renamed from: b */
        public void a(dc.b bVar, zi.e eVar) {
            eVar.d(f548b, bVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class c implements zi.d {

        /* renamed from: a  reason: collision with root package name */
        static final c f549a = new c();

        /* renamed from: b  reason: collision with root package name */
        private static final zi.c f550b = zi.c.a("eventsDroppedCount").b(cj.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final zi.c f551c = zi.c.a("reason").b(cj.a.b().c(3).a()).a();

        private c() {
        }

        @Override // zi.d
        /* renamed from: b */
        public void a(dc.c cVar, zi.e eVar) {
            eVar.a(f550b, cVar.a());
            eVar.d(f551c, cVar.b());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d implements zi.d {

        /* renamed from: a  reason: collision with root package name */
        static final d f552a = new d();

        /* renamed from: b  reason: collision with root package name */
        private static final zi.c f553b = zi.c.a("logSource").b(cj.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final zi.c f554c = zi.c.a("logEventDropped").b(cj.a.b().c(2).a()).a();

        private d() {
        }

        @Override // zi.d
        /* renamed from: b */
        public void a(dc.d dVar, zi.e eVar) {
            eVar.d(f553b, dVar.b());
            eVar.d(f554c, dVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class e implements zi.d {

        /* renamed from: a  reason: collision with root package name */
        static final e f555a = new e();

        /* renamed from: b  reason: collision with root package name */
        private static final zi.c f556b = zi.c.d("clientMetrics");

        private e() {
        }

        @Override // zi.d
        public /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
            android.support.v4.media.session.b.a(obj);
            b(null, (zi.e) obj2);
        }

        public void b(l lVar, zi.e eVar) {
            throw null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class f implements zi.d {

        /* renamed from: a  reason: collision with root package name */
        static final f f557a = new f();

        /* renamed from: b  reason: collision with root package name */
        private static final zi.c f558b = zi.c.a("currentCacheSizeBytes").b(cj.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final zi.c f559c = zi.c.a("maxCacheSizeBytes").b(cj.a.b().c(2).a()).a();

        private f() {
        }

        @Override // zi.d
        /* renamed from: b */
        public void a(dc.e eVar, zi.e eVar2) {
            eVar2.a(f558b, eVar.a());
            eVar2.a(f559c, eVar.b());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class g implements zi.d {

        /* renamed from: a  reason: collision with root package name */
        static final g f560a = new g();

        /* renamed from: b  reason: collision with root package name */
        private static final zi.c f561b = zi.c.a("startMs").b(cj.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final zi.c f562c = zi.c.a("endMs").b(cj.a.b().c(2).a()).a();

        private g() {
        }

        @Override // zi.d
        /* renamed from: b */
        public void a(dc.f fVar, zi.e eVar) {
            eVar.a(f561b, fVar.b());
            eVar.a(f562c, fVar.a());
        }
    }

    private a() {
    }

    @Override // aj.a
    public void a(aj.b bVar) {
        bVar.a(l.class, e.f555a);
        bVar.a(dc.a.class, C0006a.f542a);
        bVar.a(dc.f.class, g.f560a);
        bVar.a(dc.d.class, d.f552a);
        bVar.a(dc.c.class, c.f549a);
        bVar.a(dc.b.class, b.f547a);
        bVar.a(dc.e.class, f.f557a);
    }
}
