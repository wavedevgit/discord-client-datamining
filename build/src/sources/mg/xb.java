package mg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class xb implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final xb f38798a = new xb();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f38799b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f38800c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f38801d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f38802e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f38803f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f38804g;

    static {
        c.b a10 = ui.c.a("appName");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38799b = a10.b(l2Var.b()).a();
        c.b a11 = ui.c.a("sessionId");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38800c = a11.b(l2Var2.b()).a();
        c.b a12 = ui.c.a("startZoomLevel");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38801d = a12.b(l2Var3.b()).a();
        c.b a13 = ui.c.a("endZoomLevel");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f38802e = a13.b(l2Var4.b()).a();
        c.b a14 = ui.c.a("durationMs");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f38803f = a14.b(l2Var5.b()).a();
        c.b a15 = ui.c.a("predictedArea");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f38804g = a15.b(l2Var6.b()).a();
    }

    private xb() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        pi piVar = (pi) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f38799b, piVar.e());
        eVar.b(f38800c, piVar.f());
        eVar.b(f38801d, piVar.c());
        eVar.b(f38802e, piVar.b());
        eVar.b(f38803f, piVar.d());
        eVar.b(f38804g, piVar.a());
    }
}
