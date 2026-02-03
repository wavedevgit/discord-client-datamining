package og;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i5 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final i5 f43281a = new i5();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f43282b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f43283c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f43284d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f43285e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f43286f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f43287g;

    static {
        c.b a10 = ui.c.a("maxMs");
        s1 s1Var = new s1();
        s1Var.a(1);
        f43282b = a10.b(s1Var.b()).a();
        c.b a11 = ui.c.a("minMs");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f43283c = a11.b(s1Var2.b()).a();
        c.b a12 = ui.c.a("avgMs");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f43284d = a12.b(s1Var3.b()).a();
        c.b a13 = ui.c.a("firstQuartileMs");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f43285e = a13.b(s1Var4.b()).a();
        c.b a14 = ui.c.a("medianMs");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f43286f = a14.b(s1Var5.b()).a();
        c.b a15 = ui.c.a("thirdQuartileMs");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f43287g = a15.b(s1Var6.b()).a();
    }

    private i5() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        e9 e9Var = (e9) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f43282b, e9Var.c());
        eVar.b(f43283c, e9Var.e());
        eVar.b(f43284d, e9Var.a());
        eVar.b(f43285e, e9Var.b());
        eVar.b(f43286f, e9Var.d());
        eVar.b(f43287g, e9Var.f());
    }
}
