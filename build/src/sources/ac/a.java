package ac;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements cj.a {

    /* renamed from: a  reason: collision with root package name */
    public static final cj.a f541a = new a();

    /* renamed from: ac.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class C0006a implements bj.d {

        /* renamed from: a  reason: collision with root package name */
        static final C0006a f542a = new C0006a();

        /* renamed from: b  reason: collision with root package name */
        private static final bj.c f543b = bj.c.a("window").b(ej.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final bj.c f544c = bj.c.a("logSourceMetrics").b(ej.a.b().c(2).a()).a();

        /* renamed from: d  reason: collision with root package name */
        private static final bj.c f545d = bj.c.a("globalMetrics").b(ej.a.b().c(3).a()).a();

        /* renamed from: e  reason: collision with root package name */
        private static final bj.c f546e = bj.c.a("appNamespace").b(ej.a.b().c(4).a()).a();

        private C0006a() {
        }

        @Override // bj.d
        /* renamed from: b */
        public void a(dc.a aVar, bj.e eVar) {
            eVar.e(f543b, aVar.d());
            eVar.e(f544c, aVar.c());
            eVar.e(f545d, aVar.b());
            eVar.e(f546e, aVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class b implements bj.d {

        /* renamed from: a  reason: collision with root package name */
        static final b f547a = new b();

        /* renamed from: b  reason: collision with root package name */
        private static final bj.c f548b = bj.c.a("storageMetrics").b(ej.a.b().c(1).a()).a();

        private b() {
        }

        @Override // bj.d
        /* renamed from: b */
        public void a(dc.b bVar, bj.e eVar) {
            eVar.e(f548b, bVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class c implements bj.d {

        /* renamed from: a  reason: collision with root package name */
        static final c f549a = new c();

        /* renamed from: b  reason: collision with root package name */
        private static final bj.c f550b = bj.c.a("eventsDroppedCount").b(ej.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final bj.c f551c = bj.c.a("reason").b(ej.a.b().c(3).a()).a();

        private c() {
        }

        @Override // bj.d
        /* renamed from: b */
        public void a(dc.c cVar, bj.e eVar) {
            eVar.c(f550b, cVar.a());
            eVar.e(f551c, cVar.b());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d implements bj.d {

        /* renamed from: a  reason: collision with root package name */
        static final d f552a = new d();

        /* renamed from: b  reason: collision with root package name */
        private static final bj.c f553b = bj.c.a("logSource").b(ej.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final bj.c f554c = bj.c.a("logEventDropped").b(ej.a.b().c(2).a()).a();

        private d() {
        }

        @Override // bj.d
        /* renamed from: b */
        public void a(dc.d dVar, bj.e eVar) {
            eVar.e(f553b, dVar.b());
            eVar.e(f554c, dVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class e implements bj.d {

        /* renamed from: a  reason: collision with root package name */
        static final e f555a = new e();

        /* renamed from: b  reason: collision with root package name */
        private static final bj.c f556b = bj.c.d("clientMetrics");

        private e() {
        }

        @Override // bj.d
        public /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
            android.support.v4.media.session.b.a(obj);
            b(null, (bj.e) obj2);
        }

        public void b(l lVar, bj.e eVar) {
            throw null;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class f implements bj.d {

        /* renamed from: a  reason: collision with root package name */
        static final f f557a = new f();

        /* renamed from: b  reason: collision with root package name */
        private static final bj.c f558b = bj.c.a("currentCacheSizeBytes").b(ej.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final bj.c f559c = bj.c.a("maxCacheSizeBytes").b(ej.a.b().c(2).a()).a();

        private f() {
        }

        @Override // bj.d
        /* renamed from: b */
        public void a(dc.e eVar, bj.e eVar2) {
            eVar2.c(f558b, eVar.a());
            eVar2.c(f559c, eVar.b());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class g implements bj.d {

        /* renamed from: a  reason: collision with root package name */
        static final g f560a = new g();

        /* renamed from: b  reason: collision with root package name */
        private static final bj.c f561b = bj.c.a("startMs").b(ej.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final bj.c f562c = bj.c.a("endMs").b(ej.a.b().c(2).a()).a();

        private g() {
        }

        @Override // bj.d
        /* renamed from: b */
        public void a(dc.f fVar, bj.e eVar) {
            eVar.c(f561b, fVar.b());
            eVar.c(f562c, fVar.a());
        }
    }

    private a() {
    }

    @Override // cj.a
    public void a(cj.b bVar) {
        bVar.a(l.class, e.f555a);
        bVar.a(dc.a.class, C0006a.f542a);
        bVar.a(dc.f.class, g.f560a);
        bVar.a(dc.d.class, d.f552a);
        bVar.a(dc.c.class, c.f549a);
        bVar.a(dc.b.class, b.f547a);
        bVar.a(dc.e.class, f.f557a);
    }
}
