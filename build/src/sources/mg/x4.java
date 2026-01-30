package mg;

import ui.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class x4 implements ui.d {

    /* renamed from: a  reason: collision with root package name */
    static final x4 f38784a = new x4();

    /* renamed from: b  reason: collision with root package name */
    private static final ui.c f38785b;

    /* renamed from: c  reason: collision with root package name */
    private static final ui.c f38786c;

    /* renamed from: d  reason: collision with root package name */
    private static final ui.c f38787d;

    /* renamed from: e  reason: collision with root package name */
    private static final ui.c f38788e;

    /* renamed from: f  reason: collision with root package name */
    private static final ui.c f38789f;

    /* renamed from: g  reason: collision with root package name */
    private static final ui.c f38790g;

    /* renamed from: h  reason: collision with root package name */
    private static final ui.c f38791h;

    static {
        c.b a10 = ui.c.a("errorCode");
        l2 l2Var = new l2();
        l2Var.a(1);
        f38785b = a10.b(l2Var.b()).a();
        c.b a11 = ui.c.a("hasResult");
        l2 l2Var2 = new l2();
        l2Var2.a(2);
        f38786c = a11.b(l2Var2.b()).a();
        c.b a12 = ui.c.a("isColdCall");
        l2 l2Var3 = new l2();
        l2Var3.a(3);
        f38787d = a12.b(l2Var3.b()).a();
        c.b a13 = ui.c.a("imageInfo");
        l2 l2Var4 = new l2();
        l2Var4.a(4);
        f38788e = a13.b(l2Var4.b()).a();
        c.b a14 = ui.c.a("options");
        l2 l2Var5 = new l2();
        l2Var5.a(5);
        f38789f = a14.b(l2Var5.b()).a();
        c.b a15 = ui.c.a("detectedBarcodeFormats");
        l2 l2Var6 = new l2();
        l2Var6.a(6);
        f38790g = a15.b(l2Var6.b()).a();
        c.b a16 = ui.c.a("detectedBarcodeValueTypes");
        l2 l2Var7 = new l2();
        l2Var7.a(7);
        f38791h = a16.b(l2Var7.b()).a();
    }

    private x4() {
    }

    @Override // ui.d
    public final /* bridge */ /* synthetic */ void a(Object obj, Object obj2) {
        e3 e3Var = (e3) obj;
        ui.e eVar = (ui.e) obj2;
        eVar.b(f38785b, e3Var.c());
        eVar.b(f38786c, null);
        eVar.b(f38787d, e3Var.e());
        eVar.b(f38788e, null);
        eVar.b(f38789f, e3Var.d());
        eVar.b(f38790g, e3Var.a());
        eVar.b(f38791h, e3Var.b());
    }
}
