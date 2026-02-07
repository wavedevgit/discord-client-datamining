package ng;

import yi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class xb implements yi.d {

    /* renamed from: a  reason: collision with root package name */
    static final xb f40448a = new xb();

    /* renamed from: b  reason: collision with root package name */
    private static final yi.c f40449b;

    /* renamed from: c  reason: collision with root package name */
    private static final yi.c f40450c;

    /* renamed from: d  reason: collision with root package name */
    private static final yi.c f40451d;

    /* renamed from: e  reason: collision with root package name */
    private static final yi.c f40452e;

    /* renamed from: f  reason: collision with root package name */
    private static final yi.c f40453f;

    /* renamed from: g  reason: collision with root package name */
    private static final yi.c f40454g;

    static {
        c.b a10 = yi.c.a("appName");
        l2 l2Var = new l2();
        l2Var.a(1);
        f40449b = a10.b(l2Var.b()).a();
        c.b a11 = yi.c.a("sessionId");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f40450c = a11.b(l2Var2.b()).a();
        c.b a12 = yi.c.a("startZoomLevel");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f40451d = a12.b(l2Var3.b()).a();
        c.b a13 = yi.c.a("endZoomLevel");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f40452e = a13.b(l2Var4.b()).a();
        c.b a14 = yi.c.a("durationMs");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f40453f = a14.b(l2Var5.b()).a();
        c.b a15 = yi.c.a("predictedArea");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f40454g = a15.b(l2Var6.b()).a();
    }

    private xb() {
    }

    @Override // yi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        pi piVar = (pi) obj;
        yi.e eVar = (yi.e) obj2;
        eVar.a(f40449b, piVar.e());
        eVar.a(f40450c, piVar.f());
        eVar.a(f40451d, piVar.c());
        eVar.a(f40452e, piVar.b());
        eVar.a(f40453f, piVar.d());
        eVar.a(f40454g, piVar.a());
    }
}
