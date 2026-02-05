package com.google.firebase.messaging;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements yi.a {

    /* renamed from: a  reason: collision with root package name */
    public static final yi.a f16407a = new a();

    /* renamed from: com.google.firebase.messaging.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0196a implements xi.d {

        /* renamed from: a  reason: collision with root package name */
        static final C0196a f16408a = new C0196a();

        /* renamed from: b  reason: collision with root package name */
        private static final xi.c f16409b = xi.c.a("projectNumber").b(aj.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final xi.c f16410c = xi.c.a("messageId").b(aj.a.b().c(2).a()).a();

        /* renamed from: d  reason: collision with root package name */
        private static final xi.c f16411d = xi.c.a("instanceId").b(aj.a.b().c(3).a()).a();

        /* renamed from: e  reason: collision with root package name */
        private static final xi.c f16412e = xi.c.a("messageType").b(aj.a.b().c(4).a()).a();

        /* renamed from: f  reason: collision with root package name */
        private static final xi.c f16413f = xi.c.a("sdkPlatform").b(aj.a.b().c(5).a()).a();

        /* renamed from: g  reason: collision with root package name */
        private static final xi.c f16414g = xi.c.a("packageName").b(aj.a.b().c(6).a()).a();

        /* renamed from: h  reason: collision with root package name */
        private static final xi.c f16415h = xi.c.a("collapseKey").b(aj.a.b().c(7).a()).a();

        /* renamed from: i  reason: collision with root package name */
        private static final xi.c f16416i = xi.c.a("priority").b(aj.a.b().c(8).a()).a();

        /* renamed from: j  reason: collision with root package name */
        private static final xi.c f16417j = xi.c.a("ttl").b(aj.a.b().c(9).a()).a();

        /* renamed from: k  reason: collision with root package name */
        private static final xi.c f16418k = xi.c.a("topic").b(aj.a.b().c(10).a()).a();

        /* renamed from: l  reason: collision with root package name */
        private static final xi.c f16419l = xi.c.a("bulkId").b(aj.a.b().c(11).a()).a();

        /* renamed from: m  reason: collision with root package name */
        private static final xi.c f16420m = xi.c.a("event").b(aj.a.b().c(12).a()).a();

        /* renamed from: n  reason: collision with root package name */
        private static final xi.c f16421n = xi.c.a("analyticsLabel").b(aj.a.b().c(13).a()).a();

        /* renamed from: o  reason: collision with root package name */
        private static final xi.c f16422o = xi.c.a("campaignId").b(aj.a.b().c(14).a()).a();

        /* renamed from: p  reason: collision with root package name */
        private static final xi.c f16423p = xi.c.a("composerLabel").b(aj.a.b().c(15).a()).a();

        private C0196a() {
        }

        @Override // xi.d
        /* renamed from: b */
        public void a(kj.a aVar, xi.e eVar) {
            eVar.c(f16409b, aVar.l());
            eVar.d(f16410c, aVar.h());
            eVar.d(f16411d, aVar.g());
            eVar.d(f16412e, aVar.i());
            eVar.d(f16413f, aVar.m());
            eVar.d(f16414g, aVar.j());
            eVar.d(f16415h, aVar.d());
            eVar.b(f16416i, aVar.k());
            eVar.b(f16417j, aVar.o());
            eVar.d(f16418k, aVar.n());
            eVar.c(f16419l, aVar.b());
            eVar.d(f16420m, aVar.f());
            eVar.d(f16421n, aVar.a());
            eVar.c(f16422o, aVar.c());
            eVar.d(f16423p, aVar.e());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b implements xi.d {

        /* renamed from: a  reason: collision with root package name */
        static final b f16424a = new b();

        /* renamed from: b  reason: collision with root package name */
        private static final xi.c f16425b = xi.c.a("messagingClientEvent").b(aj.a.b().c(1).a()).a();

        private b() {
        }

        @Override // xi.d
        /* renamed from: b */
        public void a(kj.b bVar, xi.e eVar) {
            eVar.d(f16425b, bVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c implements xi.d {

        /* renamed from: a  reason: collision with root package name */
        static final c f16426a = new c();

        /* renamed from: b  reason: collision with root package name */
        private static final xi.c f16427b = xi.c.d("messagingClientEventExtension");

        private c() {
        }

        @Override // xi.d
        public /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
            android.support.v4.media.session.b.a(obj);
            b(null, (xi.e) obj2);
        }

        public void b(j0 j0Var, xi.e eVar) {
            throw null;
        }
    }

    private a() {
    }

    @Override // yi.a
    public void a(yi.b bVar) {
        bVar.a(j0.class, c.f16426a);
        bVar.a(kj.b.class, b.f16424a);
        bVar.a(kj.a.class, C0196a.f16408a);
    }
}
