package og;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class xb implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final xb f39800a = new xb();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f39801b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f39802c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f39803d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f39804e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f39805f;

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f39806g;

    static {
        c.b a10 = bj.c.a("appName");
        l2 l2Var = new l2();
        l2Var.a(1);
        f39801b = a10.b(l2Var.b()).a();
        c.b a11 = bj.c.a("sessionId");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f39802c = a11.b(l2Var2.b()).a();
        c.b a12 = bj.c.a("startZoomLevel");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f39803d = a12.b(l2Var3.b()).a();
        c.b a13 = bj.c.a("endZoomLevel");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f39804e = a13.b(l2Var4.b()).a();
        c.b a14 = bj.c.a("durationMs");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f39805f = a14.b(l2Var5.b()).a();
        c.b a15 = bj.c.a("predictedArea");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f39806g = a15.b(l2Var6.b()).a();
    }

    private xb() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        pi piVar = (pi) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f39801b, piVar.e());
        eVar.e(f39802c, piVar.f());
        eVar.e(f39803d, piVar.c());
        eVar.e(f39804e, piVar.b());
        eVar.e(f39805f, piVar.d());
        eVar.e(f39806g, piVar.a());
    }
}
