package og;

import bj.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class xb implements bj.d {

    /* renamed from: a  reason: collision with root package name */
    static final xb f40368a = new xb();

    /* renamed from: b  reason: collision with root package name */
    private static final bj.c f40369b;

    /* renamed from: c  reason: collision with root package name */
    private static final bj.c f40370c;

    /* renamed from: d  reason: collision with root package name */
    private static final bj.c f40371d;

    /* renamed from: e  reason: collision with root package name */
    private static final bj.c f40372e;

    /* renamed from: f  reason: collision with root package name */
    private static final bj.c f40373f;

    /* renamed from: g  reason: collision with root package name */
    private static final bj.c f40374g;

    static {
        c.b a10 = bj.c.a("appName");
        l2 l2Var = new l2();
        l2Var.a(1);
        f40369b = a10.b(l2Var.b()).a();
        c.b a11 = bj.c.a("sessionId");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f40370c = a11.b(l2Var2.b()).a();
        c.b a12 = bj.c.a("startZoomLevel");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f40371d = a12.b(l2Var3.b()).a();
        c.b a13 = bj.c.a("endZoomLevel");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f40372e = a13.b(l2Var4.b()).a();
        c.b a14 = bj.c.a("durationMs");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f40373f = a14.b(l2Var5.b()).a();
        c.b a15 = bj.c.a("predictedArea");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f40374g = a15.b(l2Var6.b()).a();
    }

    private xb() {
    }

    @Override // bj.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        pi piVar = (pi) obj;
        bj.e eVar = (bj.e) obj2;
        eVar.e(f40369b, piVar.e());
        eVar.e(f40370c, piVar.f());
        eVar.e(f40371d, piVar.c());
        eVar.e(f40372e, piVar.b());
        eVar.e(f40373f, piVar.d());
        eVar.e(f40374g, piVar.a());
    }
}
