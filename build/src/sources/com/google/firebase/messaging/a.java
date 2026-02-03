package com.google.firebase.messaging;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements vi.a {

    /* renamed from: a  reason: collision with root package name */
    public static final vi.a f17045a = new a();

    /* renamed from: com.google.firebase.messaging.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0199a implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final C0199a f17046a = new C0199a();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f17047b = ui.c.a("projectNumber").b(xi.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final ui.c f17048c = ui.c.a("messageId").b(xi.a.b().c(2).a()).a();

        /* renamed from: d  reason: collision with root package name */
        private static final ui.c f17049d = ui.c.a("instanceId").b(xi.a.b().c(3).a()).a();

        /* renamed from: e  reason: collision with root package name */
        private static final ui.c f17050e = ui.c.a("messageType").b(xi.a.b().c(4).a()).a();

        /* renamed from: f  reason: collision with root package name */
        private static final ui.c f17051f = ui.c.a("sdkPlatform").b(xi.a.b().c(5).a()).a();

        /* renamed from: g  reason: collision with root package name */
        private static final ui.c f17052g = ui.c.a("packageName").b(xi.a.b().c(6).a()).a();

        /* renamed from: h  reason: collision with root package name */
        private static final ui.c f17053h = ui.c.a("collapseKey").b(xi.a.b().c(7).a()).a();

        /* renamed from: i  reason: collision with root package name */
        private static final ui.c f17054i = ui.c.a("priority").b(xi.a.b().c(8).a()).a();

        /* renamed from: j  reason: collision with root package name */
        private static final ui.c f17055j = ui.c.a("ttl").b(xi.a.b().c(9).a()).a();

        /* renamed from: k  reason: collision with root package name */
        private static final ui.c f17056k = ui.c.a("topic").b(xi.a.b().c(10).a()).a();

        /* renamed from: l  reason: collision with root package name */
        private static final ui.c f17057l = ui.c.a("bulkId").b(xi.a.b().c(11).a()).a();

        /* renamed from: m  reason: collision with root package name */
        private static final ui.c f17058m = ui.c.a("event").b(xi.a.b().c(12).a()).a();

        /* renamed from: n  reason: collision with root package name */
        private static final ui.c f17059n = ui.c.a("analyticsLabel").b(xi.a.b().c(13).a()).a();

        /* renamed from: o  reason: collision with root package name */
        private static final ui.c f17060o = ui.c.a("campaignId").b(xi.a.b().c(14).a()).a();

        /* renamed from: p  reason: collision with root package name */
        private static final ui.c f17061p = ui.c.a("composerLabel").b(xi.a.b().c(15).a()).a();

        private C0199a() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(hj.a aVar, ui.e eVar) {
            eVar.d(f17047b, aVar.l());
            eVar.b(f17048c, aVar.h());
            eVar.b(f17049d, aVar.g());
            eVar.b(f17050e, aVar.i());
            eVar.b(f17051f, aVar.m());
            eVar.b(f17052g, aVar.j());
            eVar.b(f17053h, aVar.d());
            eVar.e(f17054i, aVar.k());
            eVar.e(f17055j, aVar.o());
            eVar.b(f17056k, aVar.n());
            eVar.d(f17057l, aVar.b());
            eVar.b(f17058m, aVar.f());
            eVar.b(f17059n, aVar.a());
            eVar.d(f17060o, aVar.c());
            eVar.b(f17061p, aVar.e());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final b f17062a = new b();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f17063b = ui.c.a("messagingClientEvent").b(xi.a.b().c(1).a()).a();

        private b() {
        }

        @Override // ui.d
        /* renamed from: b */
        public void a(hj.b bVar, ui.e eVar) {
            eVar.b(f17063b, bVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c implements ui.d {

        /* renamed from: a  reason: collision with root package name */
        static final c f17064a = new c();

        /* renamed from: b  reason: collision with root package name */
        private static final ui.c f17065b = ui.c.d("messagingClientEventExtension");

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
        bVar.a(j0.class, c.f17064a);
        bVar.a(hj.b.class, b.f17062a);
        bVar.a(hj.a.class, C0199a.f17046a);
    }
}
