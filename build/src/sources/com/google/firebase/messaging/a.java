package com.google.firebase.messaging;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a implements aj.a {

    /* renamed from: a  reason: collision with root package name */
    public static final aj.a f16527a = new a();

    /* renamed from: com.google.firebase.messaging.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class C0215a implements zi.d {

        /* renamed from: a  reason: collision with root package name */
        static final C0215a f16528a = new C0215a();

        /* renamed from: b  reason: collision with root package name */
        private static final zi.c f16529b = zi.c.a("projectNumber").b(cj.a.b().c(1).a()).a();

        /* renamed from: c  reason: collision with root package name */
        private static final zi.c f16530c = zi.c.a("messageId").b(cj.a.b().c(2).a()).a();

        /* renamed from: d  reason: collision with root package name */
        private static final zi.c f16531d = zi.c.a("instanceId").b(cj.a.b().c(3).a()).a();

        /* renamed from: e  reason: collision with root package name */
        private static final zi.c f16532e = zi.c.a("messageType").b(cj.a.b().c(4).a()).a();

        /* renamed from: f  reason: collision with root package name */
        private static final zi.c f16533f = zi.c.a("sdkPlatform").b(cj.a.b().c(5).a()).a();

        /* renamed from: g  reason: collision with root package name */
        private static final zi.c f16534g = zi.c.a("packageName").b(cj.a.b().c(6).a()).a();

        /* renamed from: h  reason: collision with root package name */
        private static final zi.c f16535h = zi.c.a("collapseKey").b(cj.a.b().c(7).a()).a();

        /* renamed from: i  reason: collision with root package name */
        private static final zi.c f16536i = zi.c.a("priority").b(cj.a.b().c(8).a()).a();

        /* renamed from: j  reason: collision with root package name */
        private static final zi.c f16537j = zi.c.a("ttl").b(cj.a.b().c(9).a()).a();

        /* renamed from: k  reason: collision with root package name */
        private static final zi.c f16538k = zi.c.a("topic").b(cj.a.b().c(10).a()).a();

        /* renamed from: l  reason: collision with root package name */
        private static final zi.c f16539l = zi.c.a("bulkId").b(cj.a.b().c(11).a()).a();

        /* renamed from: m  reason: collision with root package name */
        private static final zi.c f16540m = zi.c.a("event").b(cj.a.b().c(12).a()).a();

        /* renamed from: n  reason: collision with root package name */
        private static final zi.c f16541n = zi.c.a("analyticsLabel").b(cj.a.b().c(13).a()).a();

        /* renamed from: o  reason: collision with root package name */
        private static final zi.c f16542o = zi.c.a("campaignId").b(cj.a.b().c(14).a()).a();

        /* renamed from: p  reason: collision with root package name */
        private static final zi.c f16543p = zi.c.a("composerLabel").b(cj.a.b().c(15).a()).a();

        private C0215a() {
        }

        @Override // zi.d
        /* renamed from: b */
        public void a(mj.a aVar, zi.e eVar) {
            eVar.a(f16529b, aVar.l());
            eVar.d(f16530c, aVar.h());
            eVar.d(f16531d, aVar.g());
            eVar.d(f16532e, aVar.i());
            eVar.d(f16533f, aVar.m());
            eVar.d(f16534g, aVar.j());
            eVar.d(f16535h, aVar.d());
            eVar.b(f16536i, aVar.k());
            eVar.b(f16537j, aVar.o());
            eVar.d(f16538k, aVar.n());
            eVar.a(f16539l, aVar.b());
            eVar.d(f16540m, aVar.f());
            eVar.d(f16541n, aVar.a());
            eVar.a(f16542o, aVar.c());
            eVar.d(f16543p, aVar.e());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class b implements zi.d {

        /* renamed from: a  reason: collision with root package name */
        static final b f16544a = new b();

        /* renamed from: b  reason: collision with root package name */
        private static final zi.c f16545b = zi.c.a("messagingClientEvent").b(cj.a.b().c(1).a()).a();

        private b() {
        }

        @Override // zi.d
        /* renamed from: b */
        public void a(mj.b bVar, zi.e eVar) {
            eVar.d(f16545b, bVar.a());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static final class c implements zi.d {

        /* renamed from: a  reason: collision with root package name */
        static final c f16546a = new c();

        /* renamed from: b  reason: collision with root package name */
        private static final zi.c f16547b = zi.c.d("messagingClientEventExtension");

        private c() {
        }

        @Override // zi.d
        public /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
            android.support.v4.media.session.b.a(obj);
            b(null, (zi.e) obj2);
        }

        public void b(j0 j0Var, zi.e eVar) {
            throw null;
        }
    }

    private a() {
    }

    @Override // aj.a
    public void a(aj.b bVar) {
        bVar.a(j0.class, c.f16546a);
        bVar.a(mj.b.class, b.f16544a);
        bVar.a(mj.a.class, C0215a.f16528a);
    }
}
