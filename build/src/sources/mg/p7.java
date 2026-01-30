package mg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class p7 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final p7 f38564a = new p7();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f38565b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f38566c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f38567d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f38568e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f38569f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f38570g;

    static {
        c.b a10 = ui.c.a("maxMs");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38565b = a10.b(l2Var.b()).a();
        c.b a11 = ui.c.a("minMs");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38566c = a11.b(l2Var2.b()).a();
        c.b a12 = ui.c.a("avgMs");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38567d = a12.b(l2Var3.b()).a();
        c.b a13 = ui.c.a("firstQuartileMs");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f38568e = a13.b(l2Var4.b()).a();
        c.b a14 = ui.c.a("medianMs");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f38569f = a14.b(l2Var5.b()).a();
        c.b a15 = ui.c.a("thirdQuartileMs");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f38570g = a15.b(l2Var6.b()).a();
    }

    private p7() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        yd ydVar = (yd) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f38565b, ydVar.c());
        eVar.b(f38566c, ydVar.e());
        eVar.b(f38567d, ydVar.a());
        eVar.b(f38568e, ydVar.b());
        eVar.b(f38569f, ydVar.d());
        eVar.b(f38570g, ydVar.f());
    }
}
