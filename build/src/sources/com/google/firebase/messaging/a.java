package com.google.firebase.messaging;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements vi.a {

    /* renamed from: a  reason: collision with root package name */
    public static final vi.a f16013a = new a();

    /* renamed from: com.google.firebase.messaging.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0180a implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final C0180a f16014a = new C0180a();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f16015b = ui.c.a("projectNumber").b(xi.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final ui.c f16016c = ui.c.a("messageId").b(xi.a.b().c(2).a()).a();

        /* renamed from: d  reason: collision with root package name */
        private static final ui.c f16017d = ui.c.a("instanceId").b(xi.a.b().c(3).a()).a();

        /* renamed from: e  reason: collision with root package name */
        private static final ui.c f16018e = ui.c.a("messageType").b(xi.a.b().c(4).a()).a();

        /* renamed from: f  reason: collision with root package name */
        private static final ui.c f16019f = ui.c.a("sdkPlatform").b(xi.a.b().c(5).a()).a();

        /* renamed from: g  reason: collision with root package name */
        private static final ui.c f16020g = ui.c.a("packageName").b(xi.a.b().c(6).a()).a();

        /* renamed from: h  reason: collision with root package name */
        private static final ui.c f16021h = ui.c.a("collapseKey").b(xi.a.b().c(7).a()).a();

        /* renamed from: i  reason: collision with root package name */
        private static final ui.c f16022i = ui.c.a("priority").b(xi.a.b().c(8).a()).a();

        /* renamed from: j  reason: collision with root package name */
        private static final ui.c f16023j = ui.c.a("ttl").b(xi.a.b().c(9).a()).a();

        /* renamed from: k  reason: collision with root package name */
        private static final ui.c f16024k = ui.c.a("topic").b(xi.a.b().c(10).a()).a();

        /* renamed from: l  reason: collision with root package name */
        private static final ui.c f16025l = ui.c.a("bulkId").b(xi.a.b().c(11).a()).a();

        /* renamed from: m  reason: collision with root package name */
        private static final ui.c f16026m = ui.c.a("event").b(xi.a.b().c(12).a()).a();

        /* renamed from: n  reason: collision with root package name */
        private static final ui.c f16027n = ui.c.a("analyticsLabel").b(xi.a.b().c(13).a()).a();

        /* renamed from: o  reason: collision with root package name */
        private static final ui.c f16028o = ui.c.a("campaignId").b(xi.a.b().c(14).a()).a();

        /* renamed from: p  reason: collision with root package name */
        private static final ui.c f16029p = ui.c.a("composerLabel").b(xi.a.b().c(15).a()).a();

        private C0180a() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(hj.a aVar, ui.e eVar) {
            eVar.d(f16015b, aVar.l());
            eVar.b(f16016c, aVar.h());
            eVar.b(f16017d, aVar.g());
            eVar.b(f16018e, aVar.i());
            eVar.b(f16019f, aVar.m());
            eVar.b(f16020g, aVar.j());
            eVar.b(f16021h, aVar.d());
            eVar.e(f16022i, aVar.k());
            eVar.e(f16023j, aVar.o());
            eVar.b(f16024k, aVar.n());
            eVar.d(f16025l, aVar.b());
            eVar.b(f16026m, aVar.f());
            eVar.b(f16027n, aVar.a());
            eVar.d(f16028o, aVar.c());
            eVar.b(f16029p, aVar.e());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final b f16030a = new b();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f16031b = ui.c.a("messagingClientEvent").b(xi.a.b().c(1).a()).a();

        private b() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(hj.b bVar, ui.e eVar) {
            eVar.b(f16031b, bVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final c f16032a = new c();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f16033b = ui.c.d("messagingClientEventExtension");

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
        bVar.a(j0.class, c.f16032a);
        bVar.a(hj.b.class, b.f16030a);
        bVar.a(hj.a.class, C0180a.f16014a);
    }
}
