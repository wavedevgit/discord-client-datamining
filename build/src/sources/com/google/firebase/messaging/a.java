package com.google.firebase.messaging;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements zi.a {

    /* renamed from: a  reason: collision with root package name */
    public static final zi.a f16387a = new a();

    /* renamed from: com.google.firebase.messaging.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0188a implements yi.d {

        /* renamed from: a  reason: collision with root package name */
        static final C0188a f16388a = new C0188a();

        /* renamed from: b  reason: collision with root package name */
        private static final yi.c f16389b = yi.c.a("projectNumber").b(bj.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final yi.c f16390c = yi.c.a("messageId").b(bj.a.b().c(2).a()).a();

        /* renamed from: d  reason: collision with root package name */
        private static final yi.c f16391d = yi.c.a("instanceId").b(bj.a.b().c(3).a()).a();

        /* renamed from: e  reason: collision with root package name */
        private static final yi.c f16392e = yi.c.a("messageType").b(bj.a.b().c(4).a()).a();

        /* renamed from: f  reason: collision with root package name */
        private static final yi.c f16393f = yi.c.a("sdkPlatform").b(bj.a.b().c(5).a()).a();

        /* renamed from: g  reason: collision with root package name */
        private static final yi.c f16394g = yi.c.a("packageName").b(bj.a.b().c(6).a()).a();

        /* renamed from: h  reason: collision with root package name */
        private static final yi.c f16395h = yi.c.a("collapseKey").b(bj.a.b().c(7).a()).a();

        /* renamed from: i  reason: collision with root package name */
        private static final yi.c f16396i = yi.c.a("priority").b(bj.a.b().c(8).a()).a();

        /* renamed from: j  reason: collision with root package name */
        private static final yi.c f16397j = yi.c.a("ttl").b(bj.a.b().c(9).a()).a();

        /* renamed from: k  reason: collision with root package name */
        private static final yi.c f16398k = yi.c.a("topic").b(bj.a.b().c(10).a()).a();

        /* renamed from: l  reason: collision with root package name */
        private static final yi.c f16399l = yi.c.a("bulkId").b(bj.a.b().c(11).a()).a();

        /* renamed from: m  reason: collision with root package name */
        private static final yi.c f16400m = yi.c.a("event").b(bj.a.b().c(12).a()).a();

        /* renamed from: n  reason: collision with root package name */
        private static final yi.c f16401n = yi.c.a("analyticsLabel").b(bj.a.b().c(13).a()).a();

        /* renamed from: o  reason: collision with root package name */
        private static final yi.c f16402o = yi.c.a("campaignId").b(bj.a.b().c(14).a()).a();

        /* renamed from: p  reason: collision with root package name */
        private static final yi.c f16403p = yi.c.a("composerLabel").b(bj.a.b().c(15).a()).a();

        private C0188a() {
        }

        @Override // yi.d
        /* renamed from: b */
        public void a(lj.a aVar, yi.e eVar) {
            eVar.c(f16389b, aVar.l());
            eVar.a(f16390c, aVar.h());
            eVar.a(f16391d, aVar.g());
            eVar.a(f16392e, aVar.i());
            eVar.a(f16393f, aVar.m());
            eVar.a(f16394g, aVar.j());
            eVar.a(f16395h, aVar.d());
            eVar.b(f16396i, aVar.k());
            eVar.b(f16397j, aVar.o());
            eVar.a(f16398k, aVar.n());
            eVar.c(f16399l, aVar.b());
            eVar.a(f16400m, aVar.f());
            eVar.a(f16401n, aVar.a());
            eVar.c(f16402o, aVar.c());
            eVar.a(f16403p, aVar.e());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b implements yi.d {

        /* renamed from: a  reason: collision with root package name */
        static final b f16404a = new b();

        /* renamed from: b  reason: collision with root package name */
        private static final yi.c f16405b = yi.c.a("messagingClientEvent").b(bj.a.b().c(1).a()).a();

        private b() {
        }

        @Override // yi.d
        /* renamed from: b */
        public void a(lj.b bVar, yi.e eVar) {
            eVar.a(f16405b, bVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c implements yi.d {

        /* renamed from: a  reason: collision with root package name */
        static final c f16406a = new c();

        /* renamed from: b  reason: collision with root package name */
        private static final yi.c f16407b = yi.c.d("messagingClientEventExtension");

        private c() {
        }

        @Override // yi.d
        public /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
            android.support.v4.media.session.b.a(obj);
            b(null, (yi.e) obj2);
        }

        public void b(j0 j0Var, yi.e eVar) {
            throw null;
        }
    }

    private a() {
    }

    @Override // zi.a
    public void a(zi.b bVar) {
        bVar.a(j0.class, c.f16406a);
        bVar.a(lj.b.class, b.f16404a);
        bVar.a(lj.a.class, C0188a.f16388a);
    }
}
