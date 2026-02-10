package og;

import zi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class xb implements zi.d {

    /* renamed from: a  reason: collision with root package name */
    static final xb f41473a = new xb();

    /* renamed from: b  reason: collision with root package name */
    private static final zi.c f41474b;

    /* renamed from: c  reason: collision with root package name */
    private static final zi.c f41475c;

    /* renamed from: d  reason: collision with root package name */
    private static final zi.c f41476d;

    /* renamed from: e  reason: collision with root package name */
    private static final zi.c f41477e;

    /* renamed from: f  reason: collision with root package name */
    private static final zi.c f41478f;

    /* renamed from: g  reason: collision with root package name */
    private static final zi.c f41479g;

    static {
        c.b a10 = zi.c.a("appName");
        l2 l2Var = new l2();
        l2Var.a(1);
        f41474b = a10.b(l2Var.b()).a();
        c.b a11 = zi.c.a("sessionId");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f41475c = a11.b(l2Var2.b()).a();
        c.b a12 = zi.c.a("startZoomLevel");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f41476d = a12.b(l2Var3.b()).a();
        c.b a13 = zi.c.a("endZoomLevel");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f41477e = a13.b(l2Var4.b()).a();
        c.b a14 = zi.c.a("durationMs");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f41478f = a14.b(l2Var5.b()).a();
        c.b a15 = zi.c.a("predictedArea");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f41479g = a15.b(l2Var6.b()).a();
    }

    private xb() {
    }

    @Override // zi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        pi piVar = (pi) obj;
        zi.e eVar = (zi.e) obj2;
        eVar.d(f41474b, piVar.e());
        eVar.d(f41475c, piVar.f());
        eVar.d(f41476d, piVar.c());
        eVar.d(f41477e, piVar.b());
        eVar.d(f41478f, piVar.d());
        eVar.d(f41479g, piVar.a());
    }
}
