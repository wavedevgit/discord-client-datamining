package ng;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class xb implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final xb f40400a = new xb();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f40401b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f40402c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f40403d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f40404e;

    /* renamed from: f  reason: collision with root package name */
    private static final yi.c f40405f;

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f40406g;

    static {
        c.b a10 = yi.c.a("appName");
        l2 l2Var = new l2();
        l2Var.a(1);
        f40401b = a10.b(l2Var.b()).a();
        c.b a11 = yi.c.a("sessionId");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f40402c = a11.b(l2Var2.b()).a();
        c.b a12 = yi.c.a("startZoomLevel");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f40403d = a12.b(l2Var3.b()).a();
        c.b a13 = yi.c.a("endZoomLevel");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f40404e = a13.b(l2Var4.b()).a();
        c.b a14 = yi.c.a("durationMs");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f40405f = a14.b(l2Var5.b()).a();
        c.b a15 = yi.c.a("predictedArea");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f40406g = a15.b(l2Var6.b()).a();
    }

    private xb() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        pi piVar = (pi) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f40401b, piVar.e());
        eVar.a(f40402c, piVar.f());
        eVar.a(f40403d, piVar.c());
        eVar.a(f40404e, piVar.b());
        eVar.a(f40405f, piVar.d());
        eVar.a(f40406g, piVar.a());
    }
}
