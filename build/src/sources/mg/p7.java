package mg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p7 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final p7 f38548a = new p7();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f38549b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f38550c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f38551d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f38552e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f38553f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f38554g;

    static {
        c.b a10 = ui.c.a("maxMs");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38549b = a10.b(l2Var.b()).a();
        c.b a11 = ui.c.a("minMs");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38550c = a11.b(l2Var2.b()).a();
        c.b a12 = ui.c.a("avgMs");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38551d = a12.b(l2Var3.b()).a();
        c.b a13 = ui.c.a("firstQuartileMs");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f38552e = a13.b(l2Var4.b()).a();
        c.b a14 = ui.c.a("medianMs");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f38553f = a14.b(l2Var5.b()).a();
        c.b a15 = ui.c.a("thirdQuartileMs");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f38554g = a15.b(l2Var6.b()).a();
    }

    private p7() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        yd ydVar = (yd) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f38549b, ydVar.c());
        eVar.b(f38550c, ydVar.e());
        eVar.b(f38551d, ydVar.a());
        eVar.b(f38552e, ydVar.b());
        eVar.b(f38553f, ydVar.d());
        eVar.b(f38554g, ydVar.f());
    }
}
