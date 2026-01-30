package og;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class i5 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final i5 f43153a = new i5();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f43154b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f43155c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f43156d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f43157e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f43158f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f43159g;

    static {
        c.b a10 = ui.c.a("maxMs");
        s1 s1Var = new s1();
        s1Var.a(1);
        f43154b = a10.b(s1Var.b()).a();
        c.b a11 = ui.c.a("minMs");
        s1 s1Var2 = new s1();
        s1Var2.a(2);
        f43155c = a11.b(s1Var2.b()).a();
        c.b a12 = ui.c.a("avgMs");
        s1 s1Var3 = new s1();
        s1Var3.a(3);
        f43156d = a12.b(s1Var3.b()).a();
        c.b a13 = ui.c.a("firstQuartileMs");
        s1 s1Var4 = new s1();
        s1Var4.a(4);
        f43157e = a13.b(s1Var4.b()).a();
        c.b a14 = ui.c.a("medianMs");
        s1 s1Var5 = new s1();
        s1Var5.a(5);
        f43158f = a14.b(s1Var5.b()).a();
        c.b a15 = ui.c.a("thirdQuartileMs");
        s1 s1Var6 = new s1();
        s1Var6.a(6);
        f43159g = a15.b(s1Var6.b()).a();
    }

    private i5() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        e9 e9Var = (e9) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f43154b, e9Var.c());
        eVar.b(f43155c, e9Var.e());
        eVar.b(f43156d, e9Var.a());
        eVar.b(f43157e, e9Var.b());
        eVar.b(f43158f, e9Var.d());
        eVar.b(f43159g, e9Var.f());
    }
}
