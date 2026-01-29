package com.google.firebase.messaging;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements vi.a {

    /* renamed from: a  reason: collision with root package name */
    public static final vi.a f17416a = new a();

    /* renamed from: com.google.firebase.messaging.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0194a implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final C0194a f17417a = new C0194a();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f17418b = ui.c.a("projectNumber").b(xi.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final ui.c f17419c = ui.c.a("messageId").b(xi.a.b().c(2).a()).a();

        /* renamed from: d  reason: collision with root package name */
        private static final ui.c f17420d = ui.c.a("instanceId").b(xi.a.b().c(3).a()).a();

        /* renamed from: e  reason: collision with root package name */
        private static final ui.c f17421e = ui.c.a("messageType").b(xi.a.b().c(4).a()).a();

        /* renamed from: f  reason: collision with root package name */
        private static final ui.c f17422f = ui.c.a("sdkPlatform").b(xi.a.b().c(5).a()).a();

        /* renamed from: g  reason: collision with root package name */
        private static final ui.c f17423g = ui.c.a("packageName").b(xi.a.b().c(6).a()).a();

        /* renamed from: h  reason: collision with root package name */
        private static final ui.c f17424h = ui.c.a("collapseKey").b(xi.a.b().c(7).a()).a();

        /* renamed from: i  reason: collision with root package name */
        private static final ui.c f17425i = ui.c.a("priority").b(xi.a.b().c(8).a()).a();

        /* renamed from: j  reason: collision with root package name */
        private static final ui.c f17426j = ui.c.a("ttl").b(xi.a.b().c(9).a()).a();

        /* renamed from: k  reason: collision with root package name */
        private static final ui.c f17427k = ui.c.a("topic").b(xi.a.b().c(10).a()).a();

        /* renamed from: l  reason: collision with root package name */
        private static final ui.c f17428l = ui.c.a("bulkId").b(xi.a.b().c(11).a()).a();

        /* renamed from: m  reason: collision with root package name */
        private static final ui.c f17429m = ui.c.a("event").b(xi.a.b().c(12).a()).a();

        /* renamed from: n  reason: collision with root package name */
        private static final ui.c f17430n = ui.c.a("analyticsLabel").b(xi.a.b().c(13).a()).a();

        /* renamed from: o  reason: collision with root package name */
        private static final ui.c f17431o = ui.c.a("campaignId").b(xi.a.b().c(14).a()).a();

        /* renamed from: p  reason: collision with root package name */
        private static final ui.c f17432p = ui.c.a("composerLabel").b(xi.a.b().c(15).a()).a();

        private C0194a() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(hj.a aVar, ui.e eVar) {
            eVar.d(f17418b, aVar.l());
            eVar.b(f17419c, aVar.h());
            eVar.b(f17420d, aVar.g());
            eVar.b(f17421e, aVar.i());
            eVar.b(f17422f, aVar.m());
            eVar.b(f17423g, aVar.j());
            eVar.b(f17424h, aVar.d());
            eVar.e(f17425i, aVar.k());
            eVar.e(f17426j, aVar.o());
            eVar.b(f17427k, aVar.n());
            eVar.d(f17428l, aVar.b());
            eVar.b(f17429m, aVar.f());
            eVar.b(f17430n, aVar.a());
            eVar.d(f17431o, aVar.c());
            eVar.b(f17432p, aVar.e());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final b f17433a = new b();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f17434b = ui.c.a("messagingClientEvent").b(xi.a.b().c(1).a()).a();

        private b() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(hj.b bVar, ui.e eVar) {
            eVar.b(f17434b, bVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final c f17435a = new c();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f17436b = ui.c.d("messagingClientEventExtension");

        private c() {
        }

        @Override // ui.d
        public /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
            android.support.v4.media.session.b.a(obj);
            b(null, (ui.e) obj2);
        }

        public void b(j0 j0Var, ui.e eVar) {
            throw null;
        }
    }

    private a() {
    }

    @Override // vi.a
    public void a(vi.b bVar) {
        bVar.a(j0.class, c.f17435a);
        bVar.a(hj.b.class, b.f17433a);
        bVar.a(hj.a.class, C0194a.f17417a);
    }
}
