package com.google.firebase.messaging;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements cj.a {

    /* renamed from: a  reason: collision with root package name */
    public static final cj.a f17277a = new a();

    /* renamed from: com.google.firebase.messaging.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0196a implements bj.d {

        /* renamed from: a  reason: collision with root package name */
        static final C0196a f17278a = new C0196a();

        /* renamed from: b  reason: collision with root package name */
        private static final bj.c f17279b = bj.c.a("projectNumber").b(ej.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final bj.c f17280c = bj.c.a("messageId").b(ej.a.b().c(2).a()).a();

        /* renamed from: d  reason: collision with root package name */
        private static final bj.c f17281d = bj.c.a("instanceId").b(ej.a.b().c(3).a()).a();

        /* renamed from: e  reason: collision with root package name */
        private static final bj.c f17282e = bj.c.a("messageType").b(ej.a.b().c(4).a()).a();

        /* renamed from: f  reason: collision with root package name */
        private static final bj.c f17283f = bj.c.a("sdkPlatform").b(ej.a.b().c(5).a()).a();

        /* renamed from: g  reason: collision with root package name */
        private static final bj.c f17284g = bj.c.a("packageName").b(ej.a.b().c(6).a()).a();

        /* renamed from: h  reason: collision with root package name */
        private static final bj.c f17285h = bj.c.a("collapseKey").b(ej.a.b().c(7).a()).a();

        /* renamed from: i  reason: collision with root package name */
        private static final bj.c f17286i = bj.c.a("priority").b(ej.a.b().c(8).a()).a();

        /* renamed from: j  reason: collision with root package name */
        private static final bj.c f17287j = bj.c.a("ttl").b(ej.a.b().c(9).a()).a();

        /* renamed from: k  reason: collision with root package name */
        private static final bj.c f17288k = bj.c.a("topic").b(ej.a.b().c(10).a()).a();

        /* renamed from: l  reason: collision with root package name */
        private static final bj.c f17289l = bj.c.a("bulkId").b(ej.a.b().c(11).a()).a();

        /* renamed from: m  reason: collision with root package name */
        private static final bj.c f17290m = bj.c.a("event").b(ej.a.b().c(12).a()).a();

        /* renamed from: n  reason: collision with root package name */
        private static final bj.c f17291n = bj.c.a("analyticsLabel").b(ej.a.b().c(13).a()).a();

        /* renamed from: o  reason: collision with root package name */
        private static final bj.c f17292o = bj.c.a("campaignId").b(ej.a.b().c(14).a()).a();

        /* renamed from: p  reason: collision with root package name */
        private static final bj.c f17293p = bj.c.a("composerLabel").b(ej.a.b().c(15).a()).a();

        private C0196a() {
        }

        @Override // bj.d
        /* renamed from: b */
        public void a(oj.a aVar, bj.e eVar) {
            eVar.c(f17279b, aVar.l());
            eVar.e(f17280c, aVar.h());
            eVar.e(f17281d, aVar.g());
            eVar.e(f17282e, aVar.i());
            eVar.e(f17283f, aVar.m());
            eVar.e(f17284g, aVar.j());
            eVar.e(f17285h, aVar.d());
            eVar.b(f17286i, aVar.k());
            eVar.b(f17287j, aVar.o());
            eVar.e(f17288k, aVar.n());
            eVar.c(f17289l, aVar.b());
            eVar.e(f17290m, aVar.f());
            eVar.e(f17291n, aVar.a());
            eVar.c(f17292o, aVar.c());
            eVar.e(f17293p, aVar.e());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b implements bj.d {

        /* renamed from: a  reason: collision with root package name */
        static final b f17294a = new b();

        /* renamed from: b  reason: collision with root package name */
        private static final bj.c f17295b = bj.c.a("messagingClientEvent").b(ej.a.b().c(1).a()).a();

        private b() {
        }

        @Override // bj.d
        /* renamed from: b */
        public void a(oj.b bVar, bj.e eVar) {
            eVar.e(f17295b, bVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c implements bj.d {

        /* renamed from: a  reason: collision with root package name */
        static final c f17296a = new c();

        /* renamed from: b  reason: collision with root package name */
        private static final bj.c f17297b = bj.c.d("messagingClientEventExtension");

        private c() {
        }

        @Override // bj.d
        public /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
            android.support.v4.media.session.b.a(obj);
            b(null, (bj.e) obj2);
        }

        public void b(j0 j0Var, bj.e eVar) {
            throw null;
        }
    }

    private a() {
    }

    @Override // cj.a
    public void a(cj.b bVar) {
        bVar.a(j0.class, c.f17296a);
        bVar.a(oj.b.class, b.f17294a);
        bVar.a(oj.a.class, C0196a.f17278a);
    }
}
