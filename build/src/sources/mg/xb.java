package mg;

import xi.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class xb implements xi.d {

    /* renamed from: a  reason: collision with root package name */
    static final xb f38237a = new xb();

    /* renamed from: b  reason: collision with root package name */
    private static final xi.c f38238b;

    /* renamed from: c  reason: collision with root package name */
    private static final xi.c f38239c;

    /* renamed from: d  reason: collision with root package name */
    private static final xi.c f38240d;

    /* renamed from: e  reason: collision with root package name */
    private static final xi.c f38241e;

    /* renamed from: f  reason: collision with root package name */
    private static final xi.c f38242f;

    /* renamed from: g  reason: collision with root package name */
    private static final xi.c f38243g;

    static {
        c.b a10 = xi.c.a("appName");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38238b = a10.b(l2Var.b()).a();
        c.b a11 = xi.c.a("sessionId");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38239c = a11.b(l2Var2.b()).a();
        c.b a12 = xi.c.a("startZoomLevel");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38240d = a12.b(l2Var3.b()).a();
        c.b a13 = xi.c.a("endZoomLevel");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f38241e = a13.b(l2Var4.b()).a();
        c.b a14 = xi.c.a("durationMs");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f38242f = a14.b(l2Var5.b()).a();
        c.b a15 = xi.c.a("predictedArea");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f38243g = a15.b(l2Var6.b()).a();
    }

    private xb() {
    }

    @Override // xi.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        pi piVar = (pi) obj;
        xi.e eVar = (xi.e) obj2;
        eVar.d(f38238b, piVar.e());
        eVar.d(f38239c, piVar.f());
        eVar.d(f38240d, piVar.c());
        eVar.d(f38241e, piVar.b());
        eVar.d(f38242f, piVar.d());
        eVar.d(f38243g, piVar.a());
    }
}
